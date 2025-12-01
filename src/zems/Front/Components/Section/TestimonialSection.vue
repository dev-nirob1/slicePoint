<script setup>
import { ref } from 'vue';
import TestimonialCard from '../Widget/TestimonialCard.vue';

const testimonials = ref([
  {
    id: 1,
    name: "Sarah Khan",
    role: "Food Blogger",
    review: "SlicePoint’s Margherita is an absolute delight. The crust is perfectly baked, and the cheese melts in the right way every time!",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "Jahid Hossain",
    role: "Office Worker",
    review: "Pepperoni Deluxe from SlicePoint keeps me coming back. Bold flavors and fresh toppings make lunch exciting!",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    id: 3,
    name: "Nabila Rahman",
    role: "Traveler",
    review: "The Four Cheese Blend is heavenly! Every slice tastes fresh and premium, perfect for sharing with friends after a trip.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 4,
    name: "Imran Chowdhury",
    role: "Photographer",
    review: "I love the Italian Herb Special. The aromatic herbs and balanced flavors make it my go-to choice for a quick bite.",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg"
  },
  {
    id: 5,
    name: "Farzana Ahmed",
    role: "University Student",
    review: "SlicePoint pizza is consistently amazing. Perfect for study nights — fresh, tasty, and satisfying every time.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    id: 6,
    name: "Rafiq Karim",
    role: "Tech Enthusiast",
    review: "The crust on their pizzas is unmatched. Crisp, soft, and just the right thickness. SlicePoint nailed it!",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg"
  },
  {
    id: 7,
    name: "Maya Sultana",
    role: "Teacher",
    review: "I order from SlicePoint every weekend. The quality, flavor, and freshness make it a family favorite.",
    avatar: "https://randomuser.me/api/portraits/women/25.jpg"
  },
  {
    id: 8,
    name: "Tanvir Alam",
    role: "Freelancer",
    review: "The Veggie Supreme is colorful, tasty, and full of fresh ingredients. Perfect for a healthy indulgence!",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg"
  },
  {
    id: 9,
    name: "Samira Niaz",
    role: "Designer",
    review: "SlicePoint pizza is a masterpiece. Every slice tells a story of quality ingredients and perfect baking.",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg"
  }
])



</script>

<template>
  <section id="reviews" class="testimonials">
    <div class="container">
      <div class="text-center">
        <BaseTitle class="mb-2 text-center">Customer Review</BaseTitle>
      </div>
      <div class="card-slider">
        <TestimonialCard v-for="review in testimonials" :review="review" :key="review.id" />
      </div>

      <div class="flex justify-center gap-1">
        <BaseButton class="prev"><i class="fa-solid fa-arrow-left"></i> Prev</BaseButton>
        <BaseButton class="next">Next <i class="fa-solid fa-arrow-right"></i></BaseButton>
      </div>
    </div>
  </section>
</template>
<style scoped>
.testimonials {
  padding: 3.75rem 0;
}

.card-slider {
  position: relative;
  display: flex;
  gap: 2rem;
  transition: transform .5s ease-in-out;
  overflow-x: hidden;
  padding: 1rem 0 2rem 0;
}

.next,
.prev {
  background: var(--white-color);
  border: 1px solid var(--border-color);
  color: var(--light-color);
  padding: .75rem 1rem;
}

.next:hover,
.prev:hover {
  background: var(--dark-color);
  color: var(--white-color);
  border-color: var(--dark-color);
}

.next {
  right: 0;
}

.prev {
  left: 0;
}
</style>
