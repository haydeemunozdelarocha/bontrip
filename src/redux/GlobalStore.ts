import { combineReducers, configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { citiesReducer, ICitiesReduxState } from './cities/cities.reducers';
import { IUserReduxState, userReducer } from './user/user.reducers';
import { loadState, saveState } from './localStorage';
import { citiesActions } from './cities/cities.actions';
import { directionsReducer, IDirectionsReduxState } from './directions/directions.reducers';
import { userActions } from './user/user.actions';

export interface IReduxState {
    cities: ICitiesReduxState;
    user: IUserReduxState;
    directions: IDirectionsReduxState;
}

const rootReducer = combineReducers({
    cities: citiesReducer,
    user: userReducer,
    directions: directionsReducer,
});

const defaultMiddleWares = getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [citiesActions.add.type, userActions.setActiveCity.type, citiesActions.updateOne.type],
    },
});

const middleware = [...defaultMiddleWares];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
}
const persistedState = loadState();

export const GlobalStore: Store<IReduxState> = configureStore({
    reducer: rootReducer,
    middleware: middleware,
    preloadedState: persistedState,
});

GlobalStore.subscribe(() => {
    saveState(GlobalStore.getState());
});
