import React, { useState } from 'react';


const CopyToClipboard = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <button onClick={handleCopy}>
      {copied ? 'Copied!' : 'Click to Copy'}
    </button>
  );
};

export default CopyToClipboard;