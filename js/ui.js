import listTemplate from './listTemplate.hbs';

const uiSelectors = {
    flightList: '#flights-container'
}

let flightList = document.querySelector(uiSelectors.flightList);

class UI {

    loading() {
        flightList.innerHTML = '<h3>Loading...</h3>';
        console.log('Loading...');
    }

    displayPermissionsError() {
        flightList.innerHTML = '<h3>Location has been denied: cannot display data</h3>';
        console.log('permission error');
    }

    displayList(data) {
        if(JSON.stringify(data.acList) !== JSON.stringify([])) {
            console.log('Printing list...');
            flightList.innerHTML = listTemplate(data);
        } else {
            flightList.innerHTML = '<h3>Currently no flights in the area</h3>';
            console.log('Currently no flights in the area');
        }
    }

}

const ui = new UI();

export default ui