const express = require('express');
const User = require('../models/user');
const router = new express.Router();
const auth = require('../middleware/auth');

router.get('/test', (req, res)=>{
    res.send('From a new File');
})

router.post('/users/login', async(req, res)=>{
    try{
        const user = await User.findUserByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({user, token});
    }catch(e){
        res.status(400).send(e);
        console.log(e);
    }
})
router.post('/users/logout', auth, async(req, res)=>{
    try{
        const token = req.token;

        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        });
        await req.user.save();

        res.status(200).send('done');
    }catch(e){
        res.status(400).send(e);
        console.log(e);
    }
})
router.post('/users/logoutAll', auth, async(req, res)=>{
    try {
        req.user.tokens = [];
        await req.user.save();
        res.status(200).send('Logged out of all');
    } catch (e) {
        res.status(500).send(e);
        console.log(e);
    }
});
router.post('/users', async (req, res)=>{
    const user = new User(req.body);

    try
    {
        const token = await user.generateAuthToken();

        await user.save();
        res.status(201).send({user, token});
        
    }
    catch(e)
    {
        res.status(400).send(e);
        console.log(e)
    }
})
router.get('/users/me', auth, async(req, res)=>
        {
            res.send(req.user);
        }
    )
// router.get('/users/:id', async (req, res)=>{
//     const _id = req.params.id;
//     try
//     {
//         const user = await User.findById(_id);

//         if(!user){ 
//             return res.status(404).send();
//         }

//         res.send(user);
//     }
//     catch(e)
//     {
//         res.status(500).send(e);
//         console.log(e);
//     }
// });
router.patch('/users/me', auth, async (req, res)=>{
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOpertation = updates.every((update)=> allowedUpdates.includes(update));

    if(!isValidOpertation)
    {
        res.status(500).send({error: 'The following property does NOT exist'});
    }



    try {
        updates.forEach((update)=> req.user[update] = req.body[update])
        await req.user.save();

        // req.body, {new:true, runValidators:true}
        res.status(200).send(req.user);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/users/me', auth, async (req, res)=>{
    try{
        // const user = await User.findByIdAndDelete(req.user._id);

        // if(!user)
        // {
        //     return res.status(404).send({error: 'This user does NOT exist'});
        // }
        await req.user.remove();
        res.status(200).send(req.user);
    }catch(e){
        return res.status(404).send(e);
    }
});

module.exports = router;