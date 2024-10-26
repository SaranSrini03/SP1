"use client"; // Keep this if you're using hooks like useState
import { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-white shadow">
            <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-800">StillProfit</h1>
            </div>

            <div className="hidden md:flex flex-grow justify-center space-x-10">
                <Link href="/" className="text-gray-800">Home</Link>
                <Link href="/shop" className="text-gray-800">Shop</Link>
                <Link href="/about" className="text-gray-800">About</Link>
                <Link href="/contact" className="text-gray-800">Contact</Link>
            </div>

            <div className="flex items-center md:hidden">
                <button onClick={toggleMobileMenu} className="text-gray-800">
                    {isMobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
                </button>
            </div>

            <div className="hidden md:flex space-x-10 text-gray-800">
                <Link href="/profile" className="cursor-pointer">
                    <FaUser className="text-lg" />
                </Link>
                <Link href="/search" className="cursor-pointer">
                    <FaSearch className="text-lg" />
                </Link>
                <Link href="/favorites" className="cursor-pointer">
                    <FaHeart className="text-lg" />
                </Link>
                <Link href="/cart" className="cursor-pointer">
                    <FaShoppingCart className="text-lg" />
                </Link>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-10 md:hidden">
                    <nav className="flex flex-col items-center space-y-4 p-4">
                        <Link href="/" className="text-gray-800" onClick={toggleMobileMenu}>Home</Link>
                        <Link href="/shop" className="text-gray-800" onClick={toggleMobileMenu}>Shop</Link>
                        <Link href="/about" className="text-gray-800" onClick={toggleMobileMenu}>About</Link>
                        <Link href="/contact" className="text-gray-800" onClick={toggleMobileMenu}>Contact</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
