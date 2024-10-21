// components/Footer.js
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white text-white p-4">
            <div className="flex justify-between items-center text-black">
                <div>
                    <h2 className="text-lg font-bold">StillProfit</h2>
                    <p className="text-sm">&copy; {new Date().getFullYear()} StillProfit. All rights reserved.</p>
                </div>
                <nav className="flex space-x-5 ">
                    <Link href="/privacy" className=" hover:text-gray-600">Privacy Policy</Link>
                    <Link href="/terms" className=" hover:text-gray-600">Terms of Service</Link>
                    <Link href="/contact" className=" hover:text-gray-600">Contact Us</Link>
                </nav>
                <div className="flex space-x-4">
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className=" hover:text-gray-600" />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className=" hover:text-gray-600" />
                    </Link>
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className=" hover:text-gray-600" />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className=" hover:text-gray-600" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
