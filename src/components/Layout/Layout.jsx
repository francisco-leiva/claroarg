import Proptypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

Layout.proptype = {
    children: Proptypes.element.isRequired
}

export default Layout;