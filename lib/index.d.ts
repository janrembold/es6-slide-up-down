export interface slideOptions {
    duration?: number;
    easing?: Function;
    direction?: number;
}
export declare const slideUp: (element: HTMLElement, args?: number | slideOptions) => void;
export declare const slideDown: (element: HTMLElement, args?: number | slideOptions) => void;
