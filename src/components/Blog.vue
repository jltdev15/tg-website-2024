<template>
  <section class="flex justify-center py-24 bg-[#F2FCFC]">
    <div class="w-11/12"></div>
  </section>
</template>

<style scoped>
.active {
  background-color: #fff;
}
</style>
<script setup>
import { reactive } from "vue";

const activeLinks = reactive({
  softwareIsActive: true,
  appDevIsActive: Boolean,
  pcBuildIsActive: Boolean,
  learnIsActive: Boolean,
});
</script>
