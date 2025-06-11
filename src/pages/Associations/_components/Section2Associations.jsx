import associationsDiaspora from "../../../assets/associations-diaspora.png";
import flecheDroite from "../../../assets/fleche-pointant-vers-la-droite.png";

const Section2Associations = () => {
    return (
        <section className="w-full bg-white flex flex-col md:flex-row items-center justify-center md:py-16 mt-20 lg:gap-60 md:gap-10">
            <div className="flex items-start justify-start h-full md:w-1/2">
                <img src={associationsDiaspora} alt="" />
            </div>
            <div className="h-full md:w-1/2 px-2">
                <h2 className="text-[#0D2064] font-semibold text-2xl text-start mb-6">
                    Associations de la diaspora, contactez-nous !
                </h2>
                <p className="text-[#0D2064] text-xl">
                    Chez Susu, nous apprécions par dessus tout accompagner les associations de diaspora Africaine :
                </p>
                <ul className="text-[#0D2064]">
                    <li className="flex items-center gap-2 font-semibold text-lg">
                        <img src={flecheDroite} alt="" className="w-4 h-4" />
                        Vous recherchez un contrat collectif pour protéger les membres de votre association et leurs familles ?
                    </li>
                    <li className="flex items-center gap-2 font-semibold text-lg">
                        <img src={flecheDroite} alt="" className="w-4 h-4" />
                        Vous recherchez des sponsors pour vos événéments ?
                    </li>
                    <li className="flex items-center gap-2 font-semibold text-lg">
                        <img src={flecheDroite} alt="" className="w-4 h-4" />
                        Ou tout autre demande 😊
                    </li>
                </ul>
                <button className="bg-white hover:bg-[#fe7624] text-[#0D2064] font-bold text-lg px-4 py-3 rounded-md mt-10 mb-6 border-2 border-[#0D2064] hover:text-white transition-colors duration-300">
                    Échanger avec l'équipe
                </button>
            </div>
        </section>
    );
};

export default Section2Associations;