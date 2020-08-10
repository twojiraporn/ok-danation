<template>
  <div>
    <div class="text-center">
      <nav class="navbar navbar-expand-sm bg-light justify-content-center">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">
              <button type="button" class="btn btn-outline-light">HOME</button>
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
      <router-link to="/login"
        ><button type="button" id="logout" class="btn btn-dark">
          Logout
        </button></router-link
      >
      <h1 class="text-color">Hello Admin!</h1>
      <timestamp></timestamp>
    </div>
    <div class="container-fluid">
      <div class="container-fluid">
        <div class="row">
          <div style="margin: 0 25em" class="col-sm bg-success text-center">
            <div class="header text-color">บริจาคให้กับมูลนิธิ</div>
            <div class="bullet">
              <span class="item text-color">Item</span>
              <input v-model="item" placeholder="Enter item" />
            </div>
            <div class="bullet">
              <span class="amount text-color">Amount</span>
              <input v-model="amount" placeholder="Enter amount" />
            </div>
            <div class="select">
              <span class="foundation text-color">Foundation</span>
              <select class="" v-model="selected">
                <option disabled value="">Please select one</option>
                <option>Foundation 1</option>
                <option>Foundation 2</option>
                <option>Foundation 3</option>
              </select>
            </div>
            <button type="button" class="btn btn-secondary submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    <br /><br />
    <div class="container">
      <h1 class="text-color text-center">Foundation Contact</h1>
      <br />
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th>Foundation</th>
            <th>Tel</th>
            <th>Address</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Foundation 1</td>
            <td>034-xxxxxx</td>
            <td>...</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Foundation 2</td>
            <td>034-xxxxxx</td>
            <td>...</td>
            <td>มูลนิธิเด็ก</td>
          </tr>
          <tr>
            <td>Foundation 3</td>
            <td>034-xxxxxx</td>
            <td>...</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Timestamp from "./Timestamp.vue";
export default {
  data() {
    return {
      selected: "",
      amount: "",
      item: "",
      timestamp: ""
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  components: {
    Timestamp
  }
};
</script>

<style>
.table-dark thead th {
  border-color: #a77d02;
}

td {
  color: #e0d4ad;
}

th {
  color: #fdc723;
}

select {
  color: #573329;
}

h1 {
  margin: 0.3em 0 0.5em 0;
  font-family: "Lemonada", cursive;
  font-weight: 700;
  font-size: 3vw;
}

.text-color {
  color: #573329;
}

.bg-warning {
  background-color: #aa9450 !important;
}

.bg-success {
  background-color: #c3b484 !important;
}

.header {
  margin: 1em;
  font-weight: bold;
  font-size: 2vw;
}

.bullet {
  margin: 0.5em;
  font-weight: 500;
}

.item {
  margin: 0 2.6em 0 0;
}

.amount {
  margin: 0 1em 0 0;
}

.select {
  margin: 0 1.5em 0 0em;
}

.foundation {
  font-weight: 500;
  margin: 1em 1em 0 1em;
}

.submit {
  margin: 1em 2em 1.7em 13em;
  background-color: #573329;
  color: #e0d4ad;
  border-color: #573329;
}

.submit:hover {
  background-color: #fdc723;
  border-color: #fdc723;
}

#logout {
  background-color: #573329;
  border-color: #573329;
  margin: 3em 0 0 80em;
  color: #e0d4ad;
}

#logout:hover {
  background-color: #aa9450;
  border-color: #aa9450;
}
</style>
