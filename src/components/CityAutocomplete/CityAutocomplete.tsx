import * as React from 'react';
import { Animations } from '../../helpers/Animations';
import Autosuggest from 'react-autosuggest';
import { City } from "../../models/City";
import { ICityAutocompleteProps, ICityAutocompleteState } from "./CityAutocomplete.I";
import {GlobalStore} from "../../redux/GlobalStore";
import {citiesThunks} from "../../redux/cities/cities.thunks";
import {CityService} from "../../services/CityService";
import {Navigation} from "../../helpers/Navigation";
import {FormEvent} from "react";

class CityAutocomplete extends React.Component<ICityAutocompleteProps, ICityAutocompleteState> {
  constructor(props: ICityAutocompleteProps) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
      placeholder: 'Where to?'
    };
  }

  public onChange(event: FormEvent, { newValue }: any) {
    const city = this.state.suggestions.find(suggestion => suggestion.name === newValue);

    this.setState({
      value: newValue
    });

    if (city) {
      GlobalStore.dispatch(citiesThunks.saveCity(city) as any);
      Navigation.goTo('/newtrip');
    }
  };

  public updateSuggestions(autocomplete?: { value: string }): void {
    let suggestions: City[] = [];

    CityService.byName((autocomplete || {}).value).then((response: any) => {
      suggestions = response;

      this.setState({
        suggestions: suggestions
      });
    });
  };


  public renderSuggestion(suggestion: City): React.ReactNode {
    return (
      <ul className="autocomplete-results">
        <li className="autocomplete-results-item">{suggestion.name}</li>
      </ul>
    );
  }

  public render(): React.ReactNode {
    const { value, suggestions, placeholder } = this.state;
    const { animatedPlaceholderWords } = this.props;
    return (
      <Autosuggest
        ref={(autosuggest: any) => autosuggest && Animations.typing({
          element: autosuggest.input,
          wordsArray: animatedPlaceholderWords,
          defaultPlaceholder: 'Where to?'
        })}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.updateSuggestions.bind(this)}
        onSuggestionsClearRequested={() => this.updateSuggestions()}
        getSuggestionValue={suggestion => suggestion.name}
        renderSuggestion={this.renderSuggestion}
        inputProps={{
          placeholder: placeholder,
          value,
          onChange: this.onChange.bind(this)
        }}
      />
    );
  }
}

export default CityAutocomplete;


