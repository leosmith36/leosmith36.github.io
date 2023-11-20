<template>
  <div>
    <header>
      <nav>
        <div class="flex items-center py-3 px-5 max-md:flex-col max-md:space-y-2">
          <div class="basis-1/3 flex">
            <router-link to="/"><h1 class="font-extrabold link">Leo Smith</h1></router-link>
          </div>
          <div class="basis-1/3 flex flex-wrap justify-center md:space-x-5 space-x-2 items-center">
            <router-link to="/about" class="link">About</router-link>
            <router-link to="/employment" class="link">Employment</router-link>
            <router-link to="/projects" class="link">Projects</router-link>
            <router-link to="/interests" class="link">Interests</router-link>
          </div>
          <div class="basis-1/3 flex justify-end space-x-3">
            <a class="link" href="mailto:leosmith36@yahoo.com"><font-awesome-icon icon="fa-solid fa-envelope"/></a>
            <a class="link" href="https://www.linkedin.com/in/leomsmith"><font-awesome-icon icon="fa-brands fa-linkedin"/></a>
            <a class="link" href="https://www.facebook.com/leosmith36"><font-awesome-icon icon="fa-brands fa-facebook"/></a>
            <a class="link" href="https://github.com/leosmith36"><font-awesome-icon icon="fa-brands fa-github"/></a>
          </div>
        </div>
      </nav>
    </header>
    <hr>
  </div>
</template>

<style scoped>
hr {
  color: white;
}
</style>