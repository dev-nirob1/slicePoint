<script setup>
</script>

<template>
  <section class="contact bg-dark">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="content">
          <BaseTitle>Order or Visit</BaseTitle>
          <BaseParagraph>Place an order or visit us. We are happy to serve fresh slices. </BaseParagraph>
          <form>
            <div class="medium-2 gap-1">
              <InputField placeholder="Your Name" />
              <InputField placeholder="Phone Number" />
            </div>
            <div>
              <InputField placeholder="Your Address" />
            </div>
            <BaseTextArea placeholder="Special instruction" />
            <BaseButton class="bg-primary">Place Order</BaseButton>
          </form>
          <div class="mt-1">
            <small>We deliver within 5km. Call us for further distance</small>
          </div>
        </div>
        <div class="map">
          <iframe class="width-full height-full"
            src="https://maps.google.com/maps?q=Dhaka%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed" allowfullscreen
            loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.contact {
  padding: 3.75rem 0;
}

.contact input,
.contact textarea {
  background: var(--white-color);
}

.contact .btn {
  border-radius: .5rem;
}

.contact .map iframe {
  border-radius: .5rem;
}
</style>
