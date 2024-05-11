"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardHelper = void 0;
const Parser_1 = require("./Parser");
const Piece_1 = require("./Piece");
class BoardHelper {
    board;
    constructor(board) {
        this.board = board;
    }
    setFENData(fen) {
        this.board.squares = fen.piecePlacement;
        this.board.data.turn = fen.turn;
        this.board.data.castlingRights = Parser_1.Parser.Castling(fen.castling);
        this.board.data.enPassant = fen.enPassant;
        this.board.data.halfMoves = fen.halfMoves;
        this.board.data.fullMoves = fen.fullMoves;
        return this.board;
    }
    generateFEN() {
        let fen = "";
        let pieces = this.board.squares;
        for (let index = 63; index >= 0; index--) {
            let sq = pieces[index];
            if (sq == 0) {
                fen += "1";
            }
            else {
                fen += Piece_1.Piece.fromBit(sq).symbol;
            }
        }
        ;
        fen = fen.match(/.{1,8}/g).join("/").replace(/1+/g, (match) => match.length.toString());
        fen += " " + (this.board.data.turn == Piece_1.Piece.White ? "w" : "b");
        fen += " " + (((this.board.data.castlingRights.white.king ? "K" : "") + (this.board.data.castlingRights.white.queen ? "Q" : "") + (this.board.data.castlingRights.black.king ? "k" : "") + (this.board.data.castlingRights.black.queen ? "q" : "")) || "-");
        fen += " " + this.board.data.enPassant;
        fen += " " + this.board.data.halfMoves;
        fen += " " + this.board.data.fullMoves;
        return fen;
    }
    static squareName(index) {
        const file = index % 8;
        const rank = Math.floor(index / 8);
        return "hgfedcba"[file] + (rank + 1);
    }
    static index(squareName) {
        const file = "hgfedcba".indexOf(squareName[0]);
        const rank = parseInt(squareName[1]) - 1;
        return rank * 8 + file;
    }
}
exports.BoardHelper = BoardHelper;
//# sourceMappingURL=BoardHelper.js.map