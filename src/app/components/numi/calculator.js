import { addVariable, changeVariable } from '../../redux/ducks/numi/operations'
import { Variable, isError } from './modules'

function Calculator(exp, dispatch, numi) {
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
