import {Block} from "./block.js"
export class Piece {
    /**
     * 
     * @param {Array<Block>} BlockArray 
     */
    constructor(BlockArray) {
        if (typeof BlockArray != Array) throw new TypeError;

    }
}
export const PieceDefaults = {
    "Line":     new Piece(),
    "Square":   new Piece(),
    "TBlock":   new Piece(),
    "SBlock":   new Piece(),
    "ZBlock":   new Piece(),
    "!LPiece":  new Piece(),
    "LPiece":   new Piece()
};
/**
 * @param {Piece} Piece 
 */
export function drawPiece(Piece) {

}