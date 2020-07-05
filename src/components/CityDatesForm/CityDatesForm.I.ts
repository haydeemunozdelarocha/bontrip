import { City } from '../../models/City';

export interface ICityDatesFormProps {
    cities: City[];
    activeCityId: string;
    colors: string[];
    title: string;
}

export interface ICityDatesFormState {
    ranges: any;
    activeRange: number[];
}
