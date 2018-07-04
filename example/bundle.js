(function () {
    'use strict';

    const defaults = {
        duration: 400,
        easing: (currentTime, startValue, diffValue, dureation) => {
            return -diffValue * (currentTime /= dureation) * (currentTime - 2) + startValue;
        }
    };
    const directions = {
        OPEN: 1,
        CLOSE: 2
    };
    const slideUp = (element, args = {}) => {
        if (isInteger(args)) {
            args = { duration: args };
        }
        const options = extend(defaults, args);
        options.direction = directions.CLOSE;
        options.to = 0;
        options.startingHeight = element.scrollHeight;
        options.distanceHeight = -options.startingHeight;
        setElementAnimationStyles(element);
        window.requestAnimationFrame((timestamp) => animate(element, options, timestamp));
    };
    const slideDown = (element, args = {}) => {
        if (isInteger(args)) {
            args = { duration: args };
        }
        element.style.height = '0px';
        setElementAnimationStyles(element);
        const options = extend(defaults, args);
        options.direction = directions.OPEN;
        options.to = element.scrollHeight;
        options.startingHeight = 0;
        options.distanceHeight = options.to;
        window.requestAnimationFrame((timestamp) => animate(element, options, timestamp));
    };
    const animate = (element, options, now) => {
        if (!options.startTime) {
            options.startTime = now;
        }
        const currentTime = now - options.startTime;
        let animationContinue = currentTime < options.duration;
        let newHeight = options.easing(currentTime, options.startingHeight, options.distanceHeight, options.duration);
        if (animationContinue) {
            element.style.height = `${newHeight.toFixed(2)}px`;
            window.requestAnimationFrame((timestamp) => animate(element, options, timestamp));
        }
        else {
            if (options.direction === directions.CLOSE) {
                element.style.display = 'none';
            }
            if (options.direction === directions.OPEN) {
                element.style.display = 'block';
            }
            removeElementAnimationStyles(element);
        }
    };
    const setElementAnimationStyles = (element) => {
        element.style.display = 'block';
        element.style.overflow = 'hidden';
        element.style.marginTop = '0';
        element.style.marginBottom = '0';
        element.style.paddingTop = '0';
        element.style.paddingBottom = '0';
    };
    const removeElementAnimationStyles = (element) => {
        element.style.height = null;
        element.style.overflow = null;
        element.style.marginTop = null;
        element.style.marginBottom = null;
        element.style.paddingTop = null;
        element.style.paddingBottom = null;
    };
    const isInteger = (value) => {
        if (Number.isInteger) {
            return Number.isInteger(value);
        }
        else {
            return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
        }
    };
    const extend = (defaults, options) => {
        const extendedOptions = {};
        for (let key in defaults) {
            extendedOptions[key] = options[key] || defaults[key];
        }
        return extendedOptions;
    };

    const easeInOutQuad = (t, b, c, d) => {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    };

    var targetElements = document.getElementsByClassName('panel');
    document.getElementById('slide-up').onclick = function () {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = targetElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var element = _step.value;

                slideUp(element, 400);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    };
    document.getElementById('slide-down').onclick = function () {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = targetElements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var element = _step2.value;

                slideDown(element, {
                    duration: 1000,
                    easing: easeInOutQuad
                });
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    };

}());
