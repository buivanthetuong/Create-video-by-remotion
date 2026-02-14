import { CMD_Fetch, getTextCSS, getImgCSS, getEffect } from '../groupUtils.js';

export default function group1_text1(arr) {
    const uid = `${arr[0].group}`;
    const BG001 = `BG001_${uid}`;
    const mainContainer = `main_${uid}`;

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
                    justifyContent: 'space-around',
                    padding: '60px 40px',
                },
            },
            {
                cmd: CMD_Fetch.divAction,
                id: `${uid}_div2`,
                toID: mainContainer,
                group: arr[0].group,
                styleCss: {
                    flex: '1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '82%',
                    zIndex: 2,
                },
            },
            {
                cmd: CMD_Fetch.typingText,
                text: arr[0].text,
                toID: `${uid}_div2`,
                group: arr[0].group,
                styleCss: {
                    ...getEffect('textJump'),
                    ...getTextCSS('1'),
                    fontSize: '70px',
                    effectDuration: 2, // Chạy trong 2 giây
                },
            }, {
                cmd: CMD_Fetch.soundPlayerAction,
                soundSource: arr[0].soundEffect,
            }

        ],
        code: arr[0].code,
        timeFixed: 4,
    };

    return [obj1];
}
