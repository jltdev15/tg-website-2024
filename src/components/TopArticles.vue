<template>
  <section class="flex justify-center py-16 bg-[#fff]">
    <div class="w-11/12 2xl:w-4/6">
      <h1 class="text-lg text-[#0245A3] font-bold">Top Articles</h1>
      <p class="text-3xl text-gray-500 capitalize">
        Discover the most latest articles about technology
      </p>
      <div class="grid grid-cols-[800px_minmax(100px,_2fr)] 2xl:grid-cols-[1200px_minmax(100px,_2fr)] gap-10 py-9">
        <Articles/>
        <div class="w-full">
          <Author/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Articles from '@/BlogContent/Articles.vue'
import Author from '@/BlogContent/Author.vue'
</script>
