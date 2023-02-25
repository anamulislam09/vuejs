<template>
  <div class="container">
    <h1>Contact Page</h1>
    <form action="/action_page.php">
      <div class="form-group">
        <label for="name">Your name:</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Enter Your name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="email">Your Email:</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter Your email"
          name="email"
        />
      </div>

      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
