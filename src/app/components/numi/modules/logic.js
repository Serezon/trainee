import mexp from 'math-expression-evaluator'

function Logic(expression) {
  // eslint-disable-next-line
  let exp = expression
  // Replacing operations

  exp = exp.replace(/(plus|and|with)/g, '+')
    .replace(/(minus|subtract|without)/g, '-')
    .replace(/(times|multipliedby|mul)/g, '*')
    .replace(/(divideby|divide)/g, '/')

  const result = mexp.eval(exp)
  console.log(result)

  return {
    value: result,
  }
}

export default Logic
