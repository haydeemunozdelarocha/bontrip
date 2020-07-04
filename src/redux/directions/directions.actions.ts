import { ActionCreatorWithoutPayload, ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';
import { IDirectionsPayload, IRemoveDirectionsPayload } from './directions.reducers';

const add: ActionCreatorWithPayload<IDirectionsPayload> = createAction('DIRECTIONS::ADD');
const remove: ActionCreatorWithPayload<IRemoveDirectionsPayload> = createAction('DIRECTIONS::REMOVE');

export const directionsActions = {
    add,
    remove,
};
