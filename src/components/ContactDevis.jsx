import fondWave from "../assets/fond-vague-main-page1.png"
import france from "../assets/france.png"
import cotedIvoire from "../assets/cote-ivoire.png"
import cameroun from "../assets/cameroun.png"
import senegal from "../assets/senegal.png"
import avionPapier from "../assets/avion-en-papier.png"
import telephone from "../assets/telephone.png"

const ContactDevis = () => {
    return (
        <section style={{ backgroundImage: `url(${fondWave})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2 className="text-[#0D2063] text-4xl mb-8 text-center pt-10 px-20">
                Nous sommes à votre disposition
                <br/>pour échanger par téléphone
            </h2>
            <p className="text-[#0D2063] text-xl mb-8 text-center px-20">
                Notre standard téléphonique est ouvert du lundi au vendredi de 9h à 20h et le samedi de 9h à 14h (heure Paris)
            </p>
            <div className="flex overflow-x-auto scrollbar-hide gap-4 px-8 lg:pl-32 pb-16">
                <div className="min-w-[300px] flex-shrink-0 bg-white rounded-md grid grid-rows-3 p-4 text-[#0D2063]">
                    <div className="flex items-center justify-start gap-2">
                        <h4>France</h4>
                        <img src={france} alt="" />
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <img src={telephone} alt="" />
                        <p className="underline">+33 4 13 68 00 21</p>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <img src={avionPapier} alt="" />
                        <p>8 Rue Jean Antoine de Baïf, <br/>75013 Paris</p>
                    </div>
                </div>
                <div className="min-w-[300px] flex-shrink-0 bg-white rounded-md grid grid-rows-3 p-4 text-[#0D2063]">
                    <div className="flex items-center justify-start gap-2">
                        <h4>Côte d'Ivoire</h4>
                        <img src={cotedIvoire} alt="" />
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <img src={telephone} alt="" />
                        <p className="underline">Susu:+225 25 22 01 87 88 <br/>Mamacare:<b>+225 05 07 13 60 13</b></p>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <img src={avionPapier} alt="" />
                        <p>Cocody II plateaux,<br/> quartier Macaci, non loin du<br/> carrefour mobile. Villa<br/> 130</p>
                    </div>
                </div>
                <div className="relative min-w-[300px] flex-shrink-0 bg-white rounded-md grid grid-rows-3 p-4 text-[#0D2063]">
                    <div className="flex items-center justify-start gap-2">
                        <h4>Cameroun</h4>
                        <img src={cameroun} alt="" />
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <img src={telephone} alt="" />
                        <p className="underline">+237 659 33 71 68</p>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <img src={avionPapier} alt="" />
                        <p>Douala, Bonapriso, rue UTA<br/> à côté de l'école des filles<br/> groupe 2</p>
                    </div>
                    <div className="block rounded-full bg-[#fe7824] px-4 absolute top-0 right-0">
                        <h3 className="font-bold text-white">NOUVEAU !</h3>
                    </div>
                </div>
                <div className="relative min-w-[300px] flex-shrink-0 bg-white rounded-md grid grid-rows-3 p-4 text-[#0D2063]">
                    <div className="flex items-center justify-start gap-2">
                        <h4>Sénégal</h4>
                        <img src={senegal} alt="" />
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <img src={telephone} alt="" />
                        <p className="underline">+221 78 458 36 36</p>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <img src={avionPapier} alt="" />
                        <p>Cite Keur Gorgui lot num <br/>AD23 Dakar</p>
                    </div>
                    <div className="block rounded-full bg-[#fe7824] px-4 absolute top-0 right-0">
                        <h3 className="font-bold text-white">NOUVEAU !</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactDevis;