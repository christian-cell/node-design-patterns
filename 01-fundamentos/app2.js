const fs = require('fs');

const data = fs.readFileSync('readme.md', 'utf8');

const newdata = data.replace(/React/ig,'Angular')


fs.writeFileSync('README-Angular.md', newdata);