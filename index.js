// array of colours to pivk from 
var colours = ['blue', 'yellow', 'green', 'organe','purple']

let button = document.getElementById('button')

button.addEventListener('click', function() // will recongise when someone clicks on the button 
{
    //math.round rounds number to nears integerm math.radnom gives you a random number
    var randomColour = colours[Math.round(Math.random()* colours.length)] // math random generates random number between 0 and the length of the array 
document.body.style.backgroundColor = randomColour
}
)