
const Course = require('../models/Course');

class SiteController {
    // [GET] /news
    index(req, res) {
        db.any('select * from courses ' , [true])
        .then(data => {
            console.log('DATA:', data); // print data;
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        });
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
