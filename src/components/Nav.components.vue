<template>
  <nav>
    <div class="logo">VGL</div>
    <input type="checkbox" id="click" />
    <label for="click" class="menu-btn">
      <i class="fas fa-bars"></i>
    </label>
    <ul>
      <li>
        <a href="#">Liste de mes jeux</a>
      </li>
      <li>
        <a href="#">Mon Compte</a>
      </li>
      <li>
        
        <a @click="logout()">Déconnexion</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import storage from "@/store/index.store.js";
export default {
  name: "NavComponents",

  methods: {
    // logout: function () {
    //   this.$store.commit("logout");
    //   this.$router.push("/");
    // },
  },
  computed: {
   

  },
};
</script>


<style scoped>
nav {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  height: 80px;
  width: 100%;
  background: #1b1b1b;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px 0 100px;
  flex-wrap: wrap;
}
nav .logo {
  color: #fff;
  font-size: 35px;
  font-weight: 600;
}
nav ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
nav ul li {
  margin: 0 5px;
}

nav ul li button {
  color: #f2f2f2;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  width: 157px;
  height: 41px;
  padding: 8px 15px;
  border-radius: 5px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}
nav ul li a {
  color: #f2f2f2;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 5px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}
nav ul li p.active,
nav ul li p:hover {
  color: #1b1b1b;
  background: #fff;
}
nav ul li button.active,
nav ul li button:hover {
  color: #111;
  background: #fff;
}
nav ul li a.active,
nav ul li a:hover {
  color: #111;
  background: #fff;
}
nav .menu-btn i {
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  display: none;
}
input[type="checkbox"] {
  display: none;
}
@media (max-width: 1000px) {
  nav {
    padding: 0 40px 0 50px;
  }
}
@media (max-width: 920px) {
  nav .menu-btn i {
    display: block;
  }
  #click:checked ~ .menu-btn i:before {
    content: "\f00d";
  }
  nav ul {
    position: fixed;
    top: 80px;
    left: -100%;
    background: #111;
    height: 100vh;
    width: 100%;
    text-align: center;
    display: block;
    transition: all 0.3s ease;
  }
  #click:checked ~ ul {
    left: 0;
  }
  nav ul li {
    width: 100%;
    margin: 40px 0;
  }
  nav ul li a {
    width: 100%;
    margin-left: -100%;
    display: block;
    font-size: 20px;
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  nav ul li button {
    width: 100%;
    margin-left: -100%;
    display: block;
    font-size: 20px;
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  #click:checked ~ ul li a {
    margin-left: 0px;
  }
  nav ul li a.active,
  nav ul li a:hover {
    background: none;
    color: cyan;
  }
  #click:checked ~ ul li button {
    margin-left: 0px;
  }
  nav ul li button.active,
  nav ul li button:hover {
    background: none;
    color: cyan;
  }
}
</style>
