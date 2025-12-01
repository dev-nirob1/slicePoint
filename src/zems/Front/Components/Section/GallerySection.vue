<script setup>
import { ref } from 'vue';

const gallery = ref([
  { id: 1, image: "https://cdn.pixabay.com/photo/2018/09/17/11/42/pizza-slice-3683598_1280.jpg", title: "Dough Base", desc: "Hand-stretched, slow-fermented dough." },
  { id: 2, image: "https://cdn.pixabay.com/photo/2021/09/12/18/13/pizza-6619201_1280.jpg", title: "Tomato Sauce", desc: "House-made tomato sauce, slow-cooked" },
  { id: 3, image: "https://cdn.pixabay.com/photo/2018/10/16/13/19/pizza-3751466_1280.jpg", title: "Cheese Blend", desc: "Premium mozzarella, perfectly melted." },
  { id: 4, image: "https://cdn.pixabay.com/photo/2022/01/05/21/07/pizza-6918041_960_720.jpg", title: "Oven Baking", desc: "Wood-fired oven brings all flavors together to perfection." },
]);
</script>

<template>
  <section class="gallery bg-dark">
    <div class="container">
      <BaseTitle class="mb-2 text-center">Behind Every Perfect Slice</BaseTitle>

      <div class="image-showcase medium-3 large-4 gap-2">
        <div v-for="img in gallery" :key="img.id" class="image text-center">
          <BaseImage :image="img.image" />
          <div class="overlay flex-center">
            <div>
              <BaseTitle>{{ img.title }}</BaseTitle>
              <BaseParagraph>{{ img.desc }}</BaseParagraph>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<style scoped>
.gallery {
  padding: 3.75rem 0;
}

.image {
  cursor: pointer;
  border-radius: .5rem;
  overflow: hidden;
  position: relative;
}

img {
  transition: all .5s ease-in-out;
}

.image:hover img {
  transform: scale(1.1);
}

.image-showcase {
  grid-auto-rows: 300px;
}

.overlay {
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(from var(--primary-color) r g b / 80%);
  z-index: 10;
  color: var(--white-color);
  transition: all .5s ease-in-out;
}

.image:hover .overlay {
  left: 0;
}

@media (min-width: 768px) {
  .image:nth-child(1) {
    grid-column: 1 / span 2;
  }

  .image:last-child {
    grid-column: span 2;
  }

  .image p {
    font-size: 1.1rem;
  }
}

@media (min-width: 992px) {
  .image:nth-child(1) {
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
  }

  .image:last-child {
    grid-column: span 2;
  }
}
</style>
