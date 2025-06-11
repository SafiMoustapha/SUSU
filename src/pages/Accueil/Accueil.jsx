import ServiceAccueil from "../../components/ServiceAccueil";
import Actualite from "../../components/Actualite";
import TemoignagesAccueil from "./_components/TemoignagesAccueil";
import AssuranceAccueil from "./_components/AssuranceAccueil";
import PrincipaleAccueil from "./_components/PrincipaleAccueil";

function Accueil() {
    return (
        <main className="overflow-hidden">
            <PrincipaleAccueil />
            <AssuranceAccueil />
            <TemoignagesAccueil />
            <ServiceAccueil />
            <Actualite />
        </main>
        
    );
}

export default Accueil;