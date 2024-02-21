<template>
  <section class="flex justify-center py-12 bg-[#F2FCFC]">
    <div class="w-full 2xl:w-5/6">
      <div class="px-3 py-3 sm:px-0">
        <h2 class="text-2xl font-bold text-[#0245A3] capitalize">
          Our Services
        </h2>
        <p class="py-0 font-semibold text-gray-900 capitalize sm:text-5xl">
          Diversified services for your convenient
        </p>
      </div>
      <div
        class="grid items-center grid-cols-2 gap-3 px-3 py-3 overflow-auto xs:gap-6 sm:bg-transparent sm:py-6 md:grid-cols-4"
      >
        <router-link
          to="/software"
          active-class="active"
          class="flex items-center p-3 bg-white"
        >
          <div class="aspect-square">
            <img
              class="w-8 h-auto max-w-max"
              src="../assets/images/app-dev.webp"
              alt="Software Developement Services"
            />
            <div class="">
              <p class="leading-[1rem] text-lg py-4 font-bold">
                Software Development
              </p>
              <p class="hidden text-gray-900 sm:block">
                We transform ideas into exceptional software solutions.
              </p>
              <a
                href=""
                class="flex items-center justify-center gap-2 py-2 text-xs capitalize bg-blue-800 rounded text-gray-50"
                >See More<i class="fa-solid fa-circle-arrow-right"></i
              ></a>
            </div>
          </div>
        </router-link>
        <router-link
          to="/mobile"
          active-class="active"
          class="flex items-center p-3 bg-white"
        >
          <div class="aspect-square">
            <img
              class="w-5 h-auto max-w-max"
              src="../assets/images/mobile.webp"
              alt="Software Developement Services"
            />
            <div class="">
              <p class="leading-[1rem] text-lg py-4 font-bold">
                App Development
              </p>
              <p class="hidden text-gray-900 sm:block">
                Crafting mobile apps that move your business forward.
              </p>
              <a
                href=""
                class="flex items-center justify-center gap-2 py-2 text-xs bg-blue-800 rounded text-gray-50"
                >See More<i class="fa-solid fa-circle-arrow-right"></i
              ></a>
            </div>
          </div>
        </router-link>
        <router-link
          to="/pcbuild"
          active-class="active"
          class="flex items-center p-3 bg-white"
        >
          <div class="w-full aspect-square">
            <img
              class="w-8 h-auto max-w-max"
              src="../assets/images/tower-pc.webp"
              alt="Software Developement Services"
            />

            <div class="">
              <p class="leading-[1rem] text-lg py-4 font-bold">PC Building</p>
              <p class="hidden text-gray-900 sm:block">
                Crafting Your Digital Realm: Precision PC Builds, Infinite
                Possibilities.
              </p>
              <a
                href=""
                class="flex items-center justify-center gap-2 py-2 text-xs bg-blue-800 rounded text-gray-50"
                >See More<i class="fa-solid fa-circle-arrow-right"></i
              ></a>
            </div>
          </div>
        </router-link>
        <router-link
          to="/learn"
          active-class="active"
          class="flex items-center p-3 bg-white"
        >
        <div class="w-full aspect-square">
            <img
            class="w-10 h-auto max-w-max"
              src="../assets/images/tutorial.webp"
              alt="Software Developement Services"
            />
            <div class="">
              <p class="leading-[1rem] text-lg pt-6 pb-3 font-bold">
                Learn with Us
              </p>
              <p class="hidden text-gray-900 sm:block">
                We make web development accessible to everyone.
              </p>
              <a class="flex items-center justify-center gap-2 py-2 text-xs capitalize bg-blue-800 rounded text-gray-50" href=""
                >See more<i
                  class="fa-solid fa-circle-arrow-right"
                ></i
              ></a>
            </div>
          </div>
        </router-link>
      </div>
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
