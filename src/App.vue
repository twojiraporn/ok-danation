<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-light justify-content-center">
      <ul class="navbar-nav">
        <li>
          <span class="title center">{{ title }}</span>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "OK Donation"
    };
  }
};
</script>

<style>
.bg-light {
  background-color: #573329 !important;
  margin: 0px 0 -1.9em 0;
}

body {
  background-color: #e0d4ad;
}

button {
  margin: 1.3em 0.5em;
}

.btn-outline-light {
  color: #fdc723;
  border-color: #fdc723;
}

.btn-outline-light:hover {
  color: #e0d4ad;
  border-color: #aa9450;
  background-color: #aa9450;
}

.center {
  text-align: center;
}

.title {
  color: #883235;
  font-size: 5vw;
  margin: 0.7em;
  animation: color-change 1s infinite;
  font-family: "Frijole", cursive;
}

@keyframes color-change {
  0% {
    color: #eb12a8;
  }
  50% {
    color: #12a8eb;
  }
  100% {
    color: #a8eb12;
  }
}
</style>
