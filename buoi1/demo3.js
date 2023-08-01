//function
//1. function without parameters and no return
function sayHello(){
    console.log("Hello world!");
}
sayHello() //function call
//2. function without parameters but has return
function greenwich(){
return "Greenwich VN";
}
console.log("Hello " +greenwich()) //function call
//3. function with parameters and no return
function calculateSum(a, b){
//c = a + b
//console.log("Total: "+c)
console.log("Total: " + (a +b))
}
calculateSum(10, 15)
//4. function with parameters and has return
function sayHi(name){
    return name
}
console.log("Welcome " +sayHi("Hai Nam ")+"to Greenwich!") 