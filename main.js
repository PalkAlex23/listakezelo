import { emberekLISTA } from "./adat.js";
import { htmlOsszeallit, megjelenit } from "./listamegjelenit.js";

init();

function init() {
    megjelenit(htmlOsszeallit(emberekLISTA))
}