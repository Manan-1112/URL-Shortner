const express = require('express');
const router=express.Router();
const {handleGetrequest,handlePostReq,analysis,handleSignup,handlelogin} = require("../controllers/urlcontroller");
const authCheck = require("../middlewares/authCheck");

router.get('/test',authCheck, (req, res) => {
  res.render('index'); 
});

router.get('/login', (req, res) => {
  res.render('login'); 
});

router.get('/signup', (req, res) => {
  res.render('signup'); 
});

router.post('/login',handlelogin);

router.post('/signup',handleSignup);  

router.post('/test',handlePostReq);
router.get('/analytics/:id',analysis);
router.get('/:id',handleGetrequest);

module.exports=router;