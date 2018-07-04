import {slideUp, slideDown} from '../lib';
import {easeInOutQuad} from 'es6-easings';

const targetElements: HTMLCollection = document.getElementsByClassName('panel');

document.getElementById('slide-up').onclick = function () {
    for(let element of targetElements) {
        slideUp(<HTMLElement>element, 400);
    }
};

document.getElementById('slide-down').onclick = function () {
    for(let element of targetElements) {
        slideDown(<HTMLElement>element, {
            duration: 1000,
            easing: easeInOutQuad
        });
    }
};
