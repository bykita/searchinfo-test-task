<template>
  <nav class="list">
    <li v-for="user in users" v-bind:key="user.index">
      <router-link :to="{ path: '/users/' + user.index }">
        {{ user.name }}
      </router-link>
    </li>
  </nav>
  <div class="main">
    <router-view/>  
  </div>
</template>

<script lang="ts">
  import json from '@/json/data.json';
  export default({
    data() {
      return {
        users: json
      }
    }
  })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main {
  margin-left: 250px;
}

nav {
  width: 250px;
  max-height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
  overflow-y: auto;

  text-align: left;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  display: block;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.list li {
	margin-left: 10px;
	padding: 2px 26px;
	list-style: none;
	background-image: url('./assets/user.png');
	background-repeat: no-repeat;
	background-position: left center;
	background-size: 20px;
}
</style>