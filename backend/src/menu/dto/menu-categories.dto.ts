/**
 * MENU CATEGORIES DTOS
 */

export class CreateMenuCategoryDto {
  readonly name: string
  readonly searchLink: string
  readonly thumbUrl: string
  readonly isHidden: boolean
}

export class UpdateMenuCategoryDto {
  readonly id: number
  readonly name: string
  readonly thumbUrl: string
  readonly searchLink: string
  readonly isHidden: boolean
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
  readonly isHidden: boolean
}

export class UpdateMenuDishDto {
  readonly id: number
  readonly name: string
  readonly price: string
  readonly thumbUrl: string
  readonly searchLink: string
  readonly composition: string
  readonly categorySearchLink: string
  readonly isHidden: boolean
}

export class RemoveMenuDishDto {
  readonly id: number
}