// from chatGPT

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    displayDoors() {
        console.log(`Number of doors: ${this.doors}`);
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, engineDisplacement) {
        super(make, model, year);
        this.engineDisplacement = engineDisplacement;
    }

    displayEngine() {
        console.log(`Engine displacement: ${this.engineDisplacement} cc`);
    }
}

class Truck extends Vehicle {
    constructor(make, model, year, payloadCapacity) {
        super(make, model, year);
        this.payloadCapacity = payloadCapacity;
    }

    displayCapacity() {
        console.log(`Payload capacity: ${this.payloadCapacity} tons`);
    }
}

class SUV extends Car {
    constructor(make, model, year, doors, fourWheelDrive) {
        super(make, model, year, doors);
        this.fourWheelDrive = fourWheelDrive;
    }

    displayDriveType() {
        console.log(`Four wheel drive: ${this.fourWheelDrive ? 'Yes' : 'No'}`);
    }
}

class SportBike extends Motorcycle {
    constructor(make, model, year, engineDisplacement, topSpeed) {
        super(make, model, year, engineDisplacement);
        this.topSpeed = topSpeed;
    }

    displayTopSpeed() {
        console.log(`Top speed: ${this.topSpeed} km/h`);
    }
}

class PickupTruck extends Truck {
    constructor(make, model, year, payloadCapacity, bedLength) {
        super(make, model, year, payloadCapacity);
        this.bedLength = bedLength;
    }

    displayBedLength() {
        console.log(`Bed length: ${this.bedLength} feet`);
    }
}

const suv1 = new SUV('Jeep', 'Wrangler', 2023, 4, true);
const sportBike1 = new SportBike('Honda', 'CBR1000RR', 2022, 1000, 300);
const pickupTruck1 = new PickupTruck('Ford', 'F-150', 2021, 2.5, 6.5);

suv1.displayInfo();
suv1.displayDoors();
suv1.displayDriveType();

sportBike1.displayInfo();
sportBike1.displayEngine();
sportBike1.displayTopSpeed();

pickupTruck1.displayInfo();
pickupTruck1.displayCapacity();
pickupTruck1.displayBedLength();
