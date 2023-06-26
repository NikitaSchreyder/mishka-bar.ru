export type TMenuCategory = {
    name: string
    searchLink: string
    thumbUrl: string
}

export type TMenuItem = {
    name: string
    composition : string[]
    price: number
    thumbUrl: string
    categorySearchLink: string
}