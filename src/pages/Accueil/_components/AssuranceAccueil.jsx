import familleImage from '../../../assets/famille-phone-landscape.png';
import mereFilleImage from '../../../assets/mere-fille-mobile-4.png';
import paraImage from '../../../assets/assurances-picto.svg';
import coeurImage from '../../../assets/picto-bouquets.svg';

const AssuranceAccueil = () => {
    return (
        <div className="bg-white">
            <div className="text-center p-8 text-[#0D2063]">
                <h2 className="text-3xl font-semibold">
                    Assurances santé ou suivi personnalisé de vos parents ?
                </h2>
                <p className="text-lg mb-4">
                    Nous avons ce que vous recherchez 🙂
                </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center md:p-8 gap-8 lg:h-[100vh] px-4 mb-2">
                <div className='md:w-1/2'>
                    <img src={familleImage} alt="" className='rounded-[2rem] h-[350px] lg:h-[85vh] lg:w-[85vh] lg:rounded-none w-auto' />
                </div>
                <div className='md:w-1/2 md:grid md:grid-rows-2 md:gap-2'>
                    <img src={paraImage} alt="" className='hidden sm:flex' />
                    <h2 className='text-[#0D2063] font-bold text-2xl'>Assurances</h2>
                    <p className='text-[#0D2063]'>
                        <b>Offrez la meilleure couverture santé à vos proches</b> au pays grâce à nos assurances locales ou internationales, couvrant jusqu’à 90% de leurs dépenses médicales.
                    </p>
                    <button className='bg-[#1acad777] text-[#1ac9d7] font-bold text-lg px-2 py-2 rounded-md mt-10'>
                        Découvrir nos offres d'assurance
                    </button>
                </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row items-center justify-center md:p-8 gap-8 lg:h-[100vh] px-4 mb-2">
                <div className='md:w-1/2 md:grid md:grid-rows-2 md:gap-2'>
                    <img src={coeurImage} alt="" className='hidden sm:flex' />
                    <h2 className='text-[#0D2063] font-bold text-2xl'>Bouquets santé personnalisés</h2>
                    <p className='text-[#0D2063]'>
                        <b>Vos parents prennent de l’âge ou souffrent d’une maladie chronique ?
                        Nos bouquets santé sont spécialement conçus pour suivre leur condition et leur apporter un accompagnement personnalisé.</b>
                        
                    </p>
                    <button className='bg-[#1acad777] text-[#1ac9d7] font-bold text-lg px-2 py-2 rounded-md mt-10'>
                        Découvrir nos bouquets de santé
                    </button>
                </div>
                <div className='md:w-1/2'>
                    <img src={mereFilleImage} alt="" className='rounded-[2rem] h-[350px] lg:h-[85vh] lg:w-[85vh] lg:rounded-none w-auto' />
                </div>
            </div>
        </div>
    );
};

export default AssuranceAccueil;