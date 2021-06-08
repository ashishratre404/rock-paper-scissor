

const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    const startGame = ()=>{
        const playbtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playbtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn')
        });
    };

    // play game
    const playMatch = () =>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        
        // computer options
        const computerOptions = ["rock","paper","scissor"];
        
        options.forEach(function(option){

            option.addEventListener('click', function(){

                // computer choice
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(() =>{
                    // call compareHands
                    compareHands(this.textContent, computerChoice);
                    // update Image
                    playerHand.src = `images/${this.textContent}.png`;
                    computerHand.src = `images/${computerChoice}.png`;
                }, 2000)

                // Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

            });  
        });    
    };

    // update score
    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;


    }

    const compareHands = (playerChoise,computerChoice) =>{
        // udate Text
        const winner = document.querySelector('.winner');
        // chekhing for a tie
        if(playerChoise === computerChoice){
            winner.textContent = 'It is a Tie';
            return
        }
        // check for rock
        if(playerChoise === 'rock'){
            if(computerChoice === 'scissor'){
                winner.textContent = 'Player wins'
                pScore++;
                updateScore();
                return
            }else{
                winner.textContent = 'computer win'
                cScore++;
                updateScore();
                return
            }
        }
        // check for paper
        if(playerChoise === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Player wins'
                pScore++;
                updateScore();
                return
            }else{
                winner.textContent = 'computer win'
                cScore++;
                updateScore();
                return
            }
        }
        // check for scissor
        if(playerChoise === 'scissor'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Player wins'
                pScore++;
                updateScore();
                return
            }else{
                winner.textContent = 'computer win'
                cScore++;
                updateScore();
                return
            }
        }
    }


    // It is call of inner function
    startGame();
    playMatch();
};

// start the game
game();




