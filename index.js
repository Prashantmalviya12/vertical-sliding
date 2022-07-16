const sliderConatainer = document.querySelector('.slide-container');

const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');

const upButton = document.querySelector('.up-btn');
const downButton = document.querySelector('.down-btn');

const slideLength = slideRight.querySelectorAll('div').length;

let activeslideIndex = 0;
slideLeft.style.top = `-${(slideLength-1)*100}vh`;

upButton.addEventListener('click',()=>changeslide('up'));
downButton.addEventListener('click',()=>changeslide('down'));

function changeslide(direction) {
    const slideHeight = sliderConatainer.clientHeight;
    console.log(slideHeight);
    if (direction === 'up') {
        activeslideIndex++;
        if (activeslideIndex > slideLength - 1) {
            activeslideIndex = 0;
        }
    } else if (direction === 'down') {
        activeslideIndex--;
        if (activeslideIndex < 0) {
            activeslideIndex = slideLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeslideIndex * slideHeight}px)`;
    slideLeft.style.transform = `translateY(${activeslideIndex * slideHeight}px)`;

}