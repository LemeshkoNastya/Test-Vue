<template>
  <div class="file">
    <img v-if="type.split('/')[1] == 'svg'" src="../img/file-svg.png" alt="icon folder">
    <img v-else-if="type.split('/')[1] == 'jpeg'" src="../img/file-jpg.png" alt="icon folder">
    <img v-else-if="type.split('/')[1] == 'png'" src="../img/file-png.png" alt="icon folder">
    <img v-else src="../img/file-js.png" alt="icon folder">
    <p class="file__title">{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'FileView',
  props: {
    name: String,
    type: String,
  },
  methods: {
    defineFile: function(type) {
      let format = type.split('/')[1];
      if (format == 'svg') {
        format = 'svg';
      } else if (format == 'jpg') {
        format = 'jpg';
      }
      console.log(format);
      return format;
    }
  }
}
</script>

<style scoped lang="scss">
.file {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  min-height: 280px;
  margin-top: 50px;
  margin-right: 20px;
  background: #59608B;
  box-shadow: 18px 18px 30px rgba(59, 66, 103, 0.8);
  border-radius: 20px;

  @media (max-width: 1125px) {
    margin-right: 50px;
  }

  @media (max-width: 680px) {
    margin-right: 0;
  }
}
.file__title {
  margin-top: 35px;
  font-size: 18px;
  color: #FFFFFF;
}
</style>
