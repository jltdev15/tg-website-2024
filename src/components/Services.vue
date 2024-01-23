<template>
  <section class="flex justify-center py-24 bg-[#F2FCFC]">
    <div class="w-11/12">
      <div class="py-3">
        <h2 class="text-2xl font-bold text-[#0245A3] capitalize">Our Services</h2>
        <p class="py-0 text-5xl font-semibold text-gray-900 capitalize">
          Diversified services for your convenient
        </p>
      </div>
      <div class="grid items-center grid-cols-4 py-6 gap-x-3">
        <router-link
          to="/software"
          active-class="active"
          class="flex flex-col justify-center gap-2 p-6 bg-transparent shadow "
        >
          <img
            class="w-3/6 py-6"
            src="../assets/images/app-dev.webp"
            alt="Software Developement Services"
          />
          <div class="flex items-center justify-between">
            <p class="text-xl font-semibold">Software Development</p>
            <a href=""
              ><i
                class="text-3xl transition-all duration-150 text-[#0245A3] fa-solid fa-circle-arrow-right"
              ></i
            ></a>
          </div>
          <p class="text-gray-900">
            We transform ideas into exceptional software solutions.
          </p>
        </router-link>
        <router-link
          to="/mobile"
          active-class="active"
          class="flex flex-col justify-center gap-2 p-6 bg-transparent shadow "
        >
          <img
            class="w-6/12 pr-7"
            src="../assets/images/mobile.webp"
            alt="Software Developement Services"
          />
          <div class="flex items-center justify-between">
            <p class="text-xl font-semibold">App Development</p>
            <a href=""
              ><i
                class="text-3xl text-[#0245A3] fa-solid fa-circle-arrow-right"
              ></i
            ></a>
          </div>
          <p class="text-gray-900">
            Crafting mobile apps that move your business forward.
          </p>
        </router-link>
        <router-link
          to="/pcbuild"
          active-class="active"
          class="flex flex-col justify-center gap-2 p-6 bg-transparent shadow "
        >
          <img
            class="w-6/12 pr-9"
            src="../assets/images/tower-pc.webp"
            alt="Software Developement Services"
          />
          <div class="flex items-center justify-between">
            <p class="text-xl font-semibold">PC Building</p>
            <a href="#"
              ><i
                class="text-3xl text-[#0245A3] fa-solid fa-circle-arrow-right"
              ></i
            ></a>
          </div>
          <p class="text-gray-900">
            Crafting Your Digital Realm: Precision PC Builds, Infinite
            Possibilities.
          </p>
        </router-link>
        <router-link
          to="/learn"
          active-class="active"
          class="flex flex-col justify-center gap-2 p-6 bg-transparent shadow "
        >
          <img
            class="w-3/6 py-2"
            src="../assets/images/tutorial.webp"
            alt="Software Developement Services"
          />
          <div class="flex items-center justify-between">
            <p class="text-xl font-semibold">Learn with Us</p>
            <a href=""
              ><i
                class="text-3xl text-[#0245A3] fa-solid fa-circle-arrow-right"
              ></i
            ></a>
          </div>
          <p class="text-gray-900">
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
