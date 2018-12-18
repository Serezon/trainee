export default (username, password) => {
  return new Promise((resolve, reject) => setTimeout(() => {
    if (username === 'User' && password === '123') {
      resolve({ token: 'gbo5sd12fgbs' })
    }
    reject({error: 'Login or password is not correct'})
  }, 1000))
}
