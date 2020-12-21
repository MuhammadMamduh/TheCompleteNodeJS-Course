require('../src/db/mongoose');

const Task = require('../src/models/task');

// Task.findByIdAndDelete('5fdbaa343b307e63aa911892').then((res)=>{
//     console.log(res);

//     return Task.countDocuments({completed:false})
// }).then((res2)=>{
//     console.log(res2);
// }).catch((e)=>{
//     console.log(e);
// })

const deleteAndCountIncompletedTasks = async (id, completed)=>{
    const task = Task.findByIdAndDelete(id);
    const count = Task.countDocuments(completed);

    return count;
}

deleteAndCountIncompletedTasks('5fdbaa343b307e63aa911892', false).then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
});