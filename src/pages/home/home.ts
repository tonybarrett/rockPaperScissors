import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Definitions of all variables
  win: boolean = false;
  lose: boolean = false;
  draw: boolean = false;
  numWon: number = 0;
  numDrawn: number = 0;
  numLost: number = 0;
  computersChoice: any = '';
  randomNumber: number;

constructor() {
  }

  play(playersChoice)  {
    // Reset screen
    this.win = false;
    this.draw = false;
    this.lose = false;
    // This randomly makes a choice for the computer
    // I would put this in a separate function but for the asyncronous nature of JS
    this.randomNumber = Math.floor((Math.random() * 3) + 1);
    switch(this.randomNumber) {
        case 1:
            this.computersChoice = 'Rock';
            break;
        case 2:
          this.computersChoice = 'Paper';
          break;
        case 3:
          this.computersChoice = 'Scissors';
          break;
    }
    // This checks the choices and works out if the player have won, drawn or lost
    if (playersChoice === 'rock') {
      switch(this.computersChoice) {
          case 'Rock':
            this.draw = true;
            this.numDrawn++;
            break;
          case 'Paper':
            this.lose = true;
            this.numLost++;
            break;
          case 'Scissors':
            this.win = true;
            this.numWon++;
            break;
      }
    }
    if (playersChoice === 'paper') {
      switch(this.computersChoice) {
          case 'Rock':
            this.win = true;
            this.numWon++;
            break;
          case 'Paper':
            this.draw = true;
            this.numDrawn++;
            break;
          case 'Scissors':
            this.lose = true;
            this.numLost++;
            break;
      }
    }
    if (playersChoice === 'scissors') {
      switch(this.computersChoice) {
          case 'Rock':
            this.lose = true;
            this.numLost++;
            break;
          case 'Paper':
            this.win = true;
            this.numWon++;
            break;
          case 'Scissors':
            this.draw = true;
            this.numDrawn++;
            break;
      }
    }
  }

}
