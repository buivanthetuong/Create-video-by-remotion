// CSS presets collection

const ObjCSS = {
  textCSS: {
    textCss_1: {
      fontFamily: 'Fuzzy Bubbles',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '12px',
      color: '#ff8800ff',
      WebkitTextStroke: '15px #500202ff',
      textShadow: '10px 10px 10px #000000ff',
      paintOrder: 'stroke fill',
    },
    textCss_2: {
      fontFamily: 'Fuzzy Bubbles',
      letterSpacing: '10px',
      fontWeight: 800,
      color: 'black',
      WebkitTextStroke: '3px #000000ff',
    },
    textCss_title: {
      fontFamily: 'Fuzzy Bubbles',
      letterSpacing: '7px',
      fontWeight: 700,
      color: 'black',
    },
    textCss_none: {
      display: 'none',
    },
  },

  imgCSS: {
    imgCss_1: {
      filter: 'drop-shadow(0 0 16px rgb(255, 255, 255))',
      borderRadius: '20px',
    },
    imgCss_none: {
      display: 'none',
    },
    imgCss_FullScreen: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
};

export { ObjCSS };
