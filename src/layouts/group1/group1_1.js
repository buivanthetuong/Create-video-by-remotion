import { CMD_Fetch, getTextCSS, getImgCSS, getEffect } from '../groupUtils.js';

export default function group1_1(arr) {
  const uid = `${arr[0].group}`;
  const BG001 = `BG001_${uid}`;
  const mainContainer = `main_${uid}`;
  const topDiv = `top_${uid}`;
  const bottomDiv = `bottom_${uid}`;

  const obj1 = {
    actions: [
      // Background
      {
        cmd: CMD_Fetch.divAction,
        id: BG001,
        ToEndFrame: true,
        styleCss: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: BG001,
        ToEndFrame: true,
        zIndex: 0,
        img: arr[0].backgroundIMG,
        styleCss: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        },
      },
      // Main container
      {
        cmd: CMD_Fetch.divAction,
        id: mainContainer,
        group: arr[0].group,
        styleCss: {
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          padding: '100px 40px 40px 40px',
        },
      },
      // Top Div – 40% – chứa chữ
      {
        cmd: CMD_Fetch.divAction,
        id: topDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          height: '30%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          zIndex: 2,
        },
      },
      {
        cmd: CMD_Fetch.typingText,
        text: arr[0].text,
        toID: topDiv,
        group: arr[0].group,
        styleCss: {
          ...getTextCSS('subtitle'),
          ...getEffect('fadeInScale'),
          fontSize: '80px',
        },
      },
      // Bottom Div – 50% – chứa ảnh
      {
        cmd: CMD_Fetch.divAction,
        id: bottomDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          height: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: bottomDiv,
        img: arr[0].img,
        group: arr[0].group,
        styleCss: {
          ...getImgCSS('1'),
          ...getEffect('fadeInScale'),
          width: '500px',
          height: '500px',
          objectFit: 'contain',
        },
      },
      // Sound effect
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[0].soundEffect,
      },
    ],
    code: arr[0].code,
  };

  return [obj1];
}
