import IconoComercio from '../Icons/IconoComercio';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { Menus } from '../../mock';


const Navbar = () => {

    return (
        <nav className='navbar'>
            <div className="navbar__links">
                <div className='navbar__logo'>
                    <Link to={'/'}>
                        <IconoComercio />
                    </Link>
                </div>
                <div className='navbar__menus'>
                    {
                        Menus.map((menu, index) => {
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