<template>
  <section class="quality-section bg-dark">
    <div class="container text-center">

      <BaseTitle>Our Pizza, Perfected</BaseTitle>
      <BaseParagraph>
        Every pizza is crafted for flavor, texture, and freshness. Here’s why ours stands apart.
      </BaseParagraph>

      <div class="quality-grid">

        <!-- Badge 1 -->
        <div class="quality-badge">
          <div class="circle">🔥</div>
          <h3>Wood-Fired Oven</h3>
          <p>Authentic smoky flavor baked to perfection.</p>
        </div>

        <!-- Badge 2 -->
        <div class="quality-badge">
          <div class="circle">🧀</div>
          <h3>100% Mozzarella</h3>
          <p>Cheese that melts beautifully in every slice.</p>
        </div>

        <!-- Badge 3 -->
        <div class="quality-badge">
          <div class="circle">🌿</div>
          <h3>Fresh Herbs</h3>
          <p>Basil and oregano to finish every pizza.</p>
        </div>

        <!-- Badge 4 -->
        <div class="quality-badge">
          <div class="circle">⏱️</div>
          <h3>Fast Delivery</h3>
          <p>Hot pizza, delivered in record time.</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductQualitySection",
};
</script>

<style scoped>
.quality-section {
  padding: 5rem 1rem;
  background:var(--dark-color);
  color: var(--white-color);
}

.container {
  max-width: 1200px;
  margin: auto;
}

.quality-grid {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.quality-badge {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.quality-badge:hover {
  transform: translateY(-6px);
  border-color: var(--primary-color);
}

.circle {
  width: 60px;
  height: 60px;
  font-size: 2rem;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
  border-radius: 50%;
  color: var(--white-color);
}

h3 {
  margin: 0.5rem 0;
  font-size: 1.2rem;
  color: var(--white-color);
}

p {
  font-size: 0.9rem;
  opacity: 0.8;
  line-height: 1.4;
}
</style>
