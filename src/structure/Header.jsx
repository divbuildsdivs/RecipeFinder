
import '../styles/header.css'
import { logoURL } from '../data/recipeData.js';
const Header = () => {
    return (
        <header className="header">
        <a href="#" className="homepage-redirect flex-col w-16 m-4 align-center text-[#FF2C2C] font-medium ">
            <img src={logoURL} alt="Company Logo" className=" rounded-full p-[3px] border-solid border-[2px] border-[#FF2C2C]" />
            <span className='text-[11px]'>RecipeMe.io</span>
        </a>
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
