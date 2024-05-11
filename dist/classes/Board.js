"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const BoardHelper_1 = require("./BoardHelper");
const typings_1 = require("../typings");
const Parser_1 = require("./Parser");
const fs_1 = require("fs");
class Board {
    helper = new BoardHelper_1.BoardHelper(this);
    data;
    squares;
    constructor() {
        this.#init();
    }
    #init() {
        this.squares = new Array(64).fill(0);
        this.data = {};
        this.setFEN(typings_1.InitialFEN);
    }
    setFEN(fen) {
        let parsedFEN = Parser_1.Parser.FEN(fen);
        return this.helper.setFENData(parsedFEN);
    }
    get FEN() {
        return this.helper.generateFEN();
    }
    toJSON() {
        return {
            data: this.data,
            squares: this.squares
        };
    }
    saveAsFEN(path = `game-${Date.now()}.fen`) {
        (0, fs_1.writeFileSync)(path, this.FEN);
        return this;
    }
    saveAsJSON(path = `game-${Date.now()}.json`, indents = 2) {
        (0, fs_1.writeFileSync)(path, JSON.stringify(this.toJSON(), null, indents));
        return this;
    }
    static loadFEN(path) {
        let fen = (0, fs_1.readFileSync)(path, 'utf-8');
        return new Board().setFEN(fen);
    }
    static loadJSON(path) {
        let json = JSON.parse((0, fs_1.readFileSync)(path, 'utf-8'));
        let board = new Board();
        board.data = json.data;
        board.squares = json.squares;
        return board;
    }
    static fromFEN(fen) {
        return new Board().setFEN(fen);
    }
}
exports.Board = Board;
//# sourceMappingURL=Board.js.map