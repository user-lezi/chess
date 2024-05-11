export declare class Validator {
    static FEN(fen: string): boolean;
    static PiecePlacement(piecePlacement: string): boolean;
    static Castling(castling: string): boolean;
    static EnPassant(enPassant: string): true | undefined;
    static Square(square: string): boolean;
    static Int(int: number, range?: number[]): boolean;
}
//# sourceMappingURL=Validator.d.ts.map