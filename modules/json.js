export default {
  mapToJson(map) {
    if (map instanceof Map) {
      return JSON.stringify({ entries: [...map.entries()] })
    }
  },

  help(method = null) {
    return `
    
      === JSON ===
- mapToJson(map: Map) => JSON.stringify({ entries: [...map.entries()] })
    `.trim();
  }
}