/*
Game rules:
- Player has 3 times to try.
- Show how many times left.
- Player can replay the game.
*/

//Game values:
let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random() * (max - min + 1) + min),
    chanceTotal = 3;
//console.log(winningNum);

//UI elements:
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign UI min and max: document.createTextNode()与textContent的区别在于是否要建立一个新的元素内容还是修改已有的元素内容
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener: 这里mousedown比click更优，只有鼠标到的时候才刷新，而非自动刷新
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

//Listen for guess:
guessBtn.addEventListener('click', function() {
    //console.log(guessInput.value); //发现是黑色的字，说明是string，我们要的是数字
    let guess = parseInt(guessInput.value);

    //Validate de input: 先确保客户输入信息的可靠
    //console.log(guess);
    if (isNaN(guess) || guess < min || guess > max) {
        sendMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct, YOU WIN!`);
    } else {
        chanceTotal -= 1;

        if (chanceTotal === 0) {
            //game over:
            gameOver(false, `Game over, you lost. The correct number is ${winningNum}!`);
        } else {
            //game continues:
            guessInput.value = '';
            guessInput.style.borderColor = 'red';
            sendMessage(`${guess} is wrong, you still have ${chanceTotal} chance(s) left`, 'red');
        }
    }

})

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disable = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    sendMessage(msg);

    //Play again? 因为是页面load后加上的，所以要用event delegation，父传子的方法pass event
    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again';
}

function sendMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}