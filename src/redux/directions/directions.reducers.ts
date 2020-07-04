import { createReducer, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { directionsActions } from './directions.actions';

export interface IDirectionsReduxState {
    [id: string]: any;
}

export interface IDirectionsPayload {
    directions: any;
}

export interface IRemoveDirectionsPayload {
    directionsId: string;
}

const initialState: IDirectionsReduxState = {};

export const directionsReducer: Reducer<IDirectionsReduxState> = createReducer(initialState, {
    [directionsActions.add.type]: (state: IDirectionsReduxState, action: PayloadAction<IDirectionsPayload>) => {
        const { directions } = action.payload;
        console.log('DIRECTIONS!', directions);
        state[directions.id] = directions;

        return state;
    },
    [directionsActions.remove.type]: (state, action: PayloadAction<IRemoveDirectionsPayload>) => {
        const { directionsId } = action.payload;

        if (state[directionsId]) {
            delete state[directionsId];
        }

        return state;
    },
});
