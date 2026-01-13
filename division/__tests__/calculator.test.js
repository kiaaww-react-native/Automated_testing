import { divide } from "../src/calculator.js";

describe('divide', () => {
    it('divides two positive numbers', () => {
        expect(divide(2, 1)).toBe(2);
    });

    it('throws error when inputs are not numbers (a is string)', () => {
        expect(() => divide('2', 1)).toThrow('Both arguments must be numbers');
    });

    it('throws error when inputs are not numbers (b is string)', () => {
        expect(() => divide(2, '1')).toThrow('Both arguments must be numbers');
    });

    it('throws when arguments are NaN (a is NaN)', () => {
        expect(() => divide(NaN, 1)).toThrow('Arguments cannot be NaN');
    });

        it('throws when arguments are NaN (b is NaN)', () => {
        expect(() => divide(2, NaN)).toThrow('Arguments cannot be NaN');
    });

    it('throws when dividing by zero', () => {
        expect(() => divide(2, 0)).toThrow('Division by zero is not allowed');
    });
});