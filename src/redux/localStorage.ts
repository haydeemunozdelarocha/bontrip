import { IReduxState } from './GlobalStore';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('bontrip-user');
        if (serializedState === null) {
            return;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        console.error('There was an error loading the state.');
    }
};

export const saveState = (state: IReduxState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('bontrip-user', serializedState);
    } catch {
        console.error('There was an error saving the state.');
    }
};
