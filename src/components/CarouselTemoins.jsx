import { useState } from 'react';
import avisImage from '../assets/avis-clients.svg';
import flecheGauche from '../assets/fleche-gauche.png';
import flecheDroite from '../assets/fleche-droite.png';

const slides = [
    {
        image: avisImage,
        content: "Avant, lorsque mon enfant était malade, je dépensais beaucoup d'argent dans les soins, les médicaments et les cliniques, car au pays il n'y a pas de sécurité sociale ! Maintenant, grâce à Susu, les coûts sont beaucoup moins élevés et mon enfant bénéficie d'un suivi de qualité.",
        nom_age: "François, 42 ans.",
        statut: "Parrain Susu Plus"
    },
    {
        image: avisImage,
        content: "Qu'est-ce que vous voulez que je vous dise ?Vous vous occupez de moi, je suis satisfait !",
        nom_age: "Pépé Paul, 58 ans.",
        statut: "Bénéficiaire Susu Prime"
    },
    {
        image: avisImage,
        content: "Susu est un bon projet, pour ceux qui en bénéficient cela permet à nos parents à l'étranger de ne plus s'inquiéter pour nous et de recevoir les soins dont nous avons besoin !",
        nom_age: "Sandino, 37 ans.",
        statut: "Assuré Susu Care"
    },
    {
        image: avisImage,
        content: "Avec Susu, je suis tranquille ! Mon père peut suivre son hypertension lui-même grâce au tensiomètre fourni par Susu, en plus un infirmier lui rend régulièrement visite pour contrôler que tout va bien !",
        nom_age: "Melvin, 36 ans.",
        statut: "Parrain iyacare"
    },
    {
        image: avisImage,
        content: "Je suis très satisfaite du suivi ! Je bénéficie de bons remèdes et je reçois des appels téléphoniques réguliers pour contrôler mon état de santé.Aujourd’hui je vais beaucoup mieux grâce à Susu !",
        nom_age: "Yaya, 57 ans.",
        statut: "Bénéficiaire Susu Prime"
    },
];

const CarouselTemoins = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className='relative w-[500px] mx-auto overflow-hidden '>
            <div className='flex duration-500 ease-in-out w-full h-full' style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className='min-w-full flex-shrink-0 px-6 bg-white'>
                        <div className='flex items-center justify-start'>
                            <img src={slide.image} alt="Témoin" className="w-36 h-20" />
                        </div>
                        <div className="w-full max-w-[400px]">
                            <p className="text-gray-500 break-words whitespace-normal">
                                {slide.content}
                            </p>
                        </div>
                        <h2 className='text-[#fe7624]'>{slide.nom_age}</h2>
                        <h2 className='text-[#fe7624]'>{slide.statut}</h2>
                    </div>
                ))}
            </div>

            {/* Boutons de navigation */}
            <div className='flex justify-between items-center bg-black w-full h-16'>
                <button onClick={prevSlide} className='bg-[#fe7624] p-2 hover:bg-cyan-500 w-1/2 h-full flex items-center justify-start'>
                    <img src={flecheGauche} alt="" className='w-10 h-12' />
                </button>
                <button onClick={nextSlide} className='bg-[#fe7624] p-2 hover:bg-cyan-500 w-1/2 flex items-center justify-end'>
                    <img src={flecheDroite} alt="" className='w-10 h-12' />
                </button>
            </div>
        </div>
    );
};

export default CarouselTemoins;