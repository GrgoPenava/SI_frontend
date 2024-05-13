<template>
  <div class="w-full h-full bg-white">
    <div class="w-2/3 mx-auto pt-16">
      <DataTable
        v-if="loadedUsers"
        :value="users"
        tableStyle="min-width: 20rem"
        sortMode="multiple"
        scrollable
        scrollHeight="400px"
        :virtualScrollerOptions="{ itemSize: 46 }"
      >
        <Column field="id" header="ID" sortable></Column>
        <Column field="firstName" header="First name" sortable></Column>
        <Column field="lastName" header="Last name" sortable></Column>
        <Column field="email" header="Email" sortable></Column>
        <Column field="dateCreated" header="Date created" sortable></Column>
      </DataTable>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "../../../Store/userStore";
import { User } from "../Services/Types/UserTypes";
import UserService from "../Services/UserService";
import { useToast } from "vue-toastification";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import moment from "moment";

export default defineComponent({
  components: { DataTable, Column },
  data() {
    return {
      userStore: useUserStore(),
      userService: new UserService(),
      users: [] as User[],
      toast: useToast(),
      loadedUsers: false,
    };
  },
  async created() {
    if (!this.userStore.token) {
      this.$router.push({ name: "Login" });
    }

    try {
      this.users = await this.userService.getAllUsers();
      this.users.forEach((element: User) => {
        element.dateCreated = moment(element.dateCreated).format(
          "YYYY-MM-DD HH:mm:ss"
        );
      });
      this.toast.success("Fetch users");
    } catch (error) {
      this.toast.error("Cannot get users");
    } finally {
      this.loadedUsers = true;
    }
  },
});
</script>
<style scoped></style>
