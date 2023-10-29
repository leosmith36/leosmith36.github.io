<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  show: Boolean
})

const collapse = ref(null)

onMounted(() => collapse.value.style.maxHeight = 0)

watch(() => props.show, value => {  
  if (value) collapse.value.style.maxHeight = collapse.value.scrollHeight + 'px'
  else collapse.value.style.maxHeight = 0
})
</script>

<template>
  <div ref="collapse" class="collapsible">
    <slot/>
  </div>
</template>

<style scoped>
.collapsible {
  overflow: hidden;
  transition: max-height 0.5s;
}
</style>