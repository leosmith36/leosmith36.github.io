<template>
  <nav>
    <div class="text-white flex max-md:flex-col md:h-16 md:items-center pt-3">
      <div class="flex justify-between basis-1/3">
        <router-link class="px-5" to="/">
          <img class="w-32 h-auto" src="../assets/logo.png" alt="Leo Smith Logo"/>
        </router-link>
        <button data-hs-collapse="#nav-list" class="hs-collapse-toggle md:hidden px-5">
          <font-awesome-icon icon="fa-solid fa-bars"/>
        </button>
      </div>
      <div id="nav-list" class="hs-collapse flex max-md:flex-col basis-2/3 max-md:space-y-1 max-md:pt-3">
        <div class="flex max-md:flex-col max-md:text-center basis-1/2 justify-center md:space-x-5">
          <router-link class="transition hover:text-gray-600" to="/about">About</router-link>
          <router-link class="transition hover:text-gray-600" to="/resume">Resumé</router-link>
          <router-link class="transition hover:text-gray-600" to="/portfolio">Portfolio</router-link>
          <router-link class="transition hover:text-gray-600" to="/reading">Reading</router-link>
          <router-link class="transition hover:text-gray-600" to="/contact">Contact</router-link>
        </div>
        <div class="flex basis-1/2 md:justify-end max-md:justify-center space-x-3 px-5">
          <a class="transition hover:text-gray-600" href="mailto:leosmith36@yahoo.com"><font-awesome-icon icon="fa-solid fa-envelope"/></a>
          <a class="transition hover:text-gray-600" href="https://www.linkedin.com/in/leomsmith/"><font-awesome-icon icon="fa-brands fa-linkedin"/></a>
          <a class="transition hover:text-gray-600" href="https://www.facebook.com/leosmith36/"><font-awesome-icon icon="fa-brands fa-facebook"/></a>
        </div>
      </div>
    </div>
  </nav>
</template>