<template>
  <section class="pizza-details">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="image">
          <BaseImage
            image="https://images.pexels.com/photos/31300919/pexels-photo-31300919.jpeg?_gl=1*1a2rit8*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3NjQ0MzExMzQkbzM3JGcxJHQxNzY0NDMxMjkzJGoyMSRsMCRoMA.." />
        </div>
        <div class="content">
          <BaseTitle>Signature Pepperoni Pizza</BaseTitle>
          <BaseParagraph>Crafted with premium smoked pepperoni, freshly shredded mozzarella,
            hand-tossed dough, and our original tomato sauce — baked at 550°F
            for a perfect crispy edge and soft center.
          </BaseParagraph>
          <ul class="all-2 medium-3 gap-1">
            <ListItem>
              <BaseParagraph>12"/14"/16"</BaseParagraph>
              <SubTitle>Size</SubTitle>
            </ListItem>
            <ListItem>
              <BaseParagraph>850g</BaseParagraph>
              <SubTitle>Weight</SubTitle>
            </ListItem>
            <ListItem>
              <BaseParagraph>Medium</BaseParagraph>
              <SubTitle>Spice Level</SubTitle>
            </ListItem>
            <ListItem>
              <BaseParagraph>2-3 People</BaseParagraph>
              <SubTitle>Serves</SubTitle>
            </ListItem>
            <ListItem>
              <BaseParagraph>1120 Kcal</BaseParagraph>
              <SubTitle>Calorie</SubTitle>
            </ListItem>
            <ListItem>
              <BaseParagraph>Wood Fired</BaseParagraph>
              <SubTitle>Bake Style</SubTitle>
            </ListItem>
          </ul>
          <h4>
            Price: <div class="price"> $12.99</div>
            <BaseButton class="bg-primary ml-2">Order Now</BaseButton>
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pizza-details {
  padding: 3.75rem 0;
}

.pizza-details ul li {
  padding: 1.5rem 1rem;
  border-radius: .5rem;
  text-align: center;
  border: 1px solid var(--secondary-color);
}

.pizza-details ul li p {
  margin: 0 0 .5rem 0;
  padding: 0;
}
.pizza-details ul{
  margin: 2rem 0;
}
.pizza-details h4{
  display: flex;
  gap: .5rem;
  align-items: center;
}
.price{
  color: var(--secondary-color);
}
</style>
