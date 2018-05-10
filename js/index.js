import ui from './ui';
import { dataService, geoService } from './services';

const locationSuccessHandler = (position) => {
    console.log(position);
    dataService.getFlightData(position)
        .then(result => {
            ui.displayList(result);
        })
        .catch(error => {
            console.log(error)
        })
}

const locationFailHandler = (error) => {
    ui.displayPermissionsError();
}

const locationUnavailableHandler = () => {
    console.log('Location services not supported by this browser/OS')
}

onload = () => {
    ui.loading();
    setTimeout(() => {
        geoService.getUserLocation(locationSuccessHandler, locationFailHandler, locationUnavailableHandler)
    }, 5000);
}

