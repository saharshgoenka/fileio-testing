const fs = require('fs');
const {writeFile} = require("fs");


writeFile("test.txt", "hi", (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
    } else {
        console.log('Links have been written to', "test.txt");
    }
});
