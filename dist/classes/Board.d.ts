import { BoardHelper } from './BoardHelper';
import { BoardGameData } from '../typings';
export declare class Board {
    #private;
    helper: BoardHelper;
    data: BoardGameData;
    squares: number[];
    constructor();
    setFEN(fen: string): Board;
    get FEN(): string;
    toJSON(): {
        data: BoardGameData;
        squares: number[];
    };
    saveAsFEN(path?: string): this;
    saveAsJSON(path?: string, indents?: number): this;
    static loadFEN(path: string): Board;
    static loadJSON(path: string): Board;
    static fromFEN(fen: string): Board;
}
//# sourceMappingURL=Board.d.ts.map