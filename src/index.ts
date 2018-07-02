export interface slideOptions {
    duration?: number,
    easing?: Function,
    direction?: number
}

interface slideDirection {
    OPEN: number,
    CLOSE: number
}

const defaults: slideOptions = {
    duration: 400,
    easing: (currentTime: number, startValue: number, diffValue: number, dureation: number) => {
        return -diffValue *(currentTime/=dureation)*(currentTime-2) + startValue;
    }
};

const directions: slideDirection = {
    OPEN: 1,
    CLOSE: 2
};

export const slideUp = (element: HTMLElement, args: number|slideOptions = {}) => {
    if(isInteger(args)) {
        args = { duration: <number>args };
    }
    
    const options: any = extend(defaults, args);
    options.direction = directions.CLOSE;
    options.to = 0;
    options.startingHeight = element.scrollHeight;
    options.distanceHeight = -options.startingHeight;

    setElementAnimationStyles(element);

    window.requestAnimationFrame((timestamp: number) => animate(element, options, timestamp));
};

export const slideDown = (element: HTMLElement, args: number|slideOptions = {}) => {
    if(isInteger(args)) {
        args = { duration: <number>args };
    }

    element.style.height = '0px';
    setElementAnimationStyles(element);

    const options: any = extend(defaults, args);
    options.direction = directions.OPEN;
    options.to = element.scrollHeight;
    options.startingHeight = 0;
    options.distanceHeight = options.to;
    
    window.requestAnimationFrame((timestamp: number) => animate(element, options, timestamp));
};

const animate = (element: HTMLElement, options: any, now: number) => {
    if(!options.startTime) {
        options.startTime = now;
    }

    const currentTime = now - options.startTime;
    let animationContinue = currentTime < options.duration;
    let newHeight: number = Math.round(options.easing(
        currentTime, 
        options.startingHeight, 
        options.distanceHeight,
        options.duration
    ));

    if(animationContinue) {
        element.style.height = `${Math.round(newHeight)}px`;
        window.requestAnimationFrame((timestamp: number) => animate(element, options, timestamp));
    } else {
        if(options.direction === directions.CLOSE) {
            element.style.display = 'none';
        }

        if(options.direction === directions.OPEN) {
            element.style.display = 'block';
        }
        
        removeElementAnimationStyles(element);
    }
}

const setElementAnimationStyles = (element: HTMLElement) => {
    element.style.display = 'block';
    element.style.overflow = 'hidden';
    element.style.marginTop = '0';
    element.style.marginBottom = '0';
    element.style.paddingTop = '0';
    element.style.paddingBottom = '0';
}

const removeElementAnimationStyles = (element: HTMLElement) => {
    element.style.height = null;
    element.style.overflow = null;
    element.style.marginTop = null;
    element.style.marginBottom = null;
    element.style.paddingTop = null;
    element.style.paddingBottom = null;
}

const isInteger = (value: any) => {
    if(<any>Number.isInteger) {
        return Number.isInteger(value);
    } else {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    }
};

const extend = (defaults: any, options: any) => {
    const extendedOptions: any = {};
    for (let key in defaults) { 
        extendedOptions[key] = options[key] || defaults[key]; 
    }
    return extendedOptions;
};