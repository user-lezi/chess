"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const Validator_1 = require("./Validator");
const Piece_1 = require("./Piece");
class Parser {
    static FEN(fen) {
        Validator_1.Validator.FEN(fen);
        let [piecePlacement, turn, castling, enPassant, halfMove, fullMoves] = fen.split(" ");
        return {
            piecePlacement: Parser.PiecePlacement(piecePlacement),
            turn: turn == "w" ? Piece_1.Piece.White : Piece_1.Piece.Black,
            castling,
            enPassant,
            halfMoves: parseInt(halfMove),
            fullMoves: parseInt(fullMoves)
        };
    }
    static PiecePlacement(placement) {
        Validator_1.Validator.PiecePlacement(placement);
        let squares = new Array(64).fill(0);
        let ranks = placement.split("/");
        let index = 63;
        for (let char of [...placement]) {
            if (char == "/")
                continue;
            if (/\d/.test(char)) {
                index -= parseInt(char);
            }
            else {
                squares[index] = Piece_1.Piece.fromSymbol(char).bit;
                index--;
            }
        }
        return squares;
    }
    static Castling(castling) {
        return {
            white: {
                king: castling.includes("K"),
                queen: castling.includes("Q")
            },
            black: {
                king: castling.includes("k"),
                queen: castling.includes("q")
            }
        };
    }
}
exports.Parser = Parser;
//# sourceMappingURL=Parser.js.map