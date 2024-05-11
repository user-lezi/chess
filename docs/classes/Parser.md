[**chess-lezi**](../README.md) • **Docs**

***

[chess-lezi](../globals.md) / Parser

# Class: Parser

Parser class

## Constructors

### new Parser()

> **new Parser**(): [`Parser`](Parser.md)

#### Returns

[`Parser`](Parser.md)

## Methods

### Castling()

> `static` **Castling**(`castling`): `object`

Parses castling string into castling rights object.

#### Parameters

• **castling**: `string`

Castling string.

#### Returns

`object`

- Castling rights object.

##### black

> **black**: [`CastlingRights`](../interfaces/CastlingRights.md)

Black's Castling Rights

##### white

> **white**: [`CastlingRights`](../interfaces/CastlingRights.md)

White's Castling Rights

#### Source

classes/Parser.ts:61

***

### FEN()

> `static` **FEN**(`fen`): [`FEN`](../interfaces/FEN.md)

Parses FEN notation string into FEN object.

#### Parameters

• **fen**: `string`

FEN notation string.

#### Returns

[`FEN`](../interfaces/FEN.md)

- FEN object.

#### Source

classes/Parser.ts:14

***

### PiecePlacement()

> `static` **PiecePlacement**(`placement`): `number`[]

Parses piece placement string into array of numbers representing the board.

#### Parameters

• **placement**: `string`

Piece placement string.

#### Returns

`number`[]

- Array representing the board.

#### Source

classes/Parser.ts:39
