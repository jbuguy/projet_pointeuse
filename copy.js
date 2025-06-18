const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "dist");
const indexHtml = path.join(distPath, "index.html");
const errorHtml = path.join(distPath, "404.html");

fs.copyFileSync(indexHtml, errorHtml);
console.log("Copied index.html to 404.html");
