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
              <button type="button" class="btn btn-outline-light">CONTACT US</button>
            </router-link>
          </li>
        </ul>
      </nav>
      <router-link to="/login">
        <button type="button" id="logout" class="btn btn-dark">Logout</button>
      </router-link>
      <h1 class="text-color">Hello Foundation 1!</h1>
      <timestamp></timestamp>
    </div>
    <div class="container-fluid">
      <div class="container-fluid">
        <div class="row">
          <div style="margin: 0 25em" class="col-sm bg-success text-center">
            <div class="header text-color">ของที่ต้องการรับบริจาค</div>
            <div class="bullet">
              <span class="item text-color">Item</span>
              <input v-model="item" placeholder="Enter item" />
            </div>
            <div class="bullet">
              <span class="amount text-color">Amount</span>
              <input v-model="amount" placeholder="Enter amount" />
            </div>
            <div class="bullet">
              <span class="detail text-color">Detail</span>
              <input v-model="detail" placeholder="Enter detail" />
            </div>
            <button type="button" class="btn btn-secondary submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <br />
      <br />
      <h1 id="all" class="text-color text-center">ของที่ต้องการรับบริจาคทั้งหมด</h1>
      <br />
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
            <th>Foundation</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ข้าวสาร</td>
            <td>50 กระสอบ</td>
            <td>Foundation 1</td>
            <td>-</td>
          </tr>
          <tr>
            <td>กระดานไวท์บอร์ด</td>
            <td>2</td>
            <td>Foundation 1</td>
            <td>ขนาด 150*90cm</td>
          </tr>
          <tr>
            <td>ปากกาไวท์บอร์ดสีดำกับแดง</td>
            <td>อย่างละ 20 ด้าม</td>
            <td>Foundation 1</td>
            <td>ขอแบบลบได้</td>
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
      item: "",
      amount: "",
      detail: ""
    };
  },
  components: {
    Timestamp
  }
};
</script>

<style>
#all {
  font-size: 2.5vw;
}

.table-dark thead th {
  border-color: #a77d02;
}

td {
  color: #e0d4ad;
}

th {
  color: #fdc723;
}

.bg-success {
  background-color: #c3b484 !important;
}

.item {
  margin: 0 2.6em 0 0;
}

.amount {
  margin: 0 1em 0 0;
}

.header {
  margin: 1em;
  font-weight: bold;
  font-size: 2vw;
}

h1 {
  margin: 0.3em 0 0.5em 0;
  font-family: "Lemonada", cursive;
  font-weight: 700;
  font-size: 3vw;
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

.bullet {
  margin: 0.5em;
  font-weight: 500;
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

.text-color {
  color: #573329;
}

.detail {
  margin: 0 2em 0 0;
}
</style>
