import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CustomCopyToClipboard = ({ text, style }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <button style={style} onClick={handleCopy}>
      Copy
    </button>
  );
};

CustomCopyToClipboard.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};

const ClipboardBox = ({ backgroundColor, textContent, copyToClipboardColor }) => {
  // Function to determine if the background color is light or dark
  const isLightColor = (color) => {
    // Convert color to RGB
    const rgb = parseInt(color.substring(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;

    // Calculate luminance
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // Return true if luminance is greater than 128 (considered light), false otherwise
    return luminance > 128;
  };

  // Determine text color based on background color
  const textColor = isLightColor(backgroundColor) ? '#000' : '#fff';

  return (
    <div style={{ backgroundColor, padding: '16px', borderRadius: '5px', color: textColor, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <p>{textContent}</p>
      <CustomCopyToClipboard text={textContent} style={{ color: copyToClipboardColor }} />
    </div>
  );
};

ClipboardBox.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
  copyToClipboardColor: PropTypes.string.isRequired,
};

export default ClipboardBox;