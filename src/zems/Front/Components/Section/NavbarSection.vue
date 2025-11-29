<script setup>
import { ref } from 'vue';
defineProps({

  handleOpenFormModal: {
    type: Function
  }
})
const isMenuOpen = ref(false);
const handleHamburger = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

</script>

<template>
  <header class="navbar relative">
    <div class="container">
      <nav class="flex justify-between align-center">
        <a href="#" class="logo">
          <BaseImage image="/logo.png" alt="logo" />
        </a>

        <ul class="nav-links" :class="{ 'active': isMenuOpen }">
          <ListItem class="mobile-logo">
            <a href="#" >
              <BaseImage image="/logo.png" alt="logo" />
            </a>
          </ListItem>
          <ListItem>
            <a href="#">Home</a>
          </ListItem>
          <ListItem>
            <a href="#about">About</a>
          </ListItem>
          <ListItem>
            <a href="#gallery">Gallery</a>
          </ListItem>
          <ListItem>
            <a href="#testimonials">Testimonials</a>
          </ListItem>
        </ul>
        <div>
          <BaseButton @click="handleOpenFormModal" class="bg-primary">Order Now</BaseButton>
        </div>


        <div @click="handleHamburger" class="hamburger flex-center">
          <i :class="isMenuOpen ? 'fas fa-xmark' : 'fas fa-bars'" class="fa-2xl"></i>
        </div>
      </nav>
    </div>
  </header>

</template>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  padding: .75rem 0;
  color: var(--white-color);
  /* backdrop-filter: blur(5px); */
}
.outline-btn {
  border: 2px solid var(--dark-color);
  color: var(--dark-color);
}
.outline-btn:hover {
  color: var(--white-color);
    border-color: var(--primary-color);
  background: var(--primary-color);
}
.container {
  transition: all .5s ease-in-out;
}

.navbar .logo {
  width: auto;
  height: 40px;
}
.mobile-logo img{
  height: 50px;
}
.navbar .logo img {
  height: 100%;
}

.nav-links {
  background: var(--white-color);
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: -100%;
  top: 0;
  width: 0;
  height: 100vh;
  z-index: 1;
  transition: all .3s ease-in-out;
}

.nav-links.active {
  left: 0;
  width: 60vw;
}

.nav-links a {
  display: inline-block;
  padding: .5rem 1rem;
  font-weight: 700;
  border-radius: .5rem;
}
.nav-links a:hover{
  color: var(--secondary-color);
}
.hamburger {
  height: 2rem;
  width: 2rem;
  color: var(--dark-color);
}

@media (min-width: 768px) {
.navbar .logo {
  width: auto;
  height: 60px;
}
  .hamburger,
  .mobile-logo {
    display: none;
  }

  .nav-links {
    position: static;
    height: fit-content;
    width: fit-content;
    background: transparent;
    flex-direction: row;
    align-items: center;
  }

  li a.router-link-exact-active {
    color: var(--primary-color);
  }

}
</style>
