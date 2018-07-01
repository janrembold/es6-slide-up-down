declare var document: any;

import {slideUp, slideDown} from '../lib';
import {easeInQuint} from 'es6-easings';

const targetElements: HTMLCollection = document.getElementsByClassName('panel');

document.getElementById('slide-up').onclick = function () {
    for(let element of targetElements) {
        slideUp(<HTMLElement>element, {
            duration: 4000,
            easing: easeInQuint
        });
    }
};

document.getElementById('slide-down').onclick = function () {
    for(let element of targetElements) {
        slideDown(<HTMLElement>element, {
            duration: 4000
        });
    }
};
