const fs = require('fs');
const {writeFile} = require("fs");


writeFile("/mnt/data/projects/zoom-app-privacy-data/test.txt", "hi", (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
    } else {
        console.log('Links have been written to', "test.txt");
    }
});