<template>
  <div class="flex h-screen">
    <div class="flex-1 flex items-center justify-center">
      <div class="flex flex-col gap-5">
        <p class="text-center">XSS enabled</p>
        <Attack />
      </div>
    </div>
    <div class="flex-1 flex items-center justify-center">
      <div class="flex flex-col gap-5">
        <p class="text-center">XSS disabled</p>
        <Defend />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//@ts-ignore
import Attack from "./Attack.vue";
//@ts-ignore
import Defend from "./Defend.vue";
export default defineComponent({
  components: { Attack, Defend },
  mounted() {
    console.log("Kod za dohvat svih usera");

    console.log(`<iframe src="javascript:fetch('http://localhost:8081/api/rest/v1/users').then(response => response.json()).then(data => console.log(data)).catch(err => console.error('Error:', err));" style="display:none;"></iframe>
`);
  },
});
</script>
<style scoped></style>
