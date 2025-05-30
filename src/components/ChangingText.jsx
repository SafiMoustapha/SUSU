import { useState, useEffect } from "react";
import medecin from "../assets/medecin.png";
import enfants from "../assets/enfants-hp.png";

const texts = ["Nous prenons soin de", "Soutra", "Bongwa", "Topato", "Wlibo nan"];

const ChangingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // change every 2s

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center text-[#0D2063]">
        <div className="lg:flex lg:items-center lg:justify-center">
            <div className="hidden lg:block">
                <img src={medecin} alt="" />
            </div>
            <div>
                <h2 className="text-6xl md:text-8xl font-bold text-center transition-all duration-500 mt-60 mb-4">
                {texts[index]}
                </h2>
                <h2 className="text-4xl font-bold mb-4">
                    la santé de vos proches au pays
                </h2>
                <p className="text-2xl py-4 px-36">
                    Offrez le meilleur accès aux soins de santé à vos familles en Afrique
                </p>
                <button className="bg-[#1acad7] hover:bg-[#fe7624] text-[#ffffff] font-bold text-lg px-4 py-3 rounded-sm mt-10 mb-6 lg:hidden">
                    Découvrir nos offres
                </button>
            </div>
            <div className="hidden lg:block">
                <img src={enfants} alt="" />
            </div>
        </div>
    </div>
  );
};

export default ChangingText;
