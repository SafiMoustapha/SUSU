import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import avisWhite from "../assets/avis-white.svg";

const slides = [
    {
        image: avisWhite,
        content: "Je cherchais depuis longtemps une assurance abordable pour prendre en charge mes petits enfants au pays et je l’ai enfin trouvé. Avec Susu, je sais qu’ils sont désormais entre de bonnes mains.",
        infoPerson: "Nicole 62 ans, marraine Susu Vital",
        lieu: "Bordeaux, France",
        background: "bg-[#a877dd]"
    },
    {
        image: avisWhite,
        content: "J'étais sceptique sur les assurances, surtout au pays. Et puis j'ai découvert Susu. Je trouve ça fantastique ! Je suis moins stressé maintenant: en cas de gros pépins, mes parents pourront aller se soigner à l’étranger !",
        infoPerson: "François 37 ans, parrain Susu Plus",
        lieu: "Paris, France",
        background: "bg-[#1ac9d7]"
    },
    {
        image: avisWhite,
        content: "Susu est un service qui change la vie ! Avant ma fille dépensait beaucoup d’argent pour mes soins de santé. Maintenant, grâce à Susu, les coûts sont beaucoup moins élevés, nous recevons tous les soins dont nous avons besoin et nos familles à l’étranger n’ont plus à s’inquiéter.",
        infoPerson: "Christine 63 ans, bénéficiaire Susu Care",
        lieu: "Douala, Cameroun",
        background: "bg-[#de2f7f]"
    }
]

const Sect3Ass = () => {
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

export default Sect3Ass;