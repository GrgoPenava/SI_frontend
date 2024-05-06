<template>
  <div
    class="bg-slate-600 min-h-12 font-semibold text-xl text-center justify-start items-center flex gap-6 px-5"
  >
    <router-link
      v-for="route in visibleRoutes"
      :key="route.name"
      :to="{ name: route.name }"
      class="text-white hover:text-gray-300"
    >
      {{ route.name }}
    </router-link>
    <button v-if="userStore.token" class="text-white ml-auto" @click="logout">
      Logout
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../Store/userStore";

export default defineComponent({
  setup() {
    const router = useRouter();
    const userStore = useUserStore();

    const visibleRoutes = computed(() => {
      if (userStore.token) {
        return router.getRoutes().filter((route) => {
          return route.name !== "Login" && route.meta.show;
        });
      } else {
        return router.getRoutes().filter((route) => route.meta.showBeforeLogin);
      }
    });

    return {
      visibleRoutes,
      userStore,
    };
  },
  methods: {
    logout() {
      this.userStore.setToken("");
      this.$router.push({ name: "Login" });
    },
  },
});
</script>

<style scoped></style>
