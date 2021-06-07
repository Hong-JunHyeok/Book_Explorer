<template>
  <div id="app">
    <div id="nav">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
      >
        <path
          d="M5.495 4c-1.375 0-1.375-2 0-2h16.505v-2h-17c-1.657 0-3 1.343-3 3v18c0 1.657 1.343 3 3 3h17v-20h-16.505z"
        />
      </svg>
      <div class="routers">
        <router-link to="/">탐색</router-link> |
        <router-link to="/about">프로젝트에 대해서</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style >
body {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  background: #2c3e50;
  padding: 20px 0 0 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#nav svg {
  display: inline-block;
  fill: #42b983;
}

#nav .routers {
  display: flex;
}

#nav a {
  margin: 10px;
  font-weight: bold;
  color: #42b983;
  text-decoration: none;
  font-size: 18px;
}

#nav a.router-link-exact-active {
  text-decoration: underline;
}
</style>
