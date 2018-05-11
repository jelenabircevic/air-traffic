import ui from './ui';
import { dataService, geoService } from './services';

const sendDataRequest = (position) => {
    if ((location.hash === '#home') || (location.hash === '#dialog')) {
        dataService.getFlightData(position)
            .then(data => {
                ui.displayData(data);
            })
            .catch(error => {
                ui.displayErrorDefault();
                console.log(error)
            })
    }
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

const navigate = () => {
    if (location.hash === '#dialog') {
        ui.displayDialog(() => {
            ui.loading();
            geoService.getUserLocation(locationSuccessHandler, locationFailHandler, locationUnavailableHandler);
        });
    } else if (location.hash === '#home') {
        ui.displayList();
    } else if (location.hash === '#details') {
        ui.displayDetails();
    } else {
        ui.displayError404();
    }
}

window.addEventListener('hashchange', navigate, false);

onload = () => {
    if(location.hash !== '#dialog') {
        location.hash = '#dialog';
        console.log('Start app...')
    } else {
        navigate();
    }
}

