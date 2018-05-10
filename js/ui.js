class UI {

    loading() {
        document.querySelector('#app').innerHTML = '<h3>Loading...</h3>'
        console.log('Loading...')
    }

    stopLoading() {
        document.querySelector('#app').innerHTML = '';
    }

    displayList(data) {
        this.stopLoading();
        let flightList = document.createElement('ul');
        document.querySelector('#app').appendChild(flightList);
        flightList = document.querySelector('ul');
        console.log(`ul element: ${flightList}`);
        if(JSON.stringify(data.acList) !== JSON.stringify([])) {
            data.acList.forEach(aircraft => {
                let listItem = document.createElement('li');
                let content = document.createTextNode(`${aircraft.Id}, ${aircraft.Alt}, ${(aircraft.Trak < 180) ? "eastbound" : "westbound"}`);
                listItem.appendChild(content);
                flightList.appendChild(listItem);
            })
        } else {
            console.log('Currently no flights in the area');
        }
    }

}

const ui = new UI();

export default ui