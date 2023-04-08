import { Injectable } from '@nestjs/common'

import { menuItems } from './data/items'
import { menuCategories } from './data/catgories'
import { TMenuCategory } from 'src/app/types/types'

@Injectable()
export class MenuService {
    public getCategories(): TMenuCategory[] {
        return menuCategories
    }

    public getCategoryItems(categorySearchLink: string) {
        const categoryItems = menuItems.filter(item => item.categorySearchLink === categorySearchLink)
        const categoryName = menuCategories.filter(item => item.searchLink === categorySearchLink)[0].name
        const data = {
            categoryItems,
            categoryName
        }
        
        return data
    }
}
