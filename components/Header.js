// components/Header.js
import Link from 'next/link';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow">
            <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-800">StillProfit</h1>
            </div>
            <nav className="flex flex-grow justify-center space-x-10">
                <Link href="/" className="text-gray-800">Home</Link>
                <Link href="/shop" className="text-gray-800">Shop</Link>
                <Link href="/about" className="text-gray-800">About</Link>
                <Link href="/contact" className="text-gray-800">Contact</Link>
                
            </nav>
            <div className="flex space-x-10 text-gray-800">
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
        </header>
    );
};

export default Header;
