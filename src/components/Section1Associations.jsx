import associationSusu from '../assets/associations-susu.png';
import associationSusuMobile from '../assets/associations-susu-mobilepng.png';

const Section1Associations = () => {
    return (
        <section className="w-full bg-[#b3c2f83f] p-4 text-center pt-44">
            <h1 className="text-[#90c78b] text-4xl font-semibold hidden md:block px-28">
                <strong>Une équipe passionnée et dévouée</strong> <br className='hidden lg:block'/>au service de la diaspora africaine
            </h1>
            <h1 className="text-[#90c78b] text-xl font-semibold md:hidden block">
                <strong>100% dévouée</strong> pour la santé de vos proches au pays
            </h1>

            <button className="bg-[#1acad7] hover:bg-[#fe7624] text-white font-bold text-lg px-4 py-3 rounded-sm mt-10 mb-6">
                Nous contacter
            </button>

            <div className="w-full py-8 px-16 lg:px-32">
                <img src={associationSusuMobile} alt="version mobile" className='block lg:hidden w-full h-auto rounded-xl' />
                <img src={associationSusu} alt="version desktop" className='lg:block hidden w-full h-auto' />
            </div>
        </section>
    );
};

export default Section1Associations;
