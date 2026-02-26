import { CMD_Fetch, getTextCSS, getImgCSS, getEffect } from '../groupUtils.js';

export default function group3_3text1(arr) {
  const uid = `${arr[0].group}`;
  const BG001 = `BG001_${uid}`;
  const mainContainer = `main_${uid}`;
  const topRow = `topRow_${uid}`;
  const midRow = `midRow_${uid}`;
  const bottomRow = `bottomRow_${uid}`;

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
          padding: '100px 80px',
        },
      },
      // Row 1 - Top
      {
        cmd: CMD_Fetch.divAction,
        id: topRow,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          height: '25%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start', // Left align for Slide Left
          zIndex: 2,
        },
      },
      {
        cmd: CMD_Fetch.typingText,
        text: arr[0].text,
        toID: topRow,
        group: arr[0].group,
        styleCss: {
          ...getTextCSS('2'),
          ...getEffect('fadeInSlideLeft'),
          fontSize: '70px',
          textAlign: 'left',
          width: '90%',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          border: '4px solid #ff8800',
          borderRadius: '20px',
          padding: '10px 20px',
        },
      },
      // Row 2 - Middle
      {
        cmd: CMD_Fetch.divAction,
        id: midRow,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          height: '25%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end', // Right align for Slide Right
          zIndex: 2,
        },
      },
      // Row 3 - Bottom
      {
        cmd: CMD_Fetch.divAction,
        id: bottomRow,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          height: '25%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start', // Left align for Slide Left
          zIndex: 2,
        },
      },
      // Sound effect 1
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[0].soundEffect,
      },
    ],
    code: arr[0].code,
    timeFixed: 2,
  };

  const obj2 = {
    actions: [
      {
        cmd: CMD_Fetch.typingText,
        text: arr[1].text,
        toID: midRow,
        group: arr[1].group,
        styleCss: {
          ...getTextCSS('2'),
          ...getEffect('fadeInSlideRight'),
          fontSize: '70px',
          textAlign: 'right',
          width: '90%',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          border: '4px solid #ff8800',
          borderRadius: '20px',
          padding: '10px 20px',
        },
      },
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[1].soundEffect,
      },
    ],
    code: arr[1].code,
    timeFixed: 2,
  };

  const obj3 = {
    actions: [
      {
        cmd: CMD_Fetch.typingText,
        text: arr[2].text,
        toID: bottomRow,
        group: arr[2].group,
        styleCss: {
          ...getTextCSS('2'),
          ...getEffect('fadeInSlideLeft'),
          fontSize: '70px',
          textAlign: 'left',
          width: '90%',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          border: '4px solid #ff8800',
          borderRadius: '20px',
          padding: '10px 20px',
        },
      },
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[2].soundEffect,
      },
    ],
    code: arr[2].code,
    timeFixed: 2,
  };

  return [obj1, obj2, obj3];
}
