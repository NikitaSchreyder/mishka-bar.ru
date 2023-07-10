export class CreateStockDto {
  readonly name: string
  readonly description: string
  readonly thumbUrl: string
  readonly isHidden: boolean
}

export class UpdateStockDto {
  readonly id: number
  readonly name: string
  readonly description: string
  readonly thumbUrl: string
  readonly isHidden: boolean
}

export class RemoveStockDto {
  readonly id: number
}