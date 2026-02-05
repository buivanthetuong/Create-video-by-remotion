import { CMD_Fetch, getTextCSS, getImgCSS, getEffect } from '../groupUtils.js';

export default function group3_1(arr) {
  const uid = `${arr[0].group}`;
  const BG001 = `BG001_${uid}`;
  const mainContainer = `main_${uid}`;
  const topRow = `topRow_${uid}`;
  const topLeftDiv = `topLeft_${uid}`;
  const topRightDiv = `topRight_${uid}`;
  const midRow = `midRow_${uid}`;
  const midLeftDiv = `midLeft_${uid}`;
  const midRightDiv = `midRight_${uid}`;
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
          padding: '100px 40px 40px 40px',
        },
      },
      // Row 1 — 30%: trái 70% (chữ), phải 30% (ảnh)
      {
        cmd: CMD_Fetch.divAction,
        id: topRow,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          height: '25%',
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
          ...getEffect('fadeInSlideLeft'),
          fontSize: '60px',
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: topRightDiv,
        img: arr[0].img,
        group: arr[0].group,
        styleCss: {
          ...getEffect('fadeInSlideLeft'),
          maxWidth: '90%',
          maxHeight: '90%',
          objectFit: 'contain',
        },
      },
      // Row 2 — 40%: trái 30%, phải 70%
      {
        cmd: CMD_Fetch.divAction,
        id: midRow,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          height: '25%',
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          zIndex: 2,
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        id: midLeftDiv,
        toID: midRow,
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
        id: midRightDiv,
        toID: midRow,
        group: arr[0].group,
        styleCss: {
          width: '65%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      // Row 3 — 30%: giống row 1 — trái 70%, phải 30%
      {
        cmd: CMD_Fetch.divAction,
        id: bottomRow,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          height: '25%',
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
          width: '65%',
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
          width: '35%',
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
        toID: midRightDiv,
        group: arr[1].group,
        styleCss: {
          ...getTextCSS('2'),
          ...getEffect('fadeInSlideRight'),
          fontSize: '60px',
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: midLeftDiv,
        img: arr[1].img,
        group: arr[1].group,
        styleCss: {
          ...getEffect('fadeInSlideRight'),
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

  const obj3 = {
    actions: [
      {
        cmd: CMD_Fetch.typingText,
        text: arr[2].text,
        toID: bottomLeftDiv,
        group: arr[2].group,
        styleCss: {
          ...getTextCSS('2'),
          ...getEffect('fadeInSlideLeft'),
          fontSize: '60px',
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: bottomRightDiv,
        img: arr[2].img,
        group: arr[2].group,
        styleCss: {
          ...getEffect('fadeInSlideLeft'),
          maxWidth: '90%',
          maxHeight: '90%',
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

  return [obj1, obj2, obj3];
}
