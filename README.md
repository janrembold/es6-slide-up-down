# es6-scroll-to
Vanilla JavaScript micro function for animated scrolling written in ES6. Supports jQuery easing functions. 

See demo here: https://janrembold.github.io/es6-scroll-to/example/

## Installation

```
yarn add es6-scroll-to

// or

npm install es6-scroll-to
```

## Usage

```javascript
import {animatedScrollTo} from 'es6-scroll-to';

// shorthand - setting target Y-Offset directly
animatedScrollTo(600);

// ...equals to 
animatedScrollTo({
    to: 600
});

// change animation duration [in ms]
animatedScrollTo({
    duration: 1000,
    to: 600
});

// change easing functions, see https://github.com/janrembold/es6-easings
import {easeInQuint} from 'es6-easings';
animatedScrollTo({
    easing: easeInQuint,
    to: 600
});

```

## Options

The `animatedScrollTo` method takes a single parameter that might be an `Object` or the target Y-Offset as positive `Integer`.

```
{
    to: [Number], // required
    duration: [Integer], // optional, defaults to 400
    easing: [function] // optional, defaults to 'easeOutQuad'    
}
```

### `to` (required)
The target Y-Offset as positive `Integer`

### `duration` (optional)
The animation duration in milliseconds. Defaults to `400`

### `easing` (optional)
The easing function that is used to calculate the animation. See https://github.com/janrembold/es6-easings for easing variations. Defaults to `easeOutQuad`
