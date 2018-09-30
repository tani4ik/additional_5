module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];
    let bracketsFromConfig = getBracketsFromConfig(symbol, bracketsConfig);

    if (bracketsFromConfig[0] !== bracketsFromConfig[1]) {
      if (symbol === bracketsFromConfig[0]) {
        stack.push(symbol);
      } else {
        let lastOpeningBracket = stack.pop();
        if (bracketsFromConfig[0] !== lastOpeningBracket) {
          return false;
        }
      }
    } else {
      let topOfTheStack = stack.length > 0 ? stack[stack.length - 1] : undefined;
      if (topOfTheStack !== symbol) {
        stack.push(symbol);
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

function getBracketsFromConfig(bracketSymbol, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketSymbol === bracketsConfig[i][0] || bracketSymbol === bracketsConfig[i][1]) {
      return bracketsConfig[i];
    }
  }
}
