class Human {

    constructor(x, y, name, last) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.last = last;
        this.diameter = 50;
    }
    sayHi() {
        console.log(this.name + " " + this.last);
    }
    show() {
        fill(0);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}