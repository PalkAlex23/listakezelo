export function htmlOsszeallit(lista) {
    let txt = "<table class='table table-striped'>"
    txt += "<tbody><tr><th>Név</th><th>Kor</th><th>Nem</th></tr>"
    lista.forEach(elem => {
        txt += `<tr><td>${elem.nev}</td><td>${elem.kor}</td><th>${elem.nem}</td></tr>`
    });
    txt += "</tbody></table>"
    return txt
}

export function megjelenit(txt) {
    const adatokELEM = $(".adatok")
    adatokELEM.html(txt)
}