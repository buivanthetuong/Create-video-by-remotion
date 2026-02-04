// ✅ Import JSON trực tiếp
import DataFront from './data_Front_001.json' with { type: 'json' };
import { keepOnlyActionsCodeTimeFixedStt } from '../../components/ActionOrchestrator/utils/dataSupportFuntions.js';
import { CMD_Fetch } from '../../layouts/groupUtils.js';
import { Logger } from '../../utils/logger.js';

import group1_1 from '../../layouts/mode1/group1_1.js';
import group2_1 from '../../layouts/mode1/group2_1.js';
import group3_1 from '../../layouts/mode1/group3_1.js';

import group1_2 from '../../layouts/mode2/group1_2.js';
import group2_2 from '../../layouts/mode2/group2_2.js';
import group3_2 from '../../layouts/mode2/group3_2.js';
import group4_2 from '../../layouts/mode2/group4_2.js';

import group2_3 from '../../layouts/mode3/group2_3.js';
import group3_3 from '../../layouts/mode3/group3_3.js';
import group4_3 from '../../layouts/mode3/group4_3.js';
import group5_3 from '../../layouts/mode3/group5_3.js';

const handlerMap = {
  //chữ và ảnh
  //chữ trên ảnh dưới
  group1_1: group1_1,
  group2_1: group2_1,
  group3_1: group3_1,
  //chữ ảnh ảnh chữ
  group1_2: group1_2,
  group2_2: group2_2,
  group3_2: group3_2,
  group4_2: group4_2,
  //chữ ảnh và ảnh

  group2_3: group2_3,
  group3_3: group3_3,
  group4_3: group4_3,
  group5_3: group5_3,
};

//controller cho group
function handleItem(group) {
  console.log('handleItem called with group:', group);
  const groupStr = String(group.length);
  const typeStr = String(group[0].mode);

  const key = `group${groupStr}_${typeStr}`;
  console.log('Looking for handler with key:', key);
  const handler = handlerMap[key];

  if (!handler) {
    throw new Error(`Handler not found for layout: ${key}`);
  }
  return handler(group);
}

//video tổng
let videoData01 = [];
DataFront.forEach((videoData) => {
  const bg_sound = {
    cmd: CMD_Fetch.soundPlayerAction,
    volume: 0.1,
    ToEndFrame: true,
    soundSource: videoData[0].backgroundSound,
  };
  let video = [];
  let group = [];
  let flag = videoData[0].group;

  //them actions
  videoData.forEach((obj) => {
    if (obj.group === flag) {
      group.push(obj);
    } else {
      ///controller
      group = handleItem(group);
      for (let i = 0; i < group.length; i++) {
        video.push(group[i]);
      }
      group = [obj];
      flag = obj.group;
    }
  });
  //controller cuoi
  group = handleItem(group);
  for (let i = 0; i < group.length; i++) {
    video.push(group[i]);
  }

  // Thêm background sound
  if (video.length > 0 && video[0].actions) {
    video[0].actions.unshift(bg_sound);
  }

  const end_sound = {
    code: 'SOUNDCHUNG_SpaceSound',
    timeFixed: 0.5,
  };
  video.push(end_sound);
  videoData01.push(video);
});

if (videoData01.length > 0) {
  Logger.debug('First video data:', videoData01[0]);
}

export { videoData01 };
