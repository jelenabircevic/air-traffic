class Flight {
    constructor (altitude, direction, flightCode, model, destination, origin, logo, inAir){
        this.altitude = altitude;
        this.direction = direction;
        this.flightCode = flightCode;
        this.model = model;
        this.destination = destination;
        this.origin = origin;
        this.logo = () => {this.getLogo(this.logo)};
        this.inAir = !inAir;
    }

    getLogo(logo) {
        return 'https://upload.wikimedia.org/wikipedia/commons/4/41/Lufthansa-Logo_1964.svg'
    }
}

export default Flight;