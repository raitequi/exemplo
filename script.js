const fs = require("fs");

fs.open("exemplo.txt", "w", function callback(erro, arquivo) {
    console.log('GAAAAAH!');
});