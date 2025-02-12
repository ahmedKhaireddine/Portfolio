<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue'

import Nav from './Nav.vue'
import pdfFile from '@/assets/files/_cv_.pdf'
import { download } from '@/utils/download.js'
import { useIcons } from '@/composables/useIcons'

const isAnimated = ref(false)
const { DownloadIcon } = useIcons()

// Fonction pour déclencher l'animation
const triggerAnimation = () => {
  isAnimated.value = true // Ajouter la classe pour démarrer l'animation
  setTimeout(() => {
    isAnimated.value = false // Retirer la classe après 5 secondes
  }, 5000) // 5000ms = 5 secondes
}

onMounted(() => {
  triggerAnimation() // Premier déclenchement au chargement

  // Répéter toutes les 5 minutes
  setInterval(() => {
    triggerAnimation()
  }, 30000) // 300000ms = 5 minutes
})
</script>

<template>
  <header>
    <div class="wrapper">
      <div style="text-align: center">
        <img :class="{ logo: true, animated: isAnimated }" src="@/assets/logo.png" alt="logo" />
      </div>
      <div style="text-align: center">
        <h1>Fullstack developer && DevOps</h1>
        <h3>
          Passionate about Fullstack development and DevOps, I build modern and scalable
          applications while integrating automation tools. To learn more, click the icon below to
          explore my curriculum vitae
          <span @click="download(pdfFile, 'curriculum-vitae.pdf')"> <DownloadIcon /> </span>, or
          visit the About page for additional details.
        </h3>
      </div>
      <Nav />
    </div>
  </header>
</template>

<style>
header {
  line-height: 1.5;
  text-align: center;
}

header .logo {
  width: 150px; /* Largeur de l'avatar */
  height: 150px; /* Hauteur de l'avatar */
  border-radius: 50%; /* Forme circulaire */
  margin: 20px auto;
  transform-origin: center;
  perspective: 1000px;
}

header h1 {
  color: #ea700b;
  font-weight: 500;
  font-size: 2rem;
  position: relative;
  top: -10px;
}

header h3 {
  font-size: 1rem;
}

header h3 span {
  margin: 5px 0px 0px;
}

header h3 span svg {
  width: 15px;
  height: 15px;
}

header h3 span svg:hover {
  color: #ea700b; /* Couleur de l'icône */
  transform: scale(1.3); /* Agrandissement au survol */
}

/* Classe pour déclencher l'animation */
.animated {
  animation: coinSpin 5s ease-in-out forwards; /* L'animation dure 5 secondes */
}

/* Animation de rotation */
@keyframes coinSpin {
  0% {
    transform: rotateY(0deg); /* Début */
  }
  100% {
    transform: rotateY(360deg); /* Un tour complet */
  }
}

@media (min-width: 1024px) {
  header {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centre verticalement */
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
