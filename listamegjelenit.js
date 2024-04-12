export function htmlOsszeallit(lista) {
    let txt = "<table class='table table-striped'>"
    txt += "<tbody><tr><th>Név</th><th>Kor</th><th>Nem</th><th></th></tr>"
    lista.forEach((elem, index) => {
        txt += `<tr>`
        console.log(elem)
        for (const kulcs in elem) {
            /* objektumokat járhatunk be */
            console.log("kulcs: ", kulcs, elem[kulcs])
            txt += `<td>${elem[kulcs]}</td>`
        }
        txt += `<td class="torol" id="${index}">🗑️</td>`
        txt += `</tr>`
    });
    txt += "</tbody></table>"
    return txt
}

export function megjelenit(txt) {
    const adatokELEM = $(".adatok")
    adatokELEM.html(txt)
}