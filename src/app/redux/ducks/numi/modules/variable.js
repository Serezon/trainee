import { handleError } from './error'

function Variable(exp, { variables }, calculate) {
  let index = exp.search(/:/)
  let creating = true // creating or reassignment
  if (index === -1) {
    index = exp.search(/=/)
    creating = false
  }
  const name = exp.slice(0, index)
  if (!Number.isNaN(parseFloat(name[0])) || name.length === 0) {
    return handleError('Variable name is incorrect')
  }
  if (creating && variables[name] !== undefined) {
    return handleError('Variable already exists')
  }
  if (!creating && variables[name] === undefined) {
    return handleError('Variable not exists')
  }

  const value = parseFloat(calculate(exp.slice(index + 1), null, variables, true))
  if (typeof value !== 'number' || Number.isNaN(parseFloat(value))) {
    console.log(typeof value)
    return handleError('Variable value is incorrect')
  }

  return {
    value,
    name,
    creating,
  }
}

export default Variable
