import offreDevis from "../assets/offre-assurance-devis.svg"
import validationDevis from "../assets/validation-devis.svg"
import offreMedical from "../assets/offre-assurance-questionnaire-medical.svg"
import susuCalendar from "../assets/susu-calendrier.svg"
import susuAlerte from "../assets/susu-alerte-sms.svg"
import susuSuivi from "../assets/susu-suivi-contrat.svg"

const Section3BQS = () => {
    return (
        <section className="py-12">
            <h2 className="text-[#0D2064] font-bold text-3xl text-center mb-8">
                Comment ça marche ?
            </h2>
            
            <div className="lg:grid lg:grid-cols-2 lg:px-32 gap-12 relative">
                {/* Timeline centrale */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#0CD2E2] transform -translate-x-1/2 z-0"></div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:bg-[#0d206405] lg:rounded-lg">
                    <img src={offreDevis} alt="" />
                    <div className="flex flex-col justify-center items-center gap-4 mb-16">
                        <button className="bg-[#0D2064] rounded-full px-4 py-2 font-bold text-white lg:px-4 lg:mt-14">
                            01 DEVIS
                        </button>
                        <p className="text-[#0D2064] text-center px-44 lg:px-4">
                            <b>Renseignez les informations </b>de votre bénéficiaire en ligne ou au téléphone.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:bg-[#0d206405] lg:rounded-lg">
                    <img src={validationDevis} alt="" />
                    <div className="flex flex-col justify-center items-center gap-4 mb-16">
                        <button className="bg-[#0D2064] rounded-full px-4 py-2 font-bold text-white lg:px-4 lg:mt-14">
                            02 VALIDATION DU DEVIS
                        </button>
                        <p className="text-[#0D2064] text-center px-44 lg:px-4">
                            <b>Vous recevez alors par email </b>un devis à valider par vos soins.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:bg-[#0d206405] lg:rounded-lg">
                    <img src={offreMedical} alt="" />
                    <div className="flex flex-col justify-center items-center gap-4 mb-16">
                        <button className="bg-[#0D2064] rounded-full px-4 py-2 font-bold text-white lg:px-4 lg:mt-14">
                            03 VISITE MÉDICALE INITIALE
                        </button>
                        <p className="text-[#0D2064] text-center px-44 lg:px-4">
                            <b>Votre bénéficiaire est contacté </b>pour remplir un questionnaire médical.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:bg-[#0d206405] lg:rounded-lg">
                    <img src={susuCalendar} alt="" />
                    <div className="flex flex-col justify-center items-center gap-4 mb-16">
                        <button className="bg-[#0D2064] rounded-full px-4 py-2 font-bold text-white lg:px-4 lg:mt-14">
                            04 RÉCEPTION CALENDRIER
                        </button>
                        <p className="text-[#0D2064] text-center px-44 lg:px-4">
                            <b>Il reçoit ensuite un calendrier médical </b>sur mesure indiquant la date et nature des visites médicales à venir.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:bg-[#0d206405] lg:rounded-lg">
                    <img src={susuAlerte} alt="" />
                    <div className="flex flex-col justify-center items-center gap-4 mb-16">
                        <button className="bg-[#0D2064] rounded-full px-4 py-2 font-bold text-white lg:px-4 lg:mt-14">
                            05 ALERTE SMS
                        </button>
                        <p className="text-[#0D2064] text-center px-44 lg:px-4">
                            À l'approche de chaque visite médicale, <b>votre bénéficiaire et vous-même êtes notifiés par sms.</b>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:bg-[#0d206405] lg:rounded-lg">
                    <img src={susuSuivi} alt="" />
                    <div className="flex flex-col justify-center items-center gap-4 mb-16 lg:my-12">
                        <button className="bg-[#0D2064] rounded-full px-4 py-2 font-bold text-white lg:px-4 lg:mt-2">
                            06 SUIVI CONTRAT
                        </button>
                        <p className="text-[#0D2064] text-center px-44 lg:px-4">
                            <b>Vous suivez les informations du bénéficiaire </b>et de votre abonnement sur notre application.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <button className="bg-[#1acad7] hover:bg-[#fe7624] text-[#ffffff] font-bold text-lg px-10 py-2 rounded-sm mt-10 mb-6">
                    Demander un devis
                </button>
            </div>
        </section>
    );
};

export default Section3BQS;