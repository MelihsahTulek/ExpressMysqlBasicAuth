const db = require('./db');
const bcrypt = require('bcrypt');

module.exports = {
    saveToDB: (data) => {
        return new Promise((resolve, reject) => {
            bcrypt.hash(data.userPassword, 10, function(err, hash) {
                if (err) {
                    console.log(err)
                }else{
                    db.query(`INSERT INTO users (userFullName,userMail,userPassword) values ('${data.userName}', '${data.userMail}', '${hash}')`, (err,result) => {
                        if (err) {
                            console.log(err);
                        }else{
                            resolve(result.affectedRows);
                        }
                    });
                }
            });
        })
        
    }
}