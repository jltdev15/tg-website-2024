<script setup>
import Navigation from "../components/Navigation.vue";
import Hero from "../components/Hero.vue";
import Services from "../components/Services.vue";
import Features from "../components/Features.vue";
import Review from "../components/Review.vue";
import Blog from "../components/Blog.vue";
import TopArticles from "../components/TopArticles.vue";
import NewsLetter from "@/components/NewsLetter.vue";
import FooterView from "../components/FooterView.vue";
import CopyRight from "@/components/CopyRight.vue";
</script>

<template>
  <main>
    <navigation></navigation>
    <hero></hero>
    <services></services>
    <features></features>
    <review></review>
    <blog></blog>
    <top-articles></top-articles>
    <news-letter></news-letter>
    <footer-view></footer-view>
    <copy-right></copy-right>
  </main>
</template>
