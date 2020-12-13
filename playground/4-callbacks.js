setTimeout(() => {
    console.log("Two Seconds are up");
}, 2000)

const names = ['Andrew', 'Jen', 'Jess'];
const shortNames = names.filter((name) => {
    return name.length <= 4;
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0,
        }
    
        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data);
});



const add = (no1, no2, callback) => {
    console.log("Start");
    setTimeout(() => {
        const sum = no1 + no2;
        callback(sum);
    }, 2000)
    console.log("End");
}

add(1, 4, (sum) => {
    console.log("Sum: " + sum);
})