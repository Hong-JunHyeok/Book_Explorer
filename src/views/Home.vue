<template>
  <div class="home">
    <input type="text" v-model="input" placeholder="책 검색을 해보세요!" />
    <button @click="getBookAPI">검색</button>
    <ul v-if="books.length !== 0">
      <li v-for="bookItem in books" v-bind:key="bookItem.isbn" class="BookItem">
        <h1>
          {{ bookItem.title }}
        </h1>
        <img :src="bookItem.thumbnail" />
        <span>{{ bookItem.contents }}</span>
        <div class="meta">
          <span>{{ bookItem.price }}</span>
        </div>
      </li>
    </ul>
    <div v-if="books.length === 0">위 검색창으로 책을 탐색해보세요!</div>
  </div>
</template>

<style scoped>
ul {
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
.BookItem h1 {
}
.BookItem span {
}
.BookItem img {
  width: 200px;
  height: 300px;
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
