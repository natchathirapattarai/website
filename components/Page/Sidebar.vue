<script setup lang="ts">
const app = useAppConfig()
const isToggled = ref(false)
const toggleSidebar = () => {
  isToggled.value = !isToggled.value
}
</script>

<template>
  <div id="sidebar" class="max-lg:shadow-none" :class="isToggled ? 'lg:ml-[-24em]' : 'ml-[-24em] lg:ml-0'">
    <div class="inner">

      <!-- Menu -->
      <nav id="menu">
        <header class="major">
          <h2>Menu</h2>
        </header>
        <PageNavList :links="app.links" />
      </nav>

      <!-- Section -->
        <section>
          <header class="major">
            <h2>Get in touch</h2>
          </header>
          <p>For any enquires on Acting, VJ, RJ, Dubbing, Direction, Newsreading, Music & Dance, please feel free to reach out to us using the details:</p>
          <ul class="contact">
            <li class="icon solid fa-envelope"><a href="mailto:natchathirapattarai@gmail.com">natchathirapattarai@gmail.com</a></li>
            <li class="icon solid fa-phone"><a href="tel:+919025351595">+91 90253 51595</a></li>
            <li class="icon solid fa-home">7/3, 3rd Cross St, Thirunagar<br>
              NGO Colony, Vadapalani<br>
              Chennai, Tamil Nadu 600026
            </li>
          </ul>
        </section>

      <!-- Footer -->
        <footer id="footer">
          <p class="copyright">&copy; Natchathirapattarai 2023.All rights reserved. Website developed by: <a href="https://tempestronics.com/">Tempestronics</a>.</p>
        </footer>

    </div>
    <a @click="toggleSidebar" href="#sidebar" class="toggle">Toggle</a>
  </div>
</template>