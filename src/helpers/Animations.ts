import { ElementHelpers } from './ElementHelpers';
import { FormEvent } from 'react';

interface ITypingAnimationData {
    element: HTMLElement;
    wordsArray: string[];
    defaultPlaceholder: string;
    index?: number;
    addListener?: boolean;
}

export class Animations {
    private static animationTimeout = 2000;

    /**
     * Typing animation on an input, called recursively to type in a list of words letter by letter in an input
     * @param element                 The element to animate
     * @param wordsArray              Words to type
     * @param defaultPlaceholder      Placeholder text before animation
     * @param index                   The current index of the wordsArray
     */
    public static typing({ element, wordsArray, defaultPlaceholder, index = 0, addListener = true }: ITypingAnimationData): void {
        if (!element || !ElementHelpers.isInput(element)) {
            return;
        }

        const isAnimationPaused: boolean = element && element.dataset['typingAnimationPaused'] === 'true';
        const currentIndex: number = index ? index : 0;
        const placeholderValue: string = isAnimationPaused && currentIndex <= wordsArray.length - 1 ?
            defaultPlaceholder :
            wordsArray && wordsArray[currentIndex] ? wordsArray[currentIndex] : '';
        const pauseAnimation = (value: any, e: FocusEvent): void => {
            return ((e.target as HTMLElement).dataset.typingAnimationPaused = value);
        };

        if (addListener) {
            element.addEventListener('focusin', (e) => pauseAnimation('true', e));
            element.addEventListener('focusout', (e) => pauseAnimation('false', e));
        }

        element.setAttribute('placeholder', placeholderValue);

        if (!isAnimationPaused) {
            setTimeout(
                () =>
                    Animations.typing({
                        element: element,
                        wordsArray: wordsArray,
                        defaultPlaceholder: defaultPlaceholder,
                        index: currentIndex === wordsArray.length - 1 ? 0 : currentIndex + 1,
                        addListener: false,
                    }),
                this.animationTimeout,
            );
        }
    }
}
