import Promise from 'promise';
import axios from 'axios';

export class DirectionsService {
    public static get(points: any, method: string) {
        return new Promise((resolve, reject) => {
            const parsedPointString = this.getParsedPointString(points);

            axios
                .get(`https://api.mapbox.com/directions/v5/mapbox/${method}/${parsedPointString}?geometries=geojson&access_token=${process.env.REACT_APP_BONTRIP_MAP_KEY}`)
                .then(function (response) {
                    if (response.data && response.status === 200) {
                        resolve(response.data);
                    }
                })
                .catch(function (error) {
                    console.log('error in catch');
                    reject(error);
                });
        });
    }

    private static getParsedPointString(points: any) {
        let parsedPointString = '';

        points.forEach((point: any, i: number) => {
            parsedPointString = parsedPointString.concat(parsedPointString, `${point[0].toString()},`, `${point[1].toString()};`);

            if (points.length - 1 === i) {
                parsedPointString = parsedPointString.substring(0, parsedPointString.length - 1);
            }
        });

        return parsedPointString;
    }
}
