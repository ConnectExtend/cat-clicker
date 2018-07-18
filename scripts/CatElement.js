const CLICK_COUNTER_CLASS = 'click-counter';
const CAT_IMAGE_CLASS = 'cat-image';
const CLICK_CAPTION_CLASS = 'click-caption';
const CAT_HELLO_CLASS = 'cat-hello';

class CatElement {

    /**
     * Creates a new cat element based on <code>cat</code>
     * @param {Cat} cat The cat this element is based on 
     */
    constructor(cat) {
        this.cat = cat;
        this.element = document.createElement('button');
        this.element.classList.add('individual-cat');
        this.element.innerHTML = `
          <h1 class="${CAT_HELLO_CLASS}">Say Hello to ${cat.name}!</h1>
          <img class="${CAT_IMAGE_CLASS}" src="${cat.photo}" alt="${cat.altText}" tabindex="0">
          <p class="${CLICK_CAPTION_CLASS}">
            You&#700;ve clicked ${cat.name} 
            <span class="${CLICK_COUNTER_CLASS}">0 times</span>. 
            <em>Meow!</em>
          </p>
        `;

        let catImage = this.element.querySelector(`.${CAT_IMAGE_CLASS}`);

        // This tracks and displays the number of clicks on the cat image
        let clickCount = this.element.querySelector(`.${CLICK_COUNTER_CLASS}`);
        catImage.addEventListener('click', e => {
            // Gets the current number of clicks from the span text
            let currentClicks = clickCount.textContent.split(' ')[0];
            // Updates the number of clicks in the span text
            clickCount.textContent =
                `${++currentClicks} ${currentClicks == 1 ? 'time' : 'times'}`;
        });
        
        // This adds support for keyboard-only users
        this.element.addEventListener('keyup', e => {
            if (event.key === 'Enter' || event.key === ' ') {
                catImage.click();
                e.preventDefault();
            }
        });
    }

    /**
     * Shows the cat element in the DOM
     * 
     * @throws {Error} if a cat element is already shown
     */
    show() {
        if (CAT_HOLDER.children.length !== 0) {
            throw new Error('Cannot show a cat element when one is already shown.');
        }
        CAT_HOLDER.appendChild(this.element);
    }

    /**
     * Hides the cat element from the DOM
     * 
     * @throws {Error} if the cat element is not shown
     */
    hide() {
        if (!Array.from(CAT_HOLDER.children).includes(this.element)) {
            throw new Error('Cannot hide a cat element when it is not shown.')
        }
        CAT_HOLDER.removeChild(this.element);
    }

}