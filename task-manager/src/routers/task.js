const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/tasks', auth, async (req, res)=>{
    // const task = new Task(req.body);

    const task = new Task({
        ...req.body,
        owner: req.user._id
    });

    // task.save().then(()=>{res.status(201).send(task)}).catch((e)=>{res.status(400).send(e)});
    try{
        await task.save();
        res.status(201).send(task);
    }catch(e){
        res.status(400).send(e)
    }
})

// GET /tasks?completed=true
// GET /tasks?limit=10&skip=20
// GET /tasks?sortBy=createdAt_desc
router.get('/tasks', auth, async(req, res)=>{
    // Task.find({}).then((tasks)=>{res.status(201).send(tasks)}).catch((e)=>{res.status(400).send(e)});

    const match = {};
    const sort = {};

    if(req.query.completed)
    {
        match.completed = req.query.completed === "true"
    }

    if(req.query.sortBy)
    {
        const parts = req.query.sortBy.split("_");
        sort[parts[0]] = parts[1] === 'desc' ? -1:1
    }
    try{
        // Approach: 2
        // console.log(parseInt(req.params.limit) + " ---- " + parseInt(req.params.skip));
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
        res.send(req.user.tasks);
    }catch(e){
        res.status(400).send(e);
    }
})
router.get('/tasks/:id', auth, async(req, res)=>{
    const _id = req.params.id;

    try{
        const task = await Task.findOne({_id, owner: req.user._id});
        // console.log(task);
        if(!task)
        {
            console.log('anything')
            return res.status(404).send();
        }

        res.status(201).send(task); 
    }catch(e){
        res.status(500).send(e);
    }
})
router.patch('/tasks/:id', auth, async(req, res)=>{
    const allowed = ['description', 'completed'];
    const upcoming = Object.keys(req.body);

    const validUpdate = upcoming.every((member)=>allowed.includes(member));

    if(!validUpdate)
    {
        res.status(500).send({error: 'A Field or more is NOT valid'});
    }

    try{
        const task = await Task.findOne({_id: req.params.id, owner:req.user._id}); // AndUpdate(req.params.id,req.body, {new:true, runValidators:true}

        if(!task)
        {
            res.status(404).send();
        }
        upcoming.forEach((item)=> task[item]=req.body[item]);
        await task.save();
        res.status(200).send(task);
    }catch(e){
        res.status(500).send(e);
        console.log(e);
    }
});
router.delete('/tasks/:id', auth, async (req, res)=>{
    try{
        const task = await Task.findOneAndRemove({_id: req.params.id, owner: req.user._id});
        res.status(200).send();
        if(!task)
        {
            return res.status(404).send({error: 'This task does NOT exist'});
        }
    }catch(e){
        return res.status(404).send(e);
    }
});

module.exports = router;