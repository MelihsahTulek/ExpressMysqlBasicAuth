const express = require('express');
const router = express.Router();
const signInCtrl = require('../controller/signInController').postData;

router.get('/signIn', (req, res) => {
    res.render('signIn');
});

router.post('/signIn', (req, res) => {
    signInCtrl(req)
    .then((result) => {
        if (result) {
            res.render('userPage', {auth:result})
        }
    }).catch((err) => {
        if (!err) {
            res.render('signIn' , {err:'user password is not true'})
        }
    });
});

module.exports = router;