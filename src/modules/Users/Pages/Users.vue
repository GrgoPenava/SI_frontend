<template>
  <div>Users</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "../../../Store/userStore";
export default defineComponent({
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  created() {
    console.log("token", this.userStore.token);
    if (!this.userStore.token) {
      this.$router.push({ name: "Login" });
    }
  },
});
</script>
<style scoped></style>
