import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import avisWhite from "../assets/avis-white.svg";

const slides = [
    {
        image: avisWhite,
        content: "La plupart des assurances ne prennent pas en charge les personnes vieillissantes, je suis tellement contente d’avoir enfin trouvé un service qui s’occupe de mes parents atteint d’hypertension et de diabète, Susu c’est vraiment la solution à mes problèmes.",
        infoPerson: "Anne 47 ans, marraine Iyacare",
        lieu: "Paris, France",
        background: "bg-[#90c78b]"
    },
    {
        image: avisWhite,
        content: "J’étais très inquiète pour ma première grossesse. Mama Care c’est exactement le service dont j’avais besoin ! Avec un suivi tout au long de ma grossesse et même au delà, j’ai pu voir les meilleurs médecins d’Abidjan.",
        infoPerson: "Aya 23 ans, bénéficiaire Susu Mère-Enfant",
        lieu: "Yopougon, Abidjan",
        background: "bg-[#fe7624]"
    }
]

const CarouselBQS = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length -1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % slides.length
        );
    };

    useEffect(() => {
        const timer = setInterval(goToNext, 8000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentIndex];

    return (
        <div className={`relative w-full text-white text-center p-8 transition-all duration-700 ease-in-out ${slide.background}`}>
            {/* Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full"
            >
                <ChevronRight size={24} />
            </button>

            {/* Content */}
            <div className="max-w-xl mx-auto flex flex-col items-center gap-4">
                <img src={slide.image} alt="avis" className="" />
                <p className="text-lg italic">"{slide.content}"</p>
                <p className="font-bold">{slide.infoPerson}</p>
                <p className="text-sm">{slide.lieu}</p>
            </div>
        </div>
    );
};

export default CarouselBQS;