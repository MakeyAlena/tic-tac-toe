const X = 'x';
const O = 'o';
const EMPTY = null;
class TicTacToe {
    constructor() {
        this.currentPlayer = X;
        this.turns = [
          [ EMPTY, EMPTY, EMPTY ],
          [ EMPTY ,EMPTY ,EMPTY ],
          [ EMPTY, EMPTY, EMPTY ],
        ];
        this.turnsCount = 0;
        this._isFinished = false;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      if(this.turns[rowIndex][columnIndex] === EMPTY) {
        this.turnsCount = this.turnsCount + 1;
        this.turns[rowIndex][columnIndex] = this.currentPlayer; //x or o
        this.currentPlayer = this.currentPlayer === X ? O : X;
      }
    }

    isFinished() {
      return this.getWinner() === X || this.getWinner() === O || this.isDraw();;
    }

    getWinner() {
      var isWinner = true;
      const player = this.currentPlayer === X ? O : X;
      for(var i = 0; i < 3; i++) {
        isWinner = true;
        for(var j = 0; j < 3; j++) {
            isWinner = isWinner && this.turns[i][j] === player;
        }
        if(isWinner) {
          return player;
        }
      }

      for(var i = 0; i < 3; i++) {
        isWinner = true;
        for(var j = 0; j < 3; j++) {
          isWinner = isWinner && this.turns[j][i] === player;
        }
        if(isWinner) {
          return player;
        }
      }

      isWinner = true;
      for(var i = 0; i < 3; i++) {
        isWinner = isWinner && this.turns[i][i] === player;
      }

      if(isWinner) {
        return player;
      }

      isWinner = true;
      for(var i = 0; i < 3; i++) {
        isWinner = isWinner && this.turns[2-i][0 + i] === player;
      }
      if(isWinner) {
        return player;
      }

      return null;
    }

    noMoreTurns() {
      return this.turnsCount >= 9;
    }

    isDraw() {
      if(this.noMoreTurns()) {
        return this.getWinner() === null;
      }
      return false;
    }

    getFieldValue(rowIndex, columnIndex) {
      return this.turns[rowIndex][columnIndex];
    }
}

module.exports = TicTacToe;
