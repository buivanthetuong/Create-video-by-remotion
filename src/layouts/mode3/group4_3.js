import { CMD_Fetch, getTextCSS, getImgCSS } from '../groupUtils.js';

export default function group4_3(arr) {
  const uid = `${arr[0].group}`;
  const BG001 = `BG001_${uid}`;
  const mainContainer = `main_${uid}`;
  const topDiv = `top_${uid}`;
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
          flexDirection: 'column',
          padding: '40px',
        },
      },
      // Div trên — hiển thị ảnh arr[1] (nội dung đẩy qua obj2)
      {
        cmd: CMD_Fetch.divAction,
        id: topDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          height: '25%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        },
      },
      // Div giữa — chữ trái 70%, ảnh phải 30% (arr[0])
      {
        cmd: CMD_Fetch.divAction,
        id: midDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          flex: 1,
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
          width: '70%',
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
          width: '30%',
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
          fontSize: '60px',
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: midImgDiv,
        img: arr[0].img,
        group: arr[0].group,
        styleCss: {
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
        },
      },
      // Div dưới — 2 ảnh trái arr[2], phải arr[3] (nội dung đẩy qua obj3, obj4)
      {
        cmd: CMD_Fetch.divAction,
        id: bottomDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          height: '30%',
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
        toID: topDiv,
        img: arr[1].img,
        group: arr[1].group,
        styleCss: {
          maxWidth: '100%',
          maxHeight: '100%',
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
        toID: bottomLeftDiv,
        img: arr[2].img,
        group: arr[2].group,
        styleCss: {
          maxWidth: '100%',
          maxHeight: '100%',
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
        toID: bottomRightDiv,
        img: arr[3].img,
        group: arr[3].group,
        styleCss: {
          maxWidth: '100%',
          maxHeight: '100%',
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

  return [obj1, obj2, obj3, obj4];
}
