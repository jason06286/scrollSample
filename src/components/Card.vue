<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
const languageTheme = computed(() => {
  if (props.data.language === "Vue") {
    return "text-green-600";
  }
  if (props.data.language === "JavaScript") {
    return "text-yellow-500";
  }
  if (props.data.language === "HTML") {
    return "text-red-700";
  }
  if (props.data.language === "CSS") {
    return "text-blue-600";
  }
  return "text-purple-700";
});

const directUrl = () => {
  window.open(props.data.url);
};
</script>
<template>
  <div
    class="ant before:z before:duration-600 relative mb-5 w-full select-none overflow-hidden rounded-md bg-gradient-to-tr from-yellow-400 via-purple-500 to-red-400 shadow-md hover:shadow-lg hover:shadow-yellow-500"
  >
    <div
      class="m-5 flex h-48 flex-col justify-center rounded-md bg-gray-400/60 pt-5 text-center"
    >
      <h3 class="text-gray-00 mb-3 text-xl font-bold sm:text-2xl">
        {{ data.name }}
      </h3>
      <p class="mb-5 truncate px-3 font-serif text-gray-600">
        {{ data.description }}
      </p>
      <p
        class="mb-3 mt-auto text-xl font-bold sm:text-2xl"
        :class="languageTheme"
      >
        Language:{{ data.language ? data.language : "Null" }}
      </p>
      <button
        type="button"
        class="w-full rounded-sm bg-gray-700 px-3 py-2 text-white hover:text-black"
        @click="directUrl"
      >
        Go to Project
      </button>
    </div>
  </div>
</template>
<style>
.ant {
  animation: fadeIn 2s ease;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
