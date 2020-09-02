const randFun = {
  upper: getUpparcase,
  lower: getLowercase,
  number: getNumber,
  symbol: getSymbol,
};

var upper = true;
var lower = true;
var number = true;
var symbol = true;
var length = 10;
var password = getFullpass();
console.log('Generated password is :' + password);
function getFullpass() {
  let generatedPassword = '';
  const typesCount = upper + lower + number + symbol;

  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  // console.log(typesArr);
  if (typesCount === 0) return '';
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((val) => {
      const funcName = Object.keys(val)[0];
      //console.log('fun ' + funcName);
      //   console.log('-->' + randFun[funcName]());
      generatedPassword += randFun[funcName]();
    });
  }

  return generatedPassword.slice(0, length);
}
function getNumber() {
  return Math.floor(Math.random() * 10);
}

function getLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function getUpparcase() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}
function getSymbol() {
  const symbol = '!@#$%^&*(){}[]/<.,>?;=+';
  return symbol[Math.floor(Math.random() * 10)];
}
