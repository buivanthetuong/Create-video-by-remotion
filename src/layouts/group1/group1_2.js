import { CMD_Fetch, getTextCSS, getImgCSS, getEffect } from '../groupUtils.js';

export default function group1_2(arr) {
  const uid = `${arr[0].group}`;
  const BG001 = `BG001_${uid}`;
  const mainContainer = `main_${uid}`;
  const centerDiv = `center_${uid}`;

  const obj1 = {
    actions: [
      // Background
      {
        cmd: 'divAction',
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
          gap: '20px',
          padding: '40px',
        },
      },
      // Center Div
      {
        cmd: CMD_Fetch.divAction,
        id: centerDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          flex: 1,
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
        toID: centerDiv,
        noTyping: false,
        group: arr[0].group,
        styleCss: {
          ...getTextCSS('1'),
          ...getEffect('bounceIn'),
          fontSize: '100px',
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
