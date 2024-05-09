const Course = require('../models/Course');
const mongoose = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/course 
    storedCourses(req, res, next) {
        Course.find({})
        .then(courses => {
            res.render('me/stored-courses', {
                courses: mongoose.mongoosesToObject(courses)
            })
        })
        .catch(next);
    }
}

module.exports = new MeController();
