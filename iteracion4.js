// Arrays

// 1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log (avengers[0]);

// 1.2 

avengers[0] = "IRONMAN";

console.log(avengers);

// 1.3 -------    Comentado para que no de error en la consola de Visual Studio --------------
/* 
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

alert(avengers.length); 


*/

// 1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push ("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

// 1.5  De nuevo, lo cambio para que no de error, añado un 2
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop;
console.log(rickAndMortyCharacters2[0], rickAndMortyCharacters2[rickAndMortyCharacters.length - 1] );

// 1.6 En este se le añade un 3
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters3.splice(1,1);
console.log(rickAndMortyCharacters3);