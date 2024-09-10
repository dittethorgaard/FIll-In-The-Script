// Dette henter dato og tid 1 gang og putter det i en variabel:
const dato = new Date();
// Her tages fat i <p> med id'et 'dato':
const p_dato = document.getElementById("dato");
// Her skrives indholdet af variablen 'dato' ind i <p>:
p_dato.innerHTML = dato;

// VARIABLE:

// - Opret en variabel, der henter <p id="beloeb">. Brug const.
const beloeb = document.getElementById("beloeb");
// - Opret en numbervariabel med navnet 'pris1' og sæt den til et eller andet tal.
let pris1 = 50
// - Opret en numbervariabel til med navnet 'pris2' og sæt også den til et tal.
let pris2 = 75 
// - Opret en variabel med navnet 'samletPris' og gør den lig med pris1 + pris2.
let samletPris = pris1 + pris2 
// - Skriv indholdet af variablen 'samletPris' i <p id="beloeb"> med innerHTML.
beloeb.innerHTML = samletPris;
