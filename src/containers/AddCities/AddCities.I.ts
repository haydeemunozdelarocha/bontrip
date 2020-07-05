import { City } from '../../models/City';
import { Dispatch } from 'redux';

export interface IAddCitiesProps {
    selectedCities: City[];
    dispatch: Dispatch;
    activeCity: City;
    cityColors: string[];
    directions: any;
    intl: any;
}
