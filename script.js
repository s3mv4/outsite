let page = 0
let seizoen = ""

function navbar(icon) {
    icon.classList.toggle("anim-bar")
    icon.classList.toggle("show-dropdown")
}

function verander(pagina, zonnig) {
    if (pagina == "2") {
        let vraagEl = document.getElementById("vraag")
        vraagEl.innerHTML = "Deze outfits hebben we voor jouw uitgekozen"
        let fotosEl = document.getElementById("fotos")
        let child = fotosEl.lastElementChild
        while (child) {
            fotosEl.removeChild(child)
            child = fotosEl.lastElementChild
        }
        if (seizoen == "herfst") {
            if (zonnig == "1") {
                fotosEl.innerHTML = `
                <img src="outjes/herfst/herfst zonnig.jpg" alt="" class="seizoen">
                <img src="outjes/herfst/Herfst zonning 2.jpg" alt="" class="seizoen">
                <img src="outjes/herfst/Herfst zonnig vrouw.jpg" alt="" class="seizoen">
                <img src="outjes/herfst/Herfst zonning vrouw 2.jpg" alt="" class="seizoen">`
            } else {
                fotosEl.innerHTML = `
                <img src="outjes/herfst/Herfst regen.jpg" alt="" class="seizoen">
                <img src="outjes/herfst/Herfst regen2.jpg" alt="" class="seizoen">
                <img src="outjes/herfst/Herfst regen vrouw.jpg" alt="" class="seizoen">
                <img src="outjes/herfst/Herfst regen vrouw 2.jpg" alt="" class="seizoen">`
            }
            let terugEl = document.getElementById("terug")
            terugEl.setAttribute("onclick", "verander(1, 'herfst')")
            terugEl.style.display = 'block'
        } else if (seizoen == "winter") {
            if (zonnig == "1") {
                fotosEl.innerHTML = `
                <img src="outjes/winter/outfit 1 man zonnig .jpeg" alt="" class="seizoen">
                <img src="outjes/winter/outfit 2 man zonnig.jpg" alt="" class="seizoen">
                <img src="outjes/winter/vrouw outfit 1 zonnig.jpg" alt="" class="seizoen">
                <img src="outjes/winter/vrouw outfit 2 zonnig.jpeg" alt="" class="seizoen">`
            } else {
                fotosEl.innerHTML = `
                <img src="outjes/winter/regen outfit 1 man.jpg" alt="" class="seizoen">
                <img src="outjes/winter/regen outfit 2 man.jpg" alt="" class="seizoen">
                <img src="outjes/winter/vrouw outfit 1 regen .jpg" alt="" class="seizoen">
                <img src="outjes/winter/vrouw outfit 2 regen.jpg" alt="" class="seizoen">`
            }
            let terugEl = document.getElementById("terug")
            terugEl.setAttribute("onclick", "verander(1, 'winter')")
            terugEl.style.display = 'block'
        } else if (seizoen == "zomer") {
            if (zonnig == "1") {
                fotosEl.innerHTML = `
                <img src="outjes/zomer/IMG_0229.jpg" alt="" class="seizoen">
                <img src="outjes/zomer/IMG_0228.jpg" alt="" class="seizoen">
                <img src="outjes/zomer/IMG_0237.jpg" alt="" class="seizoen">
                <img src="outjes/zomer/IMG_0235.jpg" alt="" class="seizoen">`
            } else {
                fotosEl.innerHTML = `
                <img src="outjes/zomer/IMG_0231.jpg" alt="" class="seizoen">
                <img src="outjes/zomer/IMG_0288.jpg" alt="" class="seizoen">
                <img src="outjes/zomer/IMG_0234.jpg" alt="" class="seizoen">
                <img src="outjes/zomer/IMG_0233.jpg" alt="" class="seizoen">`
            }
            let terugEl = document.getElementById("terug")
            terugEl.setAttribute("onclick", "verander(1, 'zomer')")
            terugEl.style.display = 'block'            
        } else if (seizoen == "lente") {
            let terugEl = document.getElementById("terug")
            terugEl.setAttribute("onclick", "verander(1, 'lente')")
            terugEl.style.display = 'block'            
        }
    } else if (pagina == "1") {
        seizoen = zonnig
        let vraagEl = document.getElementById("vraag")
        vraagEl.innerHTML = "Regen of zonnig?"
        let fotosEl = document.getElementById("fotos")
        let child = fotosEl.lastElementChild
        while (child) {
            fotosEl.removeChild(child)
            child = fotosEl.lastElementChild
        }
        fotosEl.innerHTML = `
        <img src="regen.png" alt="regen" class="seizoen" onclick="verander(2, 0)">
        <img src="zonnig.png" alt="zonnig" class="seizoen" onclick="verander(2, 1)">`
        let terugEl = document.getElementById("terug")
        terugEl.setAttribute("onclick", "verander(0)")
        terugEl.style.display = 'block'
    } else if (pagina == "0") {
        let vraagEl = document.getElementById("vraag")
        vraagEl.innerHTML = "Voor welk seizoen wil jij een outfit uitzoeken?"
        let fotosEl = document.getElementById("fotos")
        let child = fotosEl.lastElementChild
        while (child) {
            fotosEl.removeChild(child)
            child = fotosEl.lastElementChild
        }
        fotosEl.innerHTML = `
        <img src="lente.png" alt="lente" class="seizoen" onclick="verander(1, 'lente')">
        <img src="zomer.png" alt="zomer" class="seizoen" onclick="verander(1, 'zomer')">
        <img src="herfst.png" alt="herfst" class="seizoen" onclick="verander(1, 'herfst')">
        <img src="winter.png" alt="winter" class="seizoen" onclick="verander(1, 'winter')">`
        let terugEl = document.getElementById("terug")
        terugEl.style.display = 'none'
    }
    console.log(seizoen)
}