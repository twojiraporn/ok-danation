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
    <div class="container">
      <h1 id="home">
        HOME | สิ่งของที่รับบริจาค
        <span id="how-mg"
          >ต้องการบริจาค
          <router-link to="/contact" id="how">click!</router-link></span
        >
      </h1>
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
            <td>หน้ากากอนามัย</td>
            <td>20 กล่อง</td>
            <td>Foundation 2</td>
            <td>สำหรับเด็ก</td>
          </tr>
          <tr>
            <td>ผ้าห่ม</td>
            <td>50 ผืน</td>
            <td>Foundation 3</td>
            <td>รับทุกขนาด</td>
          </tr>
          <tr>
            <td>ถุงเท้า</td>
            <td>100 คู่</td>
            <td>Foundation 2</td>
            <td>รับทุกขนาด คละได้ยิ่งดี</td>
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
export default {};
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

#home {
  font-family: "Lemonada", cursive;
  font-size: 2vw;
  font-weight: 700;
  margin: 2em 0 1em 0;
  color: #573329;
}

#how:hover {
  color: red;
}

#how {
  color: #a77d02;
}

#how-mg {
  margin: 0 0 0 17em;
}
</style>
