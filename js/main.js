//dati prezzo
const priceUnit = 0.21;
let basePrice = 0;
const minAgeDiscount = 18, minPromo = 20;
const maxAgeDiscount = 65, maxPromo = 40;


//dati utente
const distance = parseInt(prompt("Inserire lunghezza tragitto (km):"))
const age = parseInt(prompt("Inserire età:"))

//convalidare tipo variabile
if (!(isNaN(distance) || isNaN(age))) {

    //calcolo prezzo base
    basePrice = distance * priceUnit

    //applico sconto in base età
    if (age < minAgeDiscount) { //minorenne
        basePrice = (basePrice - (basePrice * minPromo) / 100);
    } else if (age > maxAgeDiscount) { //over 65
        basePrice = (basePrice - (basePrice * maxPromo) / 100);
    }

    //arrotondamento
    basePrice = basePrice.toFixed(2)
    document.getElementById("final_price").innerHTML = basePrice + "€"

} else {
    document.getElementById("final_price").innerHTML = "Dati inseriti non validi. Ricarica pagina."
}

