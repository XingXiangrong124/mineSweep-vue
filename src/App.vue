<template>
  <div class="main">
    <wordComponent></wordComponent>
  </div>
</template>

<script>
import wordComponent from './components/word/word-component.vue';

import { inject } from 'vue'

export default {
  name: 'App',
  setup() {
            const gif = inject('gif');
            return {
                gif
            }
        },
  data() {
    return {
      
    }
  },
  components: {
    wordComponent
},
  methods: {
  },
  mounted() {
    
  }
}
</script>

<style>
.main {
  background: #f7f7f0;
  width: 100vw;
  height: 100vh;
  text-align: center;
  margin: 0;
  position: relative;
}
body {
  margin: 0;
  height: 100%;
  background: #f7f7f0;
}
</style>
