module.exports = function check(str, bracketsConfig) {
  const newArr = bracketsConfig.flat();
  const template = newArr.reduce((akk, element) => {akk +=element; return akk},'');
  return str.search(template) !== -1;
}
