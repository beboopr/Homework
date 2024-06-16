function XO(str) {
  let xNumber = 0;
  let oNumber = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == 'x') {
       xNumber++;
    } else if (str[i].toLowerCase() == 'o') {
       oNumber++;
    }
  }
  if (xNumber === oNumber){
return true;
  }
  else return false;
}
  // else return false;

  let str = 'XO'
  console.log(XO(str))
