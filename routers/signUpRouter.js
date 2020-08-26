const express = require('express');
const router = express.Router();
const signupCtrl = require('../controller/signUpController').postData;

router.get('/', (req, res) => {
    res.render('signUp');
});

router.post('/', (req, res) => {
   signupCtrl(req)
   .then((result) => {
       if (result) {
           res.render('signIn', {ok:'Success, your new account is ready.'});
       }
   }).catch((err) => {
       console.log(err)
   });
  
});

module.exports = router;