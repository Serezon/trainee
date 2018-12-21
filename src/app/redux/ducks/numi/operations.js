import { send, addVariable, changeVariable } from './actions'
import {
  Variable,
  Calculate,
  isError,
  handleError,
} from './modules'

const calculator = expression => (dispatch, getState) => {
  const { numi } = getState()
  let exp = expression.replace(/\s/g, '')

  // Previous value and summary
  if (exp.search(/#prev/) !== -1 || exp.search(/#sum/) !== -1) {
    const values = [...numi.values]
    const previous = values[values.length - 1]
    const summary = Array.prototype.reduce.call(values, ((sum, current) => sum + current))

    exp = exp.replace(/#prev/g, previous)
    exp = exp.replace(/#sum/g, summary)
  }

  // Creating or assignment
  if (exp.search(/:/) !== -1 || exp.search(/=/) !== -1) {
    const result = Variable(exp, numi, Calculate)

    if (!isError(result) && result.creating) {
      dispatch(addVariable(result))
      dispatch(send(result.value))
      return result.value
    }
    if (!isError(result) && !result.creating) {
      dispatch(changeVariable(result))
      dispatch(send(result.value))
      return result.value
    }

    return result.error
  }

  const calculatedResult = Calculate(exp, dispatch, numi.variables)

  if (!isError(calculatedResult)) {
    return calculatedResult
  }

  return handleError()
}

// eslint-disable-next-line
export { send, addVariable, changeVariable, calculator } 