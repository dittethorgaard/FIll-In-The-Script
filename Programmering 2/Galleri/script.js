// VARIABLE TIL HVER THUMBNAIL:
// Opret variable (const, ikke let) til hvert billede.
// Det må gerne være samme navn som id'et i det her tilfælde.
const gal_clouds = document.getElementById("gal_clouds");
const gal_forelf = document.getElementById("gal_forelf");
const gal_kirke = document.getElementById("gal_kirke");
const gal_swans = document.getElementById("gal_swans");

// VARIABEL TIL DET STORE BILLEDE:
// Opret en variabel der peger på div'en, der har billederne i sig. 
const gallery_big = document.getElementById("gallery_big");

// EVENT LISTENER:
// Lav en event listener for hvert billede med onclick.
// Husk at funktionskaldet ikke skal have paranteser!
gal_clouds.onclick = storClouds;
gal_forelf.onclick = storForelf;
gal_kirke.onclick = storKirke;
gal_swans.onclick = storSwans;

// FUNCTIONS:
// Lav en function for hvert billede, der går ind og indsætter et nyt <img> tag
// i div'en med innerHTML. Brug camel casing så der fx. står visStoerreClouds.
function storClouds(){
    gallery_big.innerHTML = '<img src="images/cloudsFromRoof.jpg" alt="Clouds from the Roof">'
}
function storForelf(){
    gallery_big.innerHTML = '<img src="images/forestAndElf.jpg" alt="Forest and Elf">'
}
function storKirke(){
    gallery_big.innerHTML = '<img src="images/hasleKirke.jpg" alt="Hasle Kirke">'
}
function storSwans(){
    gallery_big.innerHTML = '<img src="images/swans.JPG" alt="Swans">'
}

/* NB: Du tænker det her er ineffektivt og du har ret. Men det kræver nogle lidt mere avancerede værktøjer at effektivisere det :) */