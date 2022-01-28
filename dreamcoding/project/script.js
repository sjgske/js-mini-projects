const menu = document.querySelector('.menu-group');
const itemList = document.querySelector('.item-list');

const array = [
  {
    img: 'img/blue_p.png',
    color: 'blue',
    category: 'pants',
    gender: 'male',
    size: 'small'
  },
  {
    img: 'img/blue_p.png',
    color: 'blue',
    category: 'pants',
    gender: 'male',
    size: 'small'
  },
  {
    img: 'img/blue_s.png',
    color: 'blue',
    category: 'skirt',
    gender: 'female',
    size: 'medium'
  },
  {
    img: 'img/blue_s.png',
    color: 'blue',
    category: 'skirt',
    gender: 'female',
    size: 'medium'
  },
  {
    img: 'img/blue_t.png',
    color: 'blue',
    category: 'tshirt',
    gender: 'male',
    size: 'large'
  },
  {
    img: 'img/blue_t.png',
    color: 'blue',
    category: 'tshirt',
    gender: 'male',
    size: 'large'
  },
  {
    img: 'img/pink_p.png',
    color: 'pink',
    category: 'pants',
    gender: 'male',
    size: 'large'
  },
  {
    img: 'img/pink_p.png',
    color: 'pink',
    category: 'pants',
    gender: 'male',
    size: 'large'
  },
  {
    img: 'img/pink_s.png',
    color: 'pink',
    category: 'skirt',
    gender: 'female',
    size: 'medium'
  },
  {
    img: 'img/pink_s.png',
    color: 'pink',
    category: 'skirt',
    gender: 'female',
    size: 'medium'
  },
  {
    img: 'img/pink_t.png',
    color: 'pink',
    category: 'tshirt',
    gender: 'female',
    size: 'small'
  },
  {
    img: 'img/pink_t.png',
    color: 'pink',
    category: 'tshirt',
    gender: 'female',
    size: 'small'
  },
  {
    img: 'img/yellow_p.png',
    color: 'yellow',
    category: 'pants',
    gender: 'male',
    size: 'small'
  },
  {
    img: 'img/yellow_p.png',
    color: 'yellow',
    category: 'pants',
    gender: 'male',
    size: 'small'
  },
  {
    img: 'img/yellow_s.png',
    color: 'yellow',
    category: 'skirt',
    gender: 'female',
    size: 'medium'
  },
  {
    img: 'img/yellow_s.png',
    color: 'yellow',
    category: 'skirt',
    gender: 'female',
    size: 'medium'
  },
  {
    img: 'img/yellow_t.png',
    color: 'yellow',
    category: 'tshirt',
    gender: 'male',
    size: 'large'
  },
  {
    img: 'img/yellow_t.png',
    color: 'yellow',
    category: 'tshirt',
    gender: 'male',
    size: 'large'
  }
]

function showItem(arr) {
  arr.forEach((elem) => {
    const item = document.createElement('li');
    const itemImage = document.createElement('img');
    const itemDesc = document.createElement('span');

    itemImage.src = elem.img;
    itemDesc.textContent = `${elem.gender}, ${elem.size}`;

    itemList.appendChild(item);
    item.appendChild(itemImage);
    item.appendChild(itemDesc);
  })
}
showItem(array);

menu.addEventListener('click', (e) => {
  const newArr = array.filter(elem =>
    elem.category === e.target.className || elem.color === e.target.className);
  itemList.innerHTML = '';
  showItem(newArr);
});