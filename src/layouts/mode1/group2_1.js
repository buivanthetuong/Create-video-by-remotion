import { CMD_Fetch, getTextCSS, getImgCSS } from '../groupUtils.js';

export default function group1_1(arr) {
  const uid = `${arr[0].group}`;
  const BG001 = `BG001_${uid}`;
  const mainContainer = `main_${uid}`;
  const topLeftDiv = `topLeft_${uid}`;
  const topRightDiv = `topRight_${uid}`;
  const bottomLeftDiv = `bottomLeft_${uid}`;
  const bottomRightDiv = `bottomRight_${uid}`;

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
      // Main container — 2 rows x 2 cols | left = 2fr, right = 1fr
      {
        cmd: CMD_Fetch.divAction,
        id: mainContainer,
        group: arr[0].group,
        styleCss: {
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '20px',
          padding: '40px',
        },
      },
      // Top Left — chữ arr[0]
      {
        cmd: CMD_Fetch.divAction,
        id: topLeftDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          gridColumn: '1',
          gridRow: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        },
      },
      {
        cmd: CMD_Fetch.typingText,
        text: arr[0].text,
        toID: topLeftDiv,
        group: arr[0].group,
        styleCss: {
          ...getTextCSS(arr[0].textStyle),
        },
      },
      // Top Right — ảnh arr[0]
      {
        cmd: CMD_Fetch.divAction,
        id: topRightDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          gridColumn: '2',
          gridRow: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: topRightDiv,
        img: arr[0].img,
        group: arr[0].group,
        styleCss: {
          ...getImgCSS(arr[0].imgStyle),
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        },
      },
      // Bottom Left — chữ arr[1]
      {
        cmd: CMD_Fetch.divAction,
        id: bottomLeftDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          gridColumn: '1',
          gridRow: '2',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        },
      },
      // Bottom Right — ảnh arr[1]
      {
        cmd: CMD_Fetch.divAction,
        id: bottomRightDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          gridColumn: '2',
          gridRow: '2',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
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

  const obj2 = {
    actions: [
      // Chữ arr[1] vào Bottom Left
      {
        cmd: CMD_Fetch.typingText,
        text: arr[1].text,
        toID: bottomLeftDiv,
        group: arr[1].group,
        styleCss: {
          ...getTextCSS(arr[1].textStyle),
        },
      },
      // Ảnh arr[1] vào Bottom Right
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: bottomRightDiv,
        img: arr[1].img,
        group: arr[1].group,
        styleCss: {
          ...getImgCSS(arr[1].imgStyle),
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        },
      },
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[1].soundEffect,
      },
    ],
    code: arr[1].code,
  };

  return [obj1, obj2];
}
