import { NavLink } from 'react-router-dom';
import '../css/Header.css';

function Header() {
    return (
        <nav>
            <NavLink to="/" className={({ isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
            <NavLink to="/about" className={({ isActive}) => isActive ? 'active-link' : ''}>Sobre</NavLink>
            <NavLink to="/products" className={({ isActive}) => isActive ? 'active-link' : ''}>Produtos</NavLink>
            <NavLink to="/contact" className={({ isActive}) => isActive ? 'active-link' : ''}>Contato</NavLink>
            <NavLink to="/blog" className={({ isActive}) => isActive ? 'active-link' : ''}>Blog</NavLink>
        </nav>
    );
}

export default Header;