let retours= document.querySelectorAll(".retour");
retours.forEach(function (retour) {retour.addEventListener("click", function () {let ficheOuverte= document.querySelector(".fiche.ouverte");
ficheOuverte.classList.remove("ouverte"); 
});
 });
let bulle= document.querySelector(".bulle");

let debut= new Date("2026-11-09");
let aujourdhui= new Date();
let jours= (aujourdhui - debut) / 86400000;
let semaine= Math.floor(jours / 7) +1;
  
let cartes= document.querySelectorAll (".carte");
cartes.forEach(function(carte) {
   if (carte.dataset.semaine>semaine) {carte.classList.add("verrou");
}
   carte.addEventListener("click",
function(){
   if (carte.classList.contains("verrou")) {
      bulle.classList.add("visible");
      setTimeout(function() {bulle.classList.remove("visible");
},2500);
} else {
   carte.classList.add("retournee");
   let laFiche= document.getElementById("fiche-" + carte.dataset.semaine);
   setTimeout(function () {laFiche.classList.add("ouverte"); 
},600);
   
   
}
}); 
}); 
