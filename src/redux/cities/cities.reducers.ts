import { createReducer, PayloadAction, Reducer } from '@reduxjs/toolkit';
import {citiesActions, IAddCityPayload, IRemoveCityPayload, IUpdateOnePayload} from './cities.actions';
import { ICityCoordinates } from '../../models/City';

export interface ICitiesReduxState {
    [id: string]: {
        id: string;
        name: string;
        coordinates: ICityCoordinates;
        startDate: string;
        endDate: string;
        color: string;
    };
}

const initialState: ICitiesReduxState = {};

export const citiesReducer: Reducer<ICitiesReduxState> = createReducer(initialState, {
    [citiesActions.add.type]: (state: ICitiesReduxState, action: PayloadAction<IAddCityPayload>) => {
        const { city } = action.payload;

        state[city.id] = city.normalize();

        return state;
    },
    [citiesActions.remove.type]: (state: ICitiesReduxState, action: PayloadAction<IRemoveCityPayload>) => {
        const { cityId } = action.payload;
        delete state[cityId];

        return state;
    },
    [citiesActions.updateOne.type]: (state, action: PayloadAction<IUpdateOnePayload>) => {
        const { cityId, update } = action.payload;
        if (state[cityId]) {
            state[cityId] = {
                ...state[cityId],
                ...update,
            };

            console.log('updated city', state[cityId]);
        }

        return state;
    },
});
