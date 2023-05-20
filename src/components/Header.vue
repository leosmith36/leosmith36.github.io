<template>
  <nav>
    <div class="text-white flex h-16 items-center">
      <div class="basis-1/2 pl-5 pt-5">
        <router-link to="/">
          <img class="w-32 h-auto" src="../assets/logo.png" alt="Leo Smith Logo"/>
        </router-link>
      </div>
      <div class="flex basis-full justify-center space-x-5">
        <router-link class="transition hover:text-gray-600" to="/about">About</router-link>
        <router-link class="transition hover:text-gray-600" to="/resume">Resumé</router-link>
        <router-link class="transition hover:text-gray-600" to="/portfolio">Portfolio</router-link>
        <router-link class="transition hover:text-gray-600" to="/reading">Reading</router-link>
        <router-link class="transition hover:text-gray-600" to="/contact">Contact</router-link>
      </div>
      <div class="flex basis-1/2 justify-end space-x-3 px-5">
        <a class="transition hover:text-gray-600" href="mailto:leosmith36@yahoo.com"><font-awesome-icon icon="fa-solid fa-envelope"/></a>
        <a class="transition hover:text-gray-600" href="https://www.linkedin.com/in/leomsmith/"><font-awesome-icon icon="fa-brands fa-linkedin"/></a>
        <a class="transition hover:text-gray-600" href="https://www.facebook.com/profile.php?id=100028566519783"><font-awesome-icon icon="fa-brands fa-facebook"/></a>
      </div>
    </div>
  </nav>
</template>