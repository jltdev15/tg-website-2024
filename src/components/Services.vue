<template>
  <section class="flex justify-center py-12 xs:px-6 sm:px-3 md:px-12 lg:px-6 xl:px-0 bg-[#F2FCFC]">
    <div class="w-full sm:px-6 lg:px-16">
      <div class="px-3 py-3 sm:px-0">
        <h2 class="text-2xl font-bold text-[#0245A3] capitalize">
          Our Services
        </h2>
        <p class="py-0 font-semibold text-gray-900 capitalize sm:text-2xl lg:text-5xl">
          Diversified services for your convenient
        </p>
      </div>
      <div
        class="grid items-center grid-cols-2 gap-3 px-3 py-3 overflow-auto sm:px-9 lg:px-3 xs:gap-6 sm:bg-transparent sm:py-6 lg:grid-cols-4">
        <router-link to="/software" active-class="active" class="flex items-center p-3 py-3 bg-white rounded shadow">
          <div class="w-full ">
            <img class="w-8 h-auto xs:w-10 sm:w-20 lg:w-16 max-w-max" src="../assets/images/app-dev.webp"
              alt="Software Developement Services" />
            <div class="">
              <p class="leading-[1rem] text-lg py-4 font-bold">
                Software Development
              </p>
              <p class="hidden pb-3 text-sm leading-tight text-gray-900 sm:block">
                We transform ideas into exceptional software solutions.
              </p>
              <a href=""
                class="flex items-center justify-center gap-2 py-2 text-xs capitalize bg-[#0245A3] rounded text-gray-50">See
                More<i class="fa-solid fa-circle-arrow-right"></i></a>
            </div>
          </div>
        </router-link>
        <router-link to="/mobile" active-class="active"
          class="flex items-center justify-center p-3 bg-white rounded shadow">
          <div class="w-full ">
            <img class="w-5 h-auto xs:w-9 sm:w-12 lg:w-10 max-w-max" src="../assets/images/mobile.webp"
              alt="Software Developement Services" />
            <div class="">
              <p class="leading-[1rem] text-lg py-4 font-bold">
                App Development
              </p>
              <p class="hidden pb-3 text-sm leading-tight text-gray-900 sm:block">
                Crafting mobile apps that move your business forward.
              </p>
              <a href=""
                class="flex items-center justify-center gap-2 py-2 text-xs bg-[#0245A3] rounded text-gray-50">See More<i
                  class="fa-solid fa-circle-arrow-right"></i></a>
            </div>
          </div>
        </router-link>
        <router-link to="/pcbuild" active-class="active" class="flex items-center p-3 py-3 bg-white rounded shadow">
          <div class="w-full ">
            <img class="w-8 h-auto xs:w-9 lg:w-10 max-w-max" src="../assets/images/tower-pc.webp"
              alt="Software Developement Services" />

            <div class="">
              <p class="leading-[1rem] text-lg py-4 font-bold">PC Building</p>
              <p class="hidden pb-3 text-sm leading-tight text-gray-900 sm:block">
                Crafting Your Digital Realm, Precision PC Builds.
              </p>
              <a href=""
                class="flex items-center justify-center gap-2 py-2 text-xs  bg-[#0245A3] rounded text-gray-50">See
                More<i class="fa-solid fa-circle-arrow-right"></i></a>
            </div>
          </div>
        </router-link>
        <router-link to="/learn" active-class="active" class="flex items-center p-3 py-3 bg-white rounded shadow">
          <div class="w-full">
            <img class="w-10 h-auto xs:w-12 sm:w-14 lg:w-16 max-w-max" src="../assets/images/tutorial.webp"
              alt="Software Developement Services" />
            <div class="">
              <p class="leading-[1rem] text-lg pt-6 sm:pt-3 pb-3 font-bold">
                Learn with Us
              </p>
              <p class="hidden pb-3 text-sm leading-tight text-gray-900 sm:block">
                We make web development accessible to everyone.
              </p>
              <a class="flex items-center justify-center gap-2 py-2 text-xs capitalize bg-[#0245A3] rounded text-gray-50"
                href="">See more<i class="fa-solid fa-circle-arrow-right"></i></a>
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
