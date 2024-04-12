# Listakezelő függvények gyakorlás

## Specifikáció
Jelenítsük meg a listánkat egy táblázatban, majd a listát tudjuk rendezni pl név szerint, ha rákattinttunka táblázat fejlécére, akkor rendezze be a táblázat sorait.
Tudjunk szűrni név alapján.
Tudjunk új adatot hozzáadni a táblázathoz,
Tudjunk törőlni a táblázat egy sorát.

## Metódusok

1. **htmlOsszeallit(lista) -> txt** || összeállítja a táblázat HTML szerkezetét egy szöveges változóba 
2. **megjelenit(txt)** - megjelenítette egy adott HTML elemben a paraméterében kapott szöveget. 
3. **rendez(lista, irany) -> rendezettLista** || a paraméterében kapott listát név szerint megrendezi. A függvény akkor fut le, ha a táblázat név fejlécére kattinttunk.
4. **adatHozzaadas(lista) -> kibovitettLista** || Összegyűjti az űrlapról az adatokat és összeállít belőlük egy objektumot, majd azt beleteszi a listába. A függvény akkor fut le, akkor a "Hozzáadás" gombra kattinttunk. 
5. **torol(lista, id) -> torolLista** || Kitőrli a listából az adott azonosítójú elemet, amire kattintottunk. Akkor fut lefutni, ha a sor melletti "Töröl" gombra kattinttunk 
6. **szures(lista, keresoSzoveg)** -> szurtLista || A keresőmezőben beírt szöveget keresi a lista objektumainak név mezőjében. Mindez akkor fut le, ha beírunk valamit a keresőmezőbe. */