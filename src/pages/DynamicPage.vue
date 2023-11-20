<script setup>
  import { ref, onMounted } from 'vue' 
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  const router = useRouter()
  const componentName = ref(null)

  onMounted(async () => {
    const category = route.params.category
    const pageName = route.params.pageName.replace(/^[a-z]/, match => match.toUpperCase())
      .replace(/-[a-z0-9]/g, match => match.replace('-', '').toUpperCase())

    try {
      const module = await import(`@pages/dynamic/${category}/${pageName}.vue`)
      componentName.value = module.default || module
    } catch (e) {
      router.push('/')
    }
  })
</script>

<template>
  <div>
    <component :is="componentName"/>
  </div>
</template>