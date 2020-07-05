import { IReduxState } from '../GlobalStore';
import { createGetCities } from './cities.selectors';
import { City } from '../../models/City';
import { citiesActions } from './cities.actions';
import { userActions } from '../user/user.actions';
import { DirectionsService } from '../../services/DirectionsService';
import { directionsActions } from '../directions/directions.actions';
import { Dispatch } from 'redux';
import * as moment from 'moment';

const saveCity = (city: any) => {
    return (dispatch: Dispatch, getState: () => IReduxState) => {
        const savedCities: City[] = createGetCities()(getState());
        const isCityAlreadyAdded = savedCities.find((savedCity: City) => savedCity.name === city.name);
        const lastCity: City = savedCities[savedCities.length - 1];
        const startDate = city.startDate ? new Date(city.startDate) : lastCity ? new Date(lastCity.endDate) : new Date();
        const endDate = city.endDate ? new Date(city.endDate) : new Date(new Date().setDate(startDate.getDate() + 1));
        console.log('city', city);
        const formattedCity = new City({
            ...city,
            startDate,
            endDate,
        });

        const index: number = savedCities.length > 0 ? savedCities.length - 1 : 0;
        formattedCity.generateColor(index);

        if (!isCityAlreadyAdded) {
            dispatch(citiesActions.add({ city: formattedCity }));
            dispatch(userActions.setActiveCity({ cityId: formattedCity.id }));

            if (savedCities.length > 0) {
                dispatch(updateDirections(formattedCity) as any);
            }
        }
    };
};

const updateDirections = (city: City) => {
    return (dispatch: Dispatch, getState: () => IReduxState) => {
        const savedCities = createGetCities()(getState());
        const cityIndex = savedCities.findIndex((savedCity) => savedCity.id === city.id);
        const previousCityCoordinates = savedCities[cityIndex - 1] && savedCities[cityIndex - 1].getCoordinatesArray();
        dispatch(directionsActions.remove({ directionsId: city.id }));

        if (previousCityCoordinates) {
            DirectionsService.get([previousCityCoordinates, city.getCoordinatesArray()], 'driving').then((response: any) => {
                const directions = {
                    id: city.id,
                    ...response,
                };

                dispatch(
                    citiesActions.updateOne({
                        cityId: city.id,
                        update: {
                            distance: `${(response.routes[0].distance / 1000).toFixed(2)} km`,
                            duration: `${moment.utc(response.routes[0].duration * 1000).format('HH:mm')} h`,
                        },
                    }),
                );

                dispatch(directionsActions.add({ directions: directions }));
            });
        } else {
            dispatch(
                citiesActions.updateOne({
                    cityId: city.id,
                    update: {
                        distance: null,
                        duration: null,
                    },
                }),
            );
        }
    };
};

const rescheduleCity = (cityId: string, startDate: Date, endDate: Date) => {
    return (dispatch: Dispatch, getState: () => IReduxState) => {
        const savedCitiesBefore = createGetCities()(getState());
        console.log('savedCitiesBefore', savedCitiesBefore)
        dispatch(
            citiesActions.updateOne({
                cityId,
                update: {
                    startDate,
                    endDate,
                },
            }),
        );

        const savedCitiesAfter = createGetCities()(getState());
        console.log('savedCitiesAfter', savedCitiesAfter)

        if (savedCitiesAfter.length > 1) {
            savedCitiesAfter.forEach((city: City, i: number) => {
                const isFirstOrLast = i == 0 && i !== savedCitiesAfter.length - 1;
                const shouldUpdate = isFirstOrLast ?
                    savedCitiesBefore[i + 1].id !== savedCitiesAfter[i + 1].id :
                    savedCitiesBefore[i - 1].id !== savedCitiesAfter[i - 1].id;
                if (shouldUpdate) {
                    dispatch(updateDirections(city) as any);
                }
            });
        }
    };
};

export const citiesThunks = {
    saveCity,
    rescheduleCity,
};
