let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        loses: 0,
        tie: 0
    };

    updateScoreElement();



    function playGame(playerMove){
        const computerMove = pickComputerMove();

        let result = '';
        if (playerMove === 'scissors'){
            if (computerMove === 'rock') {
                result = 'You lose';
            } else if (computerMove === 'paper') {
                result = 'You win !';
            } else if (computerMove === 'scissors') {
                result = 'its a Tie !'
            }


        } else if (playerMove === 'paper'){
            if (computerMove === 'rock') {
                result = 'You win !';
            } else if (computerMove === 'paper') {
                result = 'its a Tie !';
            } else if (computerMove === 'scissors') {
                result = 'You lose'
            }


        } else if (playerMove === 'rock'){
            if (computerMove === 'rock') {
                result = 'its a Tie !';
            } else if (computerMove === 'paper') {
                result = 'You lose';
            } else if (computerMove === 'scissors') {
                result = 'You win !'
            }
        }

        if (result === 'You win !'){
            score.wins++;
        } else if (result === 'You lose'){
            score.loses++;
        } else if (result === 'its a Tie !'){
            score.tie++;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();
        document.querySelector('.js-result')
            .innerHTML = `${result}`;

        document.querySelector('.js-move')
            .innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;

    }

    function updateScoreElement() {
        document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.tie}`
    }

    function pickComputerMove () {
        const randomNumber = Math.random();
        let computerMove = '';
        if (randomNumber >= 0 && randomNumber < 1/3){
            computerMove = 'rock';
        } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
            computerMove = 'paper';
        } else if (randomNumber >= 2/3 && randomNumber < 1) {
            computerMove = 'scissors';
        }

        return computerMove;
    }


// rock paper scissors game with JSON parsing, stringify, local storage, DOM and much more !!