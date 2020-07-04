import { City } from './City';

export class Trip {
    public id: string;
    public cities: City[];
    public activeCityId: string;

    constructor(data: any) {
        this.id = data.id || '';
        this.cities = data.cities || [];
        this.activeCityId = data.activeCityId || '';
    }

    normalize() {
        return {
            id: this.id,
            cities: this.cities,
            activeCityId: this.activeCityId,
        };
    }
}
