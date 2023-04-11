import { Injectable } from '@nestjs/common'

import { barItems } from './data/items'
import { barCategories } from './data/categories'
import { TMenuCategory } from 'src/app/types/types'

@Injectable()
export class BarService {
    public getCategories(): TMenuCategory[] {
        return barCategories
    }

    public getCategoryItems(categorySearchLink: string) {
        const categoryItems = barItems.filter(item => item.categorySearchLink === categorySearchLink)
        const categoryName = barCategories.filter(item => item.searchLink === categorySearchLink)[0].name
        const data = {
            categoryItems,
            categoryName
        }
        
        return data
    }
}
