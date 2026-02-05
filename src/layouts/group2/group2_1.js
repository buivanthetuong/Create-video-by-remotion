import { CMD_Fetch, getTextCSS, getImgCSS, getEffect } from '../groupUtils.js';

export default function group2_1(arr) {
  const uid = `${arr[0].group}`;
  const BG001 = `BG001_${uid}`;
  const mainContainer = `main_${uid}`;
  const topRow = `topRow_${uid}`;
  const topLeftDiv = `topLeft_${uid}`;
  const topRightDiv = `topRight_${uid}`;
  const bottomRow = `bottomRow_${uid}`;
  const bottomLeftDiv = `bottomLeft_${uid}`;
  const bottomRightDiv = `bottomRight_${uid}`;

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
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        },
      },
      // Hàng trên — 70% chữ arr[0], 30% ảnh arr[0]
      {
        cmd: CMD_Fetch.divAction,
        id: topRow,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          height: '40%',
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          zIndex: 2,
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        id: topLeftDiv,
        toID: topRow,
        group: arr[0].group,
        styleCss: {
          width: '65%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        id: topRightDiv,
        toID: topRow,
        group: arr[0].group,
        styleCss: {
          width: '35%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      {
        cmd: CMD_Fetch.typingText,
        text: arr[0].text,
        toID: topLeftDiv,
        group: arr[0].group,
        styleCss: {
          ...getTextCSS('2'),
          fontSize: '60px',
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: topRightDiv,
        img: arr[0].img,
        group: arr[0].group,
        styleCss: {
          ...getEffect('fadeInSlideRight'),
          maxWidth: '90%',
          maxHeight: '90%',
          objectFit: 'contain',
        },
      },
      // Hàng dưới — 70% chữ arr[1], 30% ảnh arr[1] (nội dung đẩy qua obj2)
      {
        cmd: CMD_Fetch.divAction,
        id: bottomRow,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          height: '40%',
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          zIndex: 2,
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        id: bottomLeftDiv,
        toID: bottomRow,
        group: arr[0].group,
        styleCss: {
          width: '35%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        id: bottomRightDiv,
        toID: bottomRow,
        group: arr[0].group,
        styleCss: {
          width: '65%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
      {
        cmd: CMD_Fetch.typingText,
        text: arr[1].text,
        toID: bottomRightDiv,
        group: arr[1].group,
        styleCss: {
          ...getTextCSS('2'),
          fontSize: '60px',
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: bottomLeftDiv,
        img: arr[1].img,
        group: arr[1].group,
        styleCss: {
          ...getEffect('fadeInSlideLeft'),
          maxWidth: '90%',
          maxHeight: '90%',
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
