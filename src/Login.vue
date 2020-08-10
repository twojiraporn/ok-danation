<template>
  <div class="text-center">
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
    <h1 id="login">LOGIN</h1>
    <div id="mg-username-password">
      <span class="text-color text-bold" id="front-input-username"
        >Username</span
      >
      <input
        v-model="username"
        placeholder="Enter your username"
        @keyup.enter="checkUser()"
      />
    </div>
    <div>
      <span class="text-color text-bold" id="front-input-password"
        >Password</span
      >
      <input
        type="password"
        v-model="password"
        placeholder="Enter your password"
        @keyup.enter="checkUser()"
      />
    </div>
    <button type="button" class="btn btn-secondary" @click="checkUser()">
      Login
    </button>
  </div>
</template>

<script>
import VuePassword from "vue-password";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    checkUser() {
      if (this.username == "admin" && this.password == "admin") {
        window.location = "/admin";
      } else if (
        this.username == "foundation1" &&
        this.password == "foundation1"
      ) {
        window.location = "/foundation";
      } else {
        alert("incorrect username or password");
      }
    }
  }
};
</script>

<style>
h1 {
  margin: 1em;
}

input {
  width: 20%;
}

#front-input-username {
  margin: 0 0.8em 0 0em;
}

#front-input-password {
  margin: 0 1em 0 0;
}

#mg-username-password {
  margin: 0 0 0.5em 0;
}

.text-color {
  color: #573329;
}

.text-bold {
  font-weight: bold;
}

.btn-secondary:hover {
  color: #e0d4ad;
  background-color: #a77d02;
  border-color: #a77d02;
}

.btn-secondary {
  color: #e0d4ad;
  background-color: #573329;
  border-color: #573329;
  margin: 1em 0 0 19em;
}

#login {
  font-family: "Lemonada", cursive;
  font-size: 6vw;
  font-weight: 700;
  margin: 2em 0 0.5em 0;
  color: #573329;
}
</style>
