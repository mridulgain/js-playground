// show dice
function showDice() {
    diceValue = document.getElementById("dice").value
    console.log(diceValue)
    let container = document.getElementById("diceImage")

    if (diceValue > 6 || diceValue < 1){
        container.innerHTML = `<p style = "color : red">*Please select a value between 1 and 6*</p>`
    }else{
        container.innerHTML = `<img src="img/inverted-dice-${diceValue}.svg"></img>`        
    }
}

// roll dice
function rollDice() {
    rolledDiceValue = Math.floor(Math.random() * 6) + 1
    console.log(rolledDiceValue)
    let container = document.getElementById("rolledDiceImage")
    
    container.innerHTML = `<img src="img/inverted-dice-${rolledDiceValue}.svg"></img>`
        
}