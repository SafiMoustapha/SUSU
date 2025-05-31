import fleche from "../assets/fleche-pointant-vers-la-droite.png"
import fleche2 from "../assets/fleche-pointant-vers-la-droite (3).png"
import fleche3 from "../assets/fleche-pointant-vers-la-droite (4).png"
import photoGroupAssurance from "../assets/photo-group-assurance.png"
import heartSusuCare from "../assets/heart-susu-care.svg"
import susuVitalHeart from "../assets/susu-vital-heart.svg"
import susuPlusEmoji from "../assets/susu-plus-emoji.svg"

const SectionAssurance = () => {
    return (
        <section className="mt-20">
            <div className="px-10 py-20 bg-[#1acad72b]">
                <div className="text-center text-[#0d2063] mb-20">
                    <h1 className="font-bold text-5xl mb-4">
                        Assurance Santé en Afrique
                    </h1>
                    <p className="text-xl">
                        <b>Susu : </b>votre partenaire de confiance pour la santé de vos proches en Afrique.
                    </p>
                </div>
                <div className="text-center mb-10 px-10">
                    <h2 className="font-bold text-3xl text-[#1ac9d7] mb-10">Susu : l'assurance santé de la Diaspora Africaine qui protège vos proches en<br /> Afrique</h2>
                    <p className="underline text-[#0D2063] text-lg font-semibold">Cliquez pour découvrir nos offres :</p>
                </div>
                <div>
                    <ul className="grid grid-cols-2 px-10">
                        <li className="flex items-center justify-start gap-4 mb-6 text-[#0D2063] w-full font-semibold">
                            <img src={fleche} alt="" className="w-6" />
                            <a href="#">Nos offres au Sénégal <span>SN</span></a>
                        </li>
                        <li className="flex items-center justify-start gap-4 mb-6 text-[#0D2063] w-full font-semibold">
                            <img src={fleche} alt="" className="w-6" />
                            <a href="#">Nos offres au Cameroun <span>CM</span></a>
                        </li>
                        <li className="flex items-center justify-start gap-4 mb-6 text-[#0D2063] w-full font-semibold">
                            <img src={fleche} alt="" className="w-6" />
                            <a href="#">Nos offres en RDC <span>CD</span></a>
                        </li>
                        <li className="flex items-center justify-start gap-4 mb-6 text-[#0D2063] font-semibold">
                            <img src={fleche} alt="" className="w-6" />
                            <a href="#">Nos offres en Côte d'Ivoire <span>CI</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="px-24 py-10">
                <img src={photoGroupAssurance} alt="" />
                <p className="text-[#0D2063] text-center text-lg">
                    Susu, lancé en 2019, est une startup dont la mission est de rendre la santé accessible et abordable sur le continent Africain.
                    <br /><br />
                    Présente dans plusieurs pays d'Afrique francophone, Susu propose une combinaison de services digitaux et d'assurance pouvant être financés par les membres de la diaspora Africaine pour le compte de proches basés dans leur pays d'origine.
                    <br /><br />
                    Nos offres incluent une prise en charge sur mesure pour les plus vulnérables telles que les personnes âgées, les malades chroniques et les femmes enceintes.
                </p>
            </div>
            <div className="my-6">
                <h3 className="text-[#0D2063] text-center text-2xl font-bold">
                    Nos offres d'Assurance santé en Afrique :
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-44 pt-44 bg-white">
                    <div className="flex flex-col items-center justify-center p-6">
                        <div className="rounded-3xl shadow-md relative">
                            <div className="flex justify-start items-center p-6 bg-[#a877dd35] w-[500px] rounded-tl-3xl rounded-tr-3xl">
                                <img src={susuVitalHeart} alt="" className="mr-4 rounded-full bg-[#a877dda2] p-4" />
                                <div className="text-[#a877dd]">
                                    <h3 className="font-bold text-lg">SUSU VITAL</h3>
                                    <p>à partir de 35€/mois</p>
                                </div>
                            </div>
                            <div className="bg-white w-[500px] px-8 py-14 rounded-bl-3xl rounded-br-3xl">
                                <p className="text-[#0D2063] mb-6">
                                    Couverture à 80% <br/>Zone : pays de résidence
                                </p>
                                <p className="text-gray-500 mb-4">
                                    Iyacare propose un suivi personnalisé et un accompagnement pour vos proches âgés souffrant d'une maladie chronique ou non éligibles à l'assurance.
                                </p>
                                <li className="flex items-center justify-start gap-4 text-[#a877dd]">
                                    <a href="#">Plus de détails</a>
                                    <img src={fleche2} alt="" className="w-6" />
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6">
                        <div className="rounded-3xl shadow-md relative">
                            <div className="flex justify-start items-center p-6 bg-[#de2f7e34] w-[500px] rounded-tl-3xl rounded-tr-3xl">
                                <img src={heartSusuCare} alt="" className="mr-4 rounded-full bg-[#de2f7ea5] p-4" />
                                <div className="text-[#de2f7f]">
                                    <h3 className="font-bold text-lg">SUSU CARE</h3>
                                    <p>à partir de 54€/mois</p>
                                </div>
                            </div>
                            <div className="bg-white w-[500px] px-8 py-14 rounded-bl-3xl rounded-br-3xl">
                                <p className="text-[#0D2063] mb-6">
                                    Couverture à 80% <br/>Zone : pays de résidence
                                </p>
                                <p className="text-gray-500 mb-4">
                                    Le  bouquet Susu Mère-enfant propose un suivi personnalisé et un accompagnement de la femme enceinte et de son nourrisson.
                                </p>
                                <li className="flex items-center justify-start gap-4 text-[#de2f7f]">
                                    <a href="#">Plus de détails</a>
                                    <img src={fleche3} alt="" className="w-6" />
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6">
                        <div className="rounded-3xl shadow-md relative">
                            <div className="flex justify-start items-center p-6 bg-[#1acad72f] w-[500px] rounded-tl-3xl rounded-tr-3xl">
                                <img src={susuPlusEmoji} alt="" className="mr-4 rounded-full bg-[#1ac9d784] p-4" />
                                <div className="text-[#1ac9d7]">
                                    <h3 className="font-bold text-lg">SUSU PLUS</h3>
                                    <p>à partir de 74€/mois</p>
                                </div>
                            </div>
                            <div className="bg-white w-[500px] px-8 py-14 rounded-bl-3xl rounded-br-3xl">
                                <p className="text-[#0D2063] mb-6">
                                    Couverture à 90% <br/>Zone : pays de résidence
                                </p>
                                <p className="text-gray-500 mb-4">
                                    Le  bouquet Susu Mère-enfant propose un suivi personnalisé et un accompagnement de la femme enceinte et de son nourrisson.
                                </p>
                                <li className="flex items-center justify-start gap-4 text-[#1ac9d7]">
                                    <a href="#">Plus de détails</a>
                                    <img src={ fleche} alt="" className="w-6" />
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default SectionAssurance;