<template>
  <base-card>
    <template #content>
      <section class="flex justify-center bg-[#ffffff] pt-0">
        <div class="p-3 ">
          <div class="pt-6">
            <p class="font-bold">Features</p>
            <h3 class="text-2xl font-bold text-[#0245A3]">What makes us different</h3>
            <p class="pb-2 text-base leading-4 text-gray-500">
              We intergrate Tracking and Monitoring module for each of our Services.

            </p>
          </div>
          <div class="flex flex-col ">
            <ul class="flex flex-col w-full gap-3 py-3 font-bold sm:grid sm:grid-cols-2 justify-evenly">
              <li class="flex items-center gap-3 p-3 text-base rounded shadow sm:shadow-none">
                <img class="object-cover w-12 h-auto sm:w-24" src="../assets/features/1.webp" alt="">
                <p>Customization</p>
              </li>
              <li class="flex items-center gap-3 p-3 text-base rounded shadow sm:shadow-none">
                <img class="object-cover w-12 h-auto sm:w-24" src="../assets/features/2.webp" alt="">
                <p>Scalability</p>
              </li>
              <li class="flex items-center gap-3 p-3 text-base rounded shadow sm:shadow-none"><img
                  class="object-cover w-12 h-auto sm:w-24" src="../assets/features/3.webp" alt="">
                <p>Innovation</p>
              </li>
              <li class="flex items-center gap-3 p-3 text-base rounded shadow sm:shadow-none"><img
                  class="object-cover w-12 h-auto sm:w-24" src="../assets/features/4.webp" alt="">
                <p>Customer Support</p>
              </li>
              <li class="flex items-center gap-3 p-3 text-base rounded shadow sm:shadow-none"><img
                  class="object-cover w-12 h-auto sm:w-24" src="../assets/features/5.webp" alt="">
                <p>Security</p>
              </li>
            </ul>
            <div class="flex flex-col items-start gap-3 between">
              <div class="w-full ">
                <h1 class="text-2xl capitalize font-bold  text-[#0245A3]">
                  Track our services with ease
                </h1>
                <p class="text-base text-gray-500">Stay updated with our commitment.</p>
              </div>
              <div class="flex flex-col sm:flex-row-reverse sm:items-center sm:container ">
                <div>
                  <img src="../assets/images/track.webp" class="object-cover w-full h-auto sm:w-96" alt="" />
                </div>
                <div class="py-3 sm:p-12">
                  <p class="text-base font-normal text-gray-500">
                    We provide a custom url that will show the development logs and
                    progress of the projects in details. To ensure the development
                    timeline will meet.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </template>
  </base-card>
</template>

<style scoped></style>

<script setup></script>
