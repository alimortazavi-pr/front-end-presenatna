<template>
  <div class="error-page">
    <Nav />
    <div class="wrapper">
      <div class="page-header error-page header-filter">
        <div class="page-header-image bg-404"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="title">404</h1>
              <h2 class="description">sidan hittas inte :(</h2>
              <h4 class="description">Ooooups! Det verkar som att du tappade bort dig.</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/layouts/Footer.vue";
import Nav from "@/components/layouts/Nav.vue";
export default {
  components: { Footer, Nav },
};
</script>

<style>
.bg-404 {
  background-image: url("../assets/img/braden-collum.jpg");
}
</style>
