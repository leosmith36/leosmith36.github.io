<template>
  <nav>
    <div class="text-white flex h-16 items-center">
      <div class="ml-5 mt-5">
        <router-link to="/">
          <img class="w-32 h-auto" src="../assets/logo.png" alt="Leo Smith Logo"/>
        </router-link>
      </div>
      <div class="ml-auto flex space-x-5 mr-5">
        <router-link to="/about">About</router-link>
        <!-- <router-link to="/resume">Resumé</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/projects">Contact</router-link> -->
      </div>
    </div>
  </nav>
</template>