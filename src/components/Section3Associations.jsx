import apporteursAffaire from "../assets/apporteurs-affaires.png";

const Section3Associations = () => {
    return (
        <section className="w-full bg-[#cfd8f555] flex items-start lg:items-center justify-center py-14 mt-20 lg:gap-60 gap-10 px-16 lg:h-[100vh]">
            <div className="h-full w-1/2 flex flex-col items-start justify-center">
                <h2 className="text-[#0D2064] font-bold text-lg text-start mb-6">
                    APPORTEURS D'AFFAIRES, C'EST GAGNANT-GAGNANT AVEC SUSU
                </h2>
                <p className="text-[#0D2064] text-lg mb-4">
                    Gagnez de l'argent facilement en faisant découvrir Susu à vos proches clients, nous nous occupons du reste.
                </p>
                <p className="text-[#0D2064] text-lg font-semibold mb-1">
                    Vous aurez alors la possibilité de toucher une commission allant jusqu’à 20 euros pour tout contrat Susu vendu 🚀
                </p>
                <button className="bg-none hover:bg-[#fe7624] text-[#0D2064] font-bold text-lg px-4 py-3 rounded-md mt-10 mb-2 border-2 border-[#0D2064] hover:border-none hover:text-white transition-colors duration-300">
                    En savoir plus
                </button>
            </div>
            <div className="flex items-center justify-center h-[40vh] w-1/2">
                <img src={apporteursAffaire} alt="" />
            </div>
        </section>
    );
};

export default Section3Associations;