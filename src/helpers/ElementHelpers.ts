export class ElementHelpers {
    public static isInput(element: HTMLElement): boolean {
        return element.tagName.toLowerCase() === 'input';
    }
}
