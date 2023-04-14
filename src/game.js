import {Piece} from "./components/piece.js";
import {Block} from "./components/block.js";

export class Game {
    constructor() {
        this.board = document.getElementById("board").getContext("2d");
        this.DrawGridLines()
        this.BlockList = new Array<Array>(20);
    }
    DrawGridLines() {
        for(var r = 0; r!=20; r++) {
            for(var c=0; c!=10; c++) {

                this.board.rect((20*c),(20*r),20,20)
                this.board.stroke();
            };
        }
    }
    EraseBoard() {
        const board = document.getElementById("board");
    }
}
