import telephone from '../assets/telephone.png';
import { Link } from 'react-router-dom';

const BoutonHeader = () => {
    return (
        <div className="flex items-center justify-center gap-2">
            <button className='flex items-center justify-center bg-[#fe7624] text-white py-2 px-4 rounded-sm hover:bg-white hover:border hover:border-[#fe7624] hover:text-[#fe7624] transition-colors duration-300'>
                <img src={telephone} alt="Icône téléphone" className='w-6 h-6' />
                <a href="#" className='text-white hover:text-[#fe7624]'>+33 4 81 69 48 48</a>
            </button>
            <button className='flex items-center justify-center bg-white text-[#fe7624] py-2 px-4 rounded-sm hover:bg-[#fe7624] hover:text-white border border-[#fe7624] transition-colors duration-300'>
                <Link to="/devis">Demander un devis</Link></button>
        </div>
    );
};

export default BoutonHeader;