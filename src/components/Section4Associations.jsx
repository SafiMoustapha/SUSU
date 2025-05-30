import partenariats from "../assets/autres-partenariats.png";

const Section3Associations = () => {
    return (
        <section className="w-full bg-white flex items-start lg:items-center justify-center py-14 mt-20 lg:gap-60 gap-10 px-16 lg:h-[100vh]">
            <div className="flex items-center justify-center h-[40vh] w-1/2">
                <img src={partenariats} alt="" />
            </div>
            <div className="h-full w-1/2 flex flex-col items-start justify-center">
                <h2 className="text-[#0D2064] font-bold text-lg text-start mb-6">
                    AUTRES PARTENARIATS
                </h2>
                <p className="text-[#0D2064] text-lg mb-4">
                    Nous sommes à l'écoute de tout partenariat pouvant contribuer à la réussite de notre mission.
                </p>
                <p className="text-[#0D2064] text-lg font-semibold mb-1">
                    Vous êtes un organisme médical oeuvrant en Afrique, ou un commerce ciblant les membres de la diaspora ? N’attendez-plus 😉
                </p>
                <button className="bg-none hover:bg-[#fe7624] text-[#0D2064] font-bold text-lg px-4 py-3 rounded-md mt-10 mb-2 border-2 border-[#0D2064] hover:border-none hover:text-white transition-colors duration-300">
                    Nous contacter
                </button>
            </div>
        </section>
    );
};

export default Section3Associations;