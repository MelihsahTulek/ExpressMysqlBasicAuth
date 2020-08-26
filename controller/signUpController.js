const signUpModel = require('../model/signUpModel').saveToDB;

module.exports = {
    postData: (req) => {
        return new Promise((resolve, reject) => {
            let data = {
                userName:req.body.newUserFullName,
                userMail:req.body.newUserMail,
                userPassword:req.body.newUserPassword
            };
            signUpModel(data)
            .then((result) => {
                if (result) {
                    resolve(result)
                }
            });
        })
    }
}
