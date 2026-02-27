import { CMD_Fetch, getTextCSS, getImgCSS, getEffect } from '../groupUtils.js';

export default function group1_3(arr) {
  const uid = `${arr[0].group}`;
  const BG001 = `BG001_${uid}`;
  const wrapperId = `wrapper_${uid}`;
  const navContainer = `nav_${uid}`;
  const navButtonsId = `navBtns_${uid}`;
  const heroContainer = `hero_${uid}`;
  const preTitleId = `preTitle_${uid}`;
  const titleId = `title_${uid}`;
  const subTitleId = `subTitle_${uid}`;
  const imageContainerId = `imageContainer_${uid}`;
  const imageId = `image_${uid}`;

  const obj1 = {
    actions: [
      // Background Solid Color 
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
          backgroundColor: '#0f172a', // Dark blue background like saas sites
        },
      },
      // Subtle background image overlay with Ken Burns animation
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
          opacity: 0.15,
        },
        animations: [
          { type: 'kenBurns', target: `#${BG001}`, duration: 600, startScale: 1.0, endScale: 1.15, startX: 0, endX: -20, loop: true }
        ]
      },
      // Main UI Container
      {
        cmd: CMD_Fetch.divAction,
        id: wrapperId,
        group: arr[0].group,
        styleCss: {
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: '"Inter", "Segoe UI", sans-serif',
          zIndex: 1,
        },
      },
      // Navigation Bar (Header)
      {
        cmd: CMD_Fetch.divAction,
        id: navContainer,
        toID: wrapperId,
        group: arr[0].group,
        styleCss: {
          width: '90%',
          height: '100px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        },
        animations: [
          { type: 'fadeIn', target: `#${navContainer}`, duration: 30 }
        ]
      },
      // Website Logo text
      {
        cmd: CMD_Fetch.typingText,
        text: 'BookedIn.ai',
        toID: navContainer,
        noTyping: true,
        group: arr[0].group,
        styleCss: {
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#ffffff',
          letterSpacing: '-1px'
        }
      },
      // CTA Button in Header
      {
        cmd: CMD_Fetch.divAction,
        id: navButtonsId,
        toID: navContainer,
        group: arr[0].group,
        styleCss: {
          padding: '16px 32px',
          backgroundColor: '#3b82f6',
          borderRadius: '12px',
          fontSize: '24px',
          fontWeight: '600',
          boxShadow: '0 4px 14px 0 rgba(59,130,246,0.39)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
      },
      {
        cmd: CMD_Fetch.typingText,
        text: 'Get Started',
        toID: navButtonsId,
        noTyping: true,
        group: arr[0].group,
        styleCss: { color: '#ffffff' }
      },
      // Hero Section Content
      {
        cmd: CMD_Fetch.divAction,
        id: heroContainer,
        toID: wrapperId,
        group: arr[0].group,
        styleCss: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          flex: 1,
          paddingTop: '50px',
          gap: '24px',
        },
      },
      // Pre-Title Subheadline
      {
        cmd: CMD_Fetch.typingText,
        id: preTitleId,
        text: 'NEVER CHASE LEADS AGAIN',
        toID: heroContainer,
        noTyping: true,
        group: arr[0].group,
        styleCss: {
          color: '#60a5fa', // lighter blue
          fontSize: '26px',
          fontWeight: '700',
          letterSpacing: '4px',
          textTransform: 'uppercase'
        },
        animations: [
          { type: 'slideIn', target: `#${preTitleId}`, duration: 45, direction: 'top', distance: 30 },
          { type: 'fadeIn', target: `#${preTitleId}`, duration: 45 }
        ]
      },
      // Main Title (Input text overlay)
      {
        cmd: CMD_Fetch.typingText,
        id: titleId,
        text: arr[0].text,
        toID: heroContainer,
        noTyping: false,
        group: arr[0].group,
        styleCss: {
          ...getTextCSS('1'),
          fontSize: '100px',
          fontWeight: '800',
          textAlign: 'center',
          maxWidth: '85%',
          lineHeight: '1.2',
          color: '#ffffff',
          textShadow: '0 4px 20px rgba(0,0,0,0.5)'
        },
        animations: [
          { type: 'slideIn', target: `#${titleId}`, duration: 60, direction: 'bottom', distance: 60 },
          { type: 'fadeIn', target: `#${titleId}`, duration: 60 }
        ]
      },
      // Subtitle explanation
      {
        cmd: CMD_Fetch.typingText,
        id: subTitleId,
        text: 'Convert leads into meetings. An incredibly powerful platform to generate and close your prospects automatically without lifting a finger.',
        toID: heroContainer,
        noTyping: true,
        group: arr[0].group,
        styleCss: {
          color: '#94a3b8',
          fontSize: '32px',
          textAlign: 'center',
          maxWidth: '70%',
          marginTop: '10px',
          lineHeight: '1.4'
        },
        animations: [
          { type: 'fadeIn', target: `#${subTitleId}`, duration: 60, startFrame: 30 }
        ]
      },
      // Center Main Image Container with Breathing effect
      {
        cmd: CMD_Fetch.divAction,
        id: imageContainerId,
        toID: heroContainer,
        group: arr[0].group,
        styleCss: {
          marginTop: '20px',
          width: '75%',
          height: '420px',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
          border: '1px solid rgba(255,255,255,0.15)',
        },
        animations: [
          { type: 'slideIn', target: `#${imageContainerId}`, duration: 80, direction: 'bottom', distance: 200, startFrame: 40 },
          { type: 'fadeIn', target: `#${imageContainerId}`, duration: 80, startFrame: 40 },
          { type: 'breathing', target: `#${imageContainerId}`, duration: 180, breathingMin: 1.0, breathingMax: 1.03, startFrame: 120 }
        ]
      },
      // The Actual Image (Input image)
      {
        cmd: CMD_Fetch.imageViewActionToID,
        id: imageId,
        toID: imageContainerId,
        img: arr[0].img, 
        group: arr[0].group,
        styleCss: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        },
      },
      // Required Sound Effect
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[0].soundEffect,
      },
    ],
    timeFixed: 5,
    code: arr[0].code,
  };

  return [obj1];
}
