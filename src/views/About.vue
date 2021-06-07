<template>
  <div class="about">
    <h1>📚프로젝트에 대해서...</h1>
    <hr />
    <div class="links">
      <h2>프로젝트 소스코드</h2>
      <a href="https://github.com/Hong-JunHyeok/Book_Explorer">링크</a>
      <h2>제작자 : 홍준혁</h2>
      <img src="../assets/github_icon.png" @click="goLink" />
      <div>All copyright reserved Hong-JunHyeok</div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
.links {
  width: 800px;
  margin: 0 auto;
  text-align: center;
}
.links a {
  text-decoration: none;
  font-weight: bold;
  color: #42b983;
}
.links img {
  width: 150px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
}
.links img:hover {
  width: 180px;
}
.links div {
  font-weight: lighter;
  margin-top: 50px;
}
</style>

<script>
export default {
  methods: {
    goLink: () => {
      window.location.replace("https://github.com/Hong-JunHyeok");
    },
  },
};
</script>
