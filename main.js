class Transport {
    constructor (title, color, type, model) {
        this.title = title;
        this.color = color;
        this.type  = type;
        this.model = model;
    }
    // startEngine(){
    //     console.log('start');
    // }

}

class Car extends Transport {
    constructor (title, color, type, model) {
        super(title, color, type, model);
        this.title = title;
        this.type = type;
    }
    purpose() {
        console.log(`Car: ${this.title}\nPurpose: ${this.type}`);
    }
}
const mercedes = new Car('Mercedes', 'red', 'Mercedes-benz', 'X10')
mercedes.purpose()
// mercedes.startEngine()



class Aircraft extends Transport {
    constructor (title, color, type, model) {
        super(title, color, type, model);
        this.type = type;
        this.title = title;
    }
    purpose(){
        console.log(`Aircraft: ${this.title}\nPurpose: ${this.type}`);
    }
}
const airplane = new Aircraft ('Spanish', 'green', 'military', '2022y.')
airplane.purpose()
// airplane.startEngine()

