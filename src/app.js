console.log("Hello world")

// when you create variable use let instead of var because you can't use var in block components.
// js is none type safe
let dolarBugun = 9.30
let dolarDun = 9.20

// const mean you can't change you variale vaule 
const euroConstant = 11
//euroConstant = 12
console.log(dolarDun)

let konutKredileri = ["Konut kredisi", "Emlak kredisi", "Ihtiyac kredisi"]
console.log(konutKredileri)
for (let i = 0; i < konutKredileri.length; i++) {
    const element = konutKredileri[i];
    console.log(element)
}