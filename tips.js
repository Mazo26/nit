// const je skraceno od constant i njoj se vrednost ne menja
// var je varijabla odnosno promenjiva
// let je promenjiva unutar jednog bloka koda

const randomObj = {
  name: "Elmaz",
  lName: "Niksic",
  city: "Novi Pazar",
  age: 26,
  fullName: this.name + " " + this.lName,
};

// destrukturizacija objekata - object destruction
// Razlaganje delova objekata na zasebne promenjive

// const { name, lName, city, age } = randomObj;

// const name = randomObj.name;
// const lName = randomObj.lName;

// randomObj.age = 27;
/* 
const newObj = {
  ...randomObj,
  age: 27,
};

if (newObj.age === 27) {
  console.log(newObj);
} else {
  console.log("Error");
}

newObj.age === 27 ? console.log(newObj) : console.log("Error");

const arr = [
  {
    name: "Elmaz",
    lName: "Niksic",
    city: "Novi Pazar",
    age: 26,
    fullName: this.name + " " + this.lName,
  },
  {
    name: "awdawd",
    lName: "dawd",
    city: "dwad dawd",
    age: 24,
    fullName: this.name + " " + this.lName,
  },
]; */

// =    - inicijalizacija(dodela) vrednosti promenjivoj
// ==   - provera tacnosti
// ===  - provera tacnosti i tipa podatka

// Class based components su komponente bazirane na klasama i metodama

// += -povecava i dodaje vrednost
// ++ -increment (dodaje za 1)

// Node je runtime koji vrsi egzekuciju i kompajlovanje javascript koda
// Node ima mnostvo svojih modula, najpoznatiji us fs(fileSystem) i http modul

// Klase(Class) su izrada modela podatka unutar aplikacije(web ili bilo koje druge)
// Svaka klasa mora da ima metodu constructor(){}, a ona vrsi funkciju
// glavne funkcije(metode) unutar klase
// pomocu constructor metode se inicijalizuju glavni podaci unutar klase
// inicijalizacija promenljivih i dodela vrednosti njima
// vrsi se pomocu this metode (npr. this.name)
// metode su funkcije unutar klase koje takodje mogu vrsiti
// inicijalizaciju promenljivih i obradu podataka
// Svaka klasa MORA imati constructor metodu

// cd - change directory je komanda u terminalu
// koja sluzi za navigiranje kroz foldere unutar sistema

// ls - je komanda koja sluzi za izlistavanje
// fajlova i foldera unutar foldera

// mkdir - make directory je komanda koja sluzi
// za kreiranje novog direktorija ili foldera

// D - Document
// O - Object
// M - Model
// I sluzi za manipulaciju elementima html-a i css-a
// kroz JS kod
