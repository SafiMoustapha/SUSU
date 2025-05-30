import ServiceAccueil from "../components/ServiceAccueil";
import Actualite from "../components/Actualite";
import TemoignagesAccueil from "../components/TemoignagesAccueil";
import AssuranceAccueil from "../components/AssuranceAccueil";
import PrincipaleAccueil from "../components/PrincipaleAccueil";

function Accueil() {
    return (
        <main>
            <PrincipaleAccueil />
            <AssuranceAccueil />
            <TemoignagesAccueil />
            <ServiceAccueil />
            <Actualite />
        </main>
        
    );
}

export default Accueil;