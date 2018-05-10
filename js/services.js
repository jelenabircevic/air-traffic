import axios from 'axios';
import Flight from './entities';
import { URL, FLIGHT_DATA } from './constants';

class GeoService {

    getUserLocation(onSuccess, onFail, onUnavailable) {
        if('geolocation' in navigator) {
            console.log('about to get location...');
            navigator.geolocation.getCurrentPosition(result => {
                const position = {
                    lat: result.coords.latitude.toFixed(6),
                    lng: result.coords.longitude.toFixed(6)
                };
                onSuccess(position);
            }, onFail)
        } else {
            onUnavailable();
        }
    }
}

class DataService {

    async getFlightData(geolocation) {
        /* return axios.get(`${url}?lat=${geolocation.lat}&lng=${geolocation.lng}&fDstL=0&fDstU=10`)
            .then(response => {
                console.log(`Iz servisa: ${response.data}`);
                return response;
            })
            .catch(error => {
                console.log(error)
            }) */
        return FLIGHT_DATA;
    }
}

export const geoService = new GeoService();
export const dataService = new DataService();