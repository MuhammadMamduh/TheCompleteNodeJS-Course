function fromDecimalToBinary(decimal)
{
    if(decimal===0)
    {
        return 0;
    }
    else if(decimal===1)
    {
        return "01";
    }
    
    var binaryString="";
    var donimerator= decimal/2;
    var remanider= 0;
    
    
    while (decimal>0)
    {
        remanider = decimal%2;
        binaryString += remanider.toString();
        
        decimal = Math.floor(decimal / 2);
    }
    // console.log('binaryString: ' + binaryString.split("").reverse().join(""));
    
    
    return binaryString.split("").reverse().join("");
}

function andBits(first, sec)
{
    if(first=="1" && sec=="1")
    {
        return "1";
    }
    else
    {
        return '0';
    }
}

            // if(n==2)
                // console.log(i + '----' + o);
            // temp = parseInt(andResult(fromDecimalToBinary(o), fromDecimalToBinary(i)), 2); 
            // console.log(">>>>>" + i.toString(2), o.toString(2));