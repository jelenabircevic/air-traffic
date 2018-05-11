import ui from './ui';
import { dataService, geoService } from './services';

const sendDataRequest = (position) => {
    dataService.getFlightData(position)
        .then(data => {
            ui.displayList(data);
        })
        .catch(error => {
            ui.displayErrorDefault();
            console.log(error)
        })
}

const locationSuccessHandler = (position) => {
    sendDataRequest(position);
    setInterval(() => {
        sendDataRequest(position)
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
    console.log('Start app...')
    ui.displayDialog(() => {
        ui.loading();
        geoService.getUserLocation(locationSuccessHandler, locationFailHandler, locationUnavailableHandler)
    })
}

