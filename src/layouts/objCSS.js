// CSS presets collection

const ObjCSS = {
  textCSS: {
    textCss_header: {
      fontFamily: 'Nunito',
      fontWeight: 900,
      textTransform: 'uppercase',
      color: 'white',
      WebkitTextStroke: '10px black',
      paintOrder: 'stroke fill',
      padding: '80px 40px 80px 40px',
    },
    textCss_subtitle: {
      fontFamily: 'Montserrat',
      textTransform: 'uppercase',
      letterSpacing: '10px',
      fontWeight: 800,
      color: 'white',
      WebkitTextStroke: '8px black',
      paintOrder: 'stroke fill',
      padding: '80px 40px 80px 40px',
    }, 
    textCss_title: {
      fontFamily: 'Montserrat',
      textTransform: 'uppercase',
      letterSpacing: '10px',
      fontWeight: 800,
      color: 'white',
      WebkitTextStroke: '8px black',
      paintOrder: 'stroke fill',
      padding: '80px 40px 80px 40px',
    },
    textCss_caption: {
      fontFamily: 'Montserrat',
      textTransform: 'uppercase',
      letterSpacing: '10px',
      fontWeight: 800,
      color: 'white',
      WebkitTextStroke: '8px black',
      paintOrder: 'stroke fill',
      padding: '80px 40px 80px 40px',
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
