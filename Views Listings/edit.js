const ejs = require('ejs');
ejs.renderFile('edit.ejs', { title: 'Wanderlust' }, (err, str) => {
    if (err) {
        console.error(err);
    } else {
        console.log(str);
    }
});