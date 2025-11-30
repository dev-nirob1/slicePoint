<template>
  <section class="product-quality bg-dark">
    <div class="container">
      <div class="mb-2 text-center">
        <BaseTitle>Premium Quality You Can Taste</BaseTitle>
        <BaseParagraph>
          Every pizza is crafted with precision, passion, and authentic wood-fired excellence.
        </BaseParagraph>
      </div>
      <ul class="medium-2 large-4 gap-2">

        <ListItem>
          <BaseTitle>24h</BaseTitle>
          <SubTitle>Slow Fermented Dough</SubTitle>
        </ListItem>

        <ListItem>
          <BaseTitle>100%</BaseTitle>
          <SubTitle>Fresh Ingredients</SubTitle>
        </ListItem>

        <ListItem>
          <BaseTitle>550°F</BaseTitle>
          <SubTitle>Wood-Fired Baking</SubTitle>
        </ListItem>

        <ListItem>
          <BaseTitle>4.9</BaseTitle>
          <SubTitle>Customer Rating</SubTitle>
        </ListItem>
      </ul>
    </div>
  </section>
</template>
<style scoped>
.product-quality {
  padding: 3.75rem 0;
}

.product-quality ul li {
  padding: 2.5rem 2rem;
  border-radius: .5rem;
  border: 2px solid var(--primary-color);
  text-align: center;
}
</style>
