//dati prezzo
const priceUnit = 0.21;
let basePrice = 0;

//dati utente
const distance = parseInt(prompt("Inserire lunghezza tragitto (km):"))
const age = parseInt(prompt("Inserire età:"))

//convalidare tipo variabile
if ( !(isNaN(distance) || isNaN(age)) ) {

    //calcolo prezzo base
   basePrice = distance * priceUnit
   console.log("Il prezzo base è: " + basePrice)

   

} else {
    console.log("Dati non validi.")
}
