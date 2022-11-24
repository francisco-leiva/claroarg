import IconoComercio from '../Icons/IconoComercio';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    const Menus = ['Inicio', 'Celulares', 'Accesorios', 'Ayuda'];

    return (
        <nav className='navbar'>
            <div className="navbar__links">
                <a href='#'>
                    <div className='navbar__logo'>
                        <IconoComercio />
                    </div>
                </a>
                <div className='navbar__menus'>
                    {
                        Menus.map((menu) => {
                            return <a href='#' className='navbar__menu'>{menu}</a>
                        })
                    }
                </div>
            </div>
            
            <CartWidget />
        </nav>
    )
}

export default Navbar;