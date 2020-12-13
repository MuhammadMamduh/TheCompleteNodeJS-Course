const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=62ac95cb6ac6de53a9a7f6a510b45796&query=40,-75]]&units=m';


const request = http.request(url, (response) => {
    let data = "";

    response.on('data', (chunk)=>{

        data += chunk.toString();
    })

    response.on('end', ()=>{
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log('An error: ' + error);
})

request.end();