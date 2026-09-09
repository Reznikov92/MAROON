// const button = document.querySelector('.header__button')!
// const nav = document.querySelector('.header__wrapper')!
// button.addEventListener('click', () => {
//     button.classList.toggle('header__button-active')
//     nav.classList.toggle('header__navigation')
// })

const cards = document.querySelector('.catalog-cards__container')!
const cardsInfo = [{
    title: 'High',
    price: 990,
    category: 'крем для лица',
    volume: '50ml',
    image: "High",
},
{
    title: 'Rest',
    price: 690,
    category: 'минеральная пудра',
    volume: '20g',
    image: "Rest",
},
{
    title: 'Rose',
    price: 890,
    category: 'крем для лица',
    volume: '50ml',
    image: "Rose",
},
{
    title: 'Milk',
    price: 790,
    category: 'масло для тела',
    volume: '150ml',
    image: "Milk",
},
{
    title: 'Paradise',
    price: 590,
    category: 'минеральная пудра',
    volume: '15g',
    image: "Paradise",
},
{
    title: 'Sun',
    price: 90,
    category: 'бомбочка для ванны',
    volume: '20g',
    image: "Sun",
},
{
    title: 'Violet',
    price: 890,
    category: 'крем для лица',
    volume: '50ml',
    image: "Violet",
},
{
    title: 'Clean',
    price: 490,
    category: 'маска для лица',
    volume: '100g',
    image: "Clean",
},
{
    title: 'Coconut',
    price: 990,
    category: 'масло для тела',
    volume: '300ml',
    image: "Coconut",
},
{
    title: 'Lavender',
    price: 290,
    category: 'мыло ручной работы',
    volume: '50g',
    image: "Lavender",
},
{
    title: 'Lotos',
    price: 890,
    category: 'маска для лица',
    volume: '50ml',
    image: "Lotos",
},
{
    title: 'Earth',
    price: 90,
    category: 'бомбочка для ванны',
    volume: '20g',
    image: "Earth"
},
]

cards.innerHTML = cardsInfo.map((card) => `
 <div class="catalog-cards__item">
        <img src="./src/assets/catalog/catalog-cards/${card.image}.png" alt="${card.image}">
        <div class="catalog-cards__context">
          <div class="catalog-cards__first-line">
            <h4 class="catalog-cards__title">${card.title}</h4>
            <div class="catalog-cards__price-title">
              <span class="catalog-cards__price">${card.price} ₽</span>
            </div>
          </div>
          <div class="catalog-cards__second-line">
            <p class="catalog-cards__descr">${card.category}</p>
            <span class="catalog-cards__weight">${card.volume}</span>
          </div>
        </div>
      </div>
`).join('')

const plus = document.querySelectorAll('.plus')
plus.forEach(item => {
    item.addEventListener('click', () => {
        item.closest('.product-main__text')?.classList.toggle('active')
    })
})

