const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'lorem ipsum',
        image:'https://unsplash.it/300/300?image=20',
        style:"text-center"
      }
    }
  }).mount('#app')