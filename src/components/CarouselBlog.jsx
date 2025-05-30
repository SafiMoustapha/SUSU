import { useState, useEffect } from 'react';
import fleche from "../assets/fleche-pointant-vers-la-droite (1).png"
import groupSusu from "../assets/group-susu.webp"
import coupleSusu from "../assets/annesophiebenoit-SUSU.jpg"
import tension from "../assets/tension.webp"
import cataract from "../assets/cataract eye.png"

const slides = [
    {
        image: cataract,
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
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex transition-transform duration-500 ease-in-out p-16" style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${slides.length * 50}%` }}>
            {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 p-6 flex items-center justify-center bg-[#0d206330] rounded-2xl">
                    <div className='flex items-center justify-center p-8'>
                        <img src={slide.image} alt="" className='rounded-xl' />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <button>{slide.bouton}</button>
                        <h3 className='text-[#0D2063] font-bold text-xl text-start'>{slide.titre}</h3>
                        <p className='text-[#0D2063] text-xl text-start'>{slide.contenu}</p>
                        <div>{slide.lien}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CarouselBlog;

