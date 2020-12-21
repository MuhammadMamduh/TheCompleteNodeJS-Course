const mongooose = require('mongoose');


mongooose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
})



// const me = new User({
//     name: '     Mike     ',
//     password: '    1234567  ',
//     email: '   MIKE@MEAD.IO',
// })



// me.save().then((me)=>{
//     console.log(me)
//     }).catch((error)=>{ 
//         console.log('Error: ', error)
//     });



// const task_1= new Task({ });
// task_1.save().then((task_1)=>{
//     console.log(task_1);
// }).catch((error)=>{
//     console.log(error);
// })
