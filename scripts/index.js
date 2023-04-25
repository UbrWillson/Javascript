// const building = {
//  type:"detached house",
//  "floor number": 1,
//  "age of house": 4,
//  bricks: "red_bricks",
//  "windows amount": 6
// }
// delete building.bricks;
//  building.garden = "avaliable";

//  console.log(building)

const users = [
  {
    name: "John",
    year_of_birth: 2005,
    surname: "Run",
    job: "plumber",
    card_balance: 1200,
  },
  {
    name: "Mark",
    year_of_birth: 2003,
    surname: "bush",
    job: "painter",
    card_balance: 12400,
  },
  {
    name: "Jessy",
    year_of_birth: 2007,
    surname: "Creator",
    job: "scientist",
    card_balance: 321200,
  },
  {
    name: "Rocky",
    year_of_birth: 2000,
    surname: "Parliamentor",
    job: "streamer",
    card_balance: 132200,
  },
  {
    name: "Andrew",
    year_of_birth: 2015,
    surname: "Barrel",
    job: "student",
    card_balance: 120,
  },
];

function age_finder(todays_year, users) {
  let agefinder = [];
 
  for (let i = 0; i < users.length; i++) {
    if (todays_year - users[i].year_of_birth >= 18) {
      agefinder.push(users[i]);
    }
  }
  return agefinder;
}
console.log(age_finder(2023));

// function page_allower(users, minimum_age = MIN_AGE){
// const user_allower = [];
// for(let user of users){
//     if(user.year_of_birth>=minimum_age){
//         user_allower.push(users)
//     }
// }
// return user_allower;
// }
// console.log(page_allower(users))
