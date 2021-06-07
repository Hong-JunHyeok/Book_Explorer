<template>
  <div class="home">
    <input type="text" v-model="input" placeholder="책 검색을 해보세요!" />
    {{ input }}
    <BookItem />
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import BookItem from "../components/BookItem.vue";

export default {
  name: "Home",
  components: {
    BookItem,
  },
  data() {
    return {
      input: "",
    };
  },
};
</script>
