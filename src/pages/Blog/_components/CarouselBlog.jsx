import { useState, useEffect } from 'react';
import fleche from "../../../assets/fleche-pointant-vers-la-droite (1).png"
import groupSusu from "../../../assets/group-susu.webp"
import coupleSusu from "../../../assets/annesophiebenoit-SUSU.jpg"
import tension from "../../../assets/tension.webp"
import cataract from "../../../assets/cataract eye.png"

const slides = [
    {
        image: cataract,
        bouton: (
            <button className="bg-[#0D2063] text-white px-4 py-2 rounded-full text-sm font-bold">
                SUSU
            </button>
        ),  
        titre: "La cataracte : Symptômes et prévention",
        contenu: "La cataracte, fréquente chez les personnes âgées, entraîne une série de symptômes perturbateurs pouvant affecter considérablement la qualité de vie. Ces symptômes varient en intensité et en nature.",
        lien: (
            <div className="flex items-center justify-start text-[#fe7624] font-bold gap-2 text-sm">
                <a href="#">LIRE L'ARTICLE</a>
                <img src={fleche} alt="" className="w-4" />
            </div>
        )
    },
    {
        image: coupleSusu,
        bouton: (
            <button className="bg-[#0D2063] text-white px-4 py-2 rounded-full">
                SUSU
            </button>
        ),
        titre: "La cataracte:Symptômes et prévention",
        contenu: "La cataracte, fréquente chez les personnes âgées, entraîne une série de symptômes perturbateurs pouvant affecter considérablement la qualité de vie. Ces symptômes varient en intensité et en nature.",
        lien: (
            <div className="flex items-center justify-start text-[#fe7624] font-bold gap-4">
                <a href="#">LIRE L'ARTICLE</a>
                <img src={fleche} alt="" className="w-6" />
            </div>
        )
    },
    {
        image: groupSusu,
        bouton: (
            <button className="bg-[#0D2063] text-white px-4 py-2 rounded-full">
                SUSU
            </button>
        ),  
        titre: "La cataracte:Symptômes et prévention",
        contenu: "La cataracte, fréquente chez les personnes âgées, entraîne une série de symptômes perturbateurs pouvant affecter considérablement la qualité de vie. Ces symptômes varient en intensité et en nature.",
        lien: (
            <div className="flex items-center justify-start text-[#fe7624] font-bold gap-4">
                <a href="#">LIRE L'ARTICLE</a>
                <img src={fleche} alt="" className="w-6" />
            </div>
        )
    },
    {
        image: tension,
        bouton: (
            <button className="bg-[#0D2063] text-white px-4 py-2 rounded-full">
                SUSU
            </button>
        ),  
        titre: "La cataracte:Symptômes et prévention",
        contenu: "La cataracte, fréquente chez les personnes âgées, entraîne une série de symptômes perturbateurs pouvant affecter considérablement la qualité de vie. Ces symptômes varient en intensité et en nature.",
        lien: (
            <div className="flex items-center justify-start text-[#fe7624] font-bold gap-4">
                <a href="#">LIRE L'ARTICLE</a>
                <img src={fleche} alt="" className="w-6" />
            </div>
        )
    },
];

const CarouselBlog = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden max-w-6xl mx-auto mt-16">
            <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="flex flex-col md:flex-row items-center gap-6 bg-[#0d206330] rounded-2xl p-6">
                            {/* Conteneur image */}
                            <div className='w-full md:w-5/12 lg:w-1/3'>
                                <img 
                                    src={slide.image} 
                                    alt="" 
                                    className='rounded-xl w-full h-auto object-cover max-h-64 md:max-h-80' 
                                />
                            </div>
                            
                            {/* Conteneur texte */}
                            <div className='w-full md:w-7/12 lg:w-2/3 flex flex-col gap-4'>
                                <div>
                                    {slide.bouton}
                                </div>
                                <h3 className='text-[#0D2063] font-bold text-xl md:text-2xl'>{slide.titre}</h3>
                                <p className='text-[#0D2063] text-base md:text-lg leading-relaxed'>{slide.contenu}</p>
                                {slide.lien}
                            </div>
                        </div>

                        {/* Boutons de navigation - positionnés ici */}
                        <div className="flex justify-center items-center gap-4 mt-4">
                            <button 
                                onClick={prevSlide}
                                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
                            >
                                ‹
                            </button>
                            
                            <div className="flex gap-2 mx-4">
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentSlide(i)}
                                        className={`w-3 h-3 rounded-full ${currentSlide === i ? 'bg-[#0D2063]' : 'bg-gray-300'}`}
                                    />
                                ))}
                            </div>
                            
                            <button 
                                onClick={nextSlide}
                                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
                            >
                                ›
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselBlog;