class Calculator {
    constructor (a=1,b=1) {
        this.a=a;
        this.b=b;
    }

    add = () => this.a + this.b;
    sub = () => this.a - this.b;
    mul = () => this.a * this.b;
    div = () => this.a / this.b;  
}

module.exports = Calculator;