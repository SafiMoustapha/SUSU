import InputWithButton from "./InputWithButton";

const Actualite = () => {
    return (
        <div className="w-full h-[50vh] flex flex-col justify-center items-center text-center bg-[#fe7624]">
            <h2 className="text-4xl font-semibold text-white mb-4">
                Suivez notre actualité en direct !
            </h2>
            <p className="text-white mb-14 ">
                Abonnez-vous à notre newsletter hebdomadaire.
            </p>
            <InputWithButton />
            
        </div>
    );
};

export default Actualite;