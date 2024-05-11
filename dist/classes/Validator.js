"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const typings_1 = require("../typings");
function makeError(prefix) {
    return function error(message) {
        return new Error(`${prefix}: ${message}`);
    };
}
class Validator {
    static FEN(fen) {
        let error = makeError("Invalid FEN");
        if (typeof fen !== "string" || !fen) {
            throw error("Expected a non-empty string");
        }
        let fenParts = fen.split(" ");
        if (fenParts.length !== 6) {
            throw error(`Expected 6 parts, got ${fenParts.length}`);
        }
        let [piecePlacement, turn, castling, enPassant, halfMove, moveNumber] = fenParts;
        if (!piecePlacement || !turn || !castling || !enPassant || !halfMove || !moveNumber) {
            throw error("Expected all parts to be present");
        }
        Validator.PiecePlacement(piecePlacement);
        if (turn !== "w" && turn !== "b") {
            throw error("Expected turn to be either 'w' or 'b', got " + turn);
        }
        Validator.Castling(castling);
        Validator.EnPassant(enPassant);
        let halfMoveInt = parseInt(halfMove);
        if (isNaN(halfMoveInt)) {
            throw error("Expected half move to be a number");
        }
        Validator.Int(halfMoveInt, [0, 100]);
        let moveNumberInt = parseInt(moveNumber);
        if (isNaN(moveNumberInt)) {
            throw error("Expected move number to be a number");
        }
        Validator.Int(moveNumberInt, [1, Number.MAX_SAFE_INTEGER]);
        return true;
    }
    static PiecePlacement(piecePlacement) {
        let error = makeError("Invalid Piece Placement");
        if (typeof piecePlacement !== "string" || !piecePlacement) {
            throw error("Expected a non-empty string");
        }
        let piecePlacementParts = piecePlacement.split("/");
        if (piecePlacementParts.length !== 8) {
            throw error(`Expected 8 parts, got ${piecePlacementParts.length}`);
        }
        let availableChars = /[1-8rnbqkp]/i;
        for (let i = 0; i < piecePlacementParts.length; i++) {
            let row = piecePlacementParts[i];
            if (!row) {
                throw error("Expected a non-empty row");
            }
            for (let j = 0; j < row.length; j++) {
                let piece = row[j];
                if (!availableChars.test(piece)) {
                    let at = `> ${row}\n${" ".repeat(2 + j)}^`;
                    throw error(`Expected a valid piece, got ${piece}\n${at}`);
                }
            }
        }
        for (let i = 0; i < piecePlacementParts.length; i++) {
            let row = piecePlacementParts[i];
            let count = 0;
            for (let j = 0; j < row.length; j++) {
                let char = row[j];
                if (/\d/.test(char)) {
                    count += parseInt(char);
                }
                else {
                    count += 1;
                }
            }
            if (count != 8) {
                throw error(`Expected 8 pieces, got ${count} in row [${row}]`);
            }
        }
        return true;
    }
    static Castling(castling) {
        let error = makeError("Invalid Castling");
        if (typeof castling !== "string" || !castling) {
            throw error("Expected a non-empty string");
        }
        if (typings_1.CastlingValue.indexOf(castling) == -1) {
            throw error(`Expected a valid castling value, got ${castling}.\nExpected one of ( ${typings_1.CastlingValue.sort().join(", ")} )`);
        }
        return true;
    }
    static EnPassant(enPassant) {
        let error = makeError("Invalid EnPassant Square");
        if (typeof enPassant !== "string" || !enPassant) {
            throw error("Expected a non-empty string");
        }
        if (enPassant == "-")
            return true;
        Validator.Square(enPassant);
        let rank = parseInt(enPassant[1]);
        if (rank !== 3 && rank !== 6) {
            throw error(`Expected the square to be on 3rd or 6th rank.`);
        }
    }
    static Square(square) {
        let error = makeError("Invalid Square");
        if (typeof square !== "string" || !square) {
            throw error("Expected a non-empty string");
        }
        if (square.length !== 2) {
            throw error(`Expected a 2-character square, got ${square}`);
        }
        let file = square[0];
        let rank = square[1];
        if (!/^[a-h]$/i.test(file) || !/^[1-8]$/i.test(rank)) {
            throw error(`Expected a valid square, got ${square}`);
        }
        return true;
    }
    static Int(int, range) {
        let error = makeError("Invalid Integer");
        int = parseInt(int.toString());
        if (!range) {
            if (isNaN(int)) {
                throw error(`Expected a number, got ${int}`);
            }
            return true;
        }
        else {
            let [min, max] = range;
            min = parseInt(min.toString());
            max = parseInt(max.toString());
            Validator.Int(min);
            Validator.Int(max);
            let Min = Math.min(min, max);
            let Max = Math.max(min, max);
            if (Min == Max) {
                if (Min !== int) {
                    throw error(`Expected ${Min}, got ${int}`);
                }
                return true;
            }
            else {
                if (int < Min) {
                    throw error(`Expected ${Min} <= ${int} <= ${Max}, got ${int}`);
                }
                if (int > Max) {
                    throw error(`Expected ${Min} <= ${int} <= ${Max}, got ${int}`);
                }
                return true;
            }
        }
    }
}
exports.Validator = Validator;
//# sourceMappingURL=Validator.js.map