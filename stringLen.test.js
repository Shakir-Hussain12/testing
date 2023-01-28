const stringLen = require('./stringLen');
const stringRev = require('./stringRev');
const stringCap = require('./stringCap');
const Calculator = require('./Calculator');

const methods = new Calculator(1,1);

test('Check Length', ()=> {
    str = 'Shakir';
    expect(stringLen(str)).toBe(str.length);
    expect(stringLen(str)).toBeGreaterThanOrEqual(1);
    expect(stringLen(str)).toBeLessThanOrEqual(10);
});

test('Reverse', ()=> {
    str = 'Shakir';
    expect(stringRev(str)).toBe('rikahS');
});

test('Capital', ()=> {
    str = 'shakir';
    expect(stringCap(str)).toBe('Shakir');
})

describe('Calculator Class tests', () => {
    test('Add', () => {
        expect(methods.add(1,1)).toBe(1 + 1);
    })

    test('Subtract', () => {
        expect(methods.sub(1,1)).toBe(1 - 1);
    })

    test('Multiply', () => {
        expect(methods.mul(1,1)).toBe(1 * 1);
    })

    test('Division', () => {
        expect(methods.div(1,1)).toBe(1 / 1);
    })
});