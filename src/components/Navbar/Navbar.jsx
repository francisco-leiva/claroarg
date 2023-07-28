import { useState } from 'react'
import { Link } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop'
import './Navbar.scss'
import { Logo, HamburgerMenu } from '../Icons/Icons'
import SideNavbar from '../SideNavbar/SideNavbar'
import CartWidget from '../CartWidget/CartWidget'

export default function Navbar() {
  // navbar menus
  const menus = [
    { name: 'Inicio', href: '/' },
    { name: 'Celulares', href: '/cellphones' },
    { name: 'Accesorios', href: '/accessories' },
    { name: 'Ayuda', href: '/help' },
  ]

  // toggle side navbar
  const [isActive, setIsActive] = useState(false)

  const handleToggleActive = () => setIsActive(!isActive)

  return (
    <header className='navbar'>
      <nav className='navbar__links'>
        <div className='navbar__hamburgerMenu' onClick={handleToggleActive}>
          <HamburgerMenu />
        </div>

        <Backdrop
          sx={{
            color: '#fff',
            zIndex: (theme) => theme.zIndex.drawer + 1,
            justifyContent: 'flex-start',
          }}
          open={isActive}
          onClick={handleToggleActive}
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
            const key = `links-${menu}-${index}`
            return (
              <Link to={menu.href} className='navbar__menu' key={key}>
                {menu.name}
              </Link>
            )
          })}
        </div>
      </nav>

      <CartWidget />
    </header>
  )
}
