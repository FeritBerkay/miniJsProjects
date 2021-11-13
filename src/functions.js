//don't repeat yourself
// we use functions for use them in various pages.

//defult value is egg. write default value in the end
function addToCart(quantity,productName="Egg") {
    console.log("Sepet eklendi: " + productName + " adet:" + quantity)
}
//null is in the memory but there is a no equal thing.
//undifined is not in the memory.
addToCart(14,"Apple")
addToCart(2,"Banana")
addToCart(null)

//funtion variable, arrow function
let sayHello = ()=>{
    console.log("HEllO world")
}
sayHello()

let product1 = {productName:"Apple", quantity:5, unitPrice:20}
function addToCart2(product) {
    console.log("Name:" + product.productName + " Quantity:" + product.quantity + " unitPrice:"+ product.unitPrice)
} 
addToCart2(product1)

//arrays work with  heap. Object are refenrence type. REFERENCE KEEPER, ADDRESS KEEPER 
let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

//variables work with stack 
let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

// as you see there you can just sum 2 number if you want to sum number you must use add2 func
function add(number1, number2) {
    console.log(number1+number2)
}



// REST OPERATION=> ... make array. And you objects are add you array and array name is numbers.
function add2(...numbers) {
    let total =0
    for (let i = 0; i < numbers.length; i++) {
        total= total + numbers[i]
    }
    console.log(total)
}

add2(20,30,40)


let numbers = [20,30,5030,50305]
//like a for function spearding arrayden cikarip hepsini ayri ayri yazar
console.log(...numbers)
console.log(Math.max(...numbers))



// distracting
// 3 index is our sousege we distract them again
let [patates, kofte,[Ketcapli,Mayonezli]]=[
    {name:"patates", price:"10"},
    {name:"kofte", price:"20"},
    [
        ["Ketcapli"],
        ["Mayonezli"]
    ]
]

console.log(patates)
console.log(patates.name)
console.log(kofte)
console.log(Ketcapli)


//usefull useing iteration
let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)