<script setup>
import { ref } from 'vue';
import TestimonialCard from '../Widget/TestimonialCard.vue';

const testimonials = ref([
  {
    id: 1,
    name: "Sarah Khan",
    role: "Student",
    review: "BagPoint made my daily commute so much easier. The compartments keep everything organized and the comfort is unmatched.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Jahid Hossain",
    role: "Office Worker",
    review: "I carry my laptop and documents every day, and this bag handles everything effortlessly. Smart, durable, and very stylish.",
    avatar: "https://images.unsplash.com/photo-1620000617482-821324eb9a14?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Nabila Rahman",
    role: "Traveler",
    review: "The lightweight design and storage options are perfect for trips. It fits all my essentials without feeling heavy at all.",
    avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Imran Chowdhury",
    role: "Photographer",
    review: "I love how secure the pockets are. My gear stays safe and the bag feels super comfortable even on long shoots.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 5,
    name: "Farzana Ahmed",
    role: "University Student",
    review: "Perfect for carrying books, laptop, and accessories. The build quality feels premium and the design looks very modern.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 6,
    name: "Rafiq Karim",
    role: "Tech Enthusiast",
    review: "The laptop padding and pocket layout are excellent. Everything fits neatly and the bag still feels surprisingly light.",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg"
  },
  {
    id: 7,
    name: "Maya Sultana",
    role: "Teacher",
    review: "I carry my books and supplies every day, and this bag handles it all with ease. Functional, clean, and very reliable.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    id: 8,
    name: "Tanvir Alam",
    role: "Freelancer",
    review: "Spacious, comfortable, and minimal — exactly what I needed. It organizes my work gear perfectly and feels great to use.",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg"
  },
  {
    id: 9,
    name: "Samira Niaz",
    role: "Designer",
    review: "The clean look and sturdy material make it my favorite everyday bag. Practical, stylish, and perfect for busy days.",
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
