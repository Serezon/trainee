import mexp from 'math-expression-evaluator'

function Logic(expression) {
  // eslint-disable-next-line
  let exp = expression
  // Replacing operations

  const result = mexp.eval(exp)

  if (!result && result !== 0) {
    return {
      error: 'Calculation error',
    }
  }

  return {
    value: result,
  }
}

export default Logic
