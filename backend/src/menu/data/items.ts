import { TMenuItem } from "src/app/types/types"

export const menuItems: TMenuItem[] = [
    {
        name: 'Ростбиф с томатами',
        composition : ['Ростбиф', 'вяленые томаты', 'лолло росса'],
        categorySearchLink: 'appetizers',
        price: 640,
        thumbUrl: '/public/img/menu/appetizers/rostbeef-with-tomatos.png'
    },
    {
        name: 'Тартар из тунца',
        composition : ['Тунец', 'желток перепелиного яйца', 'гренки', 'авокадо'],
        categorySearchLink: 'appetizers',
        price: 480,
        thumbUrl: '/public/img/menu/appetizers/tuna-tartar.png'
    },
    {
        name: 'Тартар из лосося',
        composition : ['Лосось', 'желток перепелиного яйца', 'гренки', 'авокадо'],
        categorySearchLink: 'appetizers',
        price: 480,
        thumbUrl: '/public/img/menu/appetizers/salmon-tartar.png'
    },
    {
        name: 'Брускетта с лососем',
        composition : ['Бородинский хлеб', 'лосось', 'руккола', 'яйцо пашот', 'огурец свежий'],
        categorySearchLink: 'appetizers',
        price: 470,
        thumbUrl: '/public/img/menu/appetizers/salmon-bruschetta.png' 
    },
    {
        name: 'Европа',
        composition : ['Рис', 'нори', 'майонез', 'перец болгарский', 'огурцы', 'курица (грудка)', 'соус унаги', 'кляр'],
        categorySearchLink: 'rolles',
        price: 390,
        thumbUrl: '/public/img/menu/rolles/europe.png'
    },
    {
        name: 'Морне',
        composition : ['Нори', 'рис', 'куриная грудка', 'огурцы', 'майонез', 'сыр моцарелла', 'мидии', 'соус унаги'],
        categorySearchLink: 'rolles',
        price: 450,
        thumbUrl: '/public/img/menu/rolles/morne.png'
    },
    {
        name: 'Канада',
        composition : ['Рис', 'нори', 'сыр творожный', 'угорь', 'соус унаги', 'кунжут', 'креветка'],
        categorySearchLink: 'rolles',
        price: 640,
        thumbUrl: '/public/img/menu/rolles/canada.png'
    },
    {
        name: 'Де люкс',
        composition : ['Рис', 'нори', 'семга', 'сыр творожный', 'зелень', 'икра красная', 'огурцы', 'икра тобико'],
        categorySearchLink: 'rolles',
        price: 510,
        thumbUrl: '/public/img/menu/rolles/deluxe.png'
    },
    // {
    //     name: 'Майами',
    //     composition : [],
    //     categorySearchLink: 'rolles',
    //     price: 510,
    //     thumbUrl: '/public/img/menu/rolles/smoke-duck.png'
    // },
    // {
    //     name: 'Лава',
    //     composition : [],
    //     categorySearchLink: 'rolles',
    //     price: 500,
    //     thumbUrl: '/public/img/menu/rolles/smoke-duck.png'
    // },
    {
        name: 'Цезарь',
        composition : ['Лепешка тортилья', 'рис', 'помидоры', 'огурцы', 'соус цезарь', 'сыр творожный', 'кляр'],
        categorySearchLink: 'rolles',
        price: 450,
        thumbUrl: '/public/img/menu/rolles/caesar.png'
    },
    {
        name: 'Рыбное плато',
        composition : ['Муксун', 'форель', 'мясо мидий', 'селедка', 'креветки тигровые', 'северные креветки'],
        categorySearchLink: 'cold-snacks',
        price: 1450,
        thumbUrl: '/public/img/menu/cold-snacks/fish-plateau.png'
    },
    {
        name: 'Грузди бочковые',
        composition : ['Грузди', 'маринованный лук', 'сметана'],
        categorySearchLink: 'cold-snacks',
        price: 440,
        thumbUrl: '/public/img/menu/cold-snacks/gruzdi.png'
    },
    {
        name: 'Перец с творожным сыром',
        composition : ['Перец болгарский', 'творожный сыр', 'руккола'],
        categorySearchLink: 'cold-snacks',
        price: 350,
        thumbUrl: '/public/img/menu/cold-snacks/pepper-with-cheese.png'
    },
    {
        name: 'Селедка с картофелем',
        composition : ['Селедка', 'картофель отварной', 'лук маринованный'],
        categorySearchLink: 'cold-snacks',
        price: 410,
        thumbUrl: '/public/img/menu/cold-snacks/herring.png'
    },
    {
        name: 'Камчатка',
        composition : ['Муксун', 'форель', 'лосось', 'селедка'],
        categorySearchLink: 'cold-snacks',
        price: 2350,
        thumbUrl: '/public/img/menu/cold-snacks/kamchatka.png'
    },
    {
        name: 'Мясное ассорти',
        composition : ['Ветчина', 'язык говяжий', 'куриная бастурма', 'сало'],
        categorySearchLink: 'cold-snacks',
        price: 1190,
        thumbUrl: '/public/img/menu/cold-snacks/cold-cuts.png'
    },
    {
        name: 'Палитра сыров',
        composition : ['Дорблю', 'пармезан', 'чеддер', 'сыр креметте', 'грецкий орех', 'винoград', 'мед', 'чернослив'],
        categorySearchLink: 'cold-snacks',
        price: 980,
        thumbUrl: '/public/img/menu/cold-snacks/cheese-palette.png'
    },
    // {
    //     name: 'Соленья домашние',
    //     composition : [],
    //     categorySearchLink: 'cold-snacks',
    //     price: 380,
    //     thumbUrl: '/public/img/menu/cold-snacks/smoke-duck.png'
    // },
    // {
    //     name: 'Овощная нарезка',
    //     composition : [],
    //     categorySearchLink: 'cold-snacks',
    //     price: 300,
    //     thumbUrl: '/public/img/menu/cold-snacks/smoke-duck.png'
    // },
    // {
    //     name: 'Фруктовое ассорти',
    //     composition : [],
    //     categorySearchLink: 'cold-snacks',
    //     price: 550,
    //     thumbUrl: '/public/img/menu/cold-snacks/smoke-duck.png'
    // },
    {
        name: 'Хлебная корзина',
        composition : ['Серые булочки', 'белые булочки', 'батон', 'сливочное масло', 'гресини'],
        categorySearchLink: 'homemade-bread',
        price: 210,
        thumbUrl: '/public/img/menu/homemade-bread/bread-basket.png'
    },
    {
        name: 'Хачапури по аджарски',
        composition : ['Тесто', 'сыр моцарелла', 'сливки', 'желток яйца'],
        categorySearchLink: 'homemade-bread',
        price: 480,
        thumbUrl: '/public/img/menu/homemade-bread/khachapuri-in-adjarian.png'
    },
    // {
    //     name: 'Хачапури по имеритински',
    //     composition : [],
    //     categorySearchLink: 'homemade-bread',
    //     price: 480,
    //     thumbUrl: '/public/img/menu/homemade-bread/smoke-duck.png'
    // },
    {
        name: 'Осетинский пирог',
        composition : ['Сыр моцарелла', 'начинка на выбор (c сыром и курицей / c сыром и шпинатом)', 'желток яичный', 'тесто'],
        categorySearchLink: 'homemade-bread',
        price: 560,
        thumbUrl: '/public/img/menu/homemade-bread/ossetian-pie.png'
    },
    {
        name: 'Пицца с охотничьими колбасками (30 см)',
        composition : ['Тесто', 'куриная грудка', 'охотничьи колбаски', 'бекон', 'соус помодоро', 'руккола', 'сыр моцарелла' ],
        categorySearchLink: 'pizza',
        price: 590,
        thumbUrl: '/public/img/menu/pizza/pizza-with-hunting-sausages.png'
    },
    {
        name: 'Пицца цезарь (30 см)',
        composition : ['Тесто', 'соус цезарь', 'томаты черри', 'куриная грудка', 'салат' ],
        categorySearchLink: 'pizza',
        price: 550,
        thumbUrl: '/public/img/menu/pizza/pizza-caesar.png'
    },
    {
        name: 'Четыре сыра (30 см)',
        composition : ['Тесто', 'сливки', 'дорблю', 'пармезан', 'чеддер', 'моцарелла'],
        categorySearchLink: 'pizza',
        price: 560,
        thumbUrl: '/public/img/menu/pizza/four-cheeses.png'
    },
    {
        name: 'С море - продуктами (30 см)',
        composition : ['Тесто', 'соус помодоро', 'тигровые креветки', 'кальмар', 'лосось', 'мидии', 'моцарелла'],
        categorySearchLink: 'pizza',
        price: 690,
        thumbUrl: '/public/img/menu/pizza/seafood.png'
    },
    {
        name: 'Маргарита (30 см)',
        composition : ['Тесто', 'помидоры', 'сыр моцарелла', 'соус помодоро'],
        categorySearchLink: 'pizza',
        price: 430,
        thumbUrl: '/public/img/menu/pizza/margarita.png'
    },
    {
        name: 'Пепперони (30 см)',
        composition : ['Тесто', 'соус помодоро', 'сыр', 'пепперони'],
        categorySearchLink: 'pizza',
        price: 520,
        thumbUrl: '/public/img/menu/pizza/pepperoni.png'
    },
    {
        name: 'Блю чиз',
        composition : ['Соус блю чиз', 'булочка', 'говяжья котлета', 'помидоры', 'соленые огурцы', 'лист салата', 'красный лук'],
        categorySearchLink: 'burgers',
        price: 450,
        thumbUrl: '/public/img/menu/burgers/burger.png'
    },
    {
        name: 'BBQ чиз',
        composition : ['Булочка', 'соус барбекю', 'говяжья котлета', 'лист салата', 'огурец', 'помидоры', 'красный лук'],
        categorySearchLink: 'burgers',
        price: 450,
        thumbUrl: '/public/img/menu/burgers/burger.png'
    },
    {
        name: 'Чикен чиз',
        composition : ['Булочка', 'соус коктейльный', 'куриное филе', 'помидоры', 'лист салата', 'огурец', 'сыр чеддер', 'красный лук'],
        categorySearchLink: 'burgers',
        price: 350,
        thumbUrl: '/public/img/menu/burgers/burger.png'
    },
    {
        name: 'Салат с тцнуом',
        composition : ['Листья салата', 'авокадо', 'помидоры черри', 'яйцо перепелиное', 'огурцы', 'редис красный', 'соус бальзамический', 'маслины', 'лимон', 'кунжут', 'лук красный', 'картофель фри', 'тунец'],
        categorySearchLink: 'salads',
        price: 590,
        thumbUrl: '/public/img/menu/salads/salad-with-tuna.png'
    },
    {
        name: 'Цезарь с креветками',
        composition : ['Помидоры черри', 'листья салата', 'яйца перепелиные', 'сухарики', 'сыр пармезан', 'соус цезарь', 'креветки'],
        categorySearchLink: 'salads',
        price: 560,
        thumbUrl: '/public/img/menu/salads/caesar-with-shrimps.png'
    },
    {
        name: 'Салат с ростбифом',
        composition : ['Листья салата', 'ростбиф', 'соус бальзамический', 'томаты сушеные вяленые', 'спаржа', 'перец болгарский', 'соус устричный'],
        categorySearchLink: 'salads',
        price: 590,
        thumbUrl: '/public/img/menu/salads/salad-with-roastbeef.png'
    },
    {
        name: 'Магнум фиш',
        composition : ['Листья салата', 'семга', 'помидоры черри', 'соус дэмаро', 'сыр пармезан', 'зелень', 'лимон', 'сливки', 'мед', 'креветки'],
        categorySearchLink: 'salads',
        price: 790,
        thumbUrl: '/public/img/menu/salads/magnum-fish.png'
    },
    {
        name: 'Салат с копченой курицей и авокадо',
        composition : ['Листья салата', 'огурцы', 'помидоры черри', 'копченая куриная грудка', 'авокадо', 'киноа'],
        categorySearchLink: 'salads',
        price: 520,
        thumbUrl: '/public/img/menu/salads/salad-with-smoked-chicken-and-avocado.png'
    },
    {
        name: 'Салат Прага - Сургут',
        composition : ['Куриная грудка', 'лук', 'язык отварной', 'майонез', 'орех грецкий', 'кедровый орех', 'гранат', 'яйца перепелиные', 'шампиньоны жареные', 'сыр пармезан', 'соленья', 'сливки', 'соус чесночный'],
        categorySearchLink: 'salads',
        price: 580,
        thumbUrl: '/public/img/menu/salads/praga.png'
    },
    {
        name: 'Салат с яйцом пашот и креветками',
        composition : ['Листья салата', 'авокадо', 'огурцы', 'помидоры черри', 'яйцо', 'зелень', 'маслины', 'лимонный сок', 'креветки'],
        categorySearchLink: 'salads',
        price: 550,
        thumbUrl: '/public/img/menu/salads/salad-with-poached-egg-and-shrimp.png'
    },
    {
        name: 'Салат с форелью и бкалажаном фри',
        composition : ['Листья салата', 'баклажаны', 'семга', 'огурцы', 'помидоры черри', 'зелень'],
        categorySearchLink: 'salads',
        price: 530,
        thumbUrl: '/public/img/menu/salads/salad-with-trout-and-eggplant-fries.png'
    },
    {
        name: 'Салат с беконом',
        composition : ['Бекон', 'картофель фри', 'листья салата', 'зелень', 'масло оливковое', 'соус соевый', 'помидоры черри', 'яйца перепелиные'],
        categorySearchLink: 'salads',
        price: 490,
        thumbUrl: '/public/img/menu/salads/salad-with-bacon.png'
    },
    {
        name: 'Бренче с вялеными томатами',
        composition : ['Сыр камамбер', 'помидоры черри', 'картофель', 'багет', 'ананас', 'листья салата', 'зелень', 'томаты сушеные вяленые'],
        categorySearchLink: 'salads',
        price: 450,
        thumbUrl: '/public/img/menu/salads/strum-with-dried-tomatoes.png'
    },
    {
        name: 'Салат с говяжьим языком',
        composition : ['Язык отварной', 'капуста', 'морковь', 'помидоры черри', 'листья салата'],
        categorySearchLink: 'salads',
        price: 460,
        thumbUrl: '/public/img/menu/salads/salad-with-beef-tongue.png'
    },
    {
        name: 'Цезарь с курицей',
        composition : ['Куриная грудка', 'помидоры черри', 'листья салата', 'яйца перепелиные', 'сухарики', 'сыр пармезан', 'соус цезарь'],
        categorySearchLink: 'salads',
        price: 490,
        thumbUrl: '/public/img/menu/salads/caesar-with-chicken.png'
    },
    {
        name: 'Домашний овощной с зеленью',
        composition : ['Огурцы', 'помидоры', 'лук красный', 'зелень', 'перец болгарский'],
        categorySearchLink: 'salads',
        price: 290,
        thumbUrl: '/public/img/menu/salads/vegetable.png'
    },
    {
        name: 'Греческий',
        composition : ['Перец болгарский', 'помидоры', 'огурцы', 'масло оливковое', 'сыр фета', 'маслины', 'лук красный'],
        categorySearchLink: 'salads',
        price: 360,
        thumbUrl: '/public/img/menu/salads/greek.png'
    },
    {
        name: 'Смок дак',
        composition : ['Утиная грудка копченая', 'перец болгарский', 'томаты сушеные вяленые', 'апельсин', 'авокадо', 'паста миндальная', 'листья салата'],
        categorySearchLink: 'salads',
        price: 580,
        thumbUrl: '/public/img/menu/salads/smoke-duck.png'
    },
    {
        name: 'Трубочки с беконом и сыром',
        composition : ['Тортелли', 'сыр', 'бекон'],
        categorySearchLink: 'hot-snacks',
        price: 350,
        thumbUrl: '/public/img/menu/hot-snacks/bacon-and-cheese-rolls.png'
    },
    {
        name: 'Северные креветки жареные',
        composition : [],
        categorySearchLink: 'hot-snacks',
        price: 600,
        thumbUrl: '/public/img/menu/hot-snacks/fried-northern-shrimp.png'
    },
    {
        name: 'Жульен с курицей и грибами',
        composition : ['Шампиньоны', 'курица', 'сливки', 'сыр пармезан', 'хлеб'],
        categorySearchLink: 'hot-snacks',
        price: 350,
        thumbUrl: '/public/img/menu/hot-snacks/julienne-with-chicken-and-mushrooms.png'
    },
    {
        name: 'Тигровые креветки',
        composition : [],
        categorySearchLink: 'hot-snacks',
        price: 560,
        thumbUrl: '/public/img/menu/hot-snacks/tiger-prawns.png'
    },
    {
        name: 'Мидии запеченые под соусом "Морнэ"',
        composition : ['Мидии', 'соус морне', 'лимон'],
        categorySearchLink: 'hot-snacks',
        price: 590,
        thumbUrl: '/public/img/menu/hot-snacks/baked-mussels.png'
    },
    // {
    //     name: 'Мясо мидий жареное',
    //     composition : [],
    //     categorySearchLink: 'hot-snacks',
    //     price: 400,
    //     thumbUrl: '/public/img/menu/hot-snacks/smoke-duck.png'
    // },
    // {
    //     name: 'Гренки чесночные',
    //     composition : [],
    //     categorySearchLink: 'hot-snacks',
    //     price: 250,
    //     thumbUrl: '/public/img/menu/hot-snacks/smoke-duck.png'
    // },
    // {
    //     name: 'Крылышки баффола',
    //     composition : [],
    //     categorySearchLink: 'hot-snacks',
    //     price: 400,
    //     thumbUrl: '/public/img/menu/hot-snacks/smoke-duck.png'
    // },
    // {
    //     name: 'Сырные палочки',
    //     composition : [],
    //     categorySearchLink: 'hot-snacks',
    //     price: 390,
    //     thumbUrl: '/public/img/menu/hot-snacks/smoke-duck.png'
    // },
    // {
    //     name: 'Наггетсы',
    //     composition : [],
    //     categorySearchLink: 'hot-snacks',
    //     price: 250,
    //     thumbUrl: '/public/img/menu/hot-snacks/smoke-duck.png'
    // },
    {
        name: 'Том ям с морепродуктами',
        composition : ['Кальмар', 'мидии', 'креветки', 'рис'],
        categorySearchLink: 'soups',
        price: 590,
        thumbUrl: '/public/img/menu/soups/thom-yam.png'
    },
    {
        name: 'Сырный с беконом',
        composition : ['Морковь', 'картофель', 'сыр сливочный', 'лук', 'бекон'],
        categorySearchLink: 'soups',
        price: 350,
        thumbUrl: '/public/img/menu/soups/cheese-soup.png'
    },
    {
        name: 'Уха из лосося',
        composition : ['Лосось', 'морковь', 'картофель', 'помидоры черри'],
        categorySearchLink: 'soups',
        price: 360,
        thumbUrl: '/public/img/menu/soups/salmon-soup.png'
    },
    // {
    //     name: 'Суп лапша с курицей и перепелиным яйцом',
    //     composition : [],
    //     categorySearchLink: 'soups',
    //     price: 250,
    //     thumbUrl: '/'
    // },
    // {
    //     name: 'Грибной крем суп',
    //     composition : [],
    //     categorySearchLink: 'soups',
    //     price: 380,
    //     thumbUrl: '/'
    // },
    // {
    //     name: 'Борщ домашний',
    //     composition : [],
    //     categorySearchLink: 'soups',
    //     price: 300,
    //     thumbUrl: '/'
    // },
    {
        name: 'Паста с говядиной',
        composition : ['Пенне', 'говядина', 'сливки', 'барбекю соус', 'аджика', 'вяленные томаты', 'пармезан'],
        categorySearchLink: 'pastas',
        price: 570,
        thumbUrl: '/public/img/menu/pastas/pasta-with-beef.png'
    },
    {
        name: 'Фарфалле с лососем',
        composition : ['Фарфалле', 'лосось', 'сливки', 'красная икра'],
        categorySearchLink: 'pastas',
        price: 590,
        thumbUrl: '/public/img/menu/pastas/farfalle-with-salmon.png'
    },
    {
        name: 'Спагетти с морепродуктами',
        composition : ['Спагетти', 'креветки тигровые', 'мидии', 'кальмар', 'соус томатный'],
        categorySearchLink: 'pastas',
        price: 620,
        thumbUrl: '/public/img/menu/pastas/spaghetti-with-seafood.png'
    },
    {
        name: 'Карбонара',
        composition : ['Спагетти', 'бекон', 'сливки', 'пармезан', 'чесночное масло'],
        categorySearchLink: 'pastas',
        price: 420,
        thumbUrl: '/public/img/menu/pastas/carbonara.png'
    },
    {
        name: 'Феттучини с курицей и грибами',
        composition : ['Феттучини', 'грудка куриная', 'шампиньоны', 'лук', 'чеснок', 'сливки', 'сыр пармезан'],
        categorySearchLink: 'pastas',
        price: 410,
        thumbUrl: '/public/img/menu/pastas/fettuccine-with-chicken-and-mushrooms.png'
    },
    {
        name: 'Филе сибаса с стручковой фасолью',
        composition : [],
        categorySearchLink: 'hot-dishes',
        price: 840,
        thumbUrl: '/public/img/menu/hot-dishes/sea-bass-fillet-with-beans.png'
    },
    {
        name: 'Куриная грудка со сливочным соусом',
        composition : ['Грудка жареная', 'картофельное пюре', 'сливочный соус', 'томаты черри'],
        categorySearchLink: 'hot-dishes',
        price: 540,
        thumbUrl: '/public/img/menu/hot-dishes/chicken-breast-with-cream-sauce.png'
    },
    {
        name: 'Палтус с пастой птитим',
        composition : ['Филе палтуса', 'томаты черри', 'шампиньоны', 'зелень', 'птитим'],
        categorySearchLink: 'hot-dishes',
        price: 650,
        thumbUrl: '/public/img/menu/hot-dishes/halibut-with-ptitim-paste.png'
    },
    {
        name: 'Биточки из индейки',
        composition : [],
        categorySearchLink: 'hot-dishes',
        price: 630,
        thumbUrl: '/public/img/menu/hot-dishes/turkey-meatballs.png'
    },
    // {
    //     name: 'Говяжьи медальоны',
    //     composition : [],
    //     categorySearchLink: 'hot-dishes',
    //     price: 830,
    //     thumbUrl: '/'
    // },
    {
        name: 'Лосось запеченый',
        composition : ['Филе лосося', 'рис с овощами (болгарский перец, цукини, баклажан, рис, соус унаги)', 'сливочный соус'],
        categorySearchLink: 'hot-dishes',
        price: 740,
        thumbUrl: '/public/img/menu/hot-dishes/baked-salmon.png'
    },
    {
        name: 'Свиная корейка',
        composition : [],
        categorySearchLink: 'hot-dishes',
        price: 580,
        thumbUrl: '/public/img/menu/hot-dishes/pork-loin.png'
    },
    {
        name: 'Утиная ножка',
        composition : ['Стручковая фасоль', 'утиная ножка', 'томаты черри', 'брокколи', 'цветная капуста'],
        categorySearchLink: 'hot-dishes',
        price: 610,
        thumbUrl: '/public/img/menu/hot-dishes/duck-leg.png'
    },
    {
        name: 'Говядина на сковороде',
        composition : ['Говядина', 'картофельные дольки', 'жареные яйца', 'помидоры черри'],
        categorySearchLink: 'hot-dishes',
        price: 890,
        thumbUrl: '/public/img/menu/hot-dishes/beef-in-a-frying-pan.png'
    },
    {
        name: 'Равиоли',
        composition : ['Тесто', 'начинка на выбор (с лососем / с говядиной)', 'томаты черри', 'зелень'],
        categorySearchLink: 'hot-dishes',
        price: 430,
        thumbUrl: '/public/img/menu/hot-dishes/ravioli.png'
    },
    {
        name: 'Рулька свиная',
        composition : ['Квашеная капуста', 'картофельные дольки', 'рулька свиная', 'барбекю соус'],
        categorySearchLink: 'hot-dishes',
        price: 1150,
        thumbUrl: '/public/img/menu/hot-dishes/pork-knuckle.png'
    },
    {
        name: 'Ризотто с креветками',
        composition : ['Креветки', 'ризотто', 'сливки', 'вяленные томаты'],
        categorySearchLink: 'hot-dishes',
        price: 580,
        thumbUrl: '/public/img/menu/hot-dishes/shrimp-risotto.png'
    },
    {
        name: 'Дорадо',
        composition : [],
        categorySearchLink: 'grill',
        price: 670,
        thumbUrl: '/public/img/menu/grill/dorado.png'
    },
    {
        name: 'Шашлык из лосося',
        composition : [],
        categorySearchLink: 'grill',
        price: 820,
        thumbUrl: '/public/img/menu/grill/salmon-kebab.png'
    },
    {
        name: 'Стейк из лосося',
        composition : [],
        categorySearchLink: 'grill',
        price: 1100,
        thumbUrl: '/public/img/menu/grill/salmon-steak.png'
    },
    {
        name: 'Сибас',
        composition : [],
        categorySearchLink: 'grill',
        price: 680,
        thumbUrl: '/public/img/menu/grill/sibas.png'
    },
    {
        name: 'Филе миньон',
        composition : [],
        categorySearchLink: 'steaks',
        price: 1600,
        thumbUrl: '/public/img/menu/steaks/filet-mingon.png'
    },
    {
        name: 'Стриплойн',
        composition : [],
        categorySearchLink: 'steaks',
        price: 2250,
        thumbUrl: '/public/img/menu/steaks/striploin.png'
    },
    {
        name: 'Рибай',
        composition : [],
        categorySearchLink: 'steaks',
        price: 2400,
        thumbUrl: '/public/img/menu/steaks/ribeye.png'
    },
    {
        name: 'Антрикот из свинины',
        composition : [],
        categorySearchLink: 'steaks',
        price: 690,
        thumbUrl: '/public/img/menu/steaks/pork-antricote.png'
    },
    {
        name: 'Томогавк',
        composition : [],
        categorySearchLink: 'steaks',
        price: 690,
        thumbUrl: '/public/img/menu/steaks/tomahawk.png'
    },
    {
        name: 'Мишка',
        composition : [],
        categorySearchLink: 'steaks',
        price: 2000,
        thumbUrl: '/public/img/menu/steaks/mishka.png'
    },
    {
        name: 'Бавет стейк',
        composition : [],
        categorySearchLink: 'steaks',
        price: 1100,
        thumbUrl: '/public/img/menu/steaks/bavet-steak.png'
    },
    {
        name: 'Стейк мачете',
        composition : [],
        categorySearchLink: 'steaks',
        price: 1690,
        thumbUrl: '/public/img/menu/steaks/steak-machete.png'
    },
    {
        name: 'Мясной бриффинг на углях',
        composition : ['Люля-кебаб из курицы', 'люля-кебаб из баранины', 'шашлык из индейки', 'шашлык из свинины', 'шашлык из курицы', 'болгарский перец', 'картофельные дольки', 'шампиньоны', 'помидоры'],
        categorySearchLink: 'sharing-platters',
        price: 3250,
        thumbUrl: '/public/img/menu/sharing-platters/meat-briffing.png'
    },
    {
        name: 'Фри сет',
        composition : ['Гренки чесночные', 'крылышки баффало', 'кольца кальмара', 'луковые кольца', 'сосус чесночный'],
        categorySearchLink: 'sharing-platters',
        price: 920,
        thumbUrl: '/public/img/menu/sharing-platters/fried-set.png'
    },
    {
        name: 'Чикен сет',
        composition : ['Люля кебаб из курицы', 'шашлык из индейки', 'шашлык из курицы', 'цыпленок табака'],
        categorySearchLink: 'sharing-platters',
        price: 1990,
        thumbUrl: '/public/img/menu/sharing-platters/chicken-set.png'
    },
    {
        name: 'Шашлык из курицы',
        composition : [],
        categorySearchLink: 'kebabs',
        price: 350,
        thumbUrl: '/public/img/menu/kebabs/smoke-duck.png'
    },
    {
        name: 'Шашлык из свинины',
        composition : [],
        categorySearchLink: 'kebabs',
        price: 440,
        thumbUrl: '/public/img/menu/kebabs/smoke-duck.png'
    },
    {
        name: 'Кебаб из курицы',
        composition : [],
        categorySearchLink: 'kebabs',
        price: 350,
        thumbUrl: '/public/img/menu/kebabs/smoke-duck.png'
    },
    {
        name: 'Кебаб из баранины',
        composition : [],
        categorySearchLink: 'kebabs',
        price: 490,
        thumbUrl: '/public/img/menu/kebabs/smoke-duck.png'
    },
    {
        name: 'Рис с овощами',
        composition : ['Болгарский перец', 'цукини', 'баклажан', 'рис', 'соус унаги'],
        categorySearchLink: 'side-dishes',
        price: 150,
        thumbUrl: '/public/img/menu/side-dishes/smoke-duck.png'
    },
    {
        name: 'Картофельные дольки по - деревенски',
        composition : [],
        categorySearchLink: 'side-dishes',
        price: 180,
        thumbUrl: '/public/img/menu/side-dishes/smoke-duck.png'
    },
    {
        name: 'Шампиньоны на углях',
        composition : [],
        categorySearchLink: 'side-dishes',
        price: 220,
        thumbUrl: '/public/img/menu/side-dishes/smoke-duck.png'
    },
    {
        name: 'Картофель фри',
        composition : [],
        categorySearchLink: 'side-dishes',
        price: 180,
        thumbUrl: '/public/img/menu/side-dishes/smoke-duck.png'
    },
    {
        name: 'Овощи гриль',
        composition : [],
        categorySearchLink: 'side-dishes',
        price: 220,
        thumbUrl: '/public/img/menu/side-dishes/smoke-duck.png'
    },
    {
        name: 'Жареный картофель с луком и грибами',
        composition : [],
        categorySearchLink: 'side-dishes',
        price: 230,
        thumbUrl: '/public/img/menu/side-dishes/smoke-duck.png'
    },
    {
        name: 'Спаржа на гриле',
        composition : [],
        categorySearchLink: 'side-dishes',
        price: 200,
        thumbUrl: '/public/img/menu/side-dishes/smoke-duck.png'
    },
    {
        name: 'Мусс груша',
        composition : [],
        categorySearchLink: 'desserts',
        price: 350,
        thumbUrl: '/public/img/menu/desserts/pear-musse.png'
    },
    {
        name: 'Штрудель',
        composition : [],
        categorySearchLink: 'desserts',
        price: 280,
        thumbUrl: '/public/img/menu/desserts/strudel.png'
    },
    {
        name: 'Шоколадный фондан',
        composition : [],
        categorySearchLink: 'desserts',
        price: 390,
        thumbUrl: '/public/img/menu/desserts/chocolate-fondue.png'
    },
    {
        name: 'Торт фисташковый',
        composition : [],
        categorySearchLink: 'desserts',
        price: 340,
        thumbUrl: '/public/img/menu/desserts/pistachio-cake.png'
    },
    {
        name: 'Меренговый рулет',
        composition : [],
        categorySearchLink: 'desserts',
        price: 380,
        thumbUrl: '/public/img/menu/desserts/meringue-roll.png'
    },
    {
        name: 'Чизкейк сан - себастьян',
        composition : [],
        categorySearchLink: 'desserts',
        price: 400,
        thumbUrl: '/public/img/menu/desserts/san-sebastian-cheesecake.png'
    },
    {
        name: 'Тарт шоколадный',
        composition : [],
        categorySearchLink: 'desserts',
        price: 380,
        thumbUrl: '/public/img/menu/desserts/chocolate-tart.png'
    },
    {
        name: 'Панна котта клубничная',
        composition : [],
        categorySearchLink: 'desserts',
        price: 300,
        thumbUrl: '/public/img/menu/desserts/panna-cotta.png'
    }
]