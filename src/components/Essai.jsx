import offreDevis from "../assets/offre-assurance-devis.svg"
import validationDevis from "../assets/validation-devis.svg"

const Essai = () => {
    return (
        <section className="relative">
            <h2 className="text-[#0D2064] font-bold text-2xl text-center mb-12">
                Comment ça marche ?
            </h2>

            {/* Timeline centrale */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#0CD2E2] transform -translate-x-1/2 z-0"></div>

            <div className="flex flex-col gap-12 relative z-10">
                {/* Étape 01 */}
                <div className="flex flex-col lg:flex-row-reverse lg:items-center justify-between w-full">
                    <div className="flex flex-col items-center lg:items-start lg:w-1/2 gap-4 px-4 lg:pr-24">
                        <img src={offreDevis} alt="devis" className="w-32 lg:w-48" />
                        <button className="bg-[#0D2064] rounded-full px-4 py-2 font-bold text-white">
                            01 DEVIS
                        </button>
                        <p className="text-[#0D2064] text-center lg:text-left">
                            <b>Renseignez les informations </b>de votre bénéficiaire en ligne ou au téléphone.
                        </p>
                    </div>
                </div>

                {/* Étape 02 */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full">
                    <div className="flex flex-col items-center lg:items-end lg:w-1/2 gap-4 px-4 lg:pl-24">
                        <img src={validationDevis} alt="validation devis" className="w-32 lg:w-48" />
                        <button className="bg-[#0D2064] rounded-full px-4 py-2 font-bold text-white">
                            02 VALIDATION DU DEVIS
                        </button>
                        <p className="text-[#0D2064] text-center lg:text-right">
                            <b>Vous recevez alors par email </b>un devis à valider par vos soins.
                        </p>
                    </div>
                </div>

                {/* Répète ce motif en alternant lg:flex-row-reverse / lg:flex-row pour chaque étape suivante */}

                {/* ... Étape 03 à 06 ici ... */}
            </div>
        </section>

    );
};

export default Essai;