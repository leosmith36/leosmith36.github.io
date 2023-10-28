<template>
  <div>
    <header>
      <nav>
        <div class="flex items-center p-3 max-md:flex-col max-md:space-y-1">
          <div class="basis-1/3 flex">
            <router-link to="/"><h1 class="font-extrabold">Leo Smith</h1></router-link>
          </div>
          <div class="basis-1/3 flex justify-center space-x-5 items-center">
            <router-link to="/about" class="link">About</router-link>
            <router-link to="/employment" class="link">Employment</router-link>
          </div>
          <div class="basis-1/3 flex justify-end space-x-3">
            <a href="mailto:leosmith36@yahoo.com"><font-awesome-icon icon="fa-solid fa-envelope"/></a>
            <a href="https://www.linkedin.com/in/leomsmith"><font-awesome-icon icon="fa-brands fa-linkedin"/></a>
            <a href="https://www.facebook.com/leosmith36"><font-awesome-icon icon="fa-brands fa-facebook"/></a>
            <a href="https://github.com/leosmith36"><font-awesome-icon icon="fa-brands fa-github"/></a>
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