import { createSelector } from '@reduxjs/toolkit';
import { IReduxState } from '../GlobalStore';
import { City } from '../../models/City';
import { getUserState } from '../user/user.selectors';
import moment from 'moment';
import { ICitiesReduxState } from './cities.reducers';

export const getCitiesState = (state: IReduxState) => state.cities;

export const getCities = createSelector([getCitiesState], (cities: ICitiesReduxState) => {
    return (
        Object.keys(cities) &&
        Object.keys(cities)
            .map((cityId) => {
                const formattedCity = new City(cities[cityId]);
                return formattedCity;
            })
            .sort((a, b) => (a.startDate && moment(a.startDate).isBefore(moment(b.startDate)) ? -1 : 1))
    );
});

export const getCitiesCoordinatesArray = createSelector([getCities], (cities: City[]) => {
    return cities.map((city: any) => city.getCoordinatesArray());
});

export const getActiveCity = createSelector([getCities, getUserState], (cities, user) => {
    return cities.find((city) => city.id === user.activeCityId) || cities[0];
});

export const getCityColors = createSelector(
    // getUnderlyingAppUrl is used to re-trigger page segmentation!
    [getCities],
    (cities) => {
        return cities.map((city) => city.color);
    },
);

export const createGetCities = () => getCities;
export const createGetActiveCity = () => getActiveCity;
export const createGetCityColors = () => getCityColors;
export const createGetCitiesCoordinatesArray = () => getCitiesCoordinatesArray;
