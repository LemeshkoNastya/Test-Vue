<template>
  <section class="app__container">
    <FolderView name="$" :folders="folders" :files="files" />
  </section>
</template>

<script>
import FolderView from './components/FolderView.vue'
import data from './data/list';

export default {
  name: 'App',
  components: {
    FolderView
  },
  data: () => data
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  min-height: 100vh;
  background: #464C6E;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app__container {
  margin: 0 auto;
  padding: 100px 0;
  width: 80%;

  @media (min-width: 1600px) {
    width: 1300px;
  }
}
</style>
