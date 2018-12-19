import { handleError } from './error'

function Variable(exp) {
  let index = exp.indexOf(':')
  if (index === -1) index = exp.indexOf('=')

  const name = exp.slice(0, index).trim()
  if (!Number.isNaN(parseFloat(name[0])) || name.length === 0) {
    return handleError('Variable name is incorrect')
  }

  const value = parseFloat(exp.slice(index + 1).trim())
  if (typeof value !== 'number' || Number.isNaN(parseFloat(value))) {
    return handleError('Variable value is incorrect')
  }

  return {
    value,
    name,
  }
}

export default Variable
