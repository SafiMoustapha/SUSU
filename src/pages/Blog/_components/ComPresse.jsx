import flecheDroite from "../../../assets/fleche-droite (1).png"
import Team from "../../../assets/TEAM-SUSU.png"
import Design from "../../../assets/Design-sans-titre.png"
import ArrowDown from "../../../assets/arrow-down.png"
import Calendar from "../../../assets/calendar-icon.png"
import Time from "../../../assets/sablier-icon.png"

const ComPresse = () => {
    return (
        <section className="px-16">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <h2 className="font-bold text-2xl md:text-4xl text-[#0D2063]">
                    Nos communiqués de presse
                </h2>
                <div className="flex items-center justify-center gap-4">
                    <p className="text-[#0D2063]">
                        Voir tout
                    </p>
                    <img src={flecheDroite} alt="" className="w-6" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center rounded-2xl border border-[#1ac9d7">
                    <div>
                        <div className="w-full">
                            <img src={Team} alt="" className="rounded-tl-2xl rounded-tr-2xl" />
                        </div>
                        <div className="text-[#0D2063]">
                            <h3>
                                🇬🇧Press Release - Susu raises €4.5 million
                            </h3>
                        </div>
                        <div className="flex items-center justify-center text-[#0D2063]">
                            <div className="flex items-center justify-center">
                                <img src={Calendar} alt="" />
                                <p>December 13, 2023</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <img src={Time} alt="" />
                                <p>5 min</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-[#1ac9d7]">
                    <div>
                        <img src={Team} alt="" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-[#1ac9d7]">
                    <div>
                        <img src={Design} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComPresse;