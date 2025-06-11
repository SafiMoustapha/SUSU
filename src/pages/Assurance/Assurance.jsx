import Actualite from "../../components/Actualite";
import Sect2Ass from "./_components/Sect2Ass";
import CarouselAss from "./_components/CarouselAss";
import Section3BQS from "../../components/Section3BQS";
import SectionAssurance from "./_components/SectionAssurance";
import ServiceAccueil from "../../components/ServiceAccueil";
function Assurance() {
    return (
        <main>
            <SectionAssurance />
            <Sect2Ass />
            <Section3BQS />
            <CarouselAss />
            <ServiceAccueil />
            <Actualite />
        </main>
    );
}

export default Assurance;