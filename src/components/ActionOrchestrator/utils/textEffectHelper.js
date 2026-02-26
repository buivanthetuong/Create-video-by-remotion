export function processTextEffect(text, styleObj) {
  // If no text or no effect, return null to use default rendering
  if (!text || !styleObj || !styleObj.textEffect) {
    return null;
  }

  const { textEffect } = styleObj;

  // Handle 'char-jump' effect
  if (textEffect === 'char-jump') {
    const stagger = styleObj.effectDuration
      ? styleObj.effectDuration / text.length
      : (styleObj.staggerDelay || 0.1);

    return text.split('').map((char, index) => {
      // Inline-block is needed for transform to work
      const charStyle = {
        display: 'inline-block',
        minWidth: char === ' ' ? '10px' : 'auto', // Preserve spaces
        animation: styleObj.animation,
        animationDelay: `${index * stagger}s`, // Staggered delay
      };

      return (
        <span key={index} style={charStyle}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      );
    });
  }

  return null;
}
