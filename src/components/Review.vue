<template>
  <section class="flex justify-center py-12 bg-center bg-[url('../assets/images/tm-bg.jpeg')] bg-no-repeat bg-cover">
    <div class="w-5/6 xs:w-4/6 sm:w-11/12 md:w-9/12 lg:w-full lg:px-16 xl:px-32">
      <div class="py-3 text-center ">

        <h2 class="text-2xl relative overflow-hidden inline-block px-4 py-2 font-bold text-[#fff] capitalize">
          Testimonials

        </h2>

        <p class="py-0 text-2xl font-semibold capitalize md:text-5xl text-gray-50">
          What clients say
        </p>
      </div>

      <swiper :slidesPerView="'1'" :loop="true" :centeredSlides="false" :spaceBetween="10" :pagination="{
        clickable: false,
      }" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" :navigation="false" :modules="modules" :breakpoints="{
        '360': {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        '640': {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 100,
        },

      }" class="mySwiper">
        <!-- <div class="swiper-slide">Slide 2</div> -->
        <swiper-slide class="relative md:h-full " v-for="data in reviewData" :key="data.id">
          <div class="px-3 mt-3 py-6 bg-[#BDF1F6] mx-auto h-64 xl:h-72 ">
            <div class="absolute top-[-15%] left-[50%]  translate-x-[-50%] py-3">
              <img class="h-20 mx-auto bg-white rounded-full" :src="`/customers/${data.imgurl}`" alt="" />
            </div>
            <div class="relative mt-10">
              <p class="text-xl font-bold leading-3 text-center">
                {{ data.name }}
              </p>
              <p class="text-center">{{ data.type }}</p>
              <strong class="absolute left-0 text-5xl font-bold"> &ldquo;</strong>
              <p class="px-6 py-1 mt-2 text-sm text-justify xl:text-base">
                {{ data.message }}
              </p>
              <strong class="absolute bottom-[-3] right-0 text-5xl font-bold"> &ldquo;</strong>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const modules = [Pagination, Navigation, Autoplay];
const imageUrl = "/customers/customer-6.jpg";
const reviewData = [
  {
    id: 1,
    name: "Emma Thompson",
    type: "Entrepreneur",
    imgurl: "hannah.jpg",
    message:
      "This software development tool offers a seamless and intuitive interface, streamlining the coding process with robust features.",
  },
  {
    id: 2,
    name: "Jackson Reynolds",
    type: "Gamer",
    imgurl: "dave.jpg",
    message:
      "Its efficient collaboration capabilities and extensive library make it a go-to choice for modern development teams.",
  },
  {
    id: 3,
    name: "Liam Anderson",
    type: "Business Owner",
    imgurl: "steve.jpg",
    message:
      "Thrilled with the custom PC build provided by this business owner! The attention to detail, high-quality components, and exceptional customer service.",
  },
  {
    id: 4,
    name: "Sophia Hayes",
    type: "Student",
    imgurl: "customer-6.jpg",
    message:
      "This PC build exceeded my expectations with its powerful performance and smooth multitasking capabilities. ",
  },
];
</script>

<style scoped>
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-pager {
  visibility: hidden;
}

.tape {
  position: absolute;
  width: 50px;
  height: 10px;
  background: #0245A3;
}

.swiper {
  padding: 3rem 0;

}

@media screen and (min-width: 768px) {
  .swiper {
    padding: 3rem 0;
    width: 100%;
    height: 80%;
  }
}
</style>
