<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  text: Array,
  speed: {
    type: Number,
    default: 80,
  },
  delay: {
    type: Number,
    default: 1000
  }
})

async function writeText(text, node) {
  for (let i = 0; i < text.length; i++) {
    await new Promise(resolve => setTimeout(() => {
      node.textContent += text[i]
      resolve()
    }, props.speed))
  }
}

async function delay(time) {
  await new Promise(resolve => setTimeout(() => resolve(), time))
}

onMounted(async () => {
  const dest = document.getElementById('text')
  dest.innerHTML = ''
  
  await delay(props.delay)

  for (const item of props.text) {
    if (item.delayBefore) await delay(item.delayBefore)
    if (item.newLine) dest.innerHTML += '<br/><br/>'

    const newNode = document.createElement('span')
    dest.appendChild(newNode)
    newNode.classList = item.class || ''

    await writeText(item.text, newNode)
    
    if (item.underline) newNode.classList.add('underline-transition')
    if (item.delayAfter) await delay(item.delayAfter)
  }
})
</script>

<template>
  <div>
    <span id="text"/>
    <span class="blink ml-px">|</span>
  </div>
</template>

<style scoped>
.blink {
  animation: caret-blink 0.8s step-end infinite;
}

@keyframes caret-blink {
  from, to { color: transparent; }
  50% { color: white; }
}
</style>