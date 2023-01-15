/*Sa se calculeze maximul si minimul dintre trei numere. 
Rezultatele vor fi salvate in variabilele max, respectiv min
*/

// let a = 20;
// let b = 10;
// let c = 5;

// let min;
// let max;

// if (a >= b && a >= c) {
//     max = a;
// } else if (b >= c && b >= a) {
//     max = b;
// } else if (c >= b && c >= a) {
//     max = c;
// }

// if (a <= b && a <= c) {
//     min = a;
// } else if (b <= a && b <= c) {
//     min = b;
// } else if (c <= a && c <= b) {
//     min = c;
// }

// console.log("Numarul min este " + min + " Numarul max este " + max);

/*Sa se calculeze, folosind instructiunea while, suma primelor n numere
pare numere pare. EX: Pentru n = 3, avem numerele 2,4,6 iar suma lor este 12
*/

let n = 3;

let sum = 0;
let i = 2;

while (n > 0) {
    sum = sum + i;
    i = i + 2;
    n = n - 1;

    console.log(sum);
}


/* Folosind instructiunea for, sa se afiseze in consola primele 10 numere naturale,
in ordine descrescatoare
*/

// let numar = 0;

// for (let i = 10; i > numar; i--) {
//     console.log(i);
// }