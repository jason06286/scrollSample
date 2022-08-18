<script setup>
import { apiGetRepos } from "@/api/api.js";

const data = ref([]);
const displayData = ref([]);

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
  calcDisplay();
};

const size = computed(() => {
  const width = window.innerWidth;
  if (width >= 1280) {
    return 3;
  } else if ((width < 1280) & (width >= 768)) {
    return 2;
  } else {
    return 1;
  }
});
const actualHeight = computed(() => {
  const height = (data.value.length / size.value) * 252;
  return `height:${height}px`;
});

const calcDisplay = () => {
  const height = window.innerHeight + window.scrollY - 152;
  const num = Math.floor(height / 252);
  const total = size.value * num;

  if (displayData.value.length === data.value.length) return;

  for (let j = displayData.value.length; j < total; j += 1) {
    const item = data.value[j];
    displayData.value.push(item);
  }
};

onMounted(() => {
  getData();
  window.addEventListener("scroll", calcDisplay);
});

onUnmounted(() => {
  window.removeEventListener("scroll", calcDisplay);
});
</script>
<template>
  <Navbar />
  <div class="container m-auto mt-20 font-mono" :style="actualHeight">
    <h2 class="text-bold mb-8 text-center text-4xl">GitHub Repositories</h2>
    <div class="mx-5 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <Card v-for="(item, index) in displayData" :key="data.url" :data="item" />
    </div>
  </div>
</template>
<style></style>
