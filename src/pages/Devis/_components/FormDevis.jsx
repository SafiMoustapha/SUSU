import offreSusu from "../../../assets/offres-susu.png"
import teleSusu from "../../../assets/teleconsultante-susu.png"

const FormDevis = () => {
    return (
        <section className="py-16 px-24 flex lg:justify-between justify-center items-center lg:px-0">
            <div className="hidden lg:block">
                <img src={offreSusu} alt="" />
            </div>
            <div>
                <h1 className="text-center text-[#0D2063] mb-10 text-5xl">
                    Notre équipe est
                    <br /><strong>100% à votre écoute</strong>
                </h1>
                <p className="text-center text-[#0D2063] mb-10 text-lg">
                    Contactez-nous pour en <br />savoir plus sur notre service.
                </p>
                <form action="">
                    <div className="grid grid-cols-2 gap-6 mb-4">
                        <input type="text" placeholder="Prénom*" className="border-2 border-[#0d20633d] rounded-md p-4 focus:outline-black" required />
                        <input type="text" placeholder="Nom*" className="border-2 border-[#0d20633d] rounded-md p-4 focus:outline-black" required />
                        <input type="text" placeholder="E-mail*" className="border-2 border-[#0d20633d] rounded-md p-4 focus:outline-black" required />
                        <input type="text" placeholder="Numéro de téléphone*" className="border-2 border-[#0d20633d] rounded-md p-4 focus:outline-black" required />
                    </div>
                    <select name="" id="" className="bg-[#0d21632a] w-full pl-4 text-[#0D2063] font-semibold text-lg py-4 rounded-lg">
                        <option value="option1">Raison de votre contact*</option>
                        <option value="option2">Je souhaite être contacté par un vendeur</option>
                        <option value="option3">Je fais partie d'une association</option>
                        <option value="option1">Je suis déjà client</option>
                        <option value="option5">Autre</option>
                    </select>
                    <p className="text-center text-[#0D2063] mb-4">
                        Veuillez remplir ce champ obligatoire.
                    </p>
                    <textarea name="" id="" placeholder="Votre message*" rows="5" className="border-2 border-[#0d20633d] w-full rounded-md p-4"></textarea>
                    <div className="flex items-center justify-center w-full">
                        <button className="px-8 py-4 bg-[#1acad7] text-white font-semibold mt-4 rounded-md">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
            <div className="hidden lg:block">
                <img src={teleSusu} alt="" />
            </div>
        </section>
    )
};

export default FormDevis;