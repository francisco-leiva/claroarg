import React from 'react';

const HamburgerMenu = () => {
  return(
    <svg
      fill="#fff"
      ariaHidden="true"
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
      data-testid="MenuIcon"
      viewBox="0 0 24 24"
      style={{ width: 24, height: 24 }}
    >
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </svg>
  )
}

export default HamburgerMenu;