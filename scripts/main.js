const CAT_HOLDER = document.querySelector('.image-wrapper');
  
const CAT_SELECTOR = document.querySelector('.cat-names');

const INDEX_ATTRIBUTE = 'data-index';

const CAT_ELEMENTS = [
  new CatElement(new Cat('Oreo', 'black and white cat stares at camera', 'img/oreo.jpg')),
  new CatElement(new Cat('Toby', 'tabby cat laying in the grass', 'img/tabby.jpg')),
  new CatElement(new Cat('Rascal', 'tiger cat looks at camera sassily', 'img/rascal.jpg')),
  new CatElement(new Cat('Princess', 'fluffy cat lays next to a rose', 'img/princess.jpg')),
  new CatElement(new Cat('Nova', 'gray kitten gazes into the distance', 'img/gray.jpg'))
];

for (let i = 0; i < CAT_ELEMENTS.length; i++) {
  let option = document.createElement('option');
  option.textContent = CAT_ELEMENTS[i].cat.name;
  option.setAttribute(INDEX_ATTRIBUTE, i);
  CAT_SELECTOR.appendChild(option);
}

let currentCat;

CAT_SELECTOR.onchange = e => {
  if (currentCat !== undefined) {
    currentCat.hide();
  }
  let selectedOption = e.target.selectedOptions[0];
  currentCat = CAT_ELEMENTS[parseInt(selectedOption.getAttribute(INDEX_ATTRIBUTE))];
  currentCat.show();
}