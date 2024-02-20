<template>
  <section class="flex justify-center py-24 bg-[#F2FCFC]">
    <div class="w-full 2xl:w-5/6">
      <div class="px-3 py-3 sm:px-0">
        <h2 class="text-2xl font-bold text-[#0245A3] capitalize">Our Services</h2>
        <p class="py-0 font-semibold text-gray-900 capitalize sm:text-5xl">
          Diversified services for your convenient
        </p>
      </div>
      <div class="grid items-center grid-cols-4 px-3 py-3 mr-3 overflow-auto sm:py-6 sm:grid-cols-4 gap-x-32">
        <router-link
          to="/software"
          active-class="active"
          class="flex flex-col justify-center w-[7rem] gap-2 p-2 bg-transparent sm:p-6 "
        >
          <img
            class="sm:w-3/6 sm:py-6"
            src="../assets/images/app-dev.webp"
            alt="Software Developement Services"
          />
          <div class="flex items-center justify-between">
            <p class="text-[0.8rem] font-semibold leading-[0.9rem] sm:leading-5 sm:text-xl">Software Development</p>
            <a href="" class="flex items-center"
              ><i
                class="sm:text-3xl text-[0.7rem] transition-all duration-150 text-[#0245A3] fa-solid fa-circle-arrow-right"
              ></i
            ></a>
          </div>
          <p class="hidden text-gray-900 sm:block">
            We transform ideas into exceptional software solutions.
          </p>
        </router-link>
        <router-link
          to="/mobile"
          active-class="active"
          class="flex flex-col w-[7rem]   justify-center gap-2 p-2 bg-transparent sm:p-6 "
        >
          <img
            class="w-7/12 sm:w-6/12 sm:pr-7"
            src="../assets/images/mobile.webp"
            alt="Software Developement Services"
          />
          <div class="flex items-center justify-between">
            <p class="text-[0.8rem]  font-semibold  leading-[0.9rem] sm:text-xl">App Development</p>
            <a href="" class="flex items-center"
            ><i
              class="sm:text-3xl text-[0.7rem] transition-all duration-150 text-[#0245A3] fa-solid fa-circle-arrow-right"
            ></i
          ></a>
          </div>
          <p class="hidden text-gray-900 sm:block">
            Crafting mobile apps that move your business forward.
          </p>
        </router-link>
        <router-link
          to="/pcbuild"
          active-class="active"
          class="flex flex-col w-[7rem]  justify-center gap-2 p-2 bg-transparent sm:p-6 "
        >
          <img
            class="w-7/12 sm:w-6/12 sm:pr-9"
            src="../assets/images/tower-pc.webp"
            alt="Software Developement Services"
          />
          <div class="flex items-center justify-between">
            <p class="text-[0.8rem]  font-semibold sm:text-xl">PC Building</p>
            <a href="#" class="flex items-center"
              ><i
                class="sm:text-3xl text-[0.7rem] text-[#0245A3] fa-solid fa-circle-arrow-right"
              ></i
            ></a>
          </div>
          <p class="hidden text-gray-900 sm:block">
            Crafting Your Digital Realm: Precision PC Builds, Infinite
            Possibilities.
          </p>
        </router-link>
        <router-link
          to="/learn"
          active-class="active"
          class="flex flex-col w-[7rem]   justify-center gap-2 p-2 bg-transparent sm:p-6 "
        >
          <img
            class="w-10/12 sm:w-3/6 sm:py-2"
            src="../assets/images/tutorial.webp"
            alt="Software Developement Services"
          />
          <div class="flex items-center justify-between">
            <p class="sm:text-xl text-[0.8rem]  font-semibold">Learn with Us</p>
            <a class="flex items-center" href=""
              ><i
                class="sm:text-3xl text-[0.7rem] text-[#0245A3] fa-solid fa-circle-arrow-right"
              ></i
            ></a>
          </div>
          <p class="hidden text-gray-900 sm:block">
            We make web development accessible to everyone.
          </p>
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </section>
</template>

<style scoped>
.active {
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 0.3rem;

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
