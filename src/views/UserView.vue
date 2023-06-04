<template>
  <div class="users">
    <h1>{{ getUser.name }}</h1>
    <div>
      <img class="users__img" alt="Avatar" :src="require(`../assets/avatars/${getId % 3 + 1}.png`)">
      <span class="dot" :class="{'dot__green': getUser.isActive, 'dot__red': !getUser.isActive}"></span>
    </div>
    <div class="users__info">
      <p>Компания: {{ getUser.company }}</p>
      <p>Отдел:    {{ getUser.section }}</p>
      <p>Позиция:  {{ getUser.position }}</p>
    </div>
  </div>
</template>

<script>
import store from '@/store';
  export default({
    computed: {
      getId() {
        const id = this.$route.params.id
        return typeof id === 'string' ? parseInt(id) : parseInt(id.join())
      },
      getUser(){
        const id = this.getId
        return store.getters.users [id - 1]
      },
    }
  })
</script>

<style>
.users__img {
  max-height: 128px;
  float: left;
}

.users__info {
  padding-top: 1px;
}

h1 {
  margin-left: 30px;
}

.dot {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 3px solid black;
  position: absolute;
  top: 175px;
  left: 280px;
}

.dot__red {
  background-color: crimson;
}

.dot__green {
  background-color: darkgreen;
}
</style>