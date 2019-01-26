const fs = require('fs');
const xl = require('xlsx');
const fileName = 'file'

const workbook = xl.readFile(`./file/${fileName}.xlsx`);
const sheetNames = workbook.SheetNames;
const worksheet = workbook.Sheets[sheetNames[0]];
const aJson = xl.utils.sheet_to_json(worksheet);
// console.log(workbook.Sheets[workbook.SheetNames[0]]);
for (let i = 0; i < aJson.length; i++) {
  // console.log(aJson[i])
  const A = `./${fileName}/${aJson[i].firstname}` ;
  const B = `./${fileName}/${aJson[i].lastname}`;
  fs.rename(A, B, err => {
    if (err) throw err;
    console.log('成功了');
  })
}