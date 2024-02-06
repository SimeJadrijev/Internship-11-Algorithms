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

// const fruits = [];

// while (true) {
//     const name = prompt("Unesite ime voća");
//     const color = prompt("Unesite boju voća");
//     const calories = +prompt("Unesite broj kalorija");

//     let fruit = {
//         name: name,
//         color: color,
//         calories: calories
//     };
//     fruits.push(fruit);

//     const continuation = confirm("Želite li nastavit unos?");
//     if (!continuation)
//         break;
// }

// fruits.sort(function (a, b) 
// {
//     if (a.color < b.color) 
//         return -1;
//     if (a.color > b.color) 
//         return 1;
//     return 0;
// });

// function groupFruitsAndShowCalories(fruitsArray) 
// {

//     const groupedFruits = {};

//     fruitsArray.forEach(function(fruit)
//     {
         
//         if (!groupedFruits[fruit.color])
//             groupedFruits[fruit.color] = [];

//         groupedFruits[fruit.color].push(fruit);
//     });

//     for (let color in groupedFruits)
//     {
//         let totalCalories = 0;

//         groupedFruits[color].forEach
//         (
//             function (fruit) 
//             {
//                 totalCalories += fruit.calories;
//             }
//         )

//         console.log(color + " - " + totalCalories + " kalorija");
//     }

//     fruits.sort(function (a, b) {
//         if (a.boja < b.boja) return -1;
//         if (a.boja > b.boja) return 1;
//         return 0;
//       });

// }



// groupFruitsAndShowCalories(fruits);

// 5. Korisnik redom upisuje imena, prezimena i bodove sportaša. 
// Cilj je stvoriti 4 kategorije sportaša po broju bodova 
// (stvorit ih na način da ide 0-25% osobe sa maksimum bodova, 
// 25-50%, 50-75%, 75-100%). Cilj je ispisati sportaše svake kategorije, 
// sortirane po prezimenu i da su napisani u formatu prezime ime.

// athletes = [];

// while (true) 
// {
//     const name = prompt("Unesite ime sportaša");
//     const surname = prompt("Unesite prezime sportaša");
//     const points = +prompt("Unesite bodove sportaša");
    
//     const athlete = {
//         name: name, 
//         surname: surname,
//         points: points
//     };
//     athletes.push(athlete);

//     const continuation = confirm("Želite li nastaviti s unosom?");
//     if (!continuation)
//         break;
// }

// SortAthletesbBySurname(athletes);

// const pointsArray = [];

// athletes.forEach(athlete => {
//     pointsArray.push(athlete.points);
// });

// const maxPoints = Math.max(...pointsArray);

// //categories:
// firstPointLimit = maxPoints * 0.25 ;
// secondPointLimit = maxPoints * 0.5 ;
// thirdPointLimit = maxPoints * 0.75 ;

// firstCategory = [];
// secondCategory = [];
// thirdCategory = [];
// fourthCategory = [];

// for (let i = 0; i < athletes.length; i++) 
// {
    
//     targetedAthlete = athletes[i];

//     if (targetedAthlete.points <= firstPointLimit)
//         firstCategory.push(targetedAthlete);
//     else if (targetedAthlete.points <= secondPointLimit)
//         secondCategory.push(targetedAthlete);
//     else if (targetedAthlete.points <= thirdPointLimit)
//         thirdCategory.push(targetedAthlete);
//     else
//         fourthCategory.push(targetedAthlete);
// }

// function SortAthletesbBySurname (athletesArray)
// {
//     athletesArray.sort
//     ( function (a,b)
//     {
//         if (a.surname < b.surname)
//             return -1;
//         if (a.surname > b.surname)
//             return 1;
//         return 0;
//     }
//     );
// }

// function PrintAthletesPerCategory(categoryName, athletesArray) 
// {
//     console.log(categoryName + ": \n");
    
//     for (let i = 0; i < athletesArray.length; i++) 
//     {
//         const targetedAthlete = athletesArray[i];
//         console.log(targetedAthlete.surname + " " + targetedAthlete.name);
//     }
// }

// PrintAthletesPerCategory("Prva kategorija", firstCategory);
// PrintAthletesPerCategory("Druga kategorija", secondCategory);
// PrintAthletesPerCategory("Treća kategorija", thirdCategory);
// PrintAthletesPerCategory("Četvrta kategorija", fourthCategory);

// 6. Upisati ime, cijenu i dostupnost proizvoda. Ispisati indexe svih nedostupnih 
// proizvoda i napraviti novi niz sa dostupnim voćem. Sortirati ga po imenu cijeni, 
// a ako je ista cijena po imenu voća te ispisati taj niz. Na kraju ispisati koliko 
// posto ukupne cijene svih proizvoda doprinosi nedostupno voće

// const allFruits = [];

// while (true) {
    
//     const name = prompt("Unesite ime voća");
//     const price = +prompt("Unesite cijenu voća");
//     const isAvailable = confirm("Je li ovo voće dostupno?");

//     const fruit = {
//         name: name,
//         price: price,
//         isAvailable: isAvailable
//     };

//     allFruits.push(fruit);

//     const continuation = confirm("Želite li nastaviti s unosom?");
//     if (!continuation)
//         break;

// }

// allFruits.sort((a, b) => 
// {
//     if (a.price !== b.price) {
//         return a.price - b.price;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name > b.name) {
//         return 1;
//     }
//     return 0; 
// });

// const unavailableFruits = [];
// const availableFruits = [];

// for (let i=0; i < allFruits.length; i++)
// {
//     if (allFruits[i].isAvailable === false)
//         unavailableFruits.push(i);
//     else
//         availableFruits.push(allFruits[i].name);
// }

// let totalPriceUnavailableFruits = 0;
// unavailableFruits.forEach(i => {
//     totalPriceUnavailableFruits += allFruits[i].price;
// });

// const totalPrice = allFruits.reduce((sum, value) => sum + value.price, 0);

// const percentage = (totalPriceUnavailableFruits / totalPrice) * 100;

// console.log("Indeksi svih nedostupnih voća: " + unavailableFruits);
// console.log("Sortirana lista dostupnog voća: " + availableFruits);

// console.log("Nedostupno voće doprinosi " + percentage.toFixed(2) + "% ukupne cijene svog voća");


// 7. Isti unos kao u 6. zadatku. Iz niza voća napraviti novi niz gdje svim dostupnim voćima je boja crvena 
// i svim nedostupnim žuta, sortirati ih po boji pa po imenu i ispisati niz.

// const allFruits = [];

// while (true) {
    
//     const name = prompt("Unesite ime voća");
//     const color = prompt("Unesite boju voća");
//     const price = +prompt("Unesite cijenu voća");
//     const isAvailable = confirm("Je li ovo voće dostupno?");

//     const fruit = {
//         name: name,
//         color: color,
//         price: price,
//         isAvailable: isAvailable
//     };

//     allFruits.push(fruit);

//     const continuation = confirm("Želite li nastaviti s unosom?");
//     if (!continuation)
//         break;
// }

// allFruits.sort((a, b) => {
//     if (a.color < b.color)
//         return -1;
//     if (a.color > b.color)
//         return 1
//     if (a.name < b.name)
//         return -1;
//     if (a.name > b.name)
//         return 1;
// });


// let availableFruits = allFruits.filter(fruit => fruit.isAvailable === true);
// availableFruits = availableFruits.map(fruit => ({...fruit, color: "crvena"}) );

// let unavailableFruits = allFruits.filter(fruit => fruit.isAvailable === false);
// unavailableFruits = unavailableFruits.map(fruit => ({...fruit, color: "zuta"}) );

// const printFruits = (title, fruitsArray) => {
//     console.log(title + ": ");
//     // fruitsArray.forEach(fruit => {
//     //     console.log(`ime: ${fruit.name} - boja: ${fruit.color} - cijena: ${fruit.price}`);
//     // })
//     // console.log();

//     if (Array.isArray(fruitsArray)) {
//         fruitsArray.forEach(fruit => {
//             console.log(`ime: ${fruit.name} - boja: ${fruit.color} - cijena: ${fruit.price}`);
//         });
//     } else {
//         console.log("Nema dostupnih voća za ispis.");
//     }
// } 

// printFruits("Dostupna voća: ", availableFruits);
// printFruits("Nedostupna voća: ", unavailableFruits);

// 8. Riješi problem Gaussove dosjetke koristeći petlje i JS ugrađene funkcije nad nizovima 
// (zabranjeno korištenje formule). Sami napravite array s prvih 100 prirodnih brojeva 
// (bonus points ako napravit bez petlje)

let numbers = [];
let sum = 0;
for (let i = 1; i < 101; i++) {
    numbers.push(i);
}

while (numbers.length > 0)
{
    sum += numbers[0];
    numbers.splice(0,1);
}

console.log(sum);