import { useState, useEffect } from 'react';
import assuranceComplet from '../assets/assurance-complet.png';
import assistanceEcoute from '../assets/assistance-ecoute.png';
import assuranceTransparent from '../assets/assurance-transparent.png';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: assuranceComplet,
            title: "100% complet",
            content: (
                <>
                    <b>Une gamme de services complète :</b> assurances santé, bouquets santé personnalisés, offres sur-mesure.
                </>
            )
        },
        {
            image: assistanceEcoute,
            title: "100% à l'écoute",
            content: (
                <>
                    Vos proches sont <b>accompagnés par notre service d’assistance disponible</b> pour tous leurs besoins de santé.
                </>
            )
        },
        {
            image: assuranceTransparent,
            title: "100% transparent",
            content: (
                <>
                    <b>Suivez en toute transparence</b> les informations de vos bénéficiaires <b>depuis notre app digitale.</b>
                </>
            )
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="w-full">
            {/* lg: Affichage en grille */}
            <div className="hidden lg:flex justify-center gap-6">
                {slides.map((slide, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm flex flex-col items-center">
                        <img src={slide.image} alt="" className="w-48 h-48 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-[#0D2063] mb-2">{slide.title}</h2>
                        <p className="text-[#0D2063] text-base">{slide.content}</p>
                    </div>
                ))}
            </div>

            {/* md uniquement: Carousel plein écran avec image à gauche */}
            <div className="hidden md:flex lg:hidden relative w-full max-w-3xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0 p-6 flex items-center">
                            <div className="w-1/2">
                                <img src={slide.image} alt="" className="w-full h-auto" />
                            </div>
                            <div className="w-1/2 pl-6 text-[#0D2063]">
                                <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                                <p className="text-base">{slide.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 bg-[#0D2063] p-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
                        />
                    ))}
                </div>
            </div>

            {/* sm & xs : Scroll horizontal */}
            <div className="md:hidden flex overflow-x-auto space-x-4 p-4 scrollbar-hide">
                {slides.map((slide, index) => (
                    <div key={index} className="min-w-[100%] sm:min-w-[85%] bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                        <img src={slide.image} alt="" className="w-40 h-40 mb-3" />
                        <h2 className="text-xl font-bold text-[#0D2063] mb-2">{slide.title}</h2>
                        <p className="text-[#0D2063] text-base">{slide.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
