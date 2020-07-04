import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';
import { Trip } from '../../models/Trip';

export interface IAddTripPayload {
    trip: Trip;
}

export interface IUpdateOnePayload {
    tripId: string;
    update: any;
}

const add: ActionCreatorWithPayload<IAddTripPayload> = createAction('TRIPS::ADD');
const updateOne: ActionCreatorWithPayload<IUpdateOnePayload> = createAction('TRIPS::UPDATE_ONE');

export const tripsActions = {
    add,
    updateOne,
};
