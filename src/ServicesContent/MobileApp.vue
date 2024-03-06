<template>
  <section class="w-11/12 py-20 mx-auto xl:px-6 lg:pt-32">
    <div class="flex items-center gap-2 px-6">
      <router-link class="flex items-center gap-3" to="/">Home <i class="text-sm fa-solid fa-chevron-right"></i>
      </router-link>
      <span class="">{{ routeName
        }}</span>
    </div>
    <div class="flex flex-col items-center justify-between p-3 sm:p-6 sm:flex-row-reverse">
      <div class="sm:w-3/6">
        <img class="w-3/6 mx-auto sm:w-4/6" src="../assets/images/app-dev-mobile.png" alt="" />
      </div>
      <div class="text-center sm:w-3/6">
        <h2 class="block text-2xl font-bold sm:text-left sm:py-3 sm:text-6xl">
          Mobile App<span class="sm:block sm:py-3 text-[#0245A3]"> Development</span>
        </h2>
        <p class="text-xs font-semibold sm:text-left sm:text-2xl ">
          We have dedicated development Team
        </p>
        <p class="px-3 py-3 text-sm text-justify sm:px-1 lg:text-base">
          Accelerate your business growth with cutting-edge mobile development
          solutions. Our expert team crafts high-performance, user-friendly
          mobile apps tailored to your unique business needs. From intuitive
          UI/UX design to seamless integration and robust functionality, we
          deliver scalable mobile solutions that enhance customer engagement,
          streamline operations, and drive revenue. Stay ahead in the
          competitive market by harnessing the power of mobile technology to
          connect, engage, and thrive in the palm of your customers' hands.
        </p>
        <div class="flex gap-3 px-3 py-3 r sm:pt-6 sm:gap-5 sm:flex-row">
          <button
            class="flex w-3/6  text-base  rounded justify-center capitalize items-center gap-3  px-3 sm:px-6  outline outline-offset-0 outline-1  sm:text-lg active:shadow-md transition-all font-bold text-[#0245A3] hover:text-[#0245a3b6]">
            Connect
            <i class="transition-all duration-150 sm:text-2xl fa-solid fa-envelope"></i>
          </button>
          <button
            class="flex w-3/6 capitalize rounded border border-blue-800 text-base py-2  justify-center items-center bg-[#0245A3] outline-blue-800 outline-offset-1   outline-2 hover:bg-[rgba(2,69,163,0.8)] gap-3  px-6 sm:text-lg  active:shadow-md transition-all font-bold text-gray-50 ">
            Our rates
            <i class="transition-all duration-150 sm:text-2xl fa-solid fa-dollar-sign"></i>
          </button>
        </div>
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
