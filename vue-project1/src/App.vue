<template>
  <Header />
  <Navbar />

  <div class="container mt-5">
    <div class="row">
      <!-- <div class="col-sm-4">
        <Sidebar />
      </div> -->
      <div class="col-sm-12">
        <router-view></router-view>
      </div>
      <!-- <Main /> -->
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";
import Navbar from "./layouts/Navbar.vue";
import Sidebar from "./layouts/Sidebar.vue";

export default {
  components: { Header, Footer, Navbar, Sidebar },
};
</script>

<style></style>
