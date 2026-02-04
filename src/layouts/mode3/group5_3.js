import { CMD_Fetch, getTextCSS, getImgCSS, getEffect } from '../groupUtils.js';

export default function group5_3(arr) {
  const uid = `${arr[0].group}`;
  const BG001 = `BG001_${uid}`;
  const mainContainer = `main_${uid}`;
  const topDiv = `top_${uid}`;
  const topLeftDiv = `topLeft_${uid}`;
  const topRightDiv = `topRight_${uid}`;
  const midDiv = `mid_${uid}`;
  const midTextDiv = `midText_${uid}`;
  const midImgDiv = `midImg_${uid}`;
  const bottomDiv = `bottom_${uid}`;
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
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '40px',
        },
      },
      // Div trên — 2 ảnh 1 dòng: arr[1], arr[2] (đẩy qua obj2, obj3)
      {
        cmd: CMD_Fetch.divAction,
        id: topDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          width: '100%',
          height: '20%',
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          zIndex: 2,
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        id: topLeftDiv,
        toID: topDiv,
        group: arr[0].group,
        styleCss: {
          flex: 1,
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        id: topRightDiv,
        toID: topDiv,
        group: arr[0].group,
        styleCss: {
          flex: 1,
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
      // Div giữa — chữ trái 70%, ảnh phải 30% (arr[0])
      {
        cmd: CMD_Fetch.divAction,
        id: midDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          height: '35%',
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          zIndex: 2,
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        id: midTextDiv,
        toID: midDiv,
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
        id: midImgDiv,
        toID: midDiv,
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
        toID: midTextDiv,
        group: arr[0].group,
        styleCss: {
          ...getTextCSS(arr[0].textStyle),
          ...getEffect('fadeInSlideLeft'),
          fontSize: '60px',
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: midImgDiv,
        img: arr[0].img,
        group: arr[0].group,
        styleCss: {
          ...getEffect('fadeInSlideLeft'),
          ...getImgCSS('1'),
          width: '350px',
          height: '350px',
          objectFit: 'contain',
        },
      },
      // Div dưới — 2 ảnh 1 dòng: arr[3], arr[4] (đẩy qua obj4, obj5)
      {
        cmd: CMD_Fetch.divAction,
        id: bottomDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          width: '100%',
          height: '20%',
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          zIndex: 2,
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        id: bottomLeftDiv,
        toID: bottomDiv,
        group: arr[0].group,
        styleCss: {
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        id: bottomRightDiv,
        toID: bottomDiv,
        group: arr[0].group,
        styleCss: {
          flex: 1,
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
        cmd: CMD_Fetch.imageViewActionToID,
        toID: topLeftDiv,
        img: arr[1].img,
        group: arr[1].group,
        styleCss: {
          ...getEffect('fadeInSlideLeft'),
          width: '300px',
          height: '300px',
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

  const obj3 = {
    actions: [
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: topRightDiv,
        img: arr[2].img,
        group: arr[2].group,
        styleCss: {
          ...getEffect('fadeInSlideRight'),
          width: '300px',
          height: '300px',
          objectFit: 'contain',
        },
      },
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[2].soundEffect,
      },
    ],
    code: arr[2].code,
  };

  const obj4 = {
    actions: [
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: bottomLeftDiv,
        img: arr[3].img,
        group: arr[3].group,
        styleCss: {
          ...getEffect('fadeInSlideLeft'),
          width: '300px',
          height: '300px',
          objectFit: 'contain',
        },
      },
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[3].soundEffect,
      },
    ],
    code: arr[3].code,
  };

  const obj5 = {
    actions: [
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: bottomRightDiv,
        img: arr[4].img,
        group: arr[4].group,
        styleCss: {
          ...getEffect('fadeInSlideRight'),
          width: '300px',
          height: '300px',
          objectFit: 'contain',
        },
      },
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[4].soundEffect,
      },
    ],
    code: arr[4].code,
  };

  return [obj1, obj2, obj3, obj4, obj5];
}
