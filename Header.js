import React from 'react';
const Header = () => {
   const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    background: '#333',
    color: '#fff',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#fff',
    position:'absolute',
    top:'15px'
  };
  const logobStyleb = {
   height:'50px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
    border: '2px solid #fff',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: 'transparent',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div style={navStyle}>
      <div>
      <img src={"./favicon copy.png"} alt="Logo" style={logobStyleb} />
        <a href="/" style={logoStyle}>Beleaf Technologies</a>
      </div>
      <h4>EMPLOYEE DETAILS</h4>
      <div>
        <button style={buttonStyle} onClick={handleButtonClick}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;