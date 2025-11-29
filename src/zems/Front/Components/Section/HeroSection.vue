<script setup>
</script>

<template>
  <section class="hero flex-center relative">
    <div class="container">
      <div class="medium-2 align-center gap-2">
        <div class="content">
          <HeroTitle>
            Experience The Authentic Pepperoni Punch
          </HeroTitle>
          <BaseParagraph> Hand Stretched dough, slow-cooked italian tomato-sauce and smoky pepperoni wood fired to
            golden perfection.
          </BaseParagraph>
          <div class="flex gap-1">
            <BaseButton>Order Now</BaseButton>
            <BaseButton>View Ingredients</BaseButton>
          </div>
        </div>
        <div class="image">
          <BaseImage image="/hero.jpg" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero {
  min-height: 100vh;
  color: var(--white-color);
}

.hero p {
  font-size: 1.1rem;
}

.hero .image {
  position: absolute;
  inset: 0;
  z-index: -1;
}
.image::before{
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0,0,0, .2)
}
</style>
