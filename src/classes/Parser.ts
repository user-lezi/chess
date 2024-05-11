import { Validator } from './Validator';
import { Piece } from './Piece';
import { FEN, BoardGameData } from '../typings';

/**
 * Parser class
 */
export class Parser {
  /**
   * Parses FEN notation string into FEN object.
   * @param {string} fen - FEN notation string.
   * @returns {FEN} - FEN object.
   */
  static FEN(fen: string): FEN {
    Validator.FEN(fen);
    let [
      piecePlacement,
      turn,
      castling,
      enPassant,
      halfMove,
      fullMoves
    ] = fen.split(" ");
    return {
      piecePlacement: Parser.PiecePlacement(piecePlacement),
      turn: turn == "w" ? Piece.White : Piece.Black,
      castling,
      enPassant,
      halfMoves: parseInt(halfMove),
      fullMoves: parseInt(fullMoves)
    };
  }

  /**
   * Parses piece placement string into array of numbers representing the board.
   * @param {string} placement - Piece placement string.
   * @returns {number[]} - Array representing the board.
   */
  static PiecePlacement(placement: string): number[] {
    Validator.PiecePlacement(placement);
    let squares = new Array(64).fill(0);
    let ranks = placement.split("/");
    let index = 63;
    for (let char of [...placement]) {
      if(char == "/") continue;
      if(/\d/.test(char)) {
        index -= parseInt(char);
      } else {
        squares[index] = Piece.fromSymbol(char).bit;
        index--;
      }
    }
    return squares;
  }

  /**
   * Parses castling string into castling rights object.
   * @param {string} castling - Castling string.
   * @returns {BoardGameData['castlingRights']} - Castling rights object.
   */
  static Castling(castling: string): BoardGameData['castlingRights'] {
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
