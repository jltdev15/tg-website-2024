<template>
  <section>
    <header class="flex justify-center shadow-bot bg-gray-50">
      <nav class="flex items-center justify-between w-5/6">
        <a href="#" class="px-6">
          <img class="h-20" src="../assets/images/tg.png" alt="" />
        </a>
        <ul class="flex items-center gap-0 text-lg font-semibold text-gray-800">
          <li class="">
            <a class="inline-block px-6 py-3 duration-1000 nav-link hover:text-[#0245A3] transition-all" href="#"
              >Services</a
            >
          </li>
          <li class="">
            <a class="inline-block px-6 py-3 nav-link hover:text-[#0245A3] transition-all" href="#"
              >Digital Solutions</a
            >
          </li>
          <li>
            <a class="inline-block px-6 py-3 nav-link hover:text-[#0245A3] transition-all" href="#"
              >Best Build</a
            >
          </li>
          <li>
            <a class="inline-block px-6 py-3 nav-link hover:text-[#0245A3] transition-all" href="#">Contact Us</a>
          </li>
          <li>
            <a class="inline-block px-6 py-3 nav-link hover:text-[#0245A3] transition-all" href="#">Support</a>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Services Section -->
  </section>
</template>

<style scoped>
.nav-link {
  position: relative;
}
.nav-link:hover::after {
  width: 50%;
}
.nav-link::after {
  content: "";
  right: 25%;
  bottom: 0;
  position: absolute;
  background-color: #0245a3;
  width: 0;
  height: 3px;
  border-radius: 20px;
  margin: 0 auto;

  transition: all 0.3s ease-in-out;
}
.shadow-bot {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
