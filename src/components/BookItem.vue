<template>
  <div v-bind="bookItem" class="BookItem">
    <h1>
      {{ bookItem.title }}
    </h1>
    <img :src="bookItem.thumbnail" />
    <span>{{ bookItem.contents }}</span>
    <div class="meta">
      <span>정가 : {{ bookItem.price }}원</span>
      <strong>{{ bookItem.status }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bookItem: Object,
    default: {},
  },
};
</script>

<style scoped>
.BookItem {
  width: 300px;
  padding: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom: 20px;
}
.BookItem img {
  width: 200px;
  height: 300px;
}
.BookItem .meta {
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: lightgray;
  text-align: center;
}
.BookItem .meta span {
  color: #42b983;
  font-weight: bold;
}
</style>