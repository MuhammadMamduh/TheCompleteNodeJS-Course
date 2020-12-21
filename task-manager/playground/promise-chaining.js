require('../src/db/mongoose');
const User = require('../src/models/user');

//

// User.findByIdAndUpdate("5fd74b40aff5a37129bd469b", {age: 1}).then((user)=>{
//     console.log(user);

//     return User.countDocuments({age:1});
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })

const updateAndCount = async (id,age)=>{
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age});

    return count;
}

updateAndCount('5fd74bc57e04f07452c33954',1).then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
})