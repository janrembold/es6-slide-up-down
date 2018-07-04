# es6-slide-up-down
Vanilla JavaScript micro function for animated slideUp/slideDown of elements written in ES6. The behavior equals jQuerys' slideUp and slideDown methods.
It uses requestAnimationFrame and has no external dependencies.

See demo here: https://janrembold.github.io/es6-slide-up-down/example/

## Installation

```
yarn add es6-slide-up-down

// or

npm install es6-slide-up-down
```

## Usage

```javascript
import {slideUp, slideDown} from 'es6-slide-up-down';

// grab some html element
const element = document getElementById('someElement');

// shorthand - slide up (close) element - Defaults: duration: 400ms, easing: easeOutQuad
slideUp(element);

// ...equals to 
slideUp(element, {
    duration: 400
});

// change animation duration [in ms]
slideUp(element, 1000);

// ...equals to
slideUp(element, {
    duration: 1000
});

// change easing function, see https://github.com/janrembold/es6-easings
import {easeInQuint} from 'es6-easings';
slideUp({
    easing: easeInQuint,
    to: 600
});

// slideDown has exactly the same options and usage

```

## Options

The `slideUp` and `slideDown` methods take a single HTML element as first parameter.
Second and optional parameter might be an `Object` or the animation duration as positive `Integer`.

```
{
    duration: [Integer], // optional, defaults to 400
    easing: [function] // optional, defaults to 'easeOutQuad'    
}
```

### `duration` (optional)
The animation duration in milliseconds. Defaults to `400`

### `easing` (optional)
The easing function that is used to calculate the animation. See https://github.com/janrembold/es6-easings for easing variations. Defaults to `easeOutQuad`
