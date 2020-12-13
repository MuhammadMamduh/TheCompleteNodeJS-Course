const fs = require('fs');

// WRITE
// const book = {
//     title: "Ego is the enemey",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON)

// READ
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString() //////////////////////////////
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const readFromFile = fs.readFileSync('1-json.json');
const parsedData = JSON.parse(readFromFile);

parsedData.name = "Muhammad";
parsedData.planet = "Independent";
parsedData.age = "25";

const stringfiedData = JSON.stringify(parsedData);

fs.writeFileSync('1-json.json', stringfiedData)
