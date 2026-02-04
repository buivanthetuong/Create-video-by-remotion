import { CMD_Fetch, getTextCSS, getImgCSS } from '../groupUtils.js';

export default function group2_2(arr) {
  const uid = `${arr[0].group}`;
  const BG001 = `BG001_${uid}`;
  const mainContainer = `main_${uid}`;
  const topDiv = `top_${uid}`;
  const topTextDiv = `topText_${uid}`;
  const topImgDiv = `topImg_${uid}`;
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
          padding: '40px',
        },
      },
      // Div trên — 45%: phía trên 15% chữ arr[0], phía dưới 30% ảnh arr[0]
      {
        cmd: CMD_Fetch.divAction,
        id: topDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          height: '45%',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 2,
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        id: topTextDiv,
        toID: topDiv,
        group: arr[0].group,
        styleCss: {
          height: '33.33%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        id: topImgDiv,
        toID: topDiv,
        group: arr[0].group,
        styleCss: {
          height: '66.67%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      {
        cmd: CMD_Fetch.typingText,
        text: arr[0].text,
        toID: topTextDiv,
        group: arr[0].group,
        styleCss: {
          fontSize: '60px',
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: topImgDiv,
        img: arr[0].img,
        group: arr[0].group,
        styleCss: {
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
        },
      },
      // Div dưới — 55%: chứa chữ arr[1] (nội dung đẩy qua obj2)
      {
        cmd: CMD_Fetch.divAction,
        id: bottomDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          height: '55%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
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
      {
        cmd: CMD_Fetch.typingText,
        text: arr[1].text,
        toID: bottomDiv,
        group: arr[1].group,
        styleCss: {
          fontSize: '60px',
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
