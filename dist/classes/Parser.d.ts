import { FEN, BoardGameData } from '../typings';
export declare class Parser {
    static FEN(fen: string): FEN;
    static PiecePlacement(placement: string): number[];
    static Castling(castling: string): BoardGameData['castlingRights'];
}
//# sourceMappingURL=Parser.d.ts.map