const files = fs.readdirSync(__dirname);
console.log(files);
exports.add = (a, b) => {
  return a + b;
};
