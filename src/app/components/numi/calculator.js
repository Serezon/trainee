import { addVariable, changeVariable } from '../../redux/ducks/numi/operations'
import { Variable, isError } from './modules'

function Calculator(expression, dispatch, numi) {
  let exp = expression

  if (exp.indexOf('prev') !== -1 || exp.indexOf('sum') !== -1) {
    const values = [...numi.values]
    const summary = Array.prototype.reduce.call(values, ((sum, current) => sum + current))

    while (exp.indexOf('prev') !== -1) {
      const currentIndex = exp.indexOf('prev')
      exp = exp.slice(0, currentIndex) + values[values.length - 1] + exp.slice(currentIndex + 5)
    }

    while (exp.indexOf('sum') !== -1) {
      const currentIndex = exp.indexOf('sum')
      exp = exp.slice(0, currentIndex) + summary + exp.slice(currentIndex + 5)
    }
  }

  if (exp.indexOf(':') !== -1 || exp.indexOf('=') !== -1) {
    const result = Variable(exp, numi)

    if (!isError(result) && result.creating) {
      dispatch(addVariable(result))
      return result.value
    }
    if (!isError(result) && !result.creating) {
      dispatch(changeVariable(result))
      return result.value
    }

    return result
  }

  return {
    error: 'Operations were not recognized',
  }
}

export default Calculator
