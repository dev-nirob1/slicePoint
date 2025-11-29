<script setup>
</script>

<template>
  <section class="product-story">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="content">
          <BaseTitle>
            The Story Behind <br> Our Signature Pizza
          </BaseTitle>
          <BaseParagraph>
            Handmade dough, rich tomato sauce, and smoky pepperoni crafted for perfect flavor.
          </BaseParagraph>
          <ul class="medium-2 gap-1 mt-2">
            <ListItem class="all-5 align-center">
              <i class="fa-solid fa-star fa-2x"></i>
              <div class="span-4">
                <Subtitle>Handmade Dough</Subtitle>
                <BaseParagraph>24-hour slow fermentation for airy crust</BaseParagraph>
              </div>
            </ListItem>
            <ListItem class="all-5 align-center">
              <i class="fa-solid fa-star fa-2x"></i>
              <div class="span-4">
                <Subtitle>Wood-Fired Oven</Subtitle>
                <BaseParagraph>Smoky char & perfectly blistered crust</BaseParagraph>
              </div>
            </ListItem>
            <ListItem class="all-5 align-center">
              <i class="fa-solid fa-star fa-2x"></i>
              <div class="span-4">
                <Subtitle>Premium Pepperoni</Subtitle>
                <BaseParagraph>Smoked slices sourced from trusted suppliers</BaseParagraph>
              </div>
            </ListItem>
            <ListItem class="all-5 align-center">
              <i class="fa-solid fa-star fa-2x"></i>
              <div class="span-4">
                <Subtitle>House-Made Tomato Sauce</Subtitle>
                <BaseParagraph>Slow-cooked with herbs for deep, rich flavor</BaseParagraph>
              </div>
            </ListItem>
          </ul>

          <blockquote>
            <BaseParagraph>“A recipe refined from countless nights in the oven — we crafted texture, char and flavor
              until every
              slice sings.”</BaseParagraph>
            <cite>— Mr. Chef</cite>
          </blockquote>
        </div>
        <div class="image">
          <BaseImage
            image="https://images.pexels.com/photos/31300919/pexels-photo-31300919.jpeg?_gl=1*1a2rit8*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3NjQ0MzExMzQkbzM3JGcxJHQxNzY0NDMxMjkzJGoyMSRsMCRoMA.." />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.product-story {
  padding: 3.75rem 0;
}

.product-story i {
  color: var(--accent-color);
}

.product-story li {
  padding: .5rem;
  border-radius: .5rem;
  background: rgb(from var(--accent-color) r g b / 5%);
}

li>div {
  padding-top: .5rem;
}

li p {
  margin: .25rem 0;
  font-size: .85rem;
}

blockquote {
  border-left: 3px solid var(--primary-color);
  margin: 1.5rem 0;
  padding: .35rem 1rem .35rem 2rem;
  border-radius: 1rem;
  background: rgb(from var(--accent-color)r g b / 5%)
}

blockquote p {
  font-size: .95rem;
}
</style>
