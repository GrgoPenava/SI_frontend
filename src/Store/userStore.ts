import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    token: "" as string,
  }),

  actions: {
    setToken(token: string) {
      this.token = token;
    },
  },
});
