export function rendez(lista, irany) {
    /* a paraméterében kapott listát név szerint megrendezi. A függvény akkor fut le, ha a táblázat név fejlécére kattinttunk. */
    lista.sort(function(e1, e2) {
        let eredmeny = 1
        if (e1.nev < e2.nev) {
            eredmeny = -1
        }
        /* a sort minden lehetséges listaelem párt összehasonlít (név). Ha a visszatérési értéke pozitív, akkor nem cserel, ha negatív akkor cserél */
        return eredmeny * irany
    })
    /* szorgalmi hf: írj egy olyan függvényeket, ami az ékezetes karakterek átmenetileg kicseréli Á-A-ra és így rendezd! replaceAll() */
    /* szorgalmi hf: további mezők szerinti rendezések megvalósítása */
    return lista
}

export function szures(lista, keresoSzoveg) {
    /* A keresőmezőben beírt szöveget keresi a lista objektumainak név mezőjében. */

    const szurtLISTA =  lista.filter(function(ember) {
        return ember.nev.toUpperCase().includes(keresoSzoveg.toUpperCase())
    })

    return szurtLISTA
}

export function torol(lista, id) {
    /* Kitőrli a listából az adott azonosítójú elemet, amire kattintottunk. */
    lista.splice(id, 1);
    return lista
}