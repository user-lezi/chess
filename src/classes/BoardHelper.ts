import { Board } from './Board';
import { Parser } from './Parser';
import { Piece } from './Piece';
import { FEN, BoardGameData } from '../typings';

/* 
  Board Representation:
   A  B  C  D  E  F  G  H
   63 62 61 60 59 58 57 56 - 8
   55 54 53 52 51 50 49 48 - 7
   47 46 45 44 43 42 41 40 - 6
   39 38 37 36 35 34 33 32 - 5
   31 30 29 28 27 26 25 24 - 4
   23 22 21 20 19 18 17 16 - 3
   15 14 13 12 11 10  9  8 - 2
    7  6  5  4  3  2  1  0 - 1

  Index 12 => D2
*/


/**
 * Helper class for Board class with static and instance methods.
 * @see {@link Board}
 */
export class BoardHelper {
  /**
   * @param board Board instance
   */
  constructor(public board: Board) {}

  /**
   * Set the FEN string to the board.
   * @param fen FEN string
   * @returns Board instance
   */
  setFENData(fen: FEN) {
    /* Pieces */
    this.board.squares = fen.piecePlacement;
    /* Turn */
    this.board.data.turn = fen.turn;
    /* Castling */
    this.board.data.castlingRights = Parser.Castling(fen.castling);
    /* EnPassant */
    this.board.data.enPassant = fen.enPassant;
    /* Half Moves */
    this.board.data.halfMoves = fen.halfMoves;
    /* Full Moves */
    this.board.data.fullMoves = fen.fullMoves;
    return this.board;
  }

  /**
   * Generates a FEN string from the board data
   * @returns FEN string
   */
  generateFEN() {
    let fen = "";
    let pieces = this.board.squares;
    for (let index = 63; index >= 0; index--) {
      let sq = pieces[index];
      if(sq == 0) {
        fen += "1"
      } else {
        fen += Piece.fromBit(sq).symbol;
      }
    };

    fen = (fen.match(/.{1,8}/g) as string[]).join("/").replace(/1+/g, (match: string) => match.length.toString());

    fen += " " + (this.board.data.turn == Piece.White ? "w" : "b");
    fen += " " + (((this.board.data.castlingRights.white.king ? "K" : "") + (this.board.data.castlingRights.white.queen ? "Q" : "") + (this.board.data.castlingRights.black.king ? "k" : "") + (this.board.data.castlingRights.black.queen ? "q" : "")) || "-");
    fen += " " + this.board.data.enPassant;
    fen += " " + this.board.data.halfMoves;
    fen += " " + this.board.data.fullMoves;
    return fen;
  }

  /**
   * Converts Square Index to Square Name
   * @param index - Square Index
   * @returns Square Name
   * @example
   * BoardHelper.squareName(37) // c5
   */
  static squareName(index: number) {
    const file = index % 8;
    const rank = Math.floor(index / 8);
    return "hgfedcba"[file] + (rank + 1);
  }

  /**
   * Converts Square Name to Square Index
   * @param squareName - Square Name
   * @returns Square Index
   * @example
   * BoardHelper.index("c5") // 37
   */
  static index(squareName: string) {
    const file = "hgfedcba".indexOf(squareName[0]);
    const rank = parseInt(squareName[1]) - 1;
    return rank * 8 + file;
  }
}