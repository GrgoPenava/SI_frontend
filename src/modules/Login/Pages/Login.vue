<template>
  <p v-if="showCounter" class="flex m-auto justify-center items-center">
    Login disabled: {{ brojac }} seconds
  </p>
  <div v-else class="flex justify-center items-center h-screen">
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
      <h-captcha
        site-key="1f30002a-c954-433e-99b0-2ebeefc81be2"
        @error="onError"
        @verified="onCaptchaVerified"
      ></h-captcha>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-red-400"
          :disabled="!isCaptchaVerified"
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
import LoginService from "../Services/LoginService";
import { LoginForm } from "../Services/Types/LoginTypes";
import { useToast } from "vue-toastification";
import { useUserStore } from "../../../Store/userStore";

export default defineComponent({
  data() {
    return {
      loginService: new LoginService(),
      userStore: useUserStore(),
      loginForm: {} as LoginForm,
      toast: useToast(),
      counter: 0,
      showCounter: false,
      brojac: 0,
      isCaptchaVerified: false,
    };
  },
  async mounted() {},
  methods: {
    async login() {
      this.counter++;
      if (this.counter >= 3) {
        this.pokreniBrojac();
        this.showCounter = true;
        this.isCaptchaVerified = false;
        this.counter = 0;
        this.loginForm = {} as LoginForm;
        return;
      }
      try {
        const response = await this.loginService.login(this.loginForm);
        //console.log("response nakon login", response);
        this.userStore.setToken(response.jwt);
        //console.log("token u Login", this.userStore.token);
        this.toast.success("Login successfully");
        this.$router.push("/movies");
      } catch (error) {
        this.toast.error("Login error, try again");
      } finally {
      }
    },
    onError() {
      //console.log("error");
      this.isCaptchaVerified = false;
    },
    onCaptchaVerified() {
      this.isCaptchaVerified = true;
      //console.log("Verified");
    },
    pokreniBrojac() {
      this.brojac = 20;
      const interval = setInterval(() => {
        if (this.brojac <= 0) {
          clearInterval(interval);
          this.resetirajBrojanje();
        } else {
          this.brojac--;
        }
      }, 1000);
    },
    resetirajBrojanje() {
      this.counter = 0;
      this.brojac = 0;
      this.isCaptchaVerified = false;
      this.showCounter = false;
    },
  },
});
</script>
<style scoped></style>
