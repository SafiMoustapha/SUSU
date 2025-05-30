import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/">
            <div className="logo">
                <img src={logo} alt="Logo Susu" className='w-20 h-auto'/>
            </div>
        </Link>
    );
};

export default Logo;