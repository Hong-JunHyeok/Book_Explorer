<template>
  <div class="home">
    <div class="input_container">
      <input type="text" v-model="input" placeholder="책 검색을 해보세요!" />
      <button @click="getBookAPI">검색</button>
    </div>
    <ul>
      <BookItem
        :bookItem="bookItem"
        v-for="bookItem in this.books"
        v-bind:key="bookItem.idsn"
      />
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
