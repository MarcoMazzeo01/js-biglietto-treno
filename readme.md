# Esercizio: Calcolo del prezzo del biglietto del treno

## Descrizione
> Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
>Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
> - il prezzo del biglietto è definito in base ai km (0.21 € al km)
>- va applicato uno sconto del 20% per i minorenni
>- va applicato uno sconto del 40% per gli over 65.
>- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


## Procedimento
1. Richiedere **km da percorrere**;
2. Richiederà **età del passeggero**;
3. Inizializzare come costante e calcolare **prezzo base biglietto**, in base ai km da percorrere. (Formula: `1km * 0.21€`)
4. **SE** etàPasseggero < 18 ALLORA:
    * applico sconto 20% per i minorenni (Formula: `prezzoBase - ((prezzoBase * 20) / 100)`)
5. **ALTRIMENTI SE** etàPasseggero > 65 ALLORA:
    * applico sconto 40% per gli over 65 (Formula: `prezzoBase - ((prezzoBase * 40) / 100)`)
6. **ALTRIMENTI** se `etàPasseggero > 18 || etàPasseggero < 65` ALLORA:
    * non applico sconto
7. Mostro il prezzo del biglietto, arrotondando a due decimali per mostrare i centesimi usando il metodo `.toFixed(2)` e convertendolo in numero usando `parseInt()`;
