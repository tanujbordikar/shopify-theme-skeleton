const abc = Vue.createApp({  
  delimiters: ['${', '}'],
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  }
}).mount('body')