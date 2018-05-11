import listTemplate from './templates/listTemplate.hbs';
import dialogTemplate from './templates/dialogTemplate.hbs';
import errorTemplate from './templates/errorTemplate.hbs';
import detailsTemplate from './templates/detailsTemplate.hbs';

const uiSelectors = {
    view: '#view'
}

let view = document.querySelector(uiSelectors.view);

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

    displayList(data) {
        if(JSON.stringify(data.flights) !== JSON.stringify([])) {
            console.log('Printing list...');
            view.innerHTML = listTemplate(data);
            let activeFlights = Array.from(document.querySelectorAll('.flight'));
            activeFlights.forEach((listing, i) => {
                listing.addEventListener('click', () => {
                    this.displayDetails(data, i);
                }, false);
            })
        } else {
            view.innerHTML = '<h3>Currently no flights in the area</h3>';
            console.log('Currently no flights in the area');
        }
    }

    displayDetails(data, i) {
        view.innerHTML = detailsTemplate(data.flights[i]);
        document.getElementById('back-button').addEventListener('click', () => {
            this.displayList(data);
        }, false);
    }

}

const ui = new UI();

export default ui