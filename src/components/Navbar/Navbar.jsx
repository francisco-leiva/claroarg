import HamburgerMenu from '../Icons/HamburgerMenu';
import SideNavbar from '../SideNavbar/SideNavbar';
import Logo from '../Icons/Logo';
import CartWidget from '../CartWidget/CartWidget';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';

const Navbar = () => {
  // menus for navbar
  const menus = [
    { name: 'Inicio', href: '/' },
    { name: 'Celulares', href: '/cellphones' },
    { name: 'Accesorios', href: '/accessories' },
    { name: 'Ayuda', href: '/help' },
  ];

  // toggle side navbar
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar__links'>
          <div className='navbar__hamburgerMenu' onClick={handleToggle}>
            <HamburgerMenu />
          </div>

          <Backdrop
            sx={{
              color: '#fff',
              zIndex: (theme) => theme.zIndex.drawer + 1,
              justifyContent: 'flex-start',
            }}
            open={isActive}
            onClick={handleClose}
          >
            <SideNavbar />
          </Backdrop>

          <div className='navbar__logo'>
            <Link to={'/'}>
              <Logo />
            </Link>
          </div>

          <div className='navbar__menus'>
            {menus.map((menu, index) => {
              const key = `links-${menu}-${index}`;
              return (
                <Link to={menu.href} className='navbar__menu' key={key}>
                  {menu.name}
                </Link>
              );
            })}
          </div>
        </div>

        <CartWidget />
      </nav>
    </>
  );
};

export default Navbar;
