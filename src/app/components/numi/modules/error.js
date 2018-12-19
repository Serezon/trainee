export const handleError = error => ({
  error,
})

export const isError = (obj) => {
  if (Object.prototype.hasOwnProperty.call(obj, 'error')) {
    return true
  }
  return false
}
