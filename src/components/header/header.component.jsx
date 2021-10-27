import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header-style.scss';



function Header({currentUser}) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    
    return (
        <>
            <nav className="header">
                <div className="header-container">
                    <Link to="/" className="header-logo">
                        <img src="/images/pizza.jpg" alt="Slam Dunk Pizza"/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'header-menu active' : 'header-menu'} >
                        <li className='header-item'>
                            <Link to='/login' className='header-links' onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                        <li className='header-item'>
                            <Link to='/menu' className='header-links' onClick={closeMobileMenu}>
                                Menu
                            </Link>
                        </li>
                        <li className='header-item'>
                            <Link to='/catering-events' className='header-links' onClick={closeMobileMenu}>
                                Catering
                            </Link>
                        </li>
                        <li className='header-item'>
                            <Link to='/donations' className='header-links' onClick={closeMobileMenu}>
                                Donations
                            </Link>
                        </li>
                        <li className='header-item'>
                            <Link to='/order-online' className='header-links' onClick={closeMobileMenu}>
                                Order Online
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;