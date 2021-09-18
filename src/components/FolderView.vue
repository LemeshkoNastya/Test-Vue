<template>
  <p class="folder">{{name}}</p>
  <template v-for="folder in folders">
    <FolderView :name="folder.name" :folders="folder.folders" :files="folder.files"/>
  </template>
  <template v-for="file in files">
    <FileView :name="file.name"/>
  </template>
</template>

<script>
import FileView from "./FileView";
export default {
  name: 'FolderView',
  components: {FileView},
  props: {
    name: String,
    folders:Array,
    files:Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.folder{
  color: orangered;
}
</style>
