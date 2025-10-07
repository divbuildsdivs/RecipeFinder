
import '../styles/header.css'
import { logoURL } from '../data/recipeData.js';
import { Link } from 'react-router';
const Header = () => {
    return (
        <header className="header">
        <Link to = "/" className="homepage-redirect flex-col w-16 m-4 align-center text-[#FF2C2C] font-medium ">
            <img src={logoURL} alt="Company Logo" className=" rounded-full p-[3px] border-solid border-[2px] border-[#FF2C2C]" />
            <span className='text-[11px]'>RecipeMe.io</span>
        </Link>
        <nav className='nav-bar'>
            <ul className='nav-items'>
                <li className='nav-item'><Link to="/">Home</Link></li>
                <li className='nav-item'><Link to="/about">About</Link></li>
                <li className='nav-item'><Link to="/favourites">Favourites</Link></li>
                <li className='nav-item'><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;
