import { browserHistory } from 'react-router';

export class Navigation {
    public static goTo(location) {
        browserHistory.push(location);
    }
}
