<template>
  <div class="home">
    <input type="text" v-model="input" placeholder="책 검색을 해보세요!" />
    <button @click="getBookAPI">검색</button>
    <ul>
      <li v-for="bookItem in books" v-bind:key="bookItem.isbn">
        <h1>
          {{ bookItem.title }}
        </h1>
        <span>{{ bookItem.contents }}</span>
        <img :src="bookItem.thumbnail" />
      </li>
    </ul>
  </div>
</template>

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
