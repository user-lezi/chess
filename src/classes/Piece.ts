/**
 * Represents a chess piece.
 */
export class Piece {
  /** Represents no piece. */
  static None = 0;
  /** Represents a pawn piece. */
  static Pawn = 1;
  /** Represents a knight piece. */
  static Knight = 2;
  /** Represents a bishop piece. */
  static Bishop = 3;
  /** Represents a rook piece. */
  static Rook = 4;
  /** Represents a queen piece. */
  static Queen = 5;
  /** Represents a king piece. */
  static King = 6;
  /** Represents a white piece color. */
  static White = 8;
  /** Represents a black piece color. */
  static Black = 16;

  /** The bit representation of the piece. */
  bit: number;

  /**
   * Creates an instance of a Piece.
   * @param type The type of the piece.
   * @param color The color of the piece.
   */
  constructor(public type: PieceType, public color: PieceColor) {
    this.bit = this.color | this.type;
  }

  /** Gets the symbol representing the piece. */
  get symbol() {
    return " PNBRQK"[this.type][this.isLight() ? "toUpperCase" : "toLowerCase"]();
  }

  /** Gets the algebraic notation representing the piece. */
  get notation() {
    return "  NBRQK"[this.type].trim();
  }

  /** Gets the name of the piece. */
  get name() {
    return ["None", "Pawn", "Knight", "Bishop", "Rook", "Queen", "King"][this.type];
  }

  /** Checks if the piece is of light color. */
  isLight() {
    return this.color == Piece.White;
  }

  /** Checks if the piece is of dark color. */
  isDark() {
    return this.color == Piece.Black;
  }

  /** Checks if the piece is a pawn. */
  isPawn() {
    return this.type == Piece.Pawn;
  }

  /** Checks if the piece is a knight. */
  isKnight() {
    return this.type == Piece.Knight;
  }

  /** Checks if the piece is a bishop. */
  isBishop() {
    return this.type == Piece.Bishop;
  }

  /** Checks if the piece is a rook. */
  isRook() {
    return this.type == Piece.Rook;
  }

  /** Checks if the piece is a queen. */
  isQueen() {
    return this.type == Piece.Queen;
  }

  /** Checks if the piece is a king. */
  isKing() {
    return this.type == Piece.King;
  }

  /** Checks if the piece is a sliding piece (rook, bishop, or queen). */
  isSlidingPiece() {
    return this.isRook() || this.isBishop() || this.isQueen();
  }

  /**
   * Create a Piece Instance from bit
   * @param {number} bit The bit representation of the piece.
   * @returns The Piece instance.
   */
  static fromBit(bit: number) {
    if(bit == 0) {
      return new Piece(Piece.None, Piece.White);
    }

    let type = bit & 0b111;
    let color = bit & 0b11000;
    return new Piece(type as PieceType, color as PieceColor);
  }

  /**
   * Create a Piece Instance from symbol
   * @param {string} symbol The symbol representing the piece.
   * @returns The Piece instance.
   */
  static fromSymbol(symbol: string) {
    if(symbol == " ") {
      return new Piece(Piece.None, Piece.White);
    }
    let color = symbol == symbol.toUpperCase() ? Piece.White : Piece.Black;
    let type = " PNBRQK".indexOf(symbol.toUpperCase().trim());
    return new Piece(type as PieceType, color as PieceColor);
  }
}

/** Represents a piece color. */
export type PieceColor = typeof Piece.White | typeof Piece.Black;

/** Represents a piece type. */
export type PieceType = typeof Piece.None | typeof Piece.Pawn | typeof Piece.Knight | typeof Piece.Bishop | typeof Piece.Rook | typeof Piece.Queen | typeof Piece.King;
