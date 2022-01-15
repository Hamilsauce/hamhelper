export default {
  logInterval(msg = '', interval = 2000, input) {
    setInterval(() => {
      console.log(msg, input)
    }, interval)
  },


  help(method = null) {
    return `
    
      === Log ===

- logInterval(msg, interval, input)
    `.trim();
  }
}