<template>
  <div class="folder__container">
    <p class="folder__name">{{name}}</p>
    <div class="folder__list">
      <template v-for="(folder, index) in folders">
        <div class="folder" @click="openFolder(index)">
          <img src="../img/folder.png" alt="icon folder">
          <p class="folder__title">{{folder.name}}</p>
        </div>
      </template>
    </div>
    <div class="file__list">
      <template v-for="file in files">
        <FileView :name="file.name" :type="file.type"/>
      </template>
    </div>
  </div>
  <div v-if="this.open" class="folder__open">
    <button @click="clickButton" class="folder__button">Вернуться к папке $</button>
    <FolderView :name="folders[this.numberFolder].name" :folders="folders[this.numberFolder].folders" :files="folders[this.numberFolder].files"/>
  </div>
</template>

<script>
import FileView from "./FileView";
export default {
  name: 'FolderView',
  components: {FileView},
  props: {
    name: String,
    folders:Array,
    files:Array,
  },
  data() {
    return {
      open: false,
      numberFolder: 0,
    }
  },
  methods: {
    openFolder(index) {
      this.open = true;
      this.numberFolder = index;

      let containers = document.querySelectorAll('.folder__container');
      containers.forEach((container, index) => {
        container.style.display = 'none';
      });

      const button = document.querySelector('.folder__button');
      if (button) {
        button.style.display = 'none';
      }
    },
    clickButton() {
      window.history.go(0);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.folder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-right: 50px;
  width: 280px;
  min-height: 280px;
  background: #59608B;
  box-shadow: 18px 18px 30px rgba(59, 66, 103, 0.8);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background: #777FB4;
  }

  @media (max-width: 680px) {
    margin-right: 0;
  }
}
.folder__name{
  margin-bottom: 100px;
  font-size: 24px;
  color: #FFFFFF;
}
.folder__title {
  margin-top: 35px;
  font-size: 18px;
  color: #FFFFFF;
}
.folder__list {
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1125px) {
    justify-content: center;
  }
}
details summary::-webkit-details-marker {
  display: none
}
details > summary {
  list-style: none;
}
.file__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1125px) {
    justify-content: center;
  }
}  
.folder__button {
  position: absolute;
  width: 300px;
  height: 50px;
  right: 130px;
  top: 86px;
  background: #9795E0;
  font-size: 18px;
  color: #FFFFFF;
  box-shadow: inset 18px 18px 20px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  border: none;
  outline: none;
  cursor: pointer;

  transition: all 1s;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 1600px) {
    right: 10%;
  }

  @media (max-width: 992px) {
    right: 100px;
    width: 250px;
  }

  @media (max-width: 768px) {
    right: calc(50% - 125px);
    top: 40px;
  }
}
</style>
