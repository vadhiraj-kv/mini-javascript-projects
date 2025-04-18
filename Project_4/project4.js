let rand = parseInt(Math.random()*100+1)


const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#submit')
const previousSlot = document.querySelector('.previous')
const totalGuesses = document.querySelector('.guesses')
const lowHigh= document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.title-body')


const p = document.createElement('p')


let prevGuess = []
let attempts = 1

let playGame = true


if(playGame){

  submit.addEventListener('click',(e) => {

    e.preventDefault()

    const guess = parseInt(userInput.value)
    validateGuess(guess)


  })


}

function validateGuess(guess){
  if(guess === '' ){
     alert("Invalid INPUT")
  }else if(guess < 1){
    alert("Invalid input number should be greater than 1")
  }
  else if(guess > 100){
    alert("Invalid input number should be less than 100")
  }
  else if(isNaN(guess)){
    alert("Invalid input not a number")
  }else{
    prevGuess.push(guess)
    if(attempts === 10){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${rand}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
    
  }

}

function checkGuess(guess) {
  if(rand > guess){
    displayMessage('Number is too Low')
  }else if(rand < guess){
    displayMessage('Number is too High')
  }else if(rand === guess){
    
    displayMessage(`Correct guess`)
    endGame()

  }
}

function displayGuess(guess){
    userInput.value = ''
    previousSlot.innerHTML = prevGuess.join(', ')
    attempts++
    totalGuesses.innerHTML = `${11 - attempts}`
   
}

function displayMessage(msg){
    lowHigh.innerHTML = `<h3 style="margin:0;">${msg}</h3>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add("button")
  p.innerHTML = '<h4 id="newgame">Start new Game</h4>'
  startOver.appendChild(p)
  playGame = false
  newGame()
   
}

function newGame(){
  const newGameButton =  document.getElementById('newgame')

  newGameButton.addEventListener('click',(e) => {
 
      rand = parseInt(Math.random()*100+1)
      prevGuess = []
      attempts = 1
      userInput.removeAttribute('disabled')
      previousSlot.innerHTML = ''
      totalGuesses.innerHTML = `${11 - attempts}`
      startOver.removeChild(p)
      lowHigh.innerHTML = ''
      playGame=true
  })

  
}