<script setup>
import { onMounted, onUnmounted } from 'vue'
import Header from '@/components/global/Header.vue'

let intervalId
const title =
  'Portfolio | Fullstack Developer & DevOps Enthusiast | Crafting Scalable & Modern Applications |'

onMounted(() => {
  let index = 0
  intervalId = setInterval(() => {
    document.title = title.substring(index) + ' ' + title.substring(0, index)
    index = (index + 1) % title.length
  }, 200)
})

onUnmounted(() => {
  clearInterval(intervalId) // Nettoie l'intervalle
})
</script>

<template>
  <div class="view-constainer">
    <Header />
    <RouterView />
  </div>
</template>

<style scoped>
.view-constainer {
  padding: 2rem;
}

@media (min-width: 1024px) {
  /* ✅ Structure globale */
  .view-constainer {
    display: flex;
    flex-direction: row;
    height: 100vh; /* Assure que l'écran prend toute la hauteur */
    overflow: hidden; /* Empêche le scroll global */
    padding: 0 2rem;
  }
  .view-constainer header,
  .view-constainer main {
    flex-basis: 50%;
  }

  /* ✅ Header fixé en haut */
  .view-constainer header {
    height: 100%;
  }
}
</style>
