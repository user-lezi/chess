[**chess-lezi**](../README.md) • **Docs**

***

[chess-lezi](../globals.md) / Board

# Class: Board

Board class

## Constructors

### new Board()

> **new Board**(): [`Board`](Board.md)

#### Returns

[`Board`](Board.md)

#### Source

classes/Board.ts:16

## Properties

### data

> **data**: [`BoardGameData`](../interfaces/BoardGameData.md)

Game data

#### Source

classes/Board.ts:14

***

### helper

> **helper**: [`BoardHelper`](BoardHelper.md)

Helper for the main class

#### Source

classes/Board.ts:12

***

### squares

> **squares**: `number`[]

#### Source

classes/Board.ts:15

## Accessors

### FEN

> `get` **FEN**(): `string`

Generates a FEN string from the board data

#### Returns

`string`

FEN string

#### Source

classes/Board.ts:42

## Methods

### #init()

> `private` **#init**(): `void`

Initialize the board

#### Returns

`void`

#### Source

classes/Board.ts:23

***

### saveAsFEN()

> **saveAsFEN**(`path`): [`Board`](Board.md)

Saves the board to a file as FEN string

#### Parameters

• **path**: `string`= `undefined`

Path to save the board to

#### Returns

[`Board`](Board.md)

Board instance

#### Source

classes/Board.ts:65

***

### saveAsJSON()

> **saveAsJSON**(`path`, `indents`): [`Board`](Board.md)

Saves the board to a file as JSON

#### Parameters

• **path**: `string`= `undefined`

Path to save the board to

• **indents**: `number`= `2`

Number of indents to use

#### Returns

[`Board`](Board.md)

Board instance

#### Source

classes/Board.ts:76

***

### setFEN()

> **setFEN**(`fen`): [`Board`](Board.md)

Sets the board state to the given FEN string

#### Parameters

• **fen**: `string`

FEN string

#### Returns

[`Board`](Board.md)

Board instance

#### Source

classes/Board.ts:34

***

### toJSON()

> **toJSON**(): `object`

Converts Board State to JSON

#### Returns

`object`

##### data

> **data**: [`BoardGameData`](../interfaces/BoardGameData.md)

##### squares

> **squares**: `number`[]

#### Source

classes/Board.ts:49

***

### fromFEN()

> `static` **fromFEN**(`fen`): [`Board`](Board.md)

Loads the board from FEN string

#### Parameters

• **fen**: `string`

FEN string

#### Returns

[`Board`](Board.md)

Board instance

#### Source

classes/Board.ts:109

***

### loadFEN()

> `static` **loadFEN**(`path`): [`Board`](Board.md)

Loads the board from a file as FEN string

#### Parameters

• **path**: `string`

Path to load the board from

#### Returns

[`Board`](Board.md)

Board instance

#### Source

classes/Board.ts:86

***

### loadJSON()

> `static` **loadJSON**(`path`): [`Board`](Board.md)

Loads the board from a file as JSON

#### Parameters

• **path**: `string`

Path to load the board from

#### Returns

[`Board`](Board.md)

Board instance

#### Source

classes/Board.ts:96
