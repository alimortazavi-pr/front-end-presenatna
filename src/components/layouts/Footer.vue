<template>
  <footer class="footer" data-background-color="black">
    <div class="container">
      <router-link class="footer-brand" :to="{ name: 'Home' }"
        >PRESENTANA</router-link
      >
      <ul class="pull-center">
        <li>
          <router-link :to="{ name: 'StepOne' }">
            Bygg din present nu
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'GiftBoxesHome' }">
            Färdiga presenter
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'GiftsHome', params: { occasion: 'all' } }">
            Present för tillfällen
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'AboutUs' }">
            Om Oss
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ContactUs' }">
            Kontakta Oss
          </router-link>
        </li>
      </ul>
      <ul class="social-buttons pull-right">
        <li>
          <router-link
            to="#"
            target="_blank"
            class="btn btn-icon btn-link btn-neutral"
          >
            <i class="fab fa-twitter"></i>
          </router-link>
        </li>
        <li>
          <router-link
            to="#"
            target="_blank"
            class="btn btn-icon btn-neutral btn-link"
          >
            <i class="fab fa-facebook-square"></i>
          </router-link>
        </li>
        <li>
          <router-link
            to="#"
            target="_blank"
            class="btn btn-icon btn-neutral btn-link"
          >
            <i class="fab fa-instagram"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
