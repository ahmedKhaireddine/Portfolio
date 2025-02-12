<script setup>
import { ref } from 'vue'
import { useIcons } from '@/composables/useIcons'
import { experiences, technologies, social_media } from '@/data'
import Item from './Item.vue'

const icons = useIcons()
// Affichage du popup
const showPopup = ref(false)

// Fonction pour copier l'email et afficher le popup
const copyEmail = async () => {
  const email = 'email@yahoo.com'
  try {
    await navigator.clipboard.writeText(email)

    // Afficher le popup
    showPopup.value = true

    // Cacher le popup après 5 secondes
    setTimeout(() => {
      showPopup.value = false
    }, 500)
  } catch (error) {
    console.error('Erreur lors de la copie :', error)
  }
}
</script>

<template>
  <main>
    <Item>
      <template #icon>
        <component :is="icons['ExperienceIcon']" />
      </template>
      <template #heading> My Journey </template>
      <div v-for="(exp, index) in experiences" :key="index" class="timeline-item">
        <span class="date">{{ exp.date }}</span>
        <h4>{{ exp.title }} - {{ exp.company }}</h4>
        <p>{{ exp.description }}</p>
      </div>
    </Item>
    <Item>
      <template #icon>
        <component :is="icons['CodeIcon']" />
      </template>
      <template #heading> My Skills </template>
      <div class="timeline-item">
        <h4>Technical Skills</h4>
        <div class="skills-grid">
          <div v-for="(tech, index) in technologies" :key="index" class="skill-item">
            <component :is="icons[tech.icon]" />
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>
      <div class="timeline-item">
        <h4>Soft Skills</h4>
        <p>Problem-solving, teamwork, adaptability, continuous learning...</p>
      </div>
    </Item>
    <Item>
      <template #icon>
        <component :is="icons['ContactIcon']" />
      </template>
      <template #heading> Let's Connect </template>
      <div class="timeline-item">
        <p>
          Feel free to reach out via email or connect on my social media.
          <span class="social-links">
            <a
              v-for="(social, index) in social_media"
              :key="index"
              :href="social.url"
              target="_blank"
              @click.prevent="social.icon === 'EmailIcon' ? copyEmail($event) : null"
            >
              <component :is="icons[social.icon]" />
              <!-- Popup juste à côté de l'icône email -->
              <span v-show="showPopup" class="popup">Copied</span>
            </a>
          </span>
        </p>
      </div>
    </Item>
  </main>
</template>

<style scoped>
/* Timeline */
.timeline-item {
  border-left: 1px solid #ea700b;
  padding-left: 15px;
  margin-bottom: 20px;
}

.timeline-item h4 {
  font-size: 1.1rem;
  font-weight: 500;
}

.timeline-item span,
.timeline-item p {
  font-size: 0.9rem;
}

/* Skills */
.skills-grid {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 8px;
  /* font-size: 14px; */
  color: inherit;
  transition: transform 0.3s ease-in-out;
}

.skill-item:hover {
  transform: scale(1.1);
}

.social-links {
  position: relative;
}

/* Social Links */
.social-links a {
  position: relative;
  color: inherit;
  margin: 10px;
  transition: transform 0.3s ease-in-out;
}

/* Popup positionné à côté du dernier icône */
.popup {
  position: absolute;
  color: #ea700b;
  padding: 3px 8px;
  border-radius: 5px;
  font-size: 0.7rem !important;
  white-space: nowrap;
  z-index: 100;
  bottom: 2px;
  right: -65px;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.2s ease,
    visibility 0.2s ease;
  border: 1px solid #ea700b;
}

/* Ajout d'une flèche sur le côté gauche du popup */
.popup::after {
  content: '';
  position: absolute;
  top: 50%;
  left: -20px; /* Place la flèche à gauche */
  transform: translateY(-50%);
  border-width: 7px 10px;
  border-style: solid;
  border-color: transparent #ea700b transparent transparent; /* Triangle pointant vers la gauche */
}

/* Quand showPopup est vrai, afficher */
.social-links a:last-child .popup,
.popup.show {
  opacity: 1;
  visibility: visible;
}

@media (min-width: 1024px) {
  main {
    height: 100%;
    overflow-y: auto;
    padding: 20px;
  }

  main::-webkit-scrollbar {
    display: none;
  }
}
</style>
