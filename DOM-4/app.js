// Name
var ime = document.getElementById("ime"); //funckija u js-u koja omogucava pristup elementu putem njegovog id-ja

ime.style.color = "#E84F2E"; // style je nacin pristupa i izmene css-a elementa a color je atribut koji menjamo, moze biti bilo koji drugi
ime.innerText = "Elmaz"; // innerText je nacin izmene ili popunjavanja texta unutar elementa, innerHTML je za unos html elemenata
ime.style.fontSize = "30px"; // promena velicina fonta kroz css

// LastName
var prezime = document.getElementById("prezime");

prezime.innerText = "Niksic";
prezime.style.fontSize = "30px";

// Nature image
var natureImg = document.getElementById("nature");

natureImg.style.borderRadius = "50%";
natureImg.style.width = "300px";
natureImg.style.height = "300px";

natureImg.addEventListener("click", () => {
  natureImg.style.display = "none";
  setTimeout(() => {
    natureImg.style.display = "block";
  }, 5000);
});

console.log(natureImg.getAttribute("src"));

// addEventListener je funkcija koja se dodaje html elementu koji smo naznacili
// prati dogadjanja oko ili unutar naznacenog elementa
// i izvrsava funkciju koja mu je zadata
// prvi argument funkcije je event(sta treba korisnik da uradi)
// drugi argument je funkcija koju treba program da obavi

// getAttribute je funkcija koja uzima unete podatke atributa koji se nalaze
// unutar elementa koji smo naznacili
