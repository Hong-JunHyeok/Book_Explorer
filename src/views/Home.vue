<template>
  <div class="home">
    <input
      type="text"
      v-model="input"
      placeholder="책 검색을 해보세요!"
      @keypress="onKeyPress"
    />
    <BookItem />
  </div>
</template>

<script lang="ts">
import { customAxios } from "@/lib/customAxios";
/* eslint-disable */
import BookItem from "../components/BookItem.vue";

export default {
  name: "Home",
  components: {
    BookItem,
  },
  data() {
    return {
      input: "규칙 없음",
    };
  },
  methods: {
    onKeyPress(e: KeyboardEvent) {
      if (e.keyCode === 13) {
        console.log("submit...");
      }
    },
    getBookAPI: (input: string) => {
      customAxios.get(`/search/book?query=${input}`).then((response) => {
        console.log(response);
        return response.data;
      });
    },
  },
  created: () => {},
};
</script>
