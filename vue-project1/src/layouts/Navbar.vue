<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/news" class="nav-link">News</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/product" class="nav-link">Product</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/search" class="nav-link">SearchProduct</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="nav-link">Cart</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style></style>
