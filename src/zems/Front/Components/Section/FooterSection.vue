<script setup>
</script>

<template>
  <footer class="bg-dark">
    <div class="container">
      <div class="flex justify-between align-center">
        <a href="/">
          <BaseImage image="https://softstitch.netlify.app/logo.png"/>
        </a>
        <div>
          <p><strong>Phone: </strong> +8801234567890</p>
          <p><strong>Hours:</strong> Mon-Sun: 10:00 - 10:00</p>
        </div>
        <div>
          <p>&copy; SlicePoint. Design and Developed by <a href="https://webpoka.com/" target="_blank">WebPoka</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {

  padding: 1.5rem 0;
  border-top: 1px solid var(--light-color);
}
footer img {
  height: 50px;
}
footer p{
  margin: .25rem;
}
footer a{
  color: var(--primary-color);
}
</style>
