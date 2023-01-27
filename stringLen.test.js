const stringLen = require('./stringLen');
const stringRev = require('./stringRev');
const stringCap = require('./stringCap');

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
