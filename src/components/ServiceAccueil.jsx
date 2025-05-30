import React from 'react';
import diasporaImage from '../assets/diaspora-logo.png';
import oriasImage from '../assets/orias.png';
import allianzImage from '../assets/allianz.png';
import bpifranceImage from '../assets/bpifrance.png';
import allSanSunImage from '../assets/allianz-sanlam-sunu-logo.png';
const ServiceAccueil = () => {
    return (
        <div className="bg-[#F0F4FF] p-8 h-[70vh] md:h-auto">
            <div className="text-center px-20 md:px-24 lg:px-64 lg:py-8">
                <h2 className="md:hidden text-3xl font-semibold mt-8 text-[#0D2063]">
                    Un service conçu par une équipe passionnée 
                </h2>
                <p className="md:hidden text-[#0D2063] mb-12">et dévouée au service de la diaspora africaine</p>
                <h2 className="hidden md:flex text-4xl font-semibold my-4 text-[#0D2063]">
                    Un service conçu par une équipe passionnée et dévouée, au service de la diaspora africaine
                </h2>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-x-hidden gap-[19rem] md:gap-4 md:p-14 scrollbar-hide">
                <div className="bg-white min-w-[280px] p-6 rounded-md text-[#0D2063] shrink-0 md:min-w-0 md:shrink lg:h-60">
                    <center>
                        <img src={diasporaImage} alt="" className='w-36 h-8 mb-4' />
                    </center>
                    <p>Découvrez comment la fondatrice Bola Bardet, de la diaspora Béninoise, <b>a fondé Susu après avoir elle-même perdu un être cher.</b></p>
                </div>
                <div className="bg-white min-w-[280px] p-6 rounded-md text-[#0D2063] shrink-0 md:min-w-0 md:shrink lg:h-60">
                    <center>
                        <img src={oriasImage} alt="" className='w-36 h-8 mb-4' />
                    </center>
                    <p>Susu est <b>courtier de droit français immatriculé à l'ORIAS</b>sous le numéro 19002738.</p>
                </div>
                <div className="bg-white min-w-[280px] p-6 rounded-md text-[#0D2063] shrink-0 md:min-w-0 md:shrink lg:h-60">
                    <center>
                        <img src={allianzImage} alt="" className='hidden md:flex w-36 h-8 mb-4' />
                        <img src={allSanSunImage} alt="" className='md:hidden flex w-36 h-8 mb-4' />
                    </center>
                    <p>Nous sommes en partenariat avec les meilleurs les <b>assureurs en Afrique </b>: Allianz, Sanlam...</p>
                </div>
                <div className="bg-white min-w-[280px] p-6 rounded-md text-[#0D2063] shrink-0 md:min-w-0 md:shrink lg:h-60">
                    <center>
                        <img src={bpifranceImage} alt="" className='w-36 h-8 mb-4' />
                    </center>
                    <p>Nous sommes soutenus par la <b>BPI France, la Banque d’investissement du gouvernement Français.</b></p>
                </div>
            </div>
        </div>
    );
};

export default ServiceAccueil;