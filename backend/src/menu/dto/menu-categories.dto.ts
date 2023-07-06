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





export class CreateMenuDishDto {
  readonly name: string
  readonly price: string
  readonly thumbUrl: string
  readonly searchLink: string
  readonly categorySearchLink: string
}