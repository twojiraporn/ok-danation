<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-light justify-content-center">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/">
            <button type="button" class="btn btn-outline-light">HOME</button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login">
            <button type="button" class="btn btn-outline-light">LOGIN</button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact">
            <button type="button" class="btn btn-outline-light">
              CONTACT US
            </button>
          </router-link>
        </li>
      </ul>
    </nav>
    <h1 class="contact text-color text-center">CONTACT US</h1>
    <div class="text-center text-color" id="tel">{{ tel }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: "086-xxxxxxx"
    };
  }
};
</script>

<style>
.text-color {
  color: #573329;
}

.contact {
  font-family: "Lemonada", cursive;
  font-size: 4vw;
  margin: 4em 0 0.2em 0.6em;
  color: #573329;
  font-weight: 700;
}

#tel {
  font-size: 2vw;
  font-family: "Lemonada", cursive;
}
</style>
