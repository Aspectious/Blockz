import {Block} from "./block.js"
export class Piece {
    /**
     * @param {Array<Block>} BlockArray 
     */
    constructor(x,y,BlockArray) {
        if (typeof BlockArray != Array) throw new TypeError;

    }
}
export const PieceDefaults = {
    "Line":     new Piece(0,0,
    Array<Block>[
        new Block(0,0,"#00ffff",false),
        new Block(0,1,"#00ffff",true),
        new Block(0,2,"#00ffff",false),
        new Block(0,3,"#00ffff",false)
    ]),
    "Square":   new Piece(0,0,
        Array<Block>[
            new Block(0,0,"#ffff00",false),
            new Block(0,1,"#ffff00",false),
            new Block(1,1,"#ffff00",false),
            new Block(1,0,"#ffff00",false)
        ]),
    "TBlock":   new Piece(0,0,
        Array<Block>[
            new Block(0,1,"#00ffff",false),
            new Block(1,1,"#00ffff",true),
            new Block(2,1,"#00ffff",false),
            new Block(1,0,"#00ffff",false)
        ]),
    "SBlock":   new Piece(0,0,
        Array<Block>[
            new Block(0,0,"#00ffff",false),
            new Block(1,0,"#00ffff",false),
            new Block(1,1,"#00ffff",true),
            new Block(2,1,"#00ffff",false)
        ]),
    "ZBlock":   new Piece(0,0,
        Array<Block>[
            new Block(0,1,"#00ffff",false),
            new Block(1,1,"#00ffff",true),
            new Block(1,0,"#00ffff",false),
            new Block(2,1,"#00ffff",false)
        ]),
    "!LPiece":  new Piece(0,0,
        Array<Block>[
            new Block(1,0,"#00ffff",false),
            new Block(1,1,"#00ffff",true),
            new Block(1,2,"#00ffff",false),
            new Block(0,0,"#00ffff",false)
        ]),
    "LPiece":   new Piece(0,0,
        Array<Block>[
            new Block(0,0,"#00ffff",false),
            new Block(0,1,"#00ffff",true),
            new Block(0,2,"#00ffff",false),
            new Block(1,0,"#00ffff",false)
        ])
};
/**
 * @param {Piece} Piece 
 */
export function drawPiece(Piece) {

}