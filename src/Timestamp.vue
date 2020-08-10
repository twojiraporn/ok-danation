<template>
  <div>
    <div id="time">{{ timestamp }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timestamp: ""
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function() {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    }
  }
};
</script>

<style>
#time {
  font-size: 1.5vw;
  color: #a77d02;
  margin: 0 0 2em 0;
}
</style>
