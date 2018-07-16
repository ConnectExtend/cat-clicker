const CLICK_COUNTER_CLASS = 'click-counter';
const CAT_IMAGE_CLASS = 'cat-image';
const CLICK_CAPTION_CLASS = 'click-caption';
const CAT_HELLO_CLASS = 'cat-hello';

class CatElement {

    constructor(cat) {
        this.cat = cat;
        this.element = document.createElement('div');
        this.element.classList.add('individual-cat');
        this.element.innerHTML = `
          <h1 class="${CAT_HELLO_CLASS}">Say Hello to ${cat.name}!</h1>
          <img class="${CAT_IMAGE_CLASS}" src="${cat.photo}" alt="${cat.altText}">
          <p class="${CLICK_CAPTION_CLASS}">
            You&#700;ve clicked ${cat.name} 
            <span class="${CLICK_COUNTER_CLASS}">0 times</span>. 
            <em>Meow!</em>
          </p>
        `;
        let clickCount = this.element.querySelector(`.${CLICK_COUNTER_CLASS}`);
        this.element.querySelector(`.${CAT_IMAGE_CLASS}`).addEventListener('click', e => {
            let currentClicks = clickCount.textContent.split(' ')[0];
            clickCount.textContent = 
                `${++currentClicks} ${currentClicks == 1 ? 'time' : 'times'}`;
        });
    }

    show() {
        if (CAT_HOLDER.children.length !== 0) {
            throw new Error('Cannot show a cat element when one is already shown.');
        }
        CAT_HOLDER.appendChild(this.element);
    }

    hide() {
        if (!Array.from(CAT_HOLDER.children).includes(this.element)) {
            throw new Error('Cannot hide a cat element when it is not shown.')
        }
        CAT_HOLDER.removeChild(this.element);
    }

}