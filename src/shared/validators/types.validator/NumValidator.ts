export class NumValidator {

    constructor(public value: any) {
    }
    minMax(min, max): boolean {
        if (this.value < min || this.value > max) return false
        return true
    }
    isNum(min = 0.01, max = 1000000000): boolean {
        if (typeof (this.value) !== 'number') return false
        if (!this.minMax(min, max)) return false
        return true
    }
    static make(value) {
        const numValidator = new NumValidator(value);
        return numValidator
    }
}