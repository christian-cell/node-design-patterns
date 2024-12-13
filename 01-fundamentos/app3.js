const fs = require('fs');

const content = fs.readFileSync('readme.md', 'utf8');

const word = content.split(' ');

// let reactWordCount = word.filter(( word ) => word.toLowerCase().includes('react')).length;

let reactWordCount = content.match(/react/gi ?? []).length; /* best aproach */

/* for (let i = 0; i < wordCount.length; i++) {

   if( wordCount[i].toLowerCase() == 'react' ) reactWordCount ++;
    
} */

