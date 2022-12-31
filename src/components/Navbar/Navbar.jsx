import CommerceIcon from '../Icons/CommerceIcon';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const menus = [
        { name: 'Inicio', href: '/' },
        { name: 'Celulares', href: '/cellphones' },
        { name: 'Accesorios', href: '/accessories' },
        { name: 'Ayuda', href: '/help' }
    ];

    return (
        <nav className='navbar'>
            <div className="navbar__links">
                <div className='navbar__logo'>
                    <Link to={'/'}>
                        <CommerceIcon />
                    </Link>
                </div>
                <div className='navbar__menus'>
                    {
                        menus.map((menu, index) => {
                            const key = `links-${menu}-${index}`;
                            return <Link to={menu.href} className='navbar__menu' key={key}>{menu.name}</Link>
                        })
                    }
                </div>
            </div>

            <CartWidget />
        </nav>
    )
}

export default Navbar;