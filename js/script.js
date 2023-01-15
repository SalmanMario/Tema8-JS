/*Sa se calculeze maximul si minimul dintre trei numere. 
Rezultatele vor fi salvate in variabilele max, respectiv min
*/

let a = 20;
let b = 10;
let c = 5;

let min;
let max;

if (a >= b && a >= c) {
    max = a;
} else if (b >= c && b >= a) {
    max = b;
} else if (c >= b && c >= a) {
    max = c;
}

if (a <= b && a <= c) {
    min = a;
} else if (b <= a && b <= c) {
    min = b;
} else if (c <= a && c <= b) {
    min = c;
}

console.log("Numarul min este " + min + " Numarul max este " + max);

/*Sa se calculeze, folosind instructiunea while, suma primelor n numere
pare numere pare. EX: Pentru n = 3, avem numerele 2,4,6 iar suma lor este 12
*/

const n = 12;

let suma = 2;
let par = 2;

while (suma <= n) {
    console.log(par);
    par += 2;
    suma += par;
}


/* Folosind instructiunea for, sa se afiseze in consola primele 10 numere naturale,
in ordine descrescatoare
*/

let numar = 0;

for (let i = 10; i > numar; i--) {
    console.log(i);
}