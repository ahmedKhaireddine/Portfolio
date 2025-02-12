<script setup>
const items = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
]
</script>

<template>
  <nav>
    <ul>
      <li v-for="item in items" :key="item.label">
        <router-link :to="item.path">
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid #ea700b;
}

nav ul li:first-of-type {
  border: 0;
}

nav ul li a.router-link-exact-active {
  color: var(--color-text);
}

nav ul li a.router-link-exact-active:hover {
  background-color: transparent;
}

nav ul li a.router-link-active {
  color: #ea700b;
}

nav ul li a {
  text-decoration: none;
  color: inherit;
  transition: 0.4s;
  padding: 3px;
}

@media (hover: hover) {
  nav ul li:hover {
    background-color: hsla(27, 91%, 48%, 0.2);
    color: hsl(27, 91%, 48%);
  }
}

@media (min-width: 1024px) {
}
</style>
