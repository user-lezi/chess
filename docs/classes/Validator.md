[**chess-lezi**](../README.md) • **Docs**

***

[chess-lezi](../globals.md) / Validator

# Class: Validator

Validator class

## Constructors

### new Validator()

> **new Validator**(): [`Validator`](Validator.md)

#### Returns

[`Validator`](Validator.md)

## Methods

### Castling()

> `static` **Castling**(`castling`): `boolean`

Validates castling string.

#### Parameters

• **castling**: `string`

Castling string

#### Returns

`boolean`

#### Source

classes/Validator.ts:122

***

### EnPassant()

> `static` **EnPassant**(`enPassant`): `undefined` \| `true`

Validates en passant string.

#### Parameters

• **enPassant**: `string`

En passant string

#### Returns

`undefined` \| `true`

#### Source

classes/Validator.ts:139

***

### FEN()

> `static` **FEN**(`fen`): `boolean`

Validates FEN string.

#### Parameters

• **fen**: `string`

FEN string

#### Returns

`boolean`

#### Source

classes/Validator.ts:18

***

### Int()

> `static` **Int**(`int`, `range`?): `boolean`

Validates integer.

#### Parameters

• **int**: `number`

Value to validate

• **range?**: `number`[]

Range to validate against

#### Returns

`boolean`

#### Source

classes/Validator.ts:181

***

### PiecePlacement()

> `static` **PiecePlacement**(`piecePlacement`): `boolean`

Validates piece placement string.

#### Parameters

• **piecePlacement**: `string`

Piece placement string

#### Returns

`boolean`

#### Source

classes/Validator.ts:75

***

### Square()

> `static` **Square**(`square`): `boolean`

Validates square string.

#### Parameters

• **square**: `string`

Square string

#### Returns

`boolean`

#### Source

classes/Validator.ts:157
