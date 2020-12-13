const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

var myArgs = process.argv.slice(2);
if(myArgs.length>0)
{
    myArgs.forEach((arg) => {
    {
        geocode(arg.replace('-', ''), (error, {latitude, longitude, location}) =>{
            if(error)
            {
                return console.log('Error: ', error);
            }
        
            forecast(latitude, longitude, (error2, {desc, temp, feelslike}) => {
            if(error)
            {
                return console.log('Error:- ', error2);
            }
                console.log('\n>>>>>>>>>>>>>>>>>>>>>>>>> ' + location);
                console.log('Description: ' + desc + '\nTemprature: ' + temp + '\nFeelslike' + feelslike + '\n__________________________');
            })
        })
    }
    });
}
else 
{
    console.log('Please enter at least one argument(location)');
}




