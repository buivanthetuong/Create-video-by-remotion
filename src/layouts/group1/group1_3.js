import { CMD_Fetch, getTextCSS, getImgCSS, getEffect } from '../groupUtils.js';

// FPS = 30 → Bảng quy đổi:
// 0s   = frame 0
// 1s   = frame 30
// 2s   = frame 60
// 2.5s = frame 75
// 3s   = frame 90
// 3.2s = frame 96
// 3.6s = frame 108
// 4.0s = frame 120

export default function group1_3(arr) {
  const uid = `${arr[0].group}`;
  const BG001 = `BG001_${uid}`;
  const mainContainer = `main_${uid}`;
  const wrapperTitle = `wrapperTitle_${uid}`;
  const centerBox = `centerBox_${uid}`;
  
  // Naming for list items
  const lineDown = `lineDown_${uid}`;
  const listContainer = `listContainer_${uid}`;
  const horizLine = `horizLine_${uid}`;
  const item1 = `item1_${uid}`;
  const item2 = `item2_${uid}`;
  const item3 = `item3_${uid}`;

  // Use arr elements if available, otherwise fallback
  const txt1 = arr[1] ? arr[1].text : 'Muc 1';
  const txt2 = arr[2] ? arr[2].text : 'Muc 2';
  const txt3 = arr[3] ? arr[3].text : 'Muc 3';

  // Logic to calculate dynamic font-size for centerBox
  const textContent = arr[0].text || '';
  const textLength = textContent.length || 1;
  const innerW = 900 - 120; // width 900px, minus padding left/right 60px * 2
  const innerH = 350 - 80;  // height 350px, minus padding top/bottom 40px * 2
  let fSize = Math.sqrt((innerW * innerH) / (textLength * 0.65)) * 0.85;
  if (fSize > 120) fSize = 120;
  if (fSize < 30) fSize = 30;
  const dynamicFontSize = Math.floor(fSize) + 'px';

  const obj1 = {
    actions: [
      // Background base
      {
        cmd: CMD_Fetch.divAction,
        id: BG001,
        ToEndFrame: true,
        styleCss: {
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          backgroundColor: '#000',
        },
      },
      // Blurred Background Image
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: BG001,
        ToEndFrame: true,
        zIndex: 0,
        img: arr[0].backgroundIMG,
        styleCss: {
          position: 'absolute',
          top: '-10%', left: '-10%',
          width: '120%', height: '120%',
          objectFit: 'cover',
          filter: 'blur(15px)',
          opacity: 0.9,
        },
      },
      // Main container
      {
        cmd: CMD_Fetch.divAction,
        id: mainContainer,
        group: arr[0].group,
        styleCss: {
          position: 'absolute', inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      // ========================================================
      // Title Wrapper - đẩy lên sau 2s (frame 60), duration 1s (30 frames)
      // ========================================================
      {
        cmd: CMD_Fetch.divAction,
        id: wrapperTitle,
        toID: mainContainer,
        group: arr[0].group,
        animations: [
          {
            type: 'moveUp',
            target: `#${wrapperTitle}`,
            startFrame: 60,   // delay 2s
            duration: 30,      // 1s
            fillMode: 'both',
            relativeToAction: true,
            distance: 350,
          },
        ],
        styleCss: {
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
        },
      },
      // ========================================================
      // Box chứa chữ chính - Bay từ trái vào (frame 0), duration 1s (30 frames)
      // ========================================================
      {
        cmd: CMD_Fetch.divAction,
        id: centerBox,
        toID: wrapperTitle,
        group: arr[0].group,
        animations: [
          {
            type: 'fadeInSlide',
            target: `#${centerBox}`,
            startFrame: 0,    // ngay lập tức
            duration: 30,      // 1s
            fillMode: 'both',
            relativeToAction: true,
            direction: 'left',
            distance: 200,
          },
        ],
        styleCss: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '2px solid rgba(255, 255, 255, 0.4)',
          width: '900px',
          height: '350px',
          padding: '40px 60px',
          borderRadius: '30px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
        },
      },
      // Tiêu đề
      {
        cmd: CMD_Fetch.typingText,
        text: textContent,
        toID: centerBox,
        noTyping: true,
        group: arr[0].group,
        styleCss: {
          ...getTextCSS('title'),
          fontSize: dynamicFontSize,
          color: '#fff',
          textShadow: '0px 4px 10px rgba(0,0,0,0.5)',
        },
      },
      
      // ========================================================
      // === LINE VÀ MỤC DƯỚI ===
      // ========================================================

      // Đường kết nối dọc - mọc xuống sau 2.5s (frame 75), duration 0.8s (24 frames)
      {
        cmd: CMD_Fetch.divAction,
        id: lineDown,
        toID: mainContainer,
        group: arr[0].group,
        animations: [
          {
            type: 'growDown',
            target: `#${lineDown}`,
            startFrame: 75,   // delay 2.5s
            duration: 24,      // 0.8s
            fillMode: 'both',
            relativeToAction: true,
            maxHeight: 120,
          },
        ],
        styleCss: {
          position: 'absolute',
          top: 'calc(38% + 70px)',
          width: '6px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
          borderRadius: '3px',
          zIndex: 2,
        },
      },
      // Container 3 mục (Xếp ngang)
      {
        cmd: CMD_Fetch.divAction,
        id: listContainer,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          position: 'absolute',
          top: 'calc(45% + 70px)',
          width: '80%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          zIndex: 3,
        },
      },
      // Đường ngang kết nối - chạy ra sau 3s (frame 90), duration 0.5s (15 frames)
      {
        cmd: CMD_Fetch.divAction,
        id: horizLine,
        toID: listContainer,
        group: arr[0].group,
        animations: [
          {
            type: 'fadeInSlide',
            target: `#${horizLine}`,
            startFrame: 90,   // delay 3s
            duration: 15,      // 0.5s
            fillMode: 'both',
            relativeToAction: true,
            direction: 'left',
            distance: 100,
          },
        ],
        styleCss: {
          position: 'absolute',
          top: '0',
          left: '16%', 
          right: '16%',
          height: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
        },
      },

      // ========================================================
      // ITEM 1 - hiện sau 3.2s (frame 96), duration 0.8s (24 frames)
      // ========================================================
      {
        cmd: CMD_Fetch.divAction,
        id: item1,
        toID: listContainer,
        group: arr[0].group,
        animations: [
          {
            type: 'reveal',
            target: `#${item1}`,
            startFrame: 96,
            duration: 24,
            fillMode: 'both',
            relativeToAction: true,
            distance: 20,
          },
        ],
        styleCss: {
          flex: 1,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        toID: item1,
        group: arr[0].group,
        styleCss: {
          ...getItemBoxCSS(),
        }
      },
      {
        cmd: CMD_Fetch.typingText, text: txt1, toID: item1, group: arr[0].group,
        styleCss: { ...getTextCSS('header'), fontSize: '50px', color: '#fff' }
      },

      // ========================================================
      // ITEM 2 - hiện sau 3.6s (frame 108), duration 0.8s (24 frames)
      // ========================================================
      {
        cmd: CMD_Fetch.divAction,
        id: item2,
        toID: listContainer,
        group: arr[0].group,
        animations: [
          {
            type: 'reveal',
            target: `#${item2}`,
            startFrame: 108,
            duration: 24,
            fillMode: 'both',
            relativeToAction: true,
            distance: 20,
          },
        ],
        styleCss: {
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        toID: item2,
        group: arr[0].group,
        styleCss: { ...getItemBoxCSS() }
      },
      {
        cmd: CMD_Fetch.typingText, text: txt2, toID: item2, group: arr[0].group,
        styleCss: { ...getTextCSS('header'), fontSize: '50px', color: '#fff' }
      },

      // ========================================================
      // ITEM 3 - hiện sau 4.0s (frame 120), duration 0.8s (24 frames)
      // ========================================================
      {
        cmd: CMD_Fetch.divAction,
        id: item3,
        toID: listContainer,
        group: arr[0].group,
        animations: [
          {
            type: 'reveal',
            target: `#${item3}`,
            startFrame: 120,
            duration: 24,
            fillMode: 'both',
            relativeToAction: true,
            distance: 20,
          },
        ],
        styleCss: {
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        toID: item3,
        group: arr[0].group,
        styleCss: { ...getItemBoxCSS() }
      },
      {
        cmd: CMD_Fetch.typingText, text: txt3, toID: item3, group: arr[0].group,
        styleCss: { ...getTextCSS('header'), fontSize: '50px', color: '#fff' }
      },
    ],
    code: arr[0].code,
  };

  if (arr[0].soundEffect) {
    obj1.actions.push({
      cmd: CMD_Fetch.soundPlayerAction,
      soundSource: arr[0].soundEffect,
    });
  }

  obj1.timeFixed = 6;

  return [obj1];
}

function getItemBoxCSS() {
  return {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    boxShadow: '0 0 20px #fff',
    marginBottom: '20px',
    zIndex: 5,
  };
}
