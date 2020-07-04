import * as React from 'react';
import { Animations } from '../../helpers/Animations';
import Autosuggest from 'react-autosuggest';
import { City } from '../../models/City';
import { ICityAutocompleteProps } from './CityAutocomplete.I';
import { GlobalStore } from '../../redux/GlobalStore';
import { citiesThunks } from '../../redux/cities/cities.thunks';
import { CityService } from '../../services/CityService';
import { Navigation } from '../../helpers/Navigation';
import { FormEvent, useEffect, useState } from 'react';

export const CityAutocomplete: React.FC<ICityAutocompleteProps> = (props: ICityAutocompleteProps) => {
    const { animatedPlaceholderWords } = props;
    const placeholder = 'Where to?';
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        updateSuggestions();
    }, [value]);

    const renderSuggestion = (suggestion: City) => (
        <ul className="autocomplete-results">
            <li className="autocomplete-results-item">{suggestion.name}</li>
        </ul>
    );

    const updateSuggestions = (): void => {
        if (value && value.length > 0) {
            CityService.byName(value).then((response: any) => {
                setSuggestions(response);
            });
        }
    };

    const onSelect = (event: FormEvent, data: any) => {
        GlobalStore.dispatch(citiesThunks.saveCity(data.suggestion) as any);
        Navigation.goTo('/newtrip');
    };

    return (
        <Autosuggest
            ref={(autosuggest: any) =>
                autosuggest &&
                Animations.typing({
                    element: autosuggest.input,
                    wordsArray: animatedPlaceholderWords,
                    defaultPlaceholder: 'Where to?',
                })
            }
            suggestions={suggestions}
            onSuggestionsFetchRequested={updateSuggestions}
            onSuggestionsClearRequested={() => setSuggestions([])}
            getSuggestionValue={(suggestion: any) => suggestion.name}
            renderSuggestion={renderSuggestion}
            onSuggestionSelected={onSelect}
            inputProps={{
                placeholder: placeholder,
                value,
                onChange: (e, inputData: any) => {
                    setValue(inputData.newValue);
                },
            }}
        />
    );
};
