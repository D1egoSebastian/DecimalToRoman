const assert = require('assert')
const DecimalToRoman = require('./DecimalToRoman ')

describe('DecimalToRoman', () => {

    it('should convert decimals to romans', () => {
        assert.strictEqual(DecimalToRoman(15), 'XV');
    })

    it('should convert decimals to romans', () => {
        assert.strictEqual(DecimalToRoman(100), 'C');
    })

    it('should convert decimals to romans', () => {
        assert.strictEqual(DecimalToRoman(140), 'CXL');
    })

    it('should convert decimals to romans', () => {
        assert.strictEqual(DecimalToRoman(1500), 'MD');
    })

    it('should be a decimal number', () => {
        const result = DecimalToRoman('invalid');
        assert.strictEqual(result, undefined)
    })

});