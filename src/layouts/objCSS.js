// CSS presets collection

const ObjCSS = {
  textCSS: {
    //chu do vien vang
    textCss_1: {
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '0.5px',
      color: 'red',
      WebkitTextStroke: '10px yellow', // 👈 viền chữ
      paintOrder: 'stroke fill', // viền nằm dưới chữ
      padding: '80px 40px 80px 40px',
      backgroundColor: 'transparent',
    },
    //chu vang vien xanh
    textCss_2: {
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: '0.5px',
      color: 'yellow',
      WebkitTextStroke: '4px green', // 👈 viền chữ vàng như css1
      paintOrder: 'stroke fill', // viền nằm dưới chữ
      padding: '80px 40px 80px 40px',
      backgroundColor: 'transparent',
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
