const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const BAD_CHAR_REGEX = /[\/<>\*\\"';|?%]/;

export class StrValidator {

  constructor(public value:string) {
  }
  minMax(min, max): boolean{
    if (this.value.length < min || this.value.length > max) return false
    return true
  }
  isString(min = 1, max = 1000): boolean {
    if (typeof (this.value) !== 'string') return false
    if (BAD_CHAR_REGEX.test(this.value)) return false
    if (!this.minMax(min,max)) return false
    return true
  }
  isEmail(): boolean {
    if (!EMAIL_REGEX.test(this.value)) return false
    return true
  }
  isPassword(): boolean {
    if (!this.isString(8,20)) return false
    return true
  }
  static make(value) {
    const strValidator = new StrValidator(value);
    return strValidator
  }
}