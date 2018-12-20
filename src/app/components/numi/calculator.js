import { addVariable, changeVariable } from '../../redux/ducks/numi/operations'
import {
  Variable,
  Logic,
  isError,
  handleError,
} from './modules'

function Calculator(expression, dispatch, numi) {
  let exp = expression.replace(/\s/g, '')

  // Previous value and summary
  if (exp.search(/#prev/) !== -1 || exp.search(/#sum/) !== -1) {
    const values = [...numi.values]
    const previous = values[values.length - 1]
    const summary = Array.prototype.reduce.call(values, ((sum, current) => sum + current))

    exp = exp.replace(/#prev/g, previous)
    exp = exp.replace(/#sum/g, summary)
  }

  const variablesNames = Object.keys(numi.variables)
  const variablesRegExp = () => {
    let partRegExp = variablesNames.map(variable => `${variable}|`).join('')
    partRegExp = partRegExp.slice(0, partRegExp.length - 1)

    const regExp = `/(${partRegExp})/`
    console.log(regExp)
    return new RegExp(regExp)
  }

  const variablesCheck = variablesRegExp()
  if (exp.search(variablesCheck) !== -1) {
    console.log('I DID IT')
    return handleError('Test RegExp')
  }

  const operations = /(\+|-|\*|\/|plus|and|with|minus|subtract|without|times|multipliedby|mul|divideby|divide|\(|\))/g

  if (exp.search(operations) !== -1) {
    const result = Logic(exp)

    if (!isError(result)) {
      return result.value
    }

    return result
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

  return handleError()
}

export default Calculator
