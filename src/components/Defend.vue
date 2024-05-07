<template>
  <div class="flex gap-5">
    <input
      class="text-black"
      v-model="userInput"
      placeholder="Unesi neki tekst ovdje"
    />
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      Attack
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: "",
    };
  },
  computed: {
    safeDisplay() {
      return this.userInput;
    },
  },
};
</script>
