[**chess-lezi**](../README.md) • **Docs**

***

[chess-lezi](../globals.md) / Piece

# Class: Piece

Represents a chess piece.

## Constructors

### new Piece()

> **new Piece**(`type`, `color`): [`Piece`](Piece.md)

Creates an instance of a Piece.

#### Parameters

• **type**: `number`

The type of the piece.

• **color**: `number`

The color of the piece.

#### Returns

[`Piece`](Piece.md)

#### Source

classes/Piece.ts:32

## Properties

### bit

> **bit**: `number`

The bit representation of the piece.

#### Source

classes/Piece.ts:25

***

### color

> **color**: `number`

The color of the piece.

#### Source

classes/Piece.ts:32

***

### type

> **type**: `number`

The type of the piece.

#### Source

classes/Piece.ts:32

***

### Bishop

> `static` **Bishop**: `number` = `3`

Represents a bishop piece.

#### Source

classes/Piece.ts:12

***

### Black

> `static` **Black**: `number` = `16`

Represents a black piece color.

#### Source

classes/Piece.ts:22

***

### King

> `static` **King**: `number` = `6`

Represents a king piece.

#### Source

classes/Piece.ts:18

***

### Knight

> `static` **Knight**: `number` = `2`

Represents a knight piece.

#### Source

classes/Piece.ts:10

***

### None

> `static` **None**: `number` = `0`

Represents no piece.

#### Source

classes/Piece.ts:6

***

### Pawn

> `static` **Pawn**: `number` = `1`

Represents a pawn piece.

#### Source

classes/Piece.ts:8

***

### Queen

> `static` **Queen**: `number` = `5`

Represents a queen piece.

#### Source

classes/Piece.ts:16

***

### Rook

> `static` **Rook**: `number` = `4`

Represents a rook piece.

#### Source

classes/Piece.ts:14

***

### White

> `static` **White**: `number` = `8`

Represents a white piece color.

#### Source

classes/Piece.ts:20

## Accessors

### name

> `get` **name**(): `string`

Gets the name of the piece.

#### Returns

`string`

#### Source

classes/Piece.ts:47

***

### notation

> `get` **notation**(): `string`

Gets the algebraic notation representing the piece.

#### Returns

`string`

#### Source

classes/Piece.ts:42

***

### symbol

> `get` **symbol**(): `string`

Gets the symbol representing the piece.

#### Returns

`string`

#### Source

classes/Piece.ts:37

## Methods

### isBishop()

> **isBishop**(): `boolean`

Checks if the piece is a bishop.

#### Returns

`boolean`

#### Source

classes/Piece.ts:72

***

### isDark()

> **isDark**(): `boolean`

Checks if the piece is of dark color.

#### Returns

`boolean`

#### Source

classes/Piece.ts:57

***

### isKing()

> **isKing**(): `boolean`

Checks if the piece is a king.

#### Returns

`boolean`

#### Source

classes/Piece.ts:87

***

### isKnight()

> **isKnight**(): `boolean`

Checks if the piece is a knight.

#### Returns

`boolean`

#### Source

classes/Piece.ts:67

***

### isLight()

> **isLight**(): `boolean`

Checks if the piece is of light color.

#### Returns

`boolean`

#### Source

classes/Piece.ts:52

***

### isPawn()

> **isPawn**(): `boolean`

Checks if the piece is a pawn.

#### Returns

`boolean`

#### Source

classes/Piece.ts:62

***

### isQueen()

> **isQueen**(): `boolean`

Checks if the piece is a queen.

#### Returns

`boolean`

#### Source

classes/Piece.ts:82

***

### isRook()

> **isRook**(): `boolean`

Checks if the piece is a rook.

#### Returns

`boolean`

#### Source

classes/Piece.ts:77

***

### isSlidingPiece()

> **isSlidingPiece**(): `boolean`

Checks if the piece is a sliding piece (rook, bishop, or queen).

#### Returns

`boolean`

#### Source

classes/Piece.ts:92

***

### fromBit()

> `static` **fromBit**(`bit`): [`Piece`](Piece.md)

Create a Piece Instance from bit

#### Parameters

• **bit**: `number`

The bit representation of the piece.

#### Returns

[`Piece`](Piece.md)

The Piece instance.

#### Source

classes/Piece.ts:101

***

### fromSymbol()

> `static` **fromSymbol**(`symbol`): [`Piece`](Piece.md)

Create a Piece Instance from symbol

#### Parameters

• **symbol**: `string`

The symbol representing the piece.

#### Returns

[`Piece`](Piece.md)

The Piece instance.

#### Source

classes/Piece.ts:116
