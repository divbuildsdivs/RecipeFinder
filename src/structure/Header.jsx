
import '../styles/header.css'
import { logoURL } from '../data/recipeData.js';
const Header = () => {
    return (
        <header className="header">
        <img src={logoURL} alt="Company Logo" className="header-logo" />
        <h1> RecipeMe.io</h1>
        <nav className='nav-bar'>
            <ul className='nav-items'>
                <li className='nav-item'><a href="/">Home</a></li>
                <li className='nav-item'><a href="/about">About</a></li>
                <li className='nav-item'><a href="/services">Services</a></li>
                <li className='nav-item'><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;
