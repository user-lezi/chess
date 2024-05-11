[**chess-lezi**](../README.md) • **Docs**

***

[chess-lezi](../globals.md) / BoardGameData

# Interface: BoardGameData

Interface for the game data

## Properties

### castlingRights

> **castlingRights**: `object`

The castling rights

#### black

> **black**: [`CastlingRights`](CastlingRights.md)

Black's Castling Rights

#### white

> **white**: [`CastlingRights`](CastlingRights.md)

White's Castling Rights

#### Source

typings.ts:17

***

### enPassant

> **enPassant**: `string`

Enpassant square (if none: "-")

#### Source

typings.ts:11

***

### fullMoves

> **fullMoves**: `number`

Total Number of moves

#### Source

typings.ts:15

***

### halfMoves

> **halfMoves**: `number`

Number of moves after last capture or pawn move

#### Source

typings.ts:13

***

### turn

> **turn**: `number`

The current player color to have turn

#### Source

typings.ts:9
