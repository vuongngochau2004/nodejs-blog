const pgp = require('pg-promise')()
const db = pgp('postgres://postgres:bourbon@localhost:5432/f8_education_dev');


function connect() {
    try { 
        
        db.any('select * from courses ' , [true])
        .then(data => {
            console.log('DATA:', data); // print data;
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        });
        
        console.log('Connect success!!'); 
    } catch (error) {
        console.log('Connect failure!!'); 
    }
}


module.exports = { connect };
