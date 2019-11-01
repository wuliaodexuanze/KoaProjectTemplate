const { ParamsValidator, Rule } = require('../../core/params-validator.js')

class PositiveIntegerValidator extends ParamsValidator {
  constructor() {
    super()
    this.id = [
      new Rule('isInt', '需要是正整数')
    ]
  }
}

module.exports = {
  PositiveIntegerValidator
}