const ObjEffect = {
  // Fade in trượt từ trái sang
  fadeInSlideLeft: {
    animation: 'fadeInSlideLeft 1s ease-out forwards',
  },

  // Fade in trượt từ phải sang
  fadeInSlideRight: {
    animation: 'fadeInSlideRight 1s ease-out forwards',
  },

  // Fade in trượt từ trên xuống
  fadeInSlideTop: {
    animation: 'fadeInSlideTop 1s ease-out forwards',
  },

  // Fade in trượt từ dưới lên
  fadeInSlideBottom: {
    animation: 'fadeInSlideBottom 1s ease-out forwards',
  },

  // Phóng to từ tâm
  zoomIn: {
    animation: 'bounceIn 1s ease-out forwards',
  },

  // Chữ nhảy - Jumping Text
  textJump: {
    textEffect: 'char-jump', // Signal to split text
    animation: 'jumpChar 1s ease-in-out both', // 'both' keeps 0% state during delay
  },
};

export { ObjEffect };

