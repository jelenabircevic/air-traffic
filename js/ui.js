class UI {

    askForPermissions() {
        return confirm('Use location services?');
    }

    loading() {
        console.log('Loading...')
    }

    displayList(data) {
        console.log('Stop loading.')
        console.log(`ui:
        ${data}`)
    }

}

const ui = new UI();

export default ui