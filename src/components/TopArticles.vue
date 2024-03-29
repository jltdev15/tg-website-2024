<template>
  <section class="flex justify-center py-3 lg:py-6  bg-[#fff] px-3">
    <base-card>
      <template #content>
        <h1 class="text-lg text-[#0245A3] font-bold">Top Articles</h1>
        <p class="text-xl text-gray-500 capitalize md:text-3xl">
          Discover the most latest articles about technology
        </p>
        <div
          class="grid lg:grid-cols-[600px_minmax(100px,_2fr)] xl:grid-cols-[600px_minmax(100px,_2fr)] 2xl:grid-cols-[800px_minmax(100px,_2fr)]  gap-10 py-9">
          <div>
            <Articles />
          </div>
          <div class="w-full">
            <Author />
          </div>
        </div>
      </template>
    </base-card>
  </section>
</template>

<script setup>
import Articles from '@/BlogContent/Articles.vue'
import Author from '@/BlogContent/Author.vue'
</script>
