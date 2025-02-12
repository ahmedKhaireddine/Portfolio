<script setup>
import { useIcons } from '@/composables/useIcons'
import { experiences, technologies, social_media } from '@/data'
import Item from './Item.vue'

const icons = useIcons()

const projects = []
</script>

<template>
  <main>
    <Item>
      <template #icon>
        <component :is="icons['ProjectIcon']" />
      </template>
      <template #heading> My Projects </template>
      <div v-if="projects.length > 0" class="projects-list">
        <div v-for="(project, index) in projects" :key="index" class="project-card">
          <span class="project-icon">{{ project.icon }}</span>
          <h3 class="project-title">
            <a :href="project.link" target="_blank">{{ project.title }}</a>
          </h3>
          <p class="project-description">{{ project.description }}</p>
          <ul class="project-tech">
            <li v-for="(tech, i) in project.technologies" :key="i">{{ tech }}</li>
          </ul>
        </div>
      </div>
      <div v-else>
        <p style="font-size: 0.9em">
          🚀 Projects coming soon! <br />
          Exciting new projects are currently in development. Check back soon to explore them!
        </p>
      </div>
    </Item>
  </main>
</template>

<style scoped>
/* Conteneur principal */
.projects-container {
  margin: 0 auto;
  color: #fff;
}

/* Titre de section */
.section-title {
  font-size: 1.8rem;
  color: #ea700b;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

/* Liste des projets en colonne */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Carte de projet */
.project-card {
  background: #1a1a1a;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  width: 100%; /* S'étend sur toute la largeur */
}

.project-card:hover {
  transform: scale(1.02);
}

/* Icône */
.project-icon {
  font-size: 2rem;
}

/* Titre */
.project-title a {
  color: #ea700b;
  text-decoration: none;
  font-size: 1.1rem;
  display: block;
  margin: 10px 0;
}

.project-title a:hover {
  text-decoration: underline;
}

/* Description */
.project-description {
  font-size: 0.9rem;
  margin-bottom: 10px;
}

/* Technologies utilisées */
.project-tech {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.project-tech li {
  background: #333;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
}
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

/* Social Links */
.social-links a {
  color: inherit;
  margin: 10px;
  transition: transform 0.3s ease-in-out;
}

.social-links a:hover {
  transform: scale(1.1);
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
