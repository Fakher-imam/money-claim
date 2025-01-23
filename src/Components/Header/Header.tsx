"use client";

import React, { useState, useEffect } from 'react';
import '../Header/Header.css'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992 && isMenuOpen) {
                closeMenu();
            }
        };

        const handleKeyDown = (e : KeyboardEvent) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    return (
   
         <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="logo disable-in-laptop" >
                    <img src="/logo.png" alt="Logo" />
                </div>
                <button
                    className={`mobile-nav-toggle ${isMenuOpen ? 'active' : ''}`}
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    
                    <li><a href="#about" onClick={closeMenu}>FCA - Report & Findings</a></li>
                    <li><a href="#services" onClick={closeMenu}>Start Claim</a></li>
                   
                    <li><a href="#portfolio" onClick={closeMenu}>Contact</a></li>
                    <li><button style={{border:'none'}} className='headerbutton' onClick={closeMenu}>Check Now</button></li>
                </ul>
                {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
            </div>
        </nav>
   
    );
};

export default Header;
