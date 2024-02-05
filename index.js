//1. Korisnik redom upisuje ime, cijenu i boju proizvoda. 
// Nakon unosa se pita korisnika želi li nastaviti sa unosom 
// i unosi se  sve dok se korisnik ne odbije unos. Zadatak je 
// izračunati prosječnu cijenu i ispisati proizvod koji najviše 
// odstupa od prosjeka

// const articles = [];
// while (true) 
// {
//     const name = prompt("Unesite ime proizvoda");
//     const price = +prompt("Unesite cijenu proizvoda");
//     const color = prompt("Unesite boju proizvoda:");
    
//     const article = {
//         name, 
//         price, 
//         color
//     };

//     articles.push(article);

//     const continuation = confirm("Želite li nastaviti unos?");

//     if (continuation === false)
//         break;
// }

// const sumOfAllPrices = articles.reduce((acc, value) => acc + value.price, 0);
// const averagePrice = (sumOfAllPrices / articles.length).toFixed(2);


// let maxDeviation = 0;
// let maxDeviationArticle = articles[0];
// articles.forEach(a => {
//     const deviation = Math.abs(a.price - averagePrice);

//     if (deviation > maxDeviation) {
//         maxDeviation = deviation;
//         maxDeviationArticle = a;
//     }
// });

// console.log("Prosjek cijena: ", averagePrice);
// console.log("Najveće odstupanje: ", maxDeviationArticle, " (", maxDeviation.toFixed(2), " eura)");

// ------------------------------------------------------------------------------------------------------

// 2. Korisnik redom upisuje ime, prezime, zanimanje i plaću osobe. 
// Unos se obavlja isto kao u prvom zadatku (tako i u ostalim zadacima ovog tipa). 
// Cilj zadatka je izračunati prosjek plaće za svako zanimanje i ispisati 
// sortirano objekte gdje piše zanimanje, prosjek i koliko osoba radi to zanimanje.

// const people = [];
// const dictionary = [];

// while (true) {

//     const name = prompt("Unesite ime: ");
//     const surname = prompt("Unesite prezime: ");
//     const profession = prompt("Unesite zanimanje: ");
//     const salary = +prompt("Unesite plaću: ");

//     const person = {
//         name, surname, profession, salary
//     };

//     people.push(person);
    

//     let alreadyExists = professions.some(item => item.profession === profession);

//     if (alreadyExists) {
//         dictionary[profession].salary += salary;
//         dictionary[profession].count++;
//     }
//     else
//     {
//         dictionary.push(
//             name, surname, profession, salary
//         )
//     }
    
//     const continuation = confirm("Želite li nastaviti unos?");

//     if (!continuation)
//         break;
// }
// nedovršeno

// 3. Isti unos kao u drugom zadatku. Treba izračunati zbroj svih 
// plaća zajedno i ispisati objekt u kojem se nalazi ime zanimanja, 
// postotak koliko to zanimanje pridonosi ukupnoj plaći, i nizu objekata 
// koji se sastoje od imena osobe i postotak koliko ta osoba pridonosi 
// ukupnoj plaći zanimanja

//preskočeno

//4. Unijeti niz voća sa imenom, bojom i kalorijama. Cilj je ispisati svo voće sa 
// istom bojom i koliko ukupno kalorija to voće daje. Neka se sortira po imenu boje.

const fruits = [];

while (true) {
    const name = prompt("Unesite ime voća");
    const color = prompt("Unesite boju voća");
    const calories = +prompt("Unesite broj kalorija");

    let fruit = {
        name: name,
        color: color,
        calories: calories
    };
    fruits.push(fruit);

    const continuation = confirm("Želite li nastavit unos?");
    if (!continuation)
        break;
}

fruits.sort(function (a, b) 
{
    if (a.color < b.color) 
        return -1;
    if (a.color > b.color) 
        return 1;
    return 0;
});

function groupFruitsAndShowCalories(fruitsArray) 
{

    const groupedFruits = {};

    fruitsArray.forEach(function(fruit)
    {
         
        if (!groupedFruits[fruit.color])
            groupedFruits[fruit.color] = [];

        groupedFruits[fruit.color].push(fruit);
    });

    for (let color in groupedFruits)
    {
        let totalCalories = 0;

        groupedFruits[color].forEach
        (
            function (fruit) 
            {
                totalCalories += fruit.calories;
            }
        )

        console.log(color + " - " + totalCalories + " kalorija");
    }

    fruits.sort(function (a, b) {
        if (a.boja < b.boja) return -1;
        if (a.boja > b.boja) return 1;
        return 0;
      });

}



groupFruitsAndShowCalories(fruits);

// 5. Korisnik redom upisuje imena, prezimena i bodove sportaša. 
// Cilj je stvoriti 4 kategorije sportaša po broju bodova 
// (stvorit ih na način da ide 0-25% osobe sa maksimum bodova, 
// 25-50%, 50-75%, 75-100%). Cilj je ispisati sportaše svake kategorije, 
// sortirane po prezimenu i da su napisani u formatu prezime ime.

