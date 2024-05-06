<template>
  <div class="h-screen flex flex-col">
    <Navbar />
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import { useUserStore } from "./Store/userStore";
export default defineComponent({
  components: { Navbar },
  data() {
    return {
      userStore: useUserStore(),
    };
  },
});
</script>
<style scoped></style>
