const mongooose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const taskSchema = mongooose.Schema(
    {
        description: 
        {
            type: String,
            trim: true, 
            required: true
        },
        completed:
        {
            type: Boolean,
            default: false,
        },
        owner:
        {
            type: mongooose.Schema.ObjectId,
            required: true,
            ref: 'User'
        }
    }, {
        timestamps: true
    }
);

taskSchema.methods.toJSON = function (){
    const task = this;
    const taskObject = task.toObject();
    
    // delete taskObject.password;
    // delete taskObject.tokens;

    return taskObject;
}

taskSchema.pre('save', async function(next){
    const task = this;

    if(task.isModified('description'))
    {
        task.description+='-';
    }

    next();
})
const Task = mongooose.model('Task', taskSchema);

module.exports = Task;