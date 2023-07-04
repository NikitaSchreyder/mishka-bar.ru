export class CreateMenuCategoryDto {
  readonly name: string
  readonly searchLink: string
  readonly thumbUrl: string
}

export class UpdateMenuCategoryDto {
  readonly id: number
  readonly name: string
  readonly thumbUrl: string
}

export class RemoveMenuCategoryDto {
  readonly id: number
}