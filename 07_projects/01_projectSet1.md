# projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# solution code

## project 1 color changer

```javascript

const buttons = document.querySelectorAll('.button');
// console.log(buttons);


const body = document.querySelector('body');
// console.log(body);

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
        }

        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        }

        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id
        }

        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        }
        
        
    })
    
});


```

## project 2 Solution bmi calculator
``` javascript
const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height =  parseInt(document.querySelector('#height').value)
    const weight =  parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if (height === '' || height<0 || isNaN(height)) {
        results.innerHTML = 'please give a valid height';
    }

    else if (weight === '' || weight<0 || isNaN(weight)) {
        results.innerHTML = 'please give a valid weight';
    }

    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    }


})
```




## project 3 solution Digital clock

```javascript
const clock = document.getElementById('clock')
setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```






## project 4 solution Guess the number
```javascript
let randomNum = parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const  guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p =  document.createElement('p')
let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);

    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }
    else if(guess<1){
        alert('please enter a number greater than 1')
    }
    else if(guess>100){
        alert('please enter a number less than hundred')
    }

    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. random no was ${randomNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}



function checkGuess(guess){
    if (guess === randomNum) {
        displayMessage(`You Guessed it right`)
        endGame()
    }
    else if(guess<randomNum){
        displayMessage(`Number is Tooo Low`)
    }
    else if(guess>randomNum){
        displayMessage(`Number is Tooo High`)
    }
}


function displayGuess(guess){
    userInput.value = ``
    guessSlot.innerHTML += `${guess}; `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}



function displayMessage(message){
    LowHigh.innerHTML = `<h2>${message}</h2>`
}



function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame()
}


function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNum = parseInt(Math.random()*100+1);
        prevGuess =[]
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

```