import { handleError } from './error'

function Variable(exp, { variables }) {
  let index = exp.indexOf(':')
  let creating = true // creating or reassignment
  if (index === -1) {
    index = exp.indexOf('=')
    creating = false
  }
  const name = exp.slice(0, index).trim()
  if (!Number.isNaN(parseFloat(name[0])) || name.length === 0) {
    return handleError('Variable name is incorrect')
  }
  if (creating && variables[name] !== undefined) {
    return handleError('Variable already exists')
  }
  if (!creating && variables[name] === undefined) {
    return handleError('Variable not exists')
  }

  const value = parseFloat(exp.slice(index + 1).trim())
  if (typeof value !== 'number' || Number.isNaN(parseFloat(value))) {
    return handleError('Variable value is incorrect')
  }

  return {
    value,
    name,
    creating,
  }
}

export default Variable
