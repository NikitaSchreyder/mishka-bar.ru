export class CreateMenuItemDto {
  readonly value: string
}

export class UpdateMenuItemDto {
  readonly id: number
  readonly value?: string
}

export class DeleteMenuItemDto {
  readonly id: number
}