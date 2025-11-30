<script setup>
import { ref } from 'vue';

const ingredients = ref([
  {
    id: 1,
    icon: "fas fa-seedling",
    title: "Organic Tomato Sauce",
    text: "Prepared from fresh, sun-ripened tomatoes."
  },
  {
    id: 2,
    icon: "fas fa-cheese",
    title: "Premium Mozzarella",
    text: "Rich, creamy cheese melted perfectly."
  },
  {
    id: 3,
    icon: "fas fa-bacon",
    title: "Smoked Pepperoni",
    text: "Thin slices with bold smoky flavor."
  },
  {
    id: 4,
    icon: "fas fa-leaf",
    title: "Fresh Basil",
    text: "Hand-picked herbs for aroma & freshness."
  },
  {
    id: 5,
    icon: "fas fa-bread-slice",
    title: "Handmade Dough",
    text: "Slow-fermented for light & airy texture."
  },
  {
    id: 6,
    icon: "fas fa-pepper-hot",
    title: "Signature Spice Blend",
    text: "Aromatic seasoning for balanced flavor."
  }
])
</script>

<template>
  <section class="ingredients">
    <div class="container">
      <div class="mb-2 text-center">
        <BaseTitle>Made With the Finest Ingredients</BaseTitle>
        <BaseParagraph>
          Every slice is crafted from carefully selected, high-quality ingredients that bring the perfect balance of
          flavor.
        </BaseParagraph>
      </div>
      <div class="medium-2 large-3 gap-2">
        <div class="ingredient-card" v-for="item in ingredients" :key="item.id">
          <div class="icon-box flex-center">
            <i :class="item.icon" class="fa-3x"></i>
          </div>
          <SubTitle>{{ item.title }}</SubTitle>
          <BaseParagraph>{{ item.text }}</BaseParagraph>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.ingredients {
  padding: 3.75rem 0;
}
.ingredient-card {
  padding: 1rem;
  background: var(--dark-color);
  border-radius: .5rem;
  text-align: center;
}
.ingredient-card .icon-box {
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  margin: 1.5rem auto;
  background: var(--primary-color);
}
.ingredient-card p {
  margin-top: .5rem;
}
</style>
