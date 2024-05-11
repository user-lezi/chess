export declare class Piece {
    type: PieceType;
    color: PieceColor;
    static None: number;
    static Pawn: number;
    static Knight: number;
    static Bishop: number;
    static Rook: number;
    static Queen: number;
    static King: number;
    static White: number;
    static Black: number;
    bit: number;
    constructor(type: PieceType, color: PieceColor);
    get symbol(): string;
    get notation(): string;
    get name(): string;
    isLight(): boolean;
    isDark(): boolean;
    isPawn(): boolean;
    isKnight(): boolean;
    isBishop(): boolean;
    isRook(): boolean;
    isQueen(): boolean;
    isKing(): boolean;
    isSlidingPiece(): boolean;
    static fromBit(bit: number): Piece;
    static fromSymbol(symbol: string): Piece;
}
export type PieceColor = typeof Piece.White | typeof Piece.Black;
export type PieceType = typeof Piece.None | typeof Piece.Pawn | typeof Piece.Knight | typeof Piece.Bishop | typeof Piece.Rook | typeof Piece.Queen | typeof Piece.King;
//# sourceMappingURL=Piece.d.ts.map