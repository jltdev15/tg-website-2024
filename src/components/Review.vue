<template>
  <section
    class="flex justify-center py-12 bg-center bg-[url('../assets/images/tm-bg.jpeg')] bg-no-repeat bg-cover"
  >
    <div class="w-11/12">
      <div class="py-3 text-center">
        <h2 class="text-2xl font-bold text-[#d1d8e2] capitalize">
          Testimonials
        </h2>
        <p class="py-0 text-5xl font-semibold capitalize text-gray-50">
          What clients say
        </p>
      </div>
      <swiper
        :slidesPerView="'3'"
        :loop="true"
        :centeredSlides="false"
        :spaceBetween="10"
        :pagination="{
          clickable: false,
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <!-- <div class="swiper-slide">Slide 2</div> -->
        <swiper-slide
          class="relative h-full px-16"
          v-for="data in reviewData"
          :key="data.id"
        >
          <div class="px-3 mt-12 py-6 bg-[#BDF1F6] mx-auto aspect-square ">
            <div class="absolute top-[-3%] left-[50%]  translate-x-[-50%] py-3">
              <img
                class="h-20 mx-auto bg-white rounded-full"
                :src="`/customers/${data.imgurl}`"
                alt=""
              />
            </div>
            <div class="relative mt-10">
              <p class="text-xl font-bold leading-3 text-center">
                {{ data.name }}
              </p>
              <p class="text-center">{{ data.type }}</p>
              <strong class="absolute left-0 text-5xl font-bold"> &ldquo;</strong>
              <p class="px-6 py-9">
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
    name: "Juan Dela Cruz",
    type: "Entrepreneur",
    imgurl: "hannah.jpg",
    message:
      "This software development tool offers a seamless and intuitive interface, streamlining the coding process with robust features.",
  },
  {
    id: 2,
    name: "Juana Dela Cruz",
    type: "Gamer",
    imgurl: "dave.jpg",
    message:
      "Its efficient collaboration capabilities and extensive library make it a go-to choice for modern development teams.",
  },
  {
    id: 3,
    name: "Juana Dela Cruz",
    type: "Business Owner",
    imgurl: "steve.jpg",
    message:
      "Thrilled with the custom PC build provided by this business owner! The attention to detail, high-quality components, and exceptional customer service.",
  },
  {
    id: 4,
    name: "Juana Dela Cruz",
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

.swiper {
  padding: 10rem 0;
  width: 100%;
  height: 100%;
}
</style>
