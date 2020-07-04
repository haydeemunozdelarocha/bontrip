import { createReducer, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { IAddTripPayload, IUpdateOnePayload, tripsActions } from './trips.actions';
import { City } from '../../models/City';

export interface ITripsReduxState {
    [id: string]: {
        id: string;
        cities: City[];
        activeCityId: string;
    };
}

const initialState: ITripsReduxState = {};

export const tripsReducer: Reducer<ITripsReduxState> = createReducer(initialState, {
    [tripsActions.add.type]: (state: ITripsReduxState, action: PayloadAction<IAddTripPayload>) => {
        const { trip } = action.payload;
        state[trip.id] = trip.normalize();

        return state;
    },
    [tripsActions.updateOne.type]: (state, action: PayloadAction<IUpdateOnePayload>) => {
        const { tripId, update } = action.payload;
        if (state[tripId]) {
            state[tripId] = {
                ...state[tripId],
                ...update,
            };

            console.log('updated city', state[tripId]);
        }

        return state;
    },
});
