<template>
  <div class="main">
    <!-- <gridComponent></gridComponent> -->
    <wordComponent></wordComponent>
  </div>
</template>

<script>
import wordComponent from './components/word/word-component.vue';
// import gridComponent from './components/grid/grid-component.vue';
// import DataCom from './gloabal/gloabalData.vue'
import { inject } from 'vue'

export default {
  name: 'App',
  setup() {
            const gif = inject('gif');
            //console.log(gif)
            return {
                gif
            }
        },
  data() {
    return {
      
    }
  },
  components: {
    // gridComponent,
    wordComponent,
    // DataCom
},
  methods: {
    increment() {
      this.count++;
    }
  },
  mounted() {
    // let mine = this.$mine;
    // console.log(mine.methods.createMine(9,9,10));
    // let picData = this.$picData;
    // console.log(picData.data)
    // console.log(this.gif[2])
  }
}
</script>

<style scoped>
.main {
  background: #f7f7f0;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
