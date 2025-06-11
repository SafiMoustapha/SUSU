import yellowHeart from "../../../assets/yellow-heart-susuprime.svg"
import mereEnfant from "../../../assets/emoji-susu-mere-enfant.svg"
import flecheDroite from "../../../assets/fleche-pointant-vers-la-droite (1).png"
import flecheDroite2 from "../../../assets/fleche-pointant-vers-la-droite (2).png"

const Section2BQS = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 lg:px-44 pt-44 bg-[#fe78240d]">
            <div className="flex flex-col items-center justify-center  p-2 sm:p-6">
                <div className="rounded-3xl shadow-md relative">
                    <div className="flex justify-start items-center p-6 bg-[#fe782450] sm:w-[500px] rounded-tl-3xl rounded-tr-3xl">
                        <img src={yellowHeart} alt="" className="mr-4 rounded-full bg-[#fe782450] p-4" />
                        <div className="text-[#fe7824]">
                            <h3 className="font-bold text-lg">IYACARE</h3>
                            <p>à partir de 50€/mois</p>
                        </div>
                    </div>
                    <div className="bg-white sm:w-[500px] px-8 py-14 rounded-bl-3xl rounded-br-3xl">
                        <p className="font-semibold text-[#0D2064] mb-4">
                            Zone : Abidjan🇨🇮, Douala🇨🇲 et Dakar🇸🇳
                        </p>
                        <p className="text-gray-500 mb-4">
                            Iyacare propose un suivi personnalisé et un accompagnement pour vos proches âgés souffrant d'une maladie chronique ou non éligibles à l'assurance.
                        </p>
                        <li className="flex items-center justify-start gap-4 text-[#fe7824]">
                            <a href="#">Plus de détails</a>
                            <img src={flecheDroite} alt="" className="w-6" />
                        </li>
                    </div>
                    <div className="hidden lg:block rounded-full bg-[#fe7824] px-4 absolute top-0 right-0">
                        <h3 className="font-bold text-white">SANS ASSURANCE</h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center  p-2 sm:p-6">
                <div className="rounded-3xl shadow-md relative">
                    <div className="flex justify-start items-center p-6 bg-[#90c78b15] sm:w-[500px] rounded-tl-3xl rounded-tr-3xl">
                        <img src={mereEnfant} alt="" className="mr-4 rounded-full bg-[#90c78b71] p-4" />
                        <div className="text-[#90c78b]">
                            <h3 className="font-bold text-lg">MAMA CARE</h3>
                            <p>à partir de 15€/mois</p>
                        </div>
                    </div>
                    <div className="bg-white sm:w-[500px] px-8 py-14 rounded-bl-3xl rounded-br-3xl">
                        <p className="font-semibold text-[#0D2064] mb-4">
                            Zone : Abidjan🇨🇮, Douala🇨🇲 et Dakar🇸🇳
                        </p>
                        <p className="text-gray-500 mb-4">
                            Le  bouquet Susu Mère-enfant propose un suivi personnalisé et un accompagnement de la femme enceinte et de son nourrisson.
                        </p>
                        <li className="flex items-center justify-start gap-4 text-[#90c78b]">
                            <a href="#">Plus de détails</a>
                            <img src={flecheDroite2} alt="" className="w-6" />
                        </li>
                    </div>
                    <div className="hidden lg:block rounded-full bg-[#90c78b] px-4 absolute top-0 right-0">
                        <h3 className="font-bold text-white">SANS ASSURANCE</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2BQS;