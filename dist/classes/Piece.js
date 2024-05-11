"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
class Piece {
    type;
    color;
    static None = 0;
    static Pawn = 1;
    static Knight = 2;
    static Bishop = 3;
    static Rook = 4;
    static Queen = 5;
    static King = 6;
    static White = 8;
    static Black = 16;
    bit;
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.bit = this.color | this.type;
    }
    get symbol() {
        return " PNBRQK"[this.type][this.isLight() ? "toUpperCase" : "toLowerCase"]();
    }
    get notation() {
        return "  NBRQK"[this.type].trim();
    }
    get name() {
        return ["None", "Pawn", "Knight", "Bishop", "Rook", "Queen", "King"][this.type];
    }
    isLight() {
        return this.color == Piece.White;
    }
    isDark() {
        return this.color == Piece.Black;
    }
    isPawn() {
        return this.type == Piece.Pawn;
    }
    isKnight() {
        return this.type == Piece.Knight;
    }
    isBishop() {
        return this.type == Piece.Bishop;
    }
    isRook() {
        return this.type == Piece.Rook;
    }
    isQueen() {
        return this.type == Piece.Queen;
    }
    isKing() {
        return this.type == Piece.King;
    }
    isSlidingPiece() {
        return this.isRook() || this.isBishop() || this.isQueen();
    }
    static fromBit(bit) {
        if (bit == 0) {
            return new Piece(Piece.None, Piece.White);
        }
        let type = bit & 0b111;
        let color = bit & 0b11000;
        return new Piece(type, color);
    }
    static fromSymbol(symbol) {
        if (symbol == " ") {
            return new Piece(Piece.None, Piece.White);
        }
        let color = symbol == symbol.toUpperCase() ? Piece.White : Piece.Black;
        let type = " PNBRQK".indexOf(symbol.toUpperCase().trim());
        return new Piece(type, color);
    }
}
exports.Piece = Piece;
//# sourceMappingURL=Piece.js.map