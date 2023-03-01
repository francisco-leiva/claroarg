import React from 'react';

const HamburgerMenu = () => {
  return (
    <svg
      className='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'
      viewBox='0 0 24 24'
      aria-hidden='true'
      data-testid='MenuIcon'
      style={{
        fill: '#fff',
        width: 24,
        height: 24,
      }}
    >
      <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
    </svg>
  );
};

export default HamburgerMenu;
