//conditional statements 
// 1 possible case: if
// 2 possible cases: if + else
// more than 2 possible cases: if + else if + else
grade = 7.5
if(grade >= 5.0){
console.log("Your grade was " + grade)
console.log("pass")
}else{
console.log("Your grade was " + grade)
console.log("fail")
}
a = 3
b = 5
c = 4
if(a >=b && a>=c){
    console.log(a +  " is max")
}else if(b >=a && b>=c){
    console.log(b+  "is max")
}else {
    console.log(c + "is max")
}

choice = 3
switch(choice){
    case 1:
        console.log("Light 1 is turned on")
        break;
    case 2:
        console.log("Light 2 is turned on")
        break;
    case 3:
        console.log("Light 3 is turned on")
        break;
        default:
            console.log("Invalid choice")
}