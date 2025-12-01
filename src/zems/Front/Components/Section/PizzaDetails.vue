<template>
  <section class="pizza-details">
    <div class="container">

      <div class="content-wrapper">

        <!-- LEFT: IMAGE -->
        <div class="image-box">
          <img src="https://images.pexels.com/photos/31300919/pexels-photo-31300919.jpeg?_gl=1*1a2rit8*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3NjQ0MzExMzQkbzM3JGcxJHQxNzY0NDMxMjkzJGoyMSRsMCRoMA.." alt="Signature Pizza">
        </div>

        <!-- RIGHT: DETAILS -->
        <div class="details-box">

          <h1 class="pizza-title">Signature Pepperoni Pizza</h1>

          <div class="rating">
            <i class="fas fa-star"></i>
            <span>4.9</span>
            <p>(2,340 reviews)</p>
          </div>

          <p class="description">
            Crafted with premium smoked pepperoni, freshly shredded mozzarella,
            hand-tossed dough, and our original tomato sauce — baked at 550°F
            for a perfect crispy edge and soft center.
          </p>

          <!-- DETAILS GRID -->
          <div class="detail-grid">

            <div class="detail-item">
              <span class="label">Size</span>
              <span class="value">12" / 14" / 16"</span>
            </div>

            <div class="detail-item">
              <span class="label">Weight</span>
              <span class="value">850g ±</span>
            </div>

            <div class="detail-item">
              <span class="label">Spice Level</span>
              <span class="value">Medium 🔥</span>
            </div>

            <div class="detail-item">
              <span class="label">Serves</span>
              <span class="value">2–3 People</span>
            </div>

            <div class="detail-item">
              <span class="label">Calorie</span>
              <span class="value">1120 Kcal</span>
            </div>

            <div class="detail-item">
              <span class="label">Bake Style</span>
              <span class="value">Wood-Fired</span>
            </div>

          </div>

          <!-- PRICE + CTA -->
          <div class="cta-box">
            <div class="price">$14.99</div>
            <button class="order-btn">Order Now</button>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>


<script>
export default {
  name: "PizzaDetailsSection",
};
</script>


<style scoped>
.pizza-details {
  background: var(--dark-color);
  padding: 5rem 1rem;
  color: var(--white-color);
}

.container {
  max-width: 1200px;
  margin: auto;
}

.content-wrapper {
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

/* LEFT IMAGE */
.image-box {
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
}

.image-box img {
  width: 100%;
  max-width: 420px;
  border-radius: 1.5rem;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(0,0,0,0.35);
  border: 2px solid rgba(255, 255, 255, 0.08);
}

/* RIGHT DETAILS */
.details-box {
  flex: 1;
  min-width: 320px;
}

.pizza-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.rating i {
  color: var(--primary-color);
}

.rating p {
  opacity: 0.7;
  font-size: 0.9rem;
}

.description {
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

/* GRID */
.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.2rem;
  margin-bottom: 2rem;
}

.detail-item {
  background: var(--dark-color-light);
  padding: 1rem 1.2rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(255,255,255,0.08);
}

.label {
  display: block;
  opacity: 0.6;
  font-size: 0.8rem;
}

.value {
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.2rem;
}

/* CTA */
.cta-box {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.price {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
}

.order-btn {
  background: var(--primary-color);
  color: var(--white-color);
  padding: 0.9rem 1.8rem;
  border: none;
  border-radius: 0.7rem;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}

.order-btn:hover {
  background: var(--secondary-color);
}
</style>
