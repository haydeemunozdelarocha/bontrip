import { City } from '../models/City';
import axios from 'axios';
import Promise from 'promise';

export class CityService {
    public static byCoordinates(longitude: number, latitude: number): Promise<City> {
        return new Promise((resolve, reject) => {
            axios
                .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?types=place&access_token=${process.env.REACT_APP_BONTRIP_MAP_KEY}`)
                .then(function (response) {
                    if (response.data && response.data.features && response.status === 200) {
                        const cities = response.data.features.map((city: any) => ({
                            name: city.matching_place_name ? city.matching_place_name : city.place_name,
                            coordinates: {
                                lat: city.geometry.coordinates[0],
                                lng: city.geometry.coordinates[1],
                            },
                        }));

                        resolve(cities[0]);
                    }
                })
                .catch(function (error) {
                    console.log('error in catch');
                    reject(error);
                });
        });
    }

    public static byName(searchText: string) {
        return new Promise((resolve, reject) => {
            if (searchText) {
                axios
                    .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?types=place&access_token=${process.env.REACT_APP_BONTRIP_MAP_KEY}`)
                    .then(function (response) {
                        const cities: City[] = [];

                        response.data.features.map((city: any) => {
                            cities.push(
                                new City({
                                    name: city.matching_place_name || city.place_name,
                                    coordinates: {
                                        lat: city.geometry.coordinates[0],
                                        lng: city.geometry.coordinates[1],
                                    },
                                }),
                            );
                        });

                        resolve(cities);
                    })
                    .catch(function (error) {
                        if (axios.isCancel(error)) {
                            console.log('Request canceled', error.message);
                        } else {
                            reject(error);
                        }
                    });
            }
        });
    }
}
