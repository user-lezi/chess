
import { CastlingValue } from "../typings";

function makeError(prefix: string) {
  return function error(message: string) {
    return new Error(`${prefix}: ${message}`);
  }
}

/**
 * Validator class
 */
export class Validator {
  /**
   * Validates FEN string.
   * @param fen FEN string
   */
  static FEN(fen: string) {
    let error = makeError("Invalid FEN");
    if(typeof fen !== "string" || !fen) {
      throw error("Expected a non-empty string");
    }
    let fenParts = fen.split(" ");
    if(fenParts.length !== 6) {
      throw error(`Expected 6 parts, got ${fenParts.length}`)
    }

    let [
      piecePlacement,
      turn,
      castling,
      enPassant,
      halfMove,
      moveNumber
    ] = fenParts;
    if(!piecePlacement || !turn || !castling || !enPassant || !halfMove || !moveNumber) {
      throw error("Expected all parts to be present");
    }

    // Check piece placement
    Validator.PiecePlacement(piecePlacement);

    // Check turn
    if(turn !== "w" && turn !== "b") {
      throw error("Expected turn to be either 'w' or 'b', got " + turn);
    }

    // Check castling
    Validator.Castling(castling);

    // Check en passant
    Validator.EnPassant(enPassant);

    // Check Half moves
    let halfMoveInt = parseInt(halfMove);
    if(isNaN(halfMoveInt)) {
      throw error("Expected half move to be a number");
    }
    Validator.Int(halfMoveInt, [0, 100]);

    // Check move number
    let moveNumberInt = parseInt(moveNumber);
    if(isNaN(moveNumberInt)) {
      throw error("Expected move number to be a number");
    }
    Validator.Int(moveNumberInt, [1, Number.MAX_SAFE_INTEGER]);

    return true;
  }

  /**
   * Validates piece placement string.
   * @param piecePlacement Piece placement string
   */
  static PiecePlacement(piecePlacement: string) {
    let error = makeError("Invalid Piece Placement");
    if(typeof piecePlacement !== "string" || !piecePlacement) {
      throw error("Expected a non-empty string");
    }
    let piecePlacementParts = piecePlacement.split("/");
    if(piecePlacementParts.length !== 8) {
      throw error(`Expected 8 parts, got ${piecePlacementParts.length}`);
    }
    let availableChars = /[1-8rnbqkp]/i;
    for(let i = 0; i < piecePlacementParts.length; i++) {
      let row = piecePlacementParts[i];
      if(!row) {
        throw error("Expected a non-empty row");
      }
      for(let j = 0; j < row.length; j++) {
        let piece = row[j];
        if(!availableChars.test(piece)) {
          let at = `> ${row}\n${" ".repeat(2 + j)}^`
          throw error(`Expected a valid piece, got ${piece}\n${at}`);
        }
      }
    }

    for (let i = 0; i < piecePlacementParts.length; i++) {
      let row = piecePlacementParts[i];
      let count = 0;
      for (let j = 0; j < row.length; j++) {
        let char = row[j];
        if(/\d/.test(char)) {
          count += parseInt(char);
        } else {
          count += 1;
        }
      }
      if(count != 8) {
        throw error(`Expected 8 pieces, got ${count} in row [${row}]`)
      }
    }

    return true;
  }

  /**
   * Validates castling string.
   * @param castling Castling string
   */
  static Castling(castling: string) {
    let error = makeError("Invalid Castling")
    if(typeof castling !== "string" || !castling) {
      throw error("Expected a non-empty string");
    }

    if(CastlingValue.indexOf(castling) == -1) {
      throw error(`Expected a valid castling value, got ${castling}.\nExpected one of ( ${CastlingValue.sort().join(", ")} )`);
    }

    return true;
  }

  /**
   * Validates en passant string.
   * @param enPassant En passant string
   */
  static EnPassant(enPassant: string) {
    let error = makeError("Invalid EnPassant Square")
    if(typeof enPassant !== "string" || !enPassant) {
      throw error("Expected a non-empty string");
    }
    if(enPassant == "-") return true;
    Validator.Square(enPassant);

    let rank = parseInt(enPassant[1]);
    if(rank !== 3 && rank !== 6) {
      throw error(`Expected the square to be on 3rd or 6th rank.`)
    }
  }

  /**
   * Validates square string.
   * @param square Square string
   */
  static Square(square: string) {
    let error = makeError("Invalid Square");
    if(typeof square !== "string" || !square) {
      throw error("Expected a non-empty string");
    }

    if(square.length !== 2) {
      throw error(`Expected a 2-character square, got ${square}`);
    }

    let file = square[0];
    let rank = square[1];
    if(!/^[a-h]$/i.test(file) || !/^[1-8]$/i.test(rank)) {
      throw error(`Expected a valid square, got ${square}`);
    }

    return true;
  }

  /**
   * Validates integer.
   * @param int Value to validate
   * @param range Range to validate against
   */
  static Int(int: number, range?: number[]) {
    let error = makeError("Invalid Integer");
    int = parseInt(int.toString());
    if(!range) {
      if(isNaN(int)) {
        throw error(`Expected a number, got ${int}`);
      }
      return true;
    } else {
      let [min, max]: number[] = range;
      min = parseInt(min.toString());
      max = parseInt(max.toString());
      Validator.Int(min);
      Validator.Int(max);

      let Min = Math.min(min, max);
      let Max = Math.max(min, max);

      if(Min == Max) {
        if(Min !== int) {
          throw error(`Expected ${Min}, got ${int}`);
        }
        return true;
      } else {
        if(int < Min) {
          throw error(`Expected ${Min} <= ${int} <= ${Max}, got ${int}`);
        }
        if(int > Max) {
          throw error(`Expected ${Min} <= ${int} <= ${Max}, got ${int}`);
        }
        return true;
      }
    }
  }
}