<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  text: Array,
  options: Object,
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

  for (const [index, text] of props.text.entries()) {
    const options = props.options[index] || {}

    if (options.delayBefore) await delay(options.delayBefore)
    if (options.newLine) dest.innerHTML += '<br/><br/>'

    const newNode = document.createElement('span')
    dest.appendChild(newNode)
    newNode.classList = options.classes || ''

    await writeText(text, newNode)
    
    if (options.transitionClass) newNode.classList.add(options.transitionClass)
    if (options.delayAfter) await delay(options.delayAfter)
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