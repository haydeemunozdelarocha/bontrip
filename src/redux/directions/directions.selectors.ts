import { createSelector } from '@reduxjs/toolkit';
import { IReduxState } from '../GlobalStore';
import { IDirectionsReduxState } from './directions.reducers';

export const getDirectionsState = (state: IReduxState) => state.directions;

export const getDirections = createSelector([getDirectionsState], (directions: IDirectionsReduxState) => {
    return (
        Object.keys(directions) &&
        Object.keys(directions).map((directionsId) => {
            return directions[directionsId].routes[0];
        })
    );
});

export const createGetDirections = () => getDirections;
