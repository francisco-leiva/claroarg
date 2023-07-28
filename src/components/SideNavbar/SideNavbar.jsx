import React from 'react'
import { Link } from 'react-router-dom'
import './SideNavbar.scss'

export default function SideNavbar() {
  // navbar menus
  const menus = [
    { name: 'Inicio', href: '/' },
    { name: 'Celulares', href: '/cellphones' },
    { name: 'Accesorios', href: '/accessories' },
    { name: 'Ayuda', href: '/help' },
  ]

  return (
    <section className='sideNavbar'>
      <div className='sideNavbar__userContainer'>
        <div className='sideNavbar__user'>
          <div className='sideNavbar__photo'>
            <img
              src='https://images.ctfassets.net/weuwbjv1v9lc/1H0DnW9RCflCOaYPEeSVfK/d735c6e0a34a8d69ab6457e19bfdacf8/group-3631.svg'
              alt='UserPhoto'
            />
          </div>

          <div className='sideNavbar__action'>
            <button className='login'>Ingresá</button>

            <button className='registration'>Registrate</button>
          </div>
        </div>
      </div>

      <div className='sideNavbar__menus'>
        <img
          src='https://images.ctfassets.net/weuwbjv1v9lc/1392UJ1xxJEAsBOf4ksLnS/1f99f69cdc8cc4e730266d7b1eb15d68/logo-tienda-claro.png'
          alt='Tienda Claro'
          className='sideNavbar__logo'
        />

        <ul>
          {menus.map((menu, index) => {
            const key = `links-SideNavbar-${menu}-${index}`
            return (
              <li key={key}>
                <Link to={menu.href} className='sideNavbar__menu'>
                  {menu.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
