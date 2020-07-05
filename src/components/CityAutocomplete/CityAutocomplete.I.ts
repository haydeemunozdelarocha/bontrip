import {FormEvent} from "react";

export interface ICityAutocompleteProps {
    animatedPlaceholderWords: string[];
    placeholder: string;
    onSelect: (event: FormEvent, data: any) => any;
}
