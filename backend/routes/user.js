const router= require('express').Router();
let User= require('../models/users.model');

router.route('/').get((req,res)=>{  //get- retrieves data from the server, does not modify
    User.find()
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error: ' + err));
}); 


router.route('/add').post((req,res)=>{     //post-sends data to the server for         processing and modification

    const username= req.body.username;   
    const newUser=new User({username});

    newUser.save()
    .then(()=>res.json('User added'))
    .catch(err=>res.status(400).json('Error: ' + err));
});

module.exports= router;

