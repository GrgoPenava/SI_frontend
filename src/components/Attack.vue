<template>
  <div class="flex gap-5">
    <input
      class="text-black"
      v-model="userInput"
      placeholder="Unesi neki tekst ovdje"
    />
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      @click="displayInput"
    >
      Attack
    </button>
    <div ref="output"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: "",
    };
  },
  methods: {
    displayInput() {
      this.$refs.output.innerHTML = this.userInput;
    },
  },
};
</script>
