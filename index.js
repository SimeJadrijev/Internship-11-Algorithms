//1. Korisnik redom upisuje ime, cijenu i boju proizvoda. 
// Nakon unosa se pita korisnika želi li nastaviti sa unosom 
// i unosi se  sve dok se korisnik ne odbije unos. Zadatak je 
// izračunati prosječnu cijenu i ispisati proizvod koji najviše 
// odstupa od prosjeka

const articles = [];
while (true) 
{
    const name = prompt("Unesite ime proizvoda");
    const price = +prompt("Unesite cijenu proizvoda");
    const color = prompt("Unesite boju proizvoda:");
    
    const article = {
        name, 
        price, 
        color
    };

    articles.push(article);

    const continuation = confirm("Želite li nastaviti unos?");

    if (continuation === false)
        break;
}

const sumOfAllPrices = articles.reduce((acc, value) => acc + value.price, 0);
const averagePrice = (sumOfAllPrices / articles.length).toFixed(2);


let maxDeviation = 0;
let maxDeviationArticle = articles[0];
articles.forEach(a => {
    const deviation = Math.abs(a.price - averagePrice);

    if (deviation > maxDeviation) {
        maxDeviation = deviation;
        maxDeviationArticle = a;
    }
});

console.log("Prosjek cijena: ", averagePrice);
console.log("Najveće odstupanje: ", maxDeviationArticle, " (", maxDeviation.toFixed(2), " eura)");

