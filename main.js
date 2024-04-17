import { emberekLISTA } from "./adat.js";
import { htmlOsszeallit, megjelenit } from "./listamegjelenit.js";
import { rendez, szures, torol } from "./adatKezelo.js";
import { ujAdat } from "./urlapkezelo.js";

/* 1. jelenítsük meg a listánkat egy táblázatban, majd a listát tudjuk rendezni pl név szerint, ha rákattinttunka táblázat fejlécére, akkor rendezze be a táblázat sorait.
Tudjunk szűrni név alapján,
tudjunk új adatot hozzáadni a táblázathoz
tudjunk törőlni a táblázat egy sorát */

/* Függvények és eljárások 
    1. htmlOsszeallit(lista) -> txt || összeállítja a táblázat HTML szerkezetét egy szöveges változóba 
    2. megjelenit(txt) - megjelenítette egy adott HTML elemben a paraméterében kapott szöveget. 
    3. rendez(lista) -> rendezettLista || a paraméterében kapott listát név szerint megrendezi. A függvény akkor fut le, ha a táblázat név fejlécére kattinttunk.
    4. adatHozzaadas(lista) -> kibovitettLista || Összegyűjti az űrlapról az adatokat és összeállít belőlük egy objektumot, majd azt beleteszi a listába. A függvény akkor fut le, akkor a "Hozzáadás" gombra kattinttunk. 
    5. torol(lista, id) -> || Kitőrli a listából az adott azonosítójú elemet, amire kattintottunk. Akkor fut lefutni, ha a sor melletti "Töröl" gombra kattinttunk 
    6. szures(lista, keresoSzoveg) -> szurtLista || A keresőmezőben beírt szöveget keresi a lista objektumainak név mezőjében. Mindez akkor fut le, ha beírunk valamit a keresőmezőbe. */

let irany = 1 /* 1 -> növekvő rendezés; -1 -> csökkenő rendezés */
init(emberekLISTA);
szuresEsemeny()

export function init(lista) {
    megjelenit(htmlOsszeallit(lista))
    rendezEsemeny()
    torolEsemeny()
}

/* A függvény akkor fut le, ha a táblázat név fejlécére kattinttunk. */

function rendezEsemeny() {
    const nevELEM = $(".adatok table th").eq(0)
    nevELEM.on("click", function() {
        const rLista = rendez(emberekLISTA, irany)
        init(rLista)
        irany *= (-1)
    })
}

function szuresEsemeny() {
    /* Mindez akkor fut le, ha beírunk valamit a keresőmezőbe. */
    const keresoELEM = $("#szuro");
    console.log(keresoELEM)
    keresoELEM.on("keyup", function() {
        let keresoSzoveg = keresoELEM.val()
        const szLISTA = szures(emberekLISTA, keresoSzoveg)
        console.log(szLISTA)
        init(szLISTA)
    })
}

function torolEsemeny() {
    const torolGOMB = $(".torol")
    torolGOMB.on("click", function(event) {
        /* event.target az az elem, amelyik kiváltotta az eseményt */
        let id = event.target.id
        const LISTA = torol(emberekLISTA, id)
        init(LISTA)
    })
}

ujAdat(emberekLISTA);