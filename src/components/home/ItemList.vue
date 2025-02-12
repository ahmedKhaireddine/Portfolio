<script setup>
import { useIcons } from '@/composables/useIcons'
import Item from './Item.vue'

// Importer les icônes dynamiquement
const icons = useIcons()

const sections = [
  {
    title: 'Projects', // Nom de la page
    icon: 'ProjectIcon', // Icône associée
    description:
      'Dive into my creations and explore a selection of modern and innovative projects, combining cutting-edge technologies with creative solutions. Each project showcases my commitment to solving complex challenges while delivering unique and optimized user experiences.',
  },
  {
    title: 'About me',
    icon: 'AboutIcon', // Icône associée
    description:
      'Learn more about my journey, my passions, and what drives me as a developer. Dive into my professional and personal world, and see how my experiences and vision contribute to building impactful and innovative solutions.',
  },
  {
    title: 'My Technologies',
    icon: 'CodeIcon', // Icône associée
    technologies: [
      {
        title: 'Previously used technologies',
        items: [
          { label: 'Vue.js', icon: 'VueIcon' },
          { label: 'React', icon: 'ReactIcon' },
          { label: 'Node.js', icon: 'NodeIcon' },
          { label: 'Laravel', icon: 'LaravelIcon' },
          { label: 'Zend (laminas)', icon: 'ZendIcon' },
          { label: 'Python (API)', icon: 'PythonIcon' },
        ],
      },
      {
        title: "Skills I'm actively developing",
        items: [
          { label: 'Python (advanced)', icon: 'PythonIcon' },
          { label: 'Java', icon: 'JavaIcon' },
          { label: 'DevOps tools and practices', icon: 'DevopsIcon' },
        ],
      },
    ],
  },
]
</script>

<template>
  <main>
    <Item v-for="(section, index) in sections" :key="index">
      <template #icon>
        <component :is="icons[section.icon]" />
      </template>
      <template #heading>
        {{ section.title }}
      </template>
      <p v-if="section.description">{{ section.description }}</p>
      <div v-if="section.technologies" class="tech-section">
        <div v-for="(element, idx) in section.technologies" :key="idx">
          <h4>{{ element.title }}</h4>
          <div class="technologies">
            <div class="tech-item" v-for="item in element.items" :key="item.label">
              <component :is="icons[item.icon]" />
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </Item>
  </main>
</template>

<style scoped>
.tech-section h4 {
  margin: 10px 0;
}

.technologies {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: inherit;
}

.tech-item svg {
  font-size: 24px;
}

@media (min-width: 1024px) {
  main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centre verticalement */
  }
}
</style>
