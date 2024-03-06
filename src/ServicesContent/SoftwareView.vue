<template>
  <section class="w-11/12 py-20 mx-auto xl:px-6 lg:pt-32">
    <div class="flex items-center gap-2 px-6">
      <router-link class="flex items-center gap-3" to="/">Home <i class="text-sm fa-solid fa-chevron-right"></i>
      </router-link>
      <span class="">{{ routeName
        }}</span>
    </div>
    <div class="flex flex-col-reverse items-center justify-between p-3 sm:p-6 sm:flex-row">
      <div class="text-center sm:w-full md:w-4/6">
        <h2 class="block text-2xl font-bold sm:text-left sm:py-3 lg:py-0 lg:text-5xl">
          Software<span class="lg:block sm:py-3 text-[#0245A3]"> Development</span>
        </h2>
        <p class="text-xs font-semibold sm:text-left md:text-base lg:text-2xl">
          We have dedicated development Team
        </p>
        <p class="px-3 py-3 text-sm text-justify sm:px-1 lg:text-base">
          Our expert team employs cutting-edge technologies and agile
          methodologies to deliver scalable, reliable, and customized software
          applications that align seamlessly with your business objectives. From
          concept to deployment, we prioritize collaboration, ensuring our
          solutions not only meet but exceed your expectations, empowering your
          organization to thrive in the digital landscape.
        </p>
        <div class="flex justify-end gap-3 px-3 py-3 lg:px-3 md:px-6 sm:px-3 md:pt-6 sm:gap-5 sm:flex-row">
          <button
            class="flex w-3/6 lg:w-4/12 text-base sm:text-sm md:py-2 py-3 sm:py-2 rounded justify-center capitalize items-center gap-3  px-3 sm:px-6  outline outline-offset-0 outline-1  md:text-base active:shadow-md transition-all font-bold text-[#0245A3] hover:text-[#0245a3b6]">
            Connect
            <i class="transition-all duration-150 xl:text-2xl md:text-base fa-solid fa-envelope"></i>
          </button>
          <button
            class="flex w-3/6 lg:w-4/12 capitalize md:py-2 sm:text-sm py-3 rounded border border-blue-800 text-base sm:py-2  justify-center items-center bg-[#0245A3] outline-blue-800 outline-offset-1   outline-2 hover:bg-[rgba(2,69,163,0.8)] gap-3  px-6 md:text-base  active:shadow-md transition-all font-bold text-gray-50 ">
            Our rates
            <i class="transition-all duration-150 xl:text-2xl md:text-base fa-solid fa-dollar-sign"></i>
          </button>
        </div>
      </div>
      <div class="sm:w-6/12 md:w-7/12">
        <img class="w-3/6 mx-auto sm:w-4/6" src="../assets/images/js-dev.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue'
const route = useRoute()
const routeName = ref('');
routeName.value = route.name;


console.log(route.name);
</script>
