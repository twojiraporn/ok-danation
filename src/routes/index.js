import VueRouter from "vue-router";
import Home from "../Home.vue";
import Login from "../Login.vue";
import Contact from "../Contact.vue";
import Admin from "../Admin.vue";
import Foundation from "../Foundation.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  },
  {
    path: "/foundation",
    name: "Foundation",
    component: Foundation
  }
];

export default new VueRouter({
  mode: "history",
  routes
});
