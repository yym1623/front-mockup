<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { userList } from "@/data/userList.json"

import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

const router = useRouter()

const userEmail = cookies.get('email')
const res = userList.some(user => user.email === userEmail);

onMounted(() => {
  if(typeof res === "object") {
    router.push({ name : "Dashboard", params : res });
  } else { 
    router.push("Signin");
  }
})

</script>

<style lang="scss" scoped>

</style>