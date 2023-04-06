// const num = prompt("Type number")
// if (num > 0 && num <10) {
//     console.log(num,"", "Меньше 10 і більше 0", "."); 
// } else if (num > 15 && num < 25) {
//     console.log(num," ", "Меньше 15 і більше 25", ".");
// } else {
//     console.log(num, "Все інше.");

// }
// let name_1 = "Alex"
// let someName = "Mykola"
// name_1 = "Jeka"
// // name_1 = someName + name_1
// console.log(name_1)

// name_1 += someName;


// let brand_1 = "Asus";
// let brand_2 = "OPPO";
// let brand_3 = "Acer";
// // В масиви можна пихати все що завгодно
// let brandArray = ["Asus","OPPO","Acer", "Lenovo", "MSI"]
// let numArray = [1,2,3,4,5,6,7,8,9]

// function print_2(id,firstName, secondName, lastName) {
//     return `${id}. ${firstNmae} ${secondName} ${lastName}.`

// }

// const fullname = print(10, "Савенко", "Владислав", "Леонідович")

// const calc = (a, b, operator) => {
//     let result;


// switch(operator) {
//     case "*":
//     result = a * b
//     break;
//     case "+":
//         result = a + b
//         break;
//         case "-":
//             result = a - b
//             break;
//             case "/":
//                 result = a / b
//                 break;
// }
//     return result;
// }

const carArray = ["Mercedes", "BMW", "Toyota", "Subaru", "Volkswagen"]

function getcarArray (array) {
    return `${array[0]}, ${array[array.length-1]}`
}
console.log(getcarArray(carArray))