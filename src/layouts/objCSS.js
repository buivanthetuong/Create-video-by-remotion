// CSS presets collection

const ObjCSS = {
  textCSS: {
    textCss_header: {
      fontFamily: 'Nunito',
      textTransform: 'uppercase',
      letterSpacing: '10px',
      fontWeight: 800,
      color: 'black',
    },
    textCss_subtitle: {
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
