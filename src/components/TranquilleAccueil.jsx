import flecheDroite2 from '../assets/fleche-droite (1).png';
import france5 from '../assets/france5.png';
import tv5monde from '../assets/tv5monde.png';
import rfi from '../assets/rfi.png';
import canalPlus from '../assets/canal+.png';
import jeuneAfrique from '../assets/jeune-afrique.png';
import africaRadio from '../assets/africa-radio.png';
import diasporaActu from '../assets/diasporactu-logovf.png';
import fondWave from '../assets/fond-vague-main-page1.png';
import mereFils from "../assets/mere-fils.png";
import mereFille from "../assets/mere-fille.png";
import mereFilsMobile from "../assets/mere-fils-mobile.png";
import mereFilleMobile from "../assets/mere-fille-mobile.png";
import Carousel from './Carousel';


const TranquilleAccueil = () => {
    return (
        <div className='text-white' style={{ backgroundImage: `url(${fondWave})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex items-center justify-between lg:justify-around gap-4 pt-8">
                <div>
                    <img src={mereFilsMobile} alt="" className="lg:hidden block" />
                    <img src={mereFils} alt="" className="hidden lg:block" />
                </div>
                <div>
                    <img src={mereFilleMobile} alt="" className="lg:hidden block" />
                    <img src={mereFille} alt="" className="hidden lg:block" />
                </div>
            </div>
            <div className='flex items-center justify-start px-20 pt-4 lg:px-40'>
                <h2 className='text-strat text-[#0D2063] font-semibold text-3xl'>
                    Soyez tranquille,
                    <br/> nous prenons soin de vos <br className='lg:hidden'/> proches
                </h2>
            </div>
            <div className='flex items-center justify-start gap-2 px-20 lg:px-40 mb-6 text-[#0D2063]'>
                <a href="#">En savoir plus sur Susu</a>
                <img src={flecheDroite2} alt="" />
            </div>
            <div className='flex items-center justify-center gap-4 px-16'>
                <Carousel />
            </div>
            <div className="flex items-center justify-center p-8 gap-4">
                <img src={tv5monde} alt="" className="w-12 md:w-28" />
                <img src={france5} alt="" className="w-12 md:w-28" />
                <img src={canalPlus} alt="" className="w-12 md:w-28" />
                <img src={rfi} alt="" className="w-12 md:w-28" />
                <img src={jeuneAfrique} alt="" className="w-12 md:w-28" />
                <img src={africaRadio} alt="" className="w-12 md:w-28" />
                <img src={diasporaActu} alt="" className="w-12 md:w-28" />
            </div>

        </div>
    );
};

export default TranquilleAccueil;