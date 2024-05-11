import { Board } from './Board';
import { FEN } from '../typings';
export declare class BoardHelper {
    board: Board;
    constructor(board: Board);
    setFENData(fen: FEN): Board;
    generateFEN(): string;
    static squareName(index: number): string;
    static index(squareName: string): number;
}
//# sourceMappingURL=BoardHelper.d.ts.map