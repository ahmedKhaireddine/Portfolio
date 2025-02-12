<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.item .details {
  flex: 1;
  margin-left: 1rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-in-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.item i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: #ea700b;
  transition: box-shadow 0.3s ease;
}

.item i:hover {
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.7); /* Lumière orange */
}

.item h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #ea700b;
}

.item h4 {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #ea700b;
}

.item p {
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 0.4rem;
  color: #ea700b;
}

@media (min-width: 1024px) {
  .item i {
    border: 1px solid #ea700b;
    background: var(--color-background);
    border-radius: 5px;
    width: 50px;
    height: 50px;
  }
}
</style>
