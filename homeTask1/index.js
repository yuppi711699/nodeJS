const math = require('./app.js');
const { sum } = require("./app.js");
const fs = require("fs");
const { extname } = require("path");
const chalk = require("chalk");
const second = require("./subtract.js")
const add = sum(4, 7);
const multy_numb = math.multy(3, 5);
console.log(multy_numb)
console.log(add);
const files = fs.readdirSync(__dirname);

for (const file of files) {
    if (extname(file) === ".json") {
        console.log(chalk.magenta(file))
    } else {
        console.log(file);
    }
}
