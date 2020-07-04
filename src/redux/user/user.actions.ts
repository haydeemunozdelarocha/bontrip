import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';

export interface ISetActiveCityIdPayload {
    cityId: string;
}

const setActiveCity: ActionCreatorWithPayload<ISetActiveCityIdPayload> = createAction('USER::SET_ACTIVE_CITY');

export const userActions = {
    setActiveCity,
};
