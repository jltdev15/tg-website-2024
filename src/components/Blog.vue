<template>
  <base-card>
    <template #content>
      <section class="flex justify-center py-16 ">
        <div class="w-11/12 2xl:w-full">
          <div class="py-6">
            <h1 class="text-lg font-bold text-[#0245A3]">Top trending topics</h1>
            <p class="text-3xl text-gray-500">Discover all topics</p>
          </div>
          <div class="grid items-center justify-start grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
            <div class="">
              <img class="w-full aspect-square rounded-2xl "
                src="https://i0.wp.com/asiatimes.com/wp-content/uploads/2023/04/ai-banner-800x450_tcm100-7204059_tcm100-6286607-32-e1682715117206.jpeg?fit=1212%2C900&ssl=1"
                alt="" />
              <p class="text-base font-bold text-center md:text-xl">AI Technology</p>
              <p class="text-sm text-center text-gray-400 md:text-lg">10 Articles</p>
            </div>
            <div>
              <img class="w-full rounded-2xl aspect-square "
                src="https://wallpapers.com/images/hd/purple-gaming-nepi2tnxp6g0mvz9.jpg" alt="" />
              <p class="text-base font-bold text-center md:text-xl">Gaming</p>
              <p class="text-sm text-center text-gray-400 md:text-lg">12 Articles</p>
            </div>
            <div>
              <img class="w-full aspect-square rounded-2xl "
                src="https://ciccc.ca/wp-content/uploads/2023/10/html-css-collage-concept-with-person.jpg" alt="" />
              <p class="text-base font-bold text-center md:text-xl">Web Development</p>
              <p class="text-sm text-center text-gray-400 md:text-lg">5 Articles</p>
            </div>
            <div>
              <img class="w-full aspect-square rounded-2xl "
                src="https://img.freepik.com/free-vector/gradient-futuristic-background-with-connection-concept_23-2149104857.jpg"
                alt="" />
              <p class="text-base font-bold text-center md:text-xl">Internet of Things</p>
              <p class="text-sm text-center text-gray-400 md:text-lg">3 Articles</p>
            </div>
          </div>

        </div>

      </section>
    </template>
  </base-card>
</template>
<script setup>
import TopArticles from './TopArticles.vue';

</script>
<style scoped>
.active {
  background-color: #fff;
}
</style>
<script setup></script>
