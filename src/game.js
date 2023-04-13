import Piece from "./components/piece";
import Block from "./components/block";

class Game {
    constructor() {
        this.board = document.getElementById("board").getContext("2d");
    }
    DrawGridLines() {
        for(var r = 0; r!=20; r++) {
            for(var c=0; c!=10; c++) {
                this.board.rect((40*i),(40*r),40,40)
            };
        }
    }
    EraseBoard() {
        const board = document.getElementById("board");
    }
}


module.exports = Game;