<script setup>
import { apiGetRepos } from "@/api/api.js";

const data = ref([]);
const getData = async () => {
  const page1Res = await apiGetRepos(1);
  data.value = page1Res.data.map((item) => {
    const { description, name, svn_url: url, language } = item;
    return {
      description,
      url,
      language,
      name,
    };
  });
  const page2Res = await apiGetRepos(2);
  page2Res.data.forEach((item) => {
    const { description, name, svn_url: url, language } = item;
    data.value.push({
      description,
      url,
      language,
      name,
    });
  });
};

onMounted(() => {
  getData();
});
</script>
<template>
  <Navbar />
  <div class="container m-auto mt-20 font-mono">
    <h2 class="text-bold mb-8 text-center text-4xl">GitHub Repositories</h2>
    <div class="mx-5 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <Card v-for="item in data" :key="data.url" :data="item" />
    </div>
  </div>
</template>
<style></style>
