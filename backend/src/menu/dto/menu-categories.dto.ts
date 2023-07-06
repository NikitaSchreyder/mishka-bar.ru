/**
 * MENU CATEGORIES DTOS
 */

export class CreateMenuCategoryDto {
  readonly name: string
  readonly searchLink: string
  readonly thumbUrl: string
}

export class UpdateMenuCategoryDto {
  readonly id: number
  readonly name: string
  readonly thumbUrl: string
  readonly searchLink: string

}

export class RemoveMenuCategoryDto {
  readonly id: number
}

/**
 * MENU DISHES DTOS
 */

export class CreateMenuDishDto {
  readonly name: string
  readonly price: string
  readonly thumbUrl: string
  readonly searchLink: string
  readonly composition: string
  readonly categorySearchLink: string
}

export class UpdateMenuDishDto {
  readonly id: number
  readonly name: string
  readonly price: string
  readonly thumbUrl: string
  readonly searchLink: string
  readonly composition: string
  readonly categorySearchLink: string
}

export class RemoveMenuDishDto {
  readonly id: number
}