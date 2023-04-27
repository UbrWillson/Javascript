
const phone_arr = [
    {id:1,name:"iphone",memory:"64gb"},
    {id:2, name:"samsung",memory:"128gb"},
    {id:3, name:"Mototorola", memory:"32gb"},
    {id:4, name:"Xiaomi", memory:"512gb"}
]
let question = prompt("напишіть назву телефона")
let memory = prompt("Напишіть об'єм пам'яті")
let added_phone= {id: phone_arr.length+1, name: question, memory: memory}
let date = new Date();
function add_phone(){
    phone_arr.push(added_phone)
    return phone_arr;
}
console.log(add_phone())
document.write(date)