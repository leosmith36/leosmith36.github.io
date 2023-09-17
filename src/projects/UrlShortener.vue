<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const urlRegex = /^https?:\/\/.*\..*$/

const url = ref('')
const shortenedURL = ref('')
const submitted = ref(false)

const shortenURL = async function() {
  submitted.value = true

  if (!url.value || !isValidURL.value) return

  shortenedURL.value = (await axios.post('http://localhost:8081/', {
    path: url.value
  })).data
}

const copyToClipboard = function() {
  navigator.clipboard.writeText(shortenedURL.value)
}

const clear = function() {
  shortenedURL.value = ''
  submitted.value = false
}

const isValidURL = computed(() => urlRegex.test(url.value))
</script>

<template>
  <div>
    <h2>URL Shortener</h2>
    <div class="flex flex-col space-y-4">
      <div class="flex flex-wrap mt-4 justify-start">
        <input
          placeholder="Enter a URL to shorten"
          class="max-md:w-full md:w-96 p-0.5"
          v-model="url"
          @input="clear"
        />
        <button class="button md:ml-4 max-md:mt-2 p-0.5" @click="shortenURL">Shorten URL</button>
      </div>
      <div v-if="submitted && !shortenedURL">
        <p v-if="!isValidURL" class="text-red-500">Invalid URL. The provided URL must begin with "http://" or "https://".</p>
      </div>
      <hr>
      <div v-if="shortenedURL" class="flex space-x-2 flex-wrap">
        <p>Your shortened URL is:</p>
        <p class="text-lime-300"><a :href="`http://${shortenedURL}`">{{ shortenedURL }}</a></p>
        <button class="button px-1" @click="copyToClipboard">
          Copy
          <font-awesome-icon icon="fa-solid fa-copy"/>
        </button>
      </div>
    </div>
  </div>
</template>