export class CreateStockDto {
  readonly name: string
  readonly description: string
  readonly thumbUrl: string
}

export class UpdateStockDto {
  readonly id: number
  readonly name: string
  readonly description: string
  readonly thumbUrl: string
}

export class RemoveStockDto {
  readonly id: number
}