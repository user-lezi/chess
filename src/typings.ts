import { PieceColor } from "./classes/Piece";

/** Initial FEN String */
export const InitialFEN: string = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

/** Interface for the game data */
export interface BoardGameData {
  /** The current player color to have turn */
  turn: PieceColor;
  /** Enpassant square (if none: "-") */
  enPassant: string;
  /** Number of moves after last capture or pawn move */
  halfMoves: number;
  /** Total Number of moves */
  fullMoves: number;
  /** The castling rights */
  castlingRights: {
    /** White's Castling Rights */
    white: CastlingRights;
    /** Black's Castling Rights */
    black: CastlingRights;
  };
}

/** The castling rights */
export interface CastlingRights {
  /** Can castle kingside. (O-O) */
  king: boolean;
  /** Can castle queenside. (O-O-O) */
  queen: boolean;
}

/** Castling Value */
export const CastlingValue: string[] = [
  "-",
  
  /* Only White can castle */
  //kingside
  "K",
  //queenside
  "Q",
  //both
  "KQ",

  /* Only Black can castle */
  //kingside
  "k",
  //queenside
  "q",
  //both
  "kq",

  /* Both can castle */
  // white - both , black - both
  "KQkq",
  // white - both , black - king
  "KQk",
  // white - both, black - queen
  "KQq",
  // white - king, black - both
  "Kkq",
  // white - king, black - king
  "Kk",
  // white - king, black - queen
  "Kq",
  // white - queen, black - both
  "Qkq",
  // white - queen, black - king
  "Qk",
  // white - queen, black - queen
  "Qq"
]

/** FEN */
export interface FEN {
  /** Placement of pieces as bits */
  piecePlacement: number[];
  /** Current player color to have turn */
  turn: PieceColor;
  /** Castling Rights */
  castling: string;
  /** Enpassant square (if none: "-") */
  enPassant: string;
  /** Number of moves after last capture or pawn move */
  halfMoves: number;
  /** Total Number of moves */
  fullMoves: number;
}