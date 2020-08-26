const signInModel = require('../model/signInModel').goToDB;

module.exports = {
    postData: (req) => {
        return new Promise((resolve, reject) => {
            let data = {
                userMail:req.body.userMail,
                userPassword:req.body.userPassword,
                rMe:req.body.rMe
            };
            signInModel(data)
            .then((result) => {
                // CREATE A NEW SESSION 
                req.session.mail = result;
                resolve(`${req.session.mail}`);
            }).catch((err) => {
                reject(err)
            });
            
        })
    }
}
