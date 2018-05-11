import ui from './ui';
import { dataService, geoService } from './services';


const locationSuccessHandler = (position) => {
    setInterval(() => {
        dataService.getFlightData(position)
            .then(data => {
                ui.displayList(data);
            })
            .catch(error => {
                ui.displayErrorDefault();
                console.log(error)
            })

    }, 60000)
}

const locationFailHandler = (error) => {
    ui.displayErrorPermissions();
}

const locationUnavailableHandler = () => {
    ui.displayErrorSupport();
    console.log('Location services not supported by this browser/OS')
}

onload = () => {
    ui.loading();
    setTimeout(() => {
        geoService.getUserLocation(locationSuccessHandler, locationFailHandler, locationUnavailableHandler)
    }, 3000);
}

