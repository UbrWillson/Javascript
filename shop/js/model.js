const products = [
    {id: 1, title: 'product1', category: 'notebooks', img: 'prod1.jpg', price: 1000},
    {id: 2, title: 'product2', category: 'smartphones', img: 'prod2.jpg', price: 3000},
    {id: 3, title: 'product3', category: 'monitor', img: 'prod3.jpg', price: 1500},
    {id: 4, title: 'product4', category: 'notebooks', img: 'prod4.jpg', price: 1500},
    {id: 5, title: 'product5', category: 'smartphones', img: 'prod5.jpg', price: 2000},
    {id: 6, title: 'product6', category: 'monitor', img: 'prod6.jpg', price: 2000},
   

];


// function compare(a, b) {
//     return a.price - b.price
// };

// console.log(products.sort(compare))
// function sort(){
//     let secondArr = [];
//     if(products.category === 'notebooks'){

//     }
// }
// filering data v1
// const doc = document;
// const mainSelector = doc.querySelector("#selector");

// let arr_categories = [];
// for (const product of products) {
//   arr_categories.push(product.category);
// }
// console.log(arr_categories);
// const result = arr_categories.filter((element, index) => {
//   return arr_categories.indexOf(element) === index;
// });

// let optionsHTML = "";
// for (const category of result) {
//   optionsHTML += `<option>${category}</option>`;
// }

// mainSelector.innerHTML = optionsHTML;
// // filtering data v2
// const categories = getCategories(products);

// function getCategories(prodArr) {
//     return categories = Array.from(
//         new Set(prodArr.map(prod => prod.category))
//     );
// }
