function replaceOperations(exp) {
  return exp.replace(/(plus|and|with)/g, '+')
    .replace(/(minus|subtract|without)/g, '-')
    .replace(/(times|multipliedby|mul)/g, '*')
    .replace(/(divideby|divide)/g, '/')
}

export default replaceOperations
