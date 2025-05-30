import flecheBas from '../assets/fleche-vers-le-bas (2).png';
import BoutonHeader from './BoutonHeader';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <nav className='w-full'>
            <ul className='flex text-[#0D2063] justify-between items-center font-semibold'>
                <li className='flex items-center justify-center gap-2'>
                    <Link to="#" className='hover:text-[#fe7624] focus:text-blue-800'>Nos offres</Link>
                    <img src={flecheBas} alt="Flèche vers le bas" className='w-4 h-4' />
                </li>
                <li className='flex items-center justify-center'>
                    <Link to="#" className='hover:text-[#fe7624] focus:text-blue-800'>Assurance Santé en Afrique</Link>
                </li>
                <li className='flex items-center justify-center'>
                    <Link to="/bouquetssante" className='hover:text-[#fe7624] focus:text-blue-800'>Bouquets santé</Link>
                </li>
                <li className='flex items-center justify-center'>
                    <Link to="/associations" className='hover:text-[#fe7624] focus:text-blue-800'>Associations</Link>
                </li>
                <li className='flex items-center justify-center'>
                    <Link to="/blog" className='hover:text-[#fe7624] focus:text-blue-800'>Blog</Link>
                </li>
                <BoutonHeader />
            </ul>
        </nav>
    );
};

export default NavMenu;