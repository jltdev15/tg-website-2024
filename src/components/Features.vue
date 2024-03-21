<template>
  <base-card>
    <template #content>
      <div class="p-3 md:px-16 ">
        <div class="pt-6 sm:pt-0">
          <p class="font-bold lg:text-2xl">Features</p>
          <h3 class="text-2xl font-bold text-[#0245A3] lg:text-5xl">What makes us different</h3>

        </div>
        <div class="flex flex-col ">
          <ul
            class="grid w-full grid-cols-2 gap-3 py-3 font-bold sm:grid sm:grid-cols-2 lg:grid-cols-5 justify-evenly md:py-12">
            <li class="flex items-center gap-3 p-3 text-base rounded shadow sm:shadow-none">
              <img class="object-cover w-8 h-auto sm:w-24 md:w-16" src="../assets/features/1.webp" alt="">
              <p class="text-sm font-semibold md:text-xl">Customization</p>
            </li>
            <li class="flex items-center gap-3 p-3 text-base rounded shadow sm:shadow-none">
              <img class="object-cover w-8 h-auto sm:w-24 md:w-16" src="../assets/features/3.webp" alt="">
              <p class="text-sm font-semibold md:text-xl">Scalability</p>
            </li>
            <li class="flex items-center gap-3 p-3 text-base rounded shadow sm:shadow-none"><img
                class="object-cover w-8 h-auto sm:w-24 md:w-16" src="../assets/features/2.webp" alt="">
              <p class="text-sm font-semibold md:text-xl">Innovation</p>
            </li>
            <li class="flex items-center gap-3 p-3 text-base rounded shadow sm:shadow-none"><img
                class="object-cover w-8 h-auto sm:w-24 md:w-16" src="../assets/features/4.webp" alt="">
              <p class="text-sm font-semibold md:text-xl">Support</p>
            </li>
            <li class="flex items-center gap-3 p-3 text-base rounded shadow sm:shadow-none"><img
                class="object-cover w-8 h-auto sm:w-24 md:w-16" src="../assets/features/5.webp" alt="">
              <p class="text-sm font-semibold md:text-xl">Security</p>
            </li>
          </ul>
          <div class="flex flex-col items-start gap-3 md:pt-12 between">
            <div class="w-full ">
              <h1 class="text-2xl capitalize font-bold lg:text-5xl  text-[#0245A3]">
                Track our services with ease
              </h1>
              <p class="pb-2 text-sm leading-4 text-gray-500 lg:text-xl">
                We intergrate Tracking and Monitoring module for each services.

              </p>
            </div>
            <div class="flex flex-col items-center w-full md:flex-row">
              <di class="w-3/6">
                <img src="../assets/images/track.webp" class="object-cover w-full h-auto sm:w-11/12" alt="" />
              </di>
              <div class="w-full py-3 md:px-32 md:py-0">

                <div class="relative flex items-center p-3">
                  <input type="text" placeholder="Enter URL here"
                    class="pl-6  bg-[#F2FCFC] overflow-hidden w-full flex-initial py-3 md:py-5  rounded-full focus:outline outline-2 outline-blue-900" />
                  <button
                    class="absolute right-2 md:h-3/4 h-2/4 md:px-12 px-6 rounded-tr-full rounded-br-full rounded-full bg-[#0245A3] text-gray-50">Track
                    Now</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </template>
  </base-card>
</template>

<style scoped></style>

<script setup></script>
