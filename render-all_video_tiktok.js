import "dotenv/config";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  root_JSX,
  folder_render,
  name_video,
  VIDEO_METADATA,
} from "./root-config.js";
import { Logger } from "./src/utils/logger.js";

// ✅ Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

Logger.info(`Loading data from project: ${root_JSX}`);

let videoData;

async function loadDataAndRender() {
  try {
    // ✅ Tạo absolute path cho dynamic import
    const dataPath = path.join(
      __dirname,
      "src",
      "rootComponents",
      root_JSX,
      "data.js",
    );

    // ✅ Convert to file:// URL cho Windows
    const dataUrl = new URL(`file:///${dataPath.replace(/\\/g, "/")}`).href;

    Logger.debug(`Loading from: ${dataPath}`);

    // Check file exists
    if (!fs.existsSync(dataPath)) {
      throw new Error(`❌ Data file not found: ${dataPath}`);
    }

    // Dynamic import
    const dataModule = await import(dataUrl);
    const { videoData01 } = dataModule;

    if (!videoData01) {
      throw new Error(`❌ videoData01 not found in data.js`);
    }

    if (!videoData01[0]?.id) {
      let temVideoData = [];
      videoData01.forEach((e, i) => {
        temVideoData.push({
          id: i + 1,
          data: e,
          nameUseFN: `ID${i + 1}-${name_video}`,
          folderUSe: folder_render,
        });
      });
      videoData = temVideoData;
    } else {
      videoData = videoData01;
    }

    Logger.success(`Loaded ${videoData.length} video items`);

    // ✅ Tiếp tục với logic render sau khi load data
    runRenderProcess();
  } catch (error) {
    Logger.error(
      `Failed to load data from project: ${root_JSX}`,
      error,
      {
        dataPath: `src/rootComponents/${root_JSX}/data.js`,
        rootJSX: root_JSX,
      }
    );
    process.exit(1);
  }
}

// ============================================
// 🎬 RENDER CONFIGURATION
// ============================================

const VIDEO_CONFIG = {
  width: 1080,
  height: 1920,
  fps: 30,
  codec: "h264",
  crf: 18,
  pixelFormat: "yuv420p",
};

const RENDER_SETTINGS = {
  enableVideo: true,
  videoQuality: "high",
  enableStill: false,
  stillFormat: "png",
  stillFrame: 0,
  overwriteExisting: false,
  showDetailedProgress: true,
};

const RENDER_MODE = {
  VIDEO_ONLY: "video",
  STILL_ONLY: "still",
  BOTH: "both",
};

const currentMode = (() => {
  if (RENDER_SETTINGS.enableVideo && RENDER_SETTINGS.enableStill)
    return RENDER_MODE.BOTH;
  if (RENDER_SETTINGS.enableVideo) return RENDER_MODE.VIDEO_ONLY;
  if (RENDER_SETTINGS.enableStill) return RENDER_MODE.STILL_ONLY;
  throw new Error("❌ Phải enable ít nhất một trong video hoặc still!");
})();

const getVideoQuality = (quality) => {
  const qualityMap = {
    low: { crf: 28, preset: "fast" },
    medium: { crf: 23, preset: "medium" },
    high: { crf: 18, preset: "slow" },
    ultra: { crf: 15, preset: "veryslow" },
  };
  return qualityMap[quality] || qualityMap.high;
};

const STILL_CONFIG = {
  width: VIDEO_CONFIG.width,
  height: VIDEO_CONFIG.height,
  format: RENDER_SETTINGS.stillFormat,
  quality: 95,
  frame: RENDER_SETTINGS.stillFrame,
};

const renderDir = "./renders/videos";
const stillDir = "./renders/stills";

function createDirectories() {
  if (!fs.existsSync(renderDir)) {
    fs.mkdirSync(renderDir, { recursive: true });
    Logger.info(`Created directory: ${renderDir}`);
  }
  if (
    (currentMode === RENDER_MODE.STILL_ONLY ||
      currentMode === RENDER_MODE.BOTH) &&
    !fs.existsSync(stillDir)
  ) {
    fs.mkdirSync(stillDir, { recursive: true });
    Logger.info(`Created directory: ${stillDir}`);
  }
}

// ============================================
// 🎨 METADATA GENERATOR
// ============================================

function generateMetadata(item) {
  const escapeMetadata = (str) =>
    str.replace(/["'\\]/g, "\\$&").replace(/\n/g, " ");

  const hook = item.data[0].hook || "";
  const id = item.id;
  const hashtags = VIDEO_METADATA.hashtags.join(" ");

  const title = VIDEO_METADATA.titleTemplate
    .replace("{id}", id)
    .replace("{hook}", hook);

  const description = VIDEO_METADATA.descriptionTemplate
    .replace("{hook}", hook)
    .replace("{hashtags}", hashtags)
    .replace("{id}", id);

  const comment = VIDEO_METADATA.commentTemplate
    .replace("{hook}", hook)
    .replace("{id}", id);

  return {
    title: escapeMetadata(title),
    description: escapeMetadata(description),
    comment: escapeMetadata(comment),
    artist: escapeMetadata(VIDEO_METADATA.artist),
  };
}

// ============================================
// 🎬 RENDER FUNCTIONS
// ============================================

function renderVideo(item) {
  Logger.debug(`Rendering video for hook: ${item.data[0].hook}`);

  const nameUse = item.nameUseFN;
  const folder = item.folderUSe;
  const videoPath = `${renderDir}/${folder}/${nameUse}.mp4`;

  if (!RENDER_SETTINGS.overwriteExisting && fs.existsSync(videoPath)) {
    Logger.info(`Video already exists, skipping...`);
    const stats = fs.statSync(videoPath);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(1);
    return { success: true, size: fileSizeMB, type: "video", skipped: true };
  }

  const quality = getVideoQuality(RENDER_SETTINGS.videoQuality);
  const cmd =
    `npx remotion render ${item.id} ${videoPath} ` +
    `--width=${VIDEO_CONFIG.width} ` +
    `--height=${VIDEO_CONFIG.height} ` +
    `--fps=${VIDEO_CONFIG.fps} ` +
    `--codec=${VIDEO_CONFIG.codec} ` +
    `--crf=${quality.crf} ` +
    `--pixel-format=${VIDEO_CONFIG.pixelFormat} ` +
    `--serve-url=out`;

  execSync(cmd, {
    stdio: RENDER_SETTINGS.showDetailedProgress ? "inherit" : "pipe",
    maxBuffer: 50 * 1024 * 1024,
  });

  if (fs.existsSync(videoPath)) {
    if (VIDEO_METADATA.includeMetadata) {
      const tempPath = videoPath.replace(".mp4", "_temp.mp4");
      const metadata = generateMetadata(item);

      try {
        const metadataCmd =
          `ffmpeg -i "${videoPath}" ` +
          `-metadata title="${metadata.title}" ` +
          `-metadata description="${metadata.description}" ` +
          `-metadata comment="${metadata.comment}" ` +
          `-metadata artist="${metadata.artist}" ` +
          `-codec copy "${tempPath}" -y`;

        execSync(metadataCmd, { stdio: "pipe" });

        fs.unlinkSync(videoPath);
        fs.renameSync(tempPath, videoPath);
        Logger.success(`Added metadata successfully`);
      } catch (error) {
        Logger.warn(`Failed to add metadata: ${error.message}`);
        if (fs.existsSync(tempPath)) {
          fs.unlinkSync(tempPath);
        }
      }
    }

    const stats = fs.statSync(videoPath);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(1);
    return { success: true, size: fileSizeMB, type: "video", skipped: false };
  }

  return { success: false, type: "video", skipped: false };
}

function renderStill(item) {
  const stillPath = `${stillDir}/${item.id}.${STILL_CONFIG.format}`;

  if (!RENDER_SETTINGS.overwriteExisting && fs.existsSync(stillPath)) {
    Logger.info(`Still already exists, skipping...`);
    const stats = fs.statSync(stillPath);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    return { success: true, size: fileSizeMB, type: "still", skipped: true };
  }

  let cmd =
    `npx remotion still ${item.id} ${stillPath} ` +
    `--width=${STILL_CONFIG.width} ` +
    `--height=${STILL_CONFIG.height} ` +
    `--frame=${STILL_CONFIG.frame} ` +
    `--serve-url=out`;

  if (STILL_CONFIG.format === "jpeg") {
    cmd += ` --quality=${STILL_CONFIG.quality}`;
  }

  execSync(cmd, {
    stdio: RENDER_SETTINGS.showDetailedProgress ? "inherit" : "pipe",
    maxBuffer: 50 * 1024 * 1024,
  });

  if (fs.existsSync(stillPath)) {
    const stats = fs.statSync(stillPath);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    return { success: true, size: fileSizeMB, type: "still", skipped: false };
  }

  return { success: false, type: "still", skipped: false };
}

function renderItem(item, index) {
  Logger.info(`[${index + 1}/${videoData.length}] Processing: ${item.id}`);
  const results = [];
  const itemStartTime = Date.now();

  try {
    if (
      currentMode === RENDER_MODE.VIDEO_ONLY ||
      currentMode === RENDER_MODE.BOTH
    ) {
      Logger.info(`Rendering video...`);
      const videoResult = renderVideo(item);
      results.push(videoResult);
    }

    if (
      currentMode === RENDER_MODE.STILL_ONLY ||
      currentMode === RENDER_MODE.BOTH
    ) {
      Logger.info(`Rendering still image...`);
      const stillResult = renderStill(item);
      results.push(stillResult);
    }

    const renderTime = ((Date.now() - itemStartTime) / 1000).toFixed(1);
    const successResults = results.filter((r) => r.success);

    if (successResults.length > 0) {
      const sizeInfo = successResults
        .map((r) => `${r.type}: ${r.size}MB`)
        .join(", ");
      Logger.success(`Done: ${item.id} (${renderTime}s) - ${sizeInfo}\n`);
      return { success: true, results: successResults };
    } else {
      Logger.error(`Failed: ${item.id}\n`);
      return { success: false, results: [] };
    }
  } catch (error) {
    Logger.error(`Error processing ${item.id}`, error);
    return { success: false, results: [] };
  }
}

// ============================================
// 🚀 MAIN RENDER PROCESS
// ============================================

function runRenderProcess() {
  createDirectories();

  Logger.info(
    `Starting batch render in ${VIDEO_CONFIG.width}x${VIDEO_CONFIG.height} (2K)`,
  );
  Logger.info(
    `Video: ${VIDEO_CONFIG.fps}fps, ${VIDEO_CONFIG.codec}, Quality: ${RENDER_SETTINGS.videoQuality}`,
  );
  Logger.info(`Mode: ${currentMode.toUpperCase()}`);

  if (currentMode !== RENDER_MODE.VIDEO_ONLY) {
    Logger.info(
      `Still: ${STILL_CONFIG.format.toUpperCase()}, Frame: ${STILL_CONFIG.frame}`,
    );
  }

  Logger.info(
    `Overwrite existing: ${RENDER_SETTINGS.overwriteExisting ? "YES" : "NO"}`,
  );
  Logger.info("");

  let successCount = 0;
  let errorCount = 0;
  const startTime = Date.now();

  videoData.forEach((item, index) => {
    const result = renderItem(item, index);
    if (result.success) {
      successCount++;
    } else {
      errorCount++;
    }
  });

  const totalTime = ((Date.now() - startTime) / 1000 / 60).toFixed(1);

  Logger.info(`\n🎯 RENDER COMPLETE`);
  Logger.success(`Success: ${successCount}`);
  if (errorCount > 0) {
    Logger.error(`Errors: ${errorCount}`);
  }
  Logger.info(`Total time: ${totalTime} minutes`);

  if (currentMode !== RENDER_MODE.STILL_ONLY && fs.existsSync(renderDir)) {
    const videoFiles = fs
      .readdirSync(renderDir)
      .filter((f) => f.endsWith(".mp4"));
    let totalVideoSize = 0;
    videoFiles.forEach((file) => {
      const stats = fs.statSync(path.join(renderDir, file));
      totalVideoSize += stats.size;
    });
    const totalVideoSizeMB = (totalVideoSize / (1024 * 1024)).toFixed(1);
    Logger.info(
      `Videos: ${totalVideoSizeMB}MB (${videoFiles.length} files) - ${renderDir}`,
    );
  }

  if (currentMode !== RENDER_MODE.VIDEO_ONLY && fs.existsSync(stillDir)) {
    const stillFiles = fs
      .readdirSync(stillDir)
      .filter(
        (f) => f.endsWith(".png") || f.endsWith(".jpeg") || f.endsWith(".jpg"),
      );
    let totalStillSize = 0;
    stillFiles.forEach((file) => {
      const stats = fs.statSync(path.join(stillDir, file));
      totalStillSize += stats.size;
    });
    const totalStillSizeMB = (totalStillSize / (1024 * 1024)).toFixed(1);
    Logger.info(
      `Stills: ${totalStillSizeMB}MB (${stillFiles.length} files) - ${stillDir}`,
    );
  }

  Logger.success(`\nBatch render completed!`);
}

// ✅ Start the process
loadDataAndRender();
