class Game {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentPlayer = playerOne;
    this.targetScore = null;
    this.endGame = false;
    this.init();
  }

  init() {
    document
      .getElementById("startBtn")
      .addEventListener("click", () => this.startGame());
    document
      .getElementById("rollBtn")
      .addEventListener("click", () => this.rollDice());
    document
      .getElementById("hold")
      .addEventListener("click", () => this.hold());
    document
      .getElementById("newGame")
      .addEventListener("click", () => this.newGame());
  }

  startGame() {
    const targetScore = document.getElementById("targetScore").value;
    if (targetScore && targetScore > 50) {
      this.targetScore = targetScore;
      document.querySelector(".start").style.display = "none";
    } else {
      alert("Please enter a target score greater than 50");
    }
  }

  newGame() {
    this.playerOne.reset();
    this.playerTwo.reset();
    this.currentPlayer = this.playerOne;
    this.updateUI();
    this.endGame = false;
    document.querySelector(".start").style.display = "";
    document.querySelector(".shadow").style.left = "50%";
    document.getElementById("textWin2").textContent = "";
    document.getElementById("textWin1").textContent = "";
    document.getElementById("player-two").style.backgroundColor = "##481E14";
    document.getElementById("player-one").style.backgroundColor = "##481E14";
    document.getElementById("namePlayer1").style.color = "black";
    document.getElementById("namePlayer2").style.color = "black";
  }

  rollDice() {
    if (!this.endGame) {
      const randomNumber1 = Math.floor(Math.random() * 6) + 1;
      const randomNumber2 = Math.floor(Math.random() * 6) + 1;

      document.getElementById("img1").src = `./Img/dice-${randomNumber1}.png`;
      document.getElementById("img2").src = `./Img/dice-${randomNumber2}.png`;
      if (randomNumber1 === 6 && randomNumber2 === 6) {
        this.currentPlayer.currentScore = 0;
        this.switchPlayer();
      } else if (
        randomNumber1 +
          randomNumber2 +
          this.currentPlayer.currentScore +
          this.currentPlayer.totalScore >=
        this.targetScore
      ) {
        if (
          randomNumber1 +
            randomNumber2 +
            this.currentPlayer.currentScore +
            this.currentPlayer.totalScore ===
          this.targetScore
        ) {
          this.win();
          this.endGame = true;
        } else {
          this.switchPlayer();
          this.win();
          this.endGame = true;
        }
      } else {
        this.currentPlayer.addScore(randomNumber1 + randomNumber2);
      }
      this.updateUI();
    }
  }

  hold() {
    if (!this.endGame) {
      this.currentPlayer.holdScore();
      if (this.currentPlayer.totalScore >= this.targetScore) {
        if (this.currentPlayer.totalScore === this.targetScore) {
          this.win();
          this.endGame = true;
        } else {
          this.switchPlayer();
          this.win();
          this.endGame = true;
        }
        this.newGame();
      } else {
        this.switchPlayer();
      }
    }
  }

  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne;
    document.querySelector(".shadow").style.left =
      this.currentPlayer === this.playerOne ? "50%" : "13.8%";
    this.updateUI();
  }

  updateUI() {
    document.getElementById("playerOneScore").textContent =
      this.playerOne.currentScore;
    document.getElementById("playerTwoScore").textContent =
      this.playerTwo.currentScore;
    document.getElementById("playerOneTotalScore").textContent =
      this.playerOne.totalScore;
    document.getElementById("playerTwoTotalScore").textContent =
      this.playerTwo.totalScore;
  }

  win() {
    if (this.currentPlayer === this.playerOne) {
      const playerWin = document.getElementById("player-one");
      playerWin.style.backgroundColor = "#F2613F";
      document.getElementById("namePlayer1").style.color = "#481E14";
      document.getElementById("textWin1").textContent = "Player Win";
      document.getElementById("textWin1").style.color = "#481E14";
      document.getElementById("textWin2").textContent =
        "Passed the target score";
      document.getElementById("textWin2").style.color = "#F2613F";
    } else {
      const playerWin = document.getElementById("player-two");
      playerWin.style.backgroundColor = "#F2613F";
      document.getElementById("namePlayer2").style.color = "#481E14";
      document.getElementById("textWin2").textContent = "Player Win";
      document.getElementById("textWin2").style.color = "#481E14";
      document.getElementById("textWin1").textContent =
        "Passed the target score";
      document.getElementById("textWin1").style.color = "#F2613F";
    }
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.totalScore = 0;
    this.currentScore = 0;
  }

  addScore(score) {
    this.currentScore += score;
  }

  holdScore() {
    this.totalScore += this.currentScore;
    this.currentScore = 0;
  }

  reset() {
    this.totalScore = 0;
    this.currentScore = 0;
  }
}

const playerOne = new Player("Player 1");
const playerTwo = new Player("Player 2");
const game = new Game(playerOne, playerTwo);
