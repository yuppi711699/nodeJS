// const addd = require('./app.js');
const { sum } = require("./app.js");
const fs = require("fs");
// const path = require("path");
const { extname } = require("path");
const chalk = require("chalk");
const second = require("./subtract.js");
const add = sum(4, 7);
console.log(add);
const files = fs.readdirSync(__dirname);

for (const file of files) {
    if (extname(file) === ".json") {
        console.log(chalk.magenta(file));
    } else {
        console.log(file);
    }
}
console.log(process.env);
setInterval(() => { }, 10000);