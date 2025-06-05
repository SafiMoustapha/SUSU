import { useState } from 'react';
import menuIcon from '../assets/hamburger.png';
import flecheEnBas from '../assets/fleche-vers-le-bas (2).png';
import { Link } from 'react-router-dom';

const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Bouton */}
            <button onClick={toggleMenu} className='pr-4 lg:hidden'>
                <img
                    src={menuIcon}
                    alt="Menu"
                    className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Menu en bas du header */}
            {isOpen && (
                <div className='absolute top-[12%] left-0 w-full bg-[#0D2063] z-50 mt-16'>
                    <ul className='text-white font-bold'>
                        <li className='flex items-center justify-between border-b border-white p-4'>
                            <Link to="#" className='hover:text-[#fe7624] focus:text-blue-800'>Nos offres</Link>
                            <img src={flecheEnBas} alt="Flèche vers le bas" className='w-4 h-4 invert' />
                        </li>
                        <li className='flex items-center justify-between gap-2 border-b border-white p-4'>
                            <Link to="/assurance" className='hover:text-[#fe7624] focus:text-blue-800'>Assurance Santé en Afrique</Link>
                        </li>
                        <li className='flex items-center justify-between gap-2 border-b border-white p-4'>
                            <Link to="/bouquetssante" className='hover:text-[#fe7624] focus:text-blue-800'>Bouquets santé</Link>
                        </li>
                        <li className='flex items-center justify-between gap-2 border-b border-white p-4'>
                            <Link to="/associations" className='hover:text-[#fe7624] focus:text-blue-800'>Associations</Link>
                        </li>
                        <li className='flex items-center justify-between gap-2 border-b border-white p-4'>
                            <Link to="/blog" className='hover:text-[#fe7624] focus:text-blue-800'>Blog</Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default MenuMobile;
