<template>
  <section class="offer bg-dark">
    <div class="container">
      <div class="medium-2 align-center gap-2">
        <div class="content">
          <BaseTitle>Fresh From Our Oven<br>
            <span>
              Limited Time Offer
            </span>
          </BaseTitle>
          <div class="discount-box">
            <span class="price">$10.00</span> <del>$12.99 </del> <span class="discount text-primary"> 15% OFF</span>
          </div>
          <div class="mt-1 flex align-center gap-1">
            <BaseButton class="bg-primary">Order Now</BaseButton>
            <BaseButton class="outline-btn">Get Coupon</BaseButton>
          </div>
        </div>
        <div class="image">
          <BaseImage
            image="https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?_gl=1*q94s9i*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3NjQ2MDc0MTckbzM5JGcxJHQxNzY0NjA3NTEwJGozNyRsMCRoMA.." />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.offer {
  padding: 5rem 0;
  background: linear-gradient(to right, rgba(0, 0, 0, .7), rgba(0,0,0,.5)), url('https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?_gl=1*q94s9i*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3NjQ2MDc0MTckbzM5JGcxJHQxNzY0NjA3NTEwJGozNyRsMCRoMA..')no-repeat center/cover fixed;
}

.image {
  border: 2px solid var(--primary-color);
  border-radius: .5rem;
  overflow: hidden;
}

.title {
  font-size: 2rem;
}

.title span {
  font-size: 3rem;
  color: var(--primary-color);
  margin: 1rem 0;
  display: inline-block;
  border-top: 1px solid var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
}
.discount-box {
  display: flex;
  align-items: center;
  gap: .5rem;
}
del {
  font-size: 1.5rem;
}
.price{
  font-size: 2rem;
}
</style>
