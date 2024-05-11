[**chess-lezi**](../README.md) • **Docs**

***

[chess-lezi](../globals.md) / BoardHelper

# Class: BoardHelper

Helper class for Board class with static and instance methods.

## See

[Board](Board.md)

## Constructors

### new BoardHelper()

> **new BoardHelper**(`board`): [`BoardHelper`](BoardHelper.md)

#### Parameters

• **board**: [`Board`](Board.md)

Board instance

#### Returns

[`BoardHelper`](BoardHelper.md)

#### Source

classes/BoardHelper.ts:30

## Properties

### board

> **board**: [`Board`](Board.md)

Board instance

#### Source

classes/BoardHelper.ts:30

## Methods

### generateFEN()

> **generateFEN**(): `string`

Generates a FEN string from the board data

#### Returns

`string`

FEN string

#### Source

classes/BoardHelper.ts:57

***

### setFENData()

> **setFENData**(`fen`): [`Board`](Board.md)

Set the FEN string to the board.

#### Parameters

• **fen**: [`FEN`](../interfaces/FEN.md)

FEN string

#### Returns

[`Board`](Board.md)

Board instance

#### Source

classes/BoardHelper.ts:37

***

### index()

> `static` **index**(`squareName`): `number`

Converts Square Name to Square Index

#### Parameters

• **squareName**: `string`

Square Name

#### Returns

`number`

Square Index

#### Example

```ts
BoardHelper.index("c5") // 37
```

#### Source

classes/BoardHelper.ts:99

***

### squareName()

> `static` **squareName**(`index`): `string`

Converts Square Index to Square Name

#### Parameters

• **index**: `number`

Square Index

#### Returns

`string`

Square Name

#### Example

```ts
BoardHelper.squareName(37) // c5
```

#### Source

classes/BoardHelper.ts:86
