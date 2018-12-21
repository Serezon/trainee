import Logic from './logic'
import { isError } from './error'
import replaceOperations from './replaceOperations'
import { send } from '../actions'

const Calculate = (expression, dispatch, variables, assigning = false) => {
  // Replacing names with operations
  let exp = expression
  const operationsNames = /(plus|and|with|minus|subtract|without|times|multipliedby|mul|divideby|divide)/g

  if (exp.search(operationsNames) !== -1) {
    exp = replaceOperations(exp)
  }

  if (Object.keys(variables).length) {
    const vars = Object.entries(variables).sort(
      // eslint-disable-next-line
      (a, b) => a[0].length > b[0].length ? 1 : -1
    )

    vars.forEach((variable) => {
      const reg = new RegExp(variable[0], 'g')

      exp = exp.replace(reg, variable[1])
    })
  }

  const operations = /(\+|-|\*|\/)/g

  if (exp.search(operations) !== -1) {
    const result = Logic(exp)

    if (!isError(result)) {
      if (!assigning) {
        dispatch(send(result.value))
      }

      return result.value
    }

    return result
  }

  return exp
}

export default Calculate
