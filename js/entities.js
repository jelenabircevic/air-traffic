class Flight {
    constructor (altitude, direction, flightCode, model, destination, origin, logo, inAir){
        this.altitude = altitude;
        this.direction = direction;
        this.flightCode = flightCode;
        this.model = model;
        this.destination = destination;
        this.origin = origin;
        this.airline = logo;
        this.logo = logo ? logo.split(' ').join('').concat('.com').toLowerCase() : 'logo';
        this.inAir = !inAir;
    }
}

export default Flight;