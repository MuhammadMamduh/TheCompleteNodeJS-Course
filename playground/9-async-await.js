 const doWork = async()=>{ 
     throw new Error('Error');
    return 'Andrew';
 };

doWork().then((result)=>{
    console.log('result: ', result);
}).catch((e)=> {
    console.log('error: : ', e);
})

