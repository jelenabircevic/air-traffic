import ui from './ui';
import { dataService, geoService } from './services';

const locationSuccessHandler = (position) => {
    console.log(position);
}

const locationFailHandler = (error) => {
    console.log(error);
}

const locationUnavailableHandler = () => {
    console.log('Location services unavailable')
}

onload = () => {
    if (ui.askForPermissions()) {
        geoService.getUserLocation(locationSuccessHandler, locationFailHandler, locationUnavailableHandler);
        ui.loading();
    } else {
        console.log('It is necessary to allow location services in order to use the app.')
    }
}