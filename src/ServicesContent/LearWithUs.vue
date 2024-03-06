<template>
  <section class="w-11/12 py-20 mx-auto xl:px-6 lg:pt-32">
    <div class="flex items-center gap-2 px-6">
      <router-link class="flex items-center gap-3" to="/">Home <i class="text-sm fa-solid fa-chevron-right"></i>
      </router-link>
      <span class="">{{ routeName
        }}</span>
    </div>
    <div class="flex flex-col-reverse items-center justify-between p-3 sm:p-6 sm:flex-row">
      <div class="text-center sm:w-3/6">
        <h2 class="block text-2xl font-bold sm:text-left sm:py-3 sm:text-6xl">
          Learning By<span class="sm:block sm:py-3 text-[#0245A3]">
            Coding</span>
        </h2>
        <p class="text-xs font-semibold sm:text-left sm:text-2xl">
          We have dedicated certified Instructor and Experienced IT personnel.
        </p>
        <p class="px-3 py-3 text-sm text-justify sm:px-1 lg:text-base">
          Our tutorials are crafted by industry experts, ensuring you receive
          up-to-date and relevant information. Engage in interactive lessons,
          hands-on exercises, and real-world examples to enhance your
          understanding and application of the material. With our intuitive
          learning platform, you have the flexibility to progress at your own
          pace, making education fit seamlessly into your busy schedule.
        </p>
        <div class="flex gap-3 px-3 py-3 r sm:pt-6 sm:gap-5 sm:flex-row">
          <button
            class="flex w-3/6 text-base rounded justify-center capitalize items-center gap-3 px-3 sm:px-6 outline outline-offset-0 outline-1 sm:text-lg active:shadow-md transition-all font-bold text-[#0245A3] hover:text-[#0245a3b6]">
            Connect
            <i class="transition-all duration-150 sm:text-2xl fa-solid fa-envelope"></i>
          </button>
          <button
            class="flex w-3/6 capitalize rounded border border-blue-800 text-base py-2 justify-center items-center bg-[#0245A3] outline-blue-800 outline-offset-1 outline-2 hover:bg-[rgba(2,69,163,0.8)] gap-3 px-6 sm:text-lg active:shadow-md transition-all font-bold text-gray-50">
            Our rates
            <i class="transition-all duration-150 sm:text-2xl fa-solid fa-dollar-sign"></i>
          </button>
        </div>
      </div>
      <div>
        <img class="w-3/6 mx-auto sm:w-4/6" src="../assets/images/learn-with-us.png" alt="" />
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
