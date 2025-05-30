import Logo from './Logo';
import MenuMobile from './MenuMobile';
import NavMenu from './NavMenu';

const Header = ({isOpen, setIsOpen}) => {
    return (
        <header className={`w-full ${isOpen ? 'bg-[#0D2063]' : 'bg-white'} flex p-8 items-center lg:justify-between transition-colors duration-300 fixed top-0 z-50 mb-32`}>
            <div className="flex items-center justify-between w-full lg:w-auto">
                <Logo />
                <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className='menu w-[80%] hidden lg:flex lg:items-center lg:justify-center'>
                <NavMenu />
            </div>
        </header>
    );
};

export default Header;