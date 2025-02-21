import Banner_Parti from "./components/Banner_Parti";
import Bureau_Executifs from "./components/Bureau_Executifs";
import Historique_Fondation from "./components/Historique_Fondation";
import MotPréseident from "./components/MotPréseident";
import Vision_Valeurs from "./components/Vision_Valeurs";
import Status_Règlement_Intérieurs from "./components/Statuts_Règlements_Intérieurs";

function Page() {
  return (
    <div>
      <Banner_Parti />
      <MotPréseident />
      <Historique_Fondation />
      <Vision_Valeurs />
      <Bureau_Executifs />
      <Status_Règlement_Intérieurs />
    </div>
  );
}

export default Page;
