module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let isOpening = isOpeningBracket(str[i], bracketsConfig);
    if (isOpening) {
      stack.push(str[i]);
    }
    else {
      let lastOpeningBracket = stack.pop();
      if (getOpeningBracket(str[i], bracketsConfig) !== lastOpeningBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
} 

function isOpeningBracket(symbol, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
      if (symbol === bracketsConfig[i][0]) {
          return true;
      }
  }
return false;
}

function getOpeningBracket (closingBracket, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (closingBracket === bracketsConfig[i][1]) {
      return bracketsConfig[i][0];
    }
  }
}