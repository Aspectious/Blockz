import {Piece} from "./components/piece.js";
import {Block} from "./components/block.js";

class Game {
    constructor() {
        this.board = document.getElementById("board").getContext("2d");
        this.DrawGridLines()
    }
    DrawGridLines() {
        for(var r = 0; r!=20; r++) {
            for(var c=0; c!=10; c++) {
                this.board.rect((40*i),(40*r),40,40)
                this.board.stroke();
            };
        }
    }
    EraseBoard() {
        const board = document.getElementById("board");
    }
}


module.exports = {Game};