export default {
  interval(msg = '', interval = 2000, input) {
    setInterval(() => {
      console.log(msg, input ? input : 'No value being logged.')
    }, interval)
  },

  timeout(msg = '', time = 1000, input) {
    setTimeout(() => {
      console.log(msg, input ? input : 'No value being logged.')
    }, time)
  },


  help(method = null) {
    return `
    
      === Log ===
- interval(msg = '', interval = 1000, input)
- timeout(msg = '', time = 1000, input)
    `.trim();
  }
}