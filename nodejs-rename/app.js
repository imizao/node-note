const fs = require('fs');
const xl = require('xlsx');

const workbook = xl.readFile('./a.xlsx');
const sheetNames = workbook.SheetNames;
const worksheet = workbook.Sheets[sheetNames[0]];
const aJson = xl.utils.sheet_to_json(worksheet);
// console.log(workbook.Sheets[workbook.SheetNames[0]]);
for (let i = 0; i < aJson.length; i++) {
  // console.log(aJson[i])
  const A = './file/' + aJson[i].firstname;
  const B = './file/' + aJson[i].lastname;
  fs.rename(A, B, err => {
    if (err) throw err;
    console.log('成功了');
  })
}