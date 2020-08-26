const db = require('./db');
const bcrypt = require('bcrypt');


module.exports = {
    goToDB: (data) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT userPassword FROM users WHERE userMail='${data.userMail}'`, (err,result) => {
                bcrypt.compare(`${data.userPassword}`, `${result[0].userPassword}` , (err, result) => {
                    if (result) {
                        resolve(`'${data.userMail}'`)
                    }else{
                        reject(false)
                    }
                })
            })
        })
        
    }
}