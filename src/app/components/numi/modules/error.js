export const handleError = (error = 'Operations were not recognized') => ({
  error,
})

export const isError = (obj = {
  error: 'No object provided',
}) => {
  if (Object.prototype.hasOwnProperty.call(obj, 'error')) {
    return true
  }
  return false
}
