const marked = require('marked');
const fs = require('fs');
var DOMPurify = require('dompurify')

// Terms and Privacy v2020
var termsMD = __dirname + "/public/legal/TERMS-v2.md";
var file = fs.readFileSync(termsMD, "utf8");
var markdownTerms = marked(file);
fs.writeFileSync('./views/legal/raw/terms.ejs', markdownTerms);

var privacyMD = __dirname + "/public/legal/PRIVACY-v2.md";
var file = fs.readFileSync(privacyMD, "utf8");
var markdownPrivacy = marked(file);
fs.writeFileSync('./views/legal/raw/privacy.ejs', markdownPrivacy);

// Terms and Privacy v2019
var terms2019md = __dirname + "/public/legal/TERMS.md";
var file = fs.readFileSync(terms2019md, "utf8");
var markdownTerms2019 = marked(file);
fs.writeFileSync('./views/legal/raw/terms-2019.ejs', markdownTerms2019);

var privacy2019md = __dirname + "/public/legal/PRIVACY.md";
var file = fs.readFileSync(privacy2019md, "utf8");
var markdownPrivacy2019 = marked(file);
fs.writeFileSync('./views/legal/raw/privacy-2019.ejs', markdownPrivacy2019);
