// src/utils/animations/animationPresets.js
import {
  interpolateStyles,
  makeTransform,
  scale,
  translateX,
  translateY,
} from "@remotion/animation-utils";

/**
 * 🎨 KHO ANIMATION PRESETS
 * Mỗi preset return function nhận (currentFrame, duration, options)
 */

export const AnimationPresets = {
  // ⭐ PAN (qua trái-phải)
  pan: (currentFrame, duration, options = {}) => {
    const { panAmount = 5, loop = true } = options;
    const loopFrame = loop ? currentFrame % duration : currentFrame;
    const panOffset = (panAmount / 100) * 1920;

    return interpolateStyles(
      loopFrame,
      [0, duration / 3, (duration * 2) / 3, duration],
      [
        { transform: makeTransform([translateX(0)]) },
        { transform: makeTransform([translateX(-panOffset)]) },
        { transform: makeTransform([translateX(panOffset)]) },
        { transform: makeTransform([translateX(0)]) },
      ],
    );
  },

  // ⭐ ZOOM (phóng to-thu nhỏ)
  zoom: (currentFrame, duration, options = {}) => {
    const { zoomMin = 1.0, zoomMax = 1.2, loop = true } = options;
    const loopFrame = loop ? currentFrame % duration : currentFrame;

    return interpolateStyles(
      loopFrame,
      [0, duration / 2, duration],
      [
        { transform: makeTransform([scale(zoomMin)]) },
        { transform: makeTransform([scale(zoomMax)]) },
        { transform: makeTransform([scale(zoomMin)]) },
      ],
    );
  },

  // ⭐ BREATHING (scale nhẹ nhàng)
  breathing: (currentFrame, duration, options = {}) => {
    const { breathingMin = 0.98, breathingMax = 1.02, loop = true } = options;
    const loopFrame = loop ? currentFrame % duration : currentFrame;

    return interpolateStyles(
      loopFrame,
      [0, duration / 2, duration],
      [
        { transform: makeTransform([scale(breathingMin)]) },
        { transform: makeTransform([scale(breathingMax)]) },
        { transform: makeTransform([scale(breathingMin)]) },
      ],
    );
  },

  // ⭐ FADE IN
  fadeIn: (currentFrame, duration, options = {}) => {
    const { startOpacity = 0, endOpacity = 1 } = options;

    return interpolateStyles(
      currentFrame,
      [0, duration],
      [{ opacity: startOpacity }, { opacity: endOpacity }],
    );
  },

  // ⭐ SLIDE IN (từ bất kỳ hướng nào)
  slideIn: (currentFrame, duration, options = {}) => {
    const { direction = "left", distance = 100 } = options;

    const transforms = {
      left: [translateX(-distance), translateX(0)],
      right: [translateX(distance), translateX(0)],
      top: [translateY(-distance), translateY(0)],
      bottom: [translateY(distance), translateY(0)],
    };

    return interpolateStyles(
      currentFrame,
      [0, duration],
      [
        { transform: makeTransform([transforms[direction][0]]) },
        { transform: makeTransform([transforms[direction][1]]) },
      ],
    );
  },

  // ⭐ KEN BURNS (zoom + pan kết hợp)
  kenBurns: (currentFrame, duration, options = {}) => {
    const {
      startScale = 1.0,
      endScale = 1.3,
      startX = 0,
      endX = -50,
      loop = true,
    } = options;
    const loopFrame = loop ? currentFrame % duration : currentFrame;

    return interpolateStyles(
      loopFrame,
      [0, duration],
      [
        { transform: makeTransform([scale(startScale), translateX(startX)]) },
        { transform: makeTransform([scale(endScale), translateX(endX)]) },
      ],
    );
  },

  // ⭐ PARALLAX (nhiều layers khác tốc độ)
  parallax: (currentFrame, duration, options = {}) => {
    const { speed = 1, direction = "horizontal" } = options;
    const offset = currentFrame * speed;

    if (direction === "horizontal") {
      return { transform: makeTransform([translateX(-offset)]) };
    } else {
      return { transform: makeTransform([translateY(-offset)]) };
    }
  },

  // ⭐ FADE IN + SLIDE (kết hợp opacity + translate)
  fadeInSlide: (currentFrame, duration, options = {}) => {
    const { direction = "left", distance = 200 } = options;
    const isHorizontal = direction === "left" || direction === "right";
    const translateFn = isHorizontal ? translateX : translateY;
    const sign = direction === "left" || direction === "top" ? -1 : 1;

    return interpolateStyles(
      currentFrame,
      [0, duration],
      [
        { opacity: 0, transform: makeTransform([translateFn(sign * distance)]) },
        { opacity: 1, transform: makeTransform([translateFn(0)]) },
      ],
    );
  },

  // ⭐ MOVE UP (đẩy lên trên)
  moveUp: (currentFrame, duration, options = {}) => {
    const { distance = 350 } = options;

    return interpolateStyles(
      currentFrame,
      [0, duration],
      [
        { transform: makeTransform([translateY(0)]) },
        { transform: makeTransform([translateY(-distance)]) },
      ],
    );
  },

  // ⭐ GROW DOWN (mọc chiều cao + opacity)
  growDown: (currentFrame, duration, options = {}) => {
    const { maxHeight = 120 } = options;
    const fadeInEnd = Math.max(1, Math.round(duration * 0.1));

    return interpolateStyles(
      currentFrame,
      [0, fadeInEnd, duration],
      [
        { height: 0, opacity: 0 },
        { height: 0, opacity: 1 },
        { height: maxHeight, opacity: 1 },
      ],
    );
  },

  // ⭐ REVEAL (hiện item: fade + slide lên nhẹ)
  reveal: (currentFrame, duration, options = {}) => {
    const { distance = 20 } = options;

    return interpolateStyles(
      currentFrame,
      [0, duration],
      [
        { opacity: 0, transform: makeTransform([translateY(distance)]) },
        { opacity: 1, transform: makeTransform([translateY(0)]) },
      ],
    );
  },
};

/**
 * 🎯 COMBINE nhiều animations
 */
export function combineAnimations(animations) {
  const combined = {};

  animations.forEach((anim) => {
    Object.keys(anim).forEach((key) => {
      if (key === "transform") {
        // Merge transforms
        combined.transform = combined.transform
          ? `${combined.transform} ${anim.transform}`
          : anim.transform;
      } else {
        // Override other properties
        combined[key] = anim[key];
      }
    });
  });

  return combined;
}
