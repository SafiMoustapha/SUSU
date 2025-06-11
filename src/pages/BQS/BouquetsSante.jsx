import Actualite from "../../components/Actualite";
import CarouselBQS from "../Assurance/_components/CarouselBQS";
import Section1BQS from "./_components/Section1BQS";
import Section2BQS from "./_components/Section2BQS";
import Section3BQS from "../../components/Section3BQS";
import ServiceAccueil from "../../components/ServiceAccueil";

function BouquetsSante() {
    return (
        <main>
            <Section1BQS />
            <Section2BQS />
            <Section3BQS />
            <CarouselBQS />
            <ServiceAccueil />
            <Actualite />
        </main>
    );
}

export default BouquetsSante;