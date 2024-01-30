<template>
  <section class="flex justify-center py-12 bg-[#F2FCFC]">
    <div class="w-11/12 2xl:w-4/6">
      <div class="grid grid-columns gap-x-10">
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <img class="w-[20%]" src="../assets/images/tg.png" alt="" />
            <p class="text-xl font-bold">Technology Guru</p>
          </div>
          <div>
            <p class="pr-3 text-base leading-5 text-gray-600">
              At Technology GURU, we help businesses and individuals thrive in
              the digital age by providing a comprehensive suite of web
              development, PC building, and App Development Services.
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <div class="flex items-center py-4">
            <p class="text-lg font-bold uppercase">Contact Information</p>
          </div>
          <ul class="flex flex-col gap-2">
            <li class="flex items-center gap-3">
              <i class="fa-solid fa-location-dot text-[#0245A3]"></i>426 Cambaog Bustos Bulacan
            </li>
            <li class="flex items-center gap-3">
              <i class="fa-solid fa-phone text-[#0245A3]"></i>09776281665
            </li>
            <li class="flex items-center gap-3">
              <i class="fa-solid fa-envelope text-[#0245A3]"></i>info@tg.com
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-3">
          <div class="flex items-center py-4">
            <p class="text-lg font-bold uppercase">Quick link</p>
          </div>
          <ul class="flex flex-col gap-2">
            <li class="flex items-center gap-3">
              <a href="">Services</a>
            </li>
            <li class="flex items-center gap-3">
              <a href="">Digital Solution</a>
            </li>
            <li class="flex items-center gap-3">
              <a href="">Best Build</a>
            </li>
            <li class="flex items-center gap-3">
              <a href="">Contact Us</a>
            </li>
            <li class="flex items-center gap-3">
              <a href="">Support</a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-3">
          <div class="flex items-center py-4">
            <p class="text-lg font-bold uppercase">Follow us</p>
          </div>
          <ul class="flex gap-6 text-xl text-[#0245A3]">
            <li>
              <a href=""><i class="fa-brands fa-facebook"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-brands fa-x-twitter"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-brands fa-youtube"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-brands fa-tiktok"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-columns {
  grid-template-columns: 1fr 0.75fr 0.75fr 1fr;
}

</style>
