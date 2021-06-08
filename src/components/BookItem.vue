<template>
  <div
    v-bind="bookItem"
    class="BookItem"
    v-bind:class="{
      active: isActive,
    }"
  >
    <h1>
      {{ bookItem.title }}
    </h1>

    <img :src="bookItem.thumbnail" />
    <span>{{ bookItem.contents }}</span>
    <div class="meta">
      <span>정가 : {{ bookItem.price }}원</span>
      <strong>{{ bookItem.status }}</strong>
      <div v-if="isActive">출판사 : {{ bookItem.publisher }}</div>
      <a :href="bookItem.url" v-if="isActive">자세히 보기</a>
    </div>
    <button v-if="isActive" @click="(event) => toggleActive(false)">
      작게
    </button>
    <button v-if="!isActive" @click="!isActive && toggleActive(true)">
      자세히
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    bookItem: Object,
    default: {},
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleActive: function (mode: boolean) {
      mode ? (this.isActive = true) : (this.isActive = false);
      console.log(this.isActive);
    },
  },
  components: {},
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

  transition: ease-in 0.2s;
}
.BookItem.active {
  width: 100%;
}
.BookItem:hover {
  transform: translateY(-10px);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
.BookItem button {
  border: none;
  width: 100%;
  padding: 10px;
  background: #2c3e50;
  color: #42b983;
  font-weight: bold;
  cursor: pointer;
  transition: ease 0.1s;
}
</style>