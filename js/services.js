import $ from 'jquery';
import Flight from './entities';
import { URL } from './constants';

class GeoService {

    getUserLocation(onSuccess, onFail, onUnavailable) {
        if ('geolocation' in navigator) {
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
        let response = await $.ajax({
            dataType: 'jsonp',
            data: `lat=${geolocation.lat}&lng=${geolocation.lng}&fDstL=0&fDstU=100`,
            url: URL,
            success: (response) => {

            }
        });
        let flightData = response.acList;
        let flightList = flightData.map(flight => {
            return new Flight(flight.Alt, flight.Trak, flight.Id, flight.Mdl, flight.To, flight.From, flight.OpIcao, flight.Gnd)
        });
        let data = {
            flights: flightList.sort((a, b) => b.altitude - a.altitude)
        }
        console.log(data);
        return data;
    }
}

export const geoService = new GeoService();
export const dataService = new DataService();