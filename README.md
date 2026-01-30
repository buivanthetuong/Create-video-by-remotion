# 🎬 Video Auto-Create Project

Dự án tạo video tự động sử dụng **Remotion** framework để render videos chất lượng cao với data-driven approach.

## 📋 Giới Thiệu

Dự án này cho phép tạo video tự động từ dữ liệu JSON với các tính năng:
- ✨ Hệ thống action-based để tạo animations và effects
- 🎨 Layout system linh hoạt với nhiều group templates
- 🎵 Tích hợp audio và background sound  
- 📊 Data-driven với JSON configuration
- 🚀 Batch rendering cho nhiều video cùng lúc

## 🚀 Cài Đặt

### Yêu cầu
- Node.js >= 18.x
- npm hoặc yarn

### Các bước cài đặt

```bash
# Clone repository (nếu có)
git clone <repository-url>

# Di chuyển vào thư mục dự án
cd video-auto-create-pj

# Cài đặt dependencies
npm install
```

## 💻 Sử Dụng

### Development Mode

Chạy Remotion Studio để preview và edit:

```bash
npm run dev
# hoặc
npm start
```

Truy cập `http://localhost:3000` để xem preview.

### Render Videos

Render tất cả videos theo cấu hình:

```bash
npm run rendervideo
```

### Render Images

Render still images từ video frames:

```bash
npm run renderimg
```

### Các lệnh khác

```bash
# Lint code
npm run lint

# Build bundle
npm run build

# Upgrade Remotion
npm run upgrade
```

## 📁 Cấu Trúc Dự Án

```
video-auto-create-pj/
├── src/
│   ├── components/           # Shared components
│   │   └── ActionOrchestrator/  # Action orchestration system
│   ├── layouts/             # Layout group handlers
│   │   ├── group1/          # Layout type 1
│   │   ├── group2/          # Layout type 2
│   │   └── groupUtils.js    # Shared utilities
│   ├── otherComponent/      # Service components (audio, video players)
│   ├── rootComponents/      # Composition definitions
│   │   └── CSK001/         # Main project composition
│   │       ├── data.js     # Data processor
│   │       ├── data_Front_001.json  # Source data
│   │       └── R_A001V.jsx # Video template
│   └── utils/              # Helper utilities
├── public/                 # Static assets
│   ├── audio/             # Audio files
│   ├── video/             # Video files
│   └── backgroundSound/   # Background music
├── renders/               # Output folder (gitignored)
│   └── videos/           # Rendered videos
├── root-config.js        # Project configuration
└── remotion.config.js    # Remotion settings
```

## ⚙️ Cấu Hình

### Project Configuration

Chỉnh sửa [`root-config.js`](./root-config.js) để cấu hình project:

```javascript
export const root_JSX = "CSK001";           // Composition name
export const folder_render = "CSK_001";     // Output folder
export const name_video = "CSK001";         // Video name prefix
```

### Video Settings

Chỉnh sửa `VIDEO_CONFIG` trong [`render-all_video_tiktok.js`](./render-all_video_tiktok.js):

```javascript
const VIDEO_CONFIG = {
  width: 1080,      // Video width
  height: 1920,     // Video height (TikTok/Shorts format)
  fps: 30,          // Frame rate
  codec: "h264",    // Video codec
  crf: 18,          // Quality (18 = high, 23 = medium)
};
```

## 🎨 Tạo Video Mới

### 1. Chuẩn bị data

Tạo file JSON trong `src/rootComponents/CSK001/`:

```json
[
  [
    {
      "code": "AUDIO_001",
      "group": 1,
      "mode": 1,
      "text": "Your text here",
      "img": "image.jpg",
      "timeFixed": 3.0
    }
  ]
]
```

### 2. Update configuration

Update `root-config.js` với project name mới.

### 3. Run render

```bash
npm run rendervideo
```

## 🔧 Hệ Thống Action

ActionOrchestrator hỗ trợ các actions:

- **typingText** - Animated typing effect
- **imageView** - Display images with animations
- **videoView** - Play video clips
- **divView** - Custom DIV elements
- **soundPlayer** - Play audio
- **countdown** - Countdown timer

Xem [`src/components/ActionOrchestrator/README.txt`](./src/components/ActionOrchestrator/README.txt) để biết chi tiết.

## 📊 Layout System

Hỗ trợ các layout groups:

- **group1_1** - Text overlay on image
- **group1_2** - Text below image
- **group2_2** - Two objects (image+text)
- **group4_1** - One description + 3 items list
- **group5_1** - Center text + 4 surrounding images

## 🎵 Assets

Đặt assets trong thư mục `public/`:

- `public/audio/` - Audio files (.mp3, .wav)
- `public/video/` - Video clips
- `public/backgroundSound/` - Background music

## 🐛 Troubleshooting

### Video không render
- Kiểm tra `root-config.js` có đúng composition name
- Đảm bảo data JSON hợp lệ
- Check console logs để xem error details

### Audio không play
- Đảm bảo audio file tồn tại trong `public/audio/`
- Check audio format (hỗ trợ .mp3, .wav)
- Xem console để biết path resolution errors

### Out of memory
- Giảm `concurrency` trong `remotion.config.js`
- Render từng video một thay vì batch
- Giảm video resolution hoặc quality

## 📝 License

UNLICENSED - Private project

## 🤝 Contributing

Dự án này hiện tại là private. Liên hệ owner để được access.

---

**Remotion Documentation**: https://www.remotion.dev/docs
