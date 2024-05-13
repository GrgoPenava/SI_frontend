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
    <button
      v-if="userStore.token"
      class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bolder py-1 px-3 rounded inline-flex items-center ml-auto"
      @click="logout"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
        />
      </svg>
      <span>Logout</span>
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
