import listTemplate from './listTemplate.hbs';

const uiSelectors = {
    view: '#view'
}

let view = document.querySelector(uiSelectors.view);

class UI {

    loading() {
        view.innerHTML = '<h3>Loading...</h3>';
        console.log('Loading...');
    }

    displayErrorPermissions() {
        view.innerHTML = '<h3>Location has been denied: cannot display data</h3>';
        console.log('permission error');
    }

    displayErrorDefault() {
        view.innerHTML = '<h3>Oops! Something went wrong</h3>'
    }

    displayErrorSupport() {
        view.innerHTML = '<h3>Location services not supported</h3>'
    }

    displayList(data) {
        if(JSON.stringify(data.flights) !== JSON.stringify([])) {
            console.log('Printing list...');
            view.innerHTML = listTemplate(data);
        } else {
            view.innerHTML = '<h3>Currently no flights in the area</h3>';
            console.log('Currently no flights in the area');
        }
    }

}

const ui = new UI();

export default ui