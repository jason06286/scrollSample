<script setup>
import { apiGetRepos } from "@/api/api.js";
const getData = async () => {
  const res = await apiGetRepos();
  console.log("res :>> ", res);
};

onMounted(() => {
  getData();
});
</script>
<template>
  <HelloWorld />
</template>
<style></style>
