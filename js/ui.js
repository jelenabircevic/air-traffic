import listTemplate from './templates/listTemplate.hbs';
import dialogTemplate from './templates/dialogTemplate.hbs';
import errorTemplate from './templates/errorTemplate.hbs';
import detailsTemplate from './templates/detailsTemplate.hbs';

const uiSelectors = {
    view: '#view'
}

let view = document.querySelector(uiSelectors.view);

const state = {
    listData: null,
    detailsData: null
}

class UI {

    loading() {
        view.innerHTML = '<h3>Loading...</h3>';
        console.log('Loading...');
    }

    displayDialog(callback) {
        console.log('About to display dialog...');
        view.innerHTML = dialogTemplate();
        document.getElementById('allow').addEventListener('click', callback, false);
        document.getElementById('deny').addEventListener('click', this.displayErrorPermissions, false);
    }

    displayErrorPermissions() {
        view.innerHTML = errorTemplate('Location has been denied: cannot display data');
        console.log('permission error');
    }

    displayErrorDefault() {
        view.innerHTML = errorTemplate('Oops! Something went wrong');
    }

    displayErrorSupport() {
        view.innerHTML = errorTemplate('Location services are not supported');
    }

    displayError404() {
        view.innerHTML = errorTemplate('Nothing found. Error 404');
    }

    displayData(data) {
        state.listData = data;
        if(location.hash === '#home') {
            this.displayList();
        } else {
            location.hash = '#home';
        }
    }

    displayList() {
        if((state.listData) && (JSON.stringify(state.listData.flights) !== JSON.stringify([]))) {
            state.detailsData = null;
            console.log('Printing list...');
            view.innerHTML = listTemplate(state.listData);
            let activeFlights = Array.from(document.querySelectorAll('.flight'));
            activeFlights.forEach((listing, i) => {
                listing.addEventListener('click', () => {
                    state.detailsData = state.listData.flights[i];
                    location.hash = '#details';
                }, false);
            })
        } else if(state.listData) {
            view.innerHTML = '<h3>Currently no flights in the area</h3>';
            console.log('Currently no flights in the area');
        } else {
            location.hash = '#dialog';
        }
    }

    displayDetails() {
        if(state.detailsData === null) {
            view.innerHTML = errorTemplate('Invalid operation');
        } else {
            view.innerHTML = detailsTemplate(state.detailsData);
            document.getElementById('back-button').addEventListener('click', () => {
                location.hash = '#home';
            }, false);
        }
    }

}

const ui = new UI();

export default ui