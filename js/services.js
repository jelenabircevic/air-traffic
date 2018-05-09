import axios from 'axios';
import Flight from './entities';
import url from './constants';

class GeoService {

    getUserLocation(onSuccess, onFail, onUnavailable) {
        if('geolocation' in navigator) {
            console.log('about to get location...');
            navigator.geolocation.getCurrentPosition(onSuccess, onFail)
        } else {
            onUnavailable();
        }
    }
}

class DataService {

    async getFlightData(geolocation) {
        const flightData = await axios.get(`${url}?lat=${geolocation.lat}&lng=${geolocation.lng}&fDstL=0&fDstU=10`);
        console.log(flightData.data);
    }
}

export const geoService = new GeoService();
export const dataService = new DataService();