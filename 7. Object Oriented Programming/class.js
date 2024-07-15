class Student {
    #cgpa = 3; // private
    constructor(_name, roll_num) {
        this._name = _name;
        this.roll_num = roll_num;
    }
    display() {
        console.log('Name: ' + this._name);
        console.log('Roll Number: ' + this.roll_num);
    }
}

let std1 = new Student('Sam', '123');
let std2 = new Student('Jos', '121');

std1.display();
std2.display();
