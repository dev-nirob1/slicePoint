<template>
  <!-- ======== Footer section ======== -->
  <footer class="footer">
    <div class="container medium-2 large-3 gap-2 py-1 medium-py-4">
      <!-- Footer logo and contact info -->
      <div class="contact-info">
        <a href="/" class="logo">
          <BaseImage image="/logo.png" alt="Real Estate Logo" />
        </a>

        <BaseParagraph>
          Savor every slice of our wood-fired pepperoni pizza — crafted with passion, served with love.
        </BaseParagraph>

      </div>

      <!-- Quick navigation links -->
      <div>
        <SubTitle>Contact Us</SubTitle>
        <ul class="footer-links">
          <ListItem>
            <i class="fa-solid fa-location-dot"></i> <span>SlicePoint, Dhaka 1216, Bangladesh</span>
          </ListItem>
          <ListItem>
            <i class="fa-solid fa-phone"></i> +8801234567890
          </ListItem>
          <ListItem>
            <i class="fa-solid fa-envelope"></i> support@slicePoint.com
          </ListItem>
        </ul>

      </div>


      <!-- Newsletter section -->
      <div class="social">
        <SubTitle>Follow Us On</SubTitle>
        <div class="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
        <BaseParagraph>Stay connected for new arrivals, style tips, and exclusive offers.</BaseParagraph>
      </div>
    </div>

    <!-- Footer bottom copyright -->
    <div class="footer-bottom">
      <BaseParagraph> &copy; {{ new Date().getFullYear() }} SlicePoint. Design and Developed by <a
          class="text-secondary" href="https://webpoka.com/" target="_blank">Webpoka</a>.
      </BaseParagraph>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--dark-color);
  color: var(--white-color);
}

.footer .logo img {
  height: 70px;
  width: auto;
}

.footer .social-links {
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;

}

.footer .social-links a {
  border-radius: .25rem;
  background: var(--white-color);
  color: var(--primary-color);
  padding: 0 .75rem;
}

.footer .social-links a:hover {
  color: var(--secondary-color);
}

.footer .sub-title {
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.footer ul li {
  margin: .75rem 0;
}

.footer ul li a {
  padding: .25rem 0;
  position: relative;
}

.footer ul li a::before {
  content: '➔';
  position: absolute;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  transition: all .3s ease-in-out;
}

.footer ul li a:hover::before {
  left: 0;
  opacity: 1;
  color: var(--primary-color);
  visibility: visible;
}

.footer ul li a:hover {
  color: var(--primary-color);
  padding-left: 1.25rem;
}

.footer .newsletter-form {
  display: flex;
  align-items: center;
}

.footer .newsletter-form input {
  background: var(--white-color);
  border-radius: .25rem 0 0 .25rem;
  margin: 0;
  border: 1px solid var(--primary-color);
}

.footer .newsletter-form .btn {
  padding: 1rem 2rem;
  background: var(--secondary-color);
  border-radius: 0 .25rem .25rem 0;
  margin: 0;
}

.footer .newsletter-form .btn i {
  color: var(--white-color);
}

.footer-bottom {
  text-align: center;
  padding: .75rem;
  border-top: 1px solid rgb(from var(--border-color) r g b / 40%);
}

.footer-bottom p {
  font-size: 14px;
}
</style>
