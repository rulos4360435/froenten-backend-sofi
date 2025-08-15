<template>
    <h1>este es el paciente </h1>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted } from 'vue'

const url = "http://127.0.0.1:8000/ver-bases"

onMounted(() => {
  axios.get(url)
    .then(response => {
      console.log("datos recibidos", response.data) // response.data es lo importante
    })
    .catch(error => {
      console.error("Error al traer datos:", error)
    })
})
</script>
