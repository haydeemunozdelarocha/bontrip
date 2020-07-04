import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';
import { City } from '../../models/City';

export interface IAddCityPayload {
    city: City;
}

export interface IUpdateOnePayload {
    cityId: string;
    update: any;
}

const add: ActionCreatorWithPayload<IAddCityPayload> = createAction('CITIES::ADD');
const updateOne: ActionCreatorWithPayload<IUpdateOnePayload> = createAction('CITIES::UPDATE_ONE');

export const citiesActions = {
    add,
    updateOne,
};
