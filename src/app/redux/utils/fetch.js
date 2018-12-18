export default (username, password) => new Promise((resolve, reject) => setTimeout(() => {
  if (username === 'User' && password === '123') {
    resolve({ token: 'gbo5sd12fgbs' })
  }
  reject(new Error('Login or password is not correct'))
}, 1000))
