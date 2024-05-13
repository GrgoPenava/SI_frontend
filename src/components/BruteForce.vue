<template>
  <div class="flex justify-center items-center h-screen">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          v-model="loginForm.email"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          v-model="loginForm.password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          id="loginButton"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="login"
        >
          Sign In
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LoginService from "../modules/Login/Services/LoginService";
import { LoginForm } from "../modules/Login/Services/Types/LoginTypes";
import { useToast } from "vue-toastification";
import { useUserStore } from "../Store/userStore";

export default defineComponent({
  data() {
    return {
      loginService: new LoginService(),
      userStore: useUserStore(),
      loginForm: {} as LoginForm,
      toast: useToast(),
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.loginService.login(this.loginForm);
        console.log("response nakon login", response);
        this.userStore.setToken(response.jwt);
        this.toast.success("Login successfully");
        this.$router.push("/movies");
      } catch (error) {
      } finally {
      }
    },
  },
});
</script>
<style scoped></style>
