import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  };

  return (
    <div style={footerStyle}>
      &copy; 2023 Beleaf Technologies All Rights Reserved
    </div>
  );
};

export default Footer;