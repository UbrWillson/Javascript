

function foreach(callback, array) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }
  
 
  let items = [1, 2, 3, 4, 5];
  foreach(item => console.log(item), items);


  

/*
  function map(callback, array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i]));
    }
    return result;
  }
  
  
  let items = [1, 2, 3, 4, 5];
  let squaredItems = map(item => item * item, items);
  console.log(squaredItems);
*/




/*
function filter(callback, array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  
  let items = [1, 2, 3, 4, 5];
  let evenItems = filter(item => item % 2 === 0, items);
  console.log(evenItems);
  */






  /*
  function find(callback, array) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
  return undefined;
}


let items = [1, 2, 3, 4, 5];
let foundItem = find(item => item === 3, items);
console.log(foundItem);
*/