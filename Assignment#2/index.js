//question#1

// function add(a) {
//     return function (b) {
//         return a + b;
//     }
// }

// let result = add(5);
// console.log(result(12));
// console.log(result(10));

//question#2

// function searchArray(arr, value, index = 0) {
//     if (index >= arr.length) {
//         return false;
//     }
//     if (arr[index] === value) {
//         return true;
//     }
//     return searchArray(arr, value, index + 1);
// }

// const arr = [2, 4, 6, 8, 10];
// const value = 8;
// console.log(searchArray(arr, value));


//question#3


// function addParagraphToEnd(text) {
//   const p = document.createElement('p');
//   p.textContent = text;
//   document.body.appendChild(p);
// }


//question#4

// function addListItem(text) {
//   var ul = document.querySelector('ul'); // get the unordered list element
//   var li = document.createElement('li'); // create a new list item element
//   li.textContent = text; // set the text content of the list item
//   ul.appendChild(li); // append the list item to the unordered list
// }

//question#5

// function changeBackgroundColor(element, color) {
//   element.style.backgroundColor = color;
// }


//question#6

// function getObjectFromLocalStorage(key) {
//   const storedObject = localStorage.getItem(key);
//   return JSON.parse(storedObject);
// }

//question#7

function getObjectFromLocalStorage(key) {
  const storedObject = localStorage.getItem(key);
  return JSON.parse(storedObject);
}

//question#8

function saveAndRetrieveObject(obj) {
  Object.keys(obj).forEach(function (key) {
    localStorage.setItem(key, JSON.stringify(obj[key]));
  });

  var newObj = {};
  Object.keys(obj).forEach(function (key) {
    newObj[key] = JSON.parse(localStorage.getItem(key));
  });

  return newObj;
}
