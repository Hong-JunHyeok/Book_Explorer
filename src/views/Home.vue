<template>
  <div class="home">
    <div class="input_container">
      <input type="text" v-model="input" placeholder="책 검색을 해보세요!" />
      <button @click="getBookAPI">검색</button>
    </div>
    <ul v-if="books.length !== 0">
      <li v-for="bookItem in books" v-bind:key="bookItem.isbn" class="BookItem">
        <h1>
          {{ bookItem.title }}
        </h1>
        <img :src="bookItem.thumbnail" />
        <span>{{ bookItem.contents }}</span>
        <div class="meta">
          <span>정가 : {{ bookItem.price }}원</span>
          <strong>{{ bookItem.status }}</strong>
        </div>
      </li>
    </ul>
    <h1 v-if="books.length === 0">위 검색창으로 책을 탐색해보세요</h1>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.input_container {
  margin-top: 20px;
  margin-bottom: 20px;
}
.input_container input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  outline: none;
  border: 3px solid gray;
}
.input_container input:focus {
  box-sizing: border-box;
  border: 3px solid #42b983;
}

.input_container button {
  border: none;
  width: 100%;
  padding: 10px;
  background: #42b983;
  color: #2c3e50;
  font-weight: bold;
  cursor: pointer;
  transition: ease 0.1s;
}
.input_container button:hover {
  filter: brightness(80%);
}

ul {
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 0px;
}
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

<script lang="ts">
/* eslint-disable */
import { customAxios } from "@/lib/customAxios";
import BookItem from "../components/BookItem.vue";
import { Book, Books } from "../types/Book";

export default {
  name: "Home",
  components: {
    BookItem,
  },
  data() {
    return {
      input: "",
      books: [],
    };
  },
  methods: {
    getBookAPI: function () {
      customAxios
        .get(`/search/book?query=${this.input}`)
        .then((response) => {
          return response.data.documents;
        })
        .then((documents: Books) => {
          this.books = documents;
        });
    },
  },
};
</script>
