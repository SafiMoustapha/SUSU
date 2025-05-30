import CarouselTemoins from "./CarouselTemoins";
import VideoSusu from "./VideoSusu";

const TemoignagesAccueil = () => {
    return (
        <div className="bg-[#0D2063] p-8 h-auto">
            <div className="text-center text-white px-10">
                <h2 className="text-4xl md:text-4xl font-semibold mt-8 mb-4">
                    Susu, ce sont les clients qui en parlent le mieux
                </h2>
                <p className="text-xl md:text-xl mb-12">
                    Plus de 3000 clients ont souscrit au service, voici ce qu’ils en disent
                </p>
            </div>
            <VideoSusu />
            <CarouselTemoins />
        </div>
    );
};

export default TemoignagesAccueil;