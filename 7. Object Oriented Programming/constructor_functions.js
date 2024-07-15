function Player(_name, role) {
    this._name = _name;
    this.role = role;
}

let player1 = new Player('AB de Villiers', 'Batter');
let player2 = new Player('J. Kallis', 'All-Rounder');
let player3 = new Player('Dale Steyn', 'Bowler');

Player.prototype.introduction = function() {
    console.log(`I am ${this._name} and my role is ${this.role}`);
}

player1.introduction();
player2.introduction();
player3.introduction();