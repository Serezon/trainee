import { addVariable } from '../../redux/ducks/numi/operations'
import { Variable, isError } from './modules'

function Calculator(exp, dispatch) {
  if (exp.indexOf(':') !== -1) {
    const result = Variable(exp)

    if (!isError(result)) {
      // console.log('Is ERROR?', result)
      dispatch(addVariable(result))
      return result.value
    }
    // console.log('ERROR: ', result)
    return result
  }

  return exp
}

export default Calculator
