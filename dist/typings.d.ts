import { PieceColor } from "./classes/Piece";
export declare const InitialFEN: string;
export interface BoardGameData {
    turn: PieceColor;
    enPassant: string;
    halfMoves: number;
    fullMoves: number;
    castlingRights: {
        white: CastlingRights;
        black: CastlingRights;
    };
}
export interface CastlingRights {
    king: boolean;
    queen: boolean;
}
export declare const CastlingValue: string[];
export interface FEN {
    piecePlacement: number[];
    turn: PieceColor;
    castling: string;
    enPassant: string;
    halfMoves: number;
    fullMoves: number;
}
//# sourceMappingURL=typings.d.ts.map