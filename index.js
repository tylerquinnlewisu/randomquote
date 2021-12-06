function getQuote() {
    
       fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "quotes15.p.rapidapi.com",
            "x-rapidapi-key": "07a80989f5mshd3144752964092cp1b996fjsn207b2f561f03"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        console.log(response.content);
        document.getElementById("textID").innerHTML = response.content;
        console.log(response.originator.name);
        document.getElementById("nameID").innerHTML = response.originator.name;
        
    })
    .catch(err => {
        console.error(err);
    });
    

    
    
    


    

}

function randomNumber() {
    var result           = '';
    var characters       = '1234567';
    var charactersLength = characters.length
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result; 

}



function randomizeComplementaryWebDesign() {
    var hexOne = '4'; 
    var hexTwo = 'f'; 
    var hexThree = randomNumber(); 
    var hexFour = randomNumber(); 
    var hexFive = 'f'; 
    var hexSix = randomNumber(); 
    var bgcolor = hexOne + hexTwo + hexThree + hexFour + hexFive + hexSix;
    console.log(bgcolor); 
    var site = "https://colors1.p.rapidapi.com/complementary?hexcolor=";
    site += bgcolor; 
    var div = document.getElementById( 'container' );
    div.style.backgroundColor = "#" + bgcolor;
    console.log(site); 
    fetch(site, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "colors1.p.rapidapi.com",
            "x-rapidapi-key": "07a80989f5mshd3144752964092cp1b996fjsn207b2f561f03"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        console.log(response.commplementary);
        document.getElementById("headingID").style.color = response.commplementary;
        document.getElementById("textID").style.color = response.commplementary;
        document.getElementById("nameID").style.color = response.commplementary;
        document.getElementById("container").style.color = response.commplementary;
        
    })
    .catch(err => {
        console.error(err);
    });
}


function getAnalogous() {
    var hexOne = randomNumber(); 
    var hexTwo = randomNumber(); 
    var hexThree = randomNumber(); 
    var hexFour = randomNumber(); 
    var hexFive = randomNumber(); 
    var hexSix = randomNumber(); 
    var bgcolor = hexOne + hexTwo + hexThree + hexFour + hexFive + hexSix;
    document.getElementById("headingID").style.color = "#" + bgcolor;
        fetch("https://colors1.p.rapidapi.com/analogous?hexcolor=" + bgcolor, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "colors1.p.rapidapi.com",
            "x-rapidapi-key": "07a80989f5mshd3144752964092cp1b996fjsn207b2f561f03"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response.analogous);
        console.log(response.analogous[0]);
        console.log(response.analogous[1]);
        
        document.getElementById("textID").style.color = response.analogous[0];
        document.getElementById("nameID").style.color = response.analogous[0];
        document.body.style.backgroundColor = response.analogous[1];
    })
    .catch(err => {
        console.error(err);
    });

}






