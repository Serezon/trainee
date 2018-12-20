import { addVariable, changeVariable } from '../../redux/ducks/numi/operations'
import { Variable, isError } from './modules'

function Calculator(expression, dispatch, numi) {
  let exp = expression.replace(/\s/g, '')

  // Previous value and summary
  if (exp.search(/#prev/) !== -1 || exp.search(/#sum/) !== -1) {
    const values = [...numi.values]
    const previous = values[values.length - 1]
    const summary = Array.prototype.reduce.call(values, ((sum, current) => sum + current))

    exp = exp.replace(/#prev/g, previous)
    // console.log(exp)
    exp = exp.replace(/#sum/g, summary)
    // console.log(exp)
  }

  // Creating or assignment
  if (exp.search(/:/) !== -1 || exp.search(/=/) !== -1) {
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
