import { BoardHelper } from './BoardHelper';
import { Piece } from "./Piece";
import { BoardGameData, InitialFEN } from '../typings';
import { Parser } from "./Parser";
import { writeFileSync, readFileSync } from 'fs';

/**
 * Board class
 */
export class Board {
  /** Helper for the main class */
  helper = new BoardHelper(this);
  /** Game data */
  data!: BoardGameData;
  squares!: number[];
  constructor() {
    this.#init();
  }

  /**
   * Initialize the board
   */
  #init() {
    this.squares = new Array(64).fill(0);
    this.data = {} as BoardGameData;
    this.setFEN(InitialFEN);
  }

  /**
   * Sets the board state to the given FEN string
   * @param fen FEN string
   * @returns Board instance
   */
  setFEN(fen: string) {
    let parsedFEN = Parser.FEN(fen);
    return this.helper.setFENData(parsedFEN);
  }
  /**
   * Generates a FEN string from the board data
   * @returns FEN string
   */
  get FEN() {
    return this.helper.generateFEN();
  }

  /**
   * Converts Board State to JSON
   */
  toJSON() {
    return {
      data: this.data,
      squares: this.squares
    }
  }



  /* Saving and Loading the board methods */

  /**
   * Saves the board to a file as FEN string
   * @param path Path to save the board to
   * @returns Board instance
   */
  saveAsFEN(path: string = `game-${Date.now()}.fen`) {
    writeFileSync(path, this.FEN);
    return this;
  }

  /**
   * Saves the board to a file as JSON
   * @param path Path to save the board to
   * @param indents Number of indents to use
   * @returns Board instance
   */
  saveAsJSON(path: string = `game-${Date.now()}.json`, indents = 2) {
    writeFileSync(path, JSON.stringify(this.toJSON(), null, indents));
    return this;
  }

  /**
   * Loads the board from a file as FEN string
   * @param path Path to load the board from
   * @returns Board instance
   */
  static loadFEN(path: string) {
    let fen = readFileSync(path, 'utf-8');
    return new Board().setFEN(fen);
  }

  /**
   * Loads the board from a file as JSON
   * @param path Path to load the board from
   * @returns Board instance
   */
  static loadJSON(path: string) {
    let json = JSON.parse(readFileSync(path, 'utf-8'));
    let board = new Board()
    board.data = json.data;
    board.squares = json.squares;
    return board;
  }

  /**
   * Loads the board from FEN string
   * @param fen FEN string
   * @returns Board instance
   */
  static fromFEN(fen: string) {
    return new Board().setFEN(fen);
  }
}