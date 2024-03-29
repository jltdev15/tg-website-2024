<template>
  <base-card>
    <template #content>
      <section class="flex justify-center  py-6 2xl:py-24 bg-[#fff]">
        <div class="w-11/12">
          <div class="py-3">
            <h1 class="text-lg font-bold text-center uppercase lg:text-2xl sm:text-xl xl:text-3xl">
              Subscribe to our news letter
            </h1>
            <p class="text-sm text-center">
              Get latest from Technology Guru
            </p>
          </div>
          <div class="xl:w-[40%] md:w-4/6 mx-auto">
            <div class="relative flex items-center">
              <input type="text" placeholder="Enter your email here"
                class="pl-6  bg-[#F2FCFC] overflow-hidden w-full flex-initial py-5  rounded-full focus:outline outline-2 outline-blue-900" />
              <button
                class="absolute right-2 h-3/4 px-6 rounded-tr-full rounded-br-full rounded-full bg-[#0245A3] text-gray-50">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </template>
  </base-card>
</template>
