import safeCalc from 'safe-eval'

function Logic(expression) {
  // eslint-disable-next-line
  let exp = expression
  // Replacing operations

  exp = exp.replace(/(plus|and|with)/g, '+')
    .replace(/(minus|subtract|without)/g, '-')
    .replace(/(times|multipliedby|mul)/g, '*')
    .replace(/(divideby|divide)/g, '/')

  const result = safeCalc(exp)

  return {
    value: result,
  }
}

export default Logic
