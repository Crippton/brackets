module.exports = function check(str, bracketsConfig) {
  const arr = [];
  const openBrackets = [];
  const closeBrackets = [];

  bracketsConfig.forEach((item) => {
    openBrackets.push(item[0]);
    closeBrackets.push(item[1]);
  });

  for (let index = 0; index < str.length; index++) {
    if (closeBrackets.includes(str[index]) && arr.length !== 0) {
      const correspondBracket = openBrackets[closeBrackets.indexOf(str[index])];
      if (arr[arr.length - 1] === correspondBracket || arr[arr.length - 1] === str[index]) {
        arr.pop();

      } else if (str[index] !== correspondBracket) {
        return false;

      } else {

        arr.push(str[index]);
      }
    } else {
      arr.push(str[index]);
    }
  }
  return arr.length === 0;
};
