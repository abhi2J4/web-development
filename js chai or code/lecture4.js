// Datatype convesion confusion

let age = 33;
let number = "90"
let score = null;

console.log(typeof age)
console.log(typeof(number))
let valueInNumber=Number(age)
console.log(typeof(valueInNumber))
console.log(valueInNumber)
console.log(score)

//"33"=>33
//"33abc"=>NaN
// true => 1;false =>0

//let passwordcorrect = 1;
//let passwordcorrect = "";
let passwordcorrect="12333"

let login = Boolean(passwordcorrect)
//let login = Boolean(typeof(passwordcorrect))


console.log(login)

// 1=>true; 0 =>false
//"" => false
// "abhishek" => true


let someUmber = 33;

let stringNumber = String(someUmber)
console.log(stringNumber)