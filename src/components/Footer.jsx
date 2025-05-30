import React from 'react';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import twitterIcon from '../assets/twitter.png';
import linkedinIcon from '../assets/linkedin.png';
const Footer = () => {
    return (
        <footer className="bg-[#0D2063] p-8 flex flex-col items-center h-[100vh]">
            <div className="w-full">
                <h2 className="text-white text-3xl font-semibold mb-8">
                    N’attendez plus pour prendre soin de ceux <br/> qui ont pris soin de vous ❤️
                </h2>
            </div>
            <div className="flex items-center justify-start mb-16 w-full gap-6">
                <button className="bg-white text-[#0D2063] px-8 py-4 rounded-md font-semibold hover:bg-[#0D2063] hover:text-white transition-colors duration-300 border border-white">
                    Échanger avec l'équipe
                </button>
                <button className="bg-[#0D2063] text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#0D2063] transition-colors duration-300 border border-white">
                    Demander un devis
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-12 lg:gap-12 w-full">
                <div className="text-white">
                    <h3 className="font-bold mb-2 text-[#ffffff4d]">Nos Offres</h3>
                    <ul className='leading-8 font-semibold'>
                        <li><a href="#">Assurance santé</a></li>
                        <li><a href="#">Bouquets santé personnalisés</a></li>
                        <li><a href="#">Assurance Obsèques</a></li>
                        <li><a href="#">Portail client</a></li>
                    </ul>
                </div>
                <div className="text-white">
                    <h3 className="font-bold mb-2 text-[#ffffff4d]">Pourquoi Susu ?</h3>
                    <ul className='leading-8 font-semibold'>
                        <li><a href="#">Service assistance</a></li>
                        <li><a href="#">Application de suivi</a></li>
                    </ul>
                </div>
                <div className="text-white">
                    <h3 className="font-bold mb-2 text-[#ffffff4d]">À propos</h3>
                    <ul className='leading-8 font-semibold'>
                        <li><a href="#">L'équipe</a></li>
                        <li><a href="#">Actualités</a></li>
                        <li><a href="#">Mentions légales</a></li>
                    </ul>
                </div>
                <div className="text-white">
                    <h3 className="font-bold mb-2 text-[#ffffff4d]">Partenariats</h3>
                    <ul className='leading-8 font-semibold'>
                        <li><a href="#">Associations</a></li>
                        <li><a href="#">Parrainer un proche</a></li>
                        <li><a href="#">Devenir partenaire Susu</a></li>
                    </ul>
                </div>
            </div>
            <div className="gap-4 flex justify-start items-center mt-8 mb-6 w-full">
                <div className="flex justify-center items-center rounded-md bg-[#ffffff4d] p-2">
                    <img src={facebookIcon} alt="" className='w-6 h-6' />
                </div>
                <div className="flex justify-center items-center rounded-md bg-[#ffffff4d] p-2">
                    <img src={instagramIcon} alt="" className='w-6 h-6' />
                </div>
                <div className="flex justify-center items-center rounded-md bg-[#ffffff4d] p-2">
                    <img src={twitterIcon} alt="" className='w-6 h-6' />
                </div>
                <div className="flex justify-center items-center rounded-md bg-[#ffffff4d] p-2">
                    <img src={linkedinIcon} alt="" className='w-6 h-6' />
                </div>
            </div>
            <div>
                <p className="text-[#ffffff4d] text-sm mt-4">
                    © Susu 2021 - Tous droits réservés.
                </p>
                <p className="text-[#ffffff4d] text-sm mt-4">
                    Susu est une Société par Actions Simplifiée (SAS) au capital de 250.000€ entièrement libéré et inscrite au registre du commerce et des sociétés de Paris sous le numéro 848 010 286. La société est régie par le Code des Assurances et est immatriculée au Registre ORIAS, sous le numéro 19002738.
                </p>
            </div>
        </footer>
    );
};

export default Footer;