<template>
  <div id="app">
    <Navbar />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    // window.addEventListener('load', () => {
    //   if (!localStorage.getItem("users")) {
    //     localStorage.setItem("users", JSON.stringify([
    //     ]))
    //   }
    // })
  },
};
</script>


<style>
@font-face {
  font-family: "Rubik Light";
  src: url("./assets/font/Rubik/static/Rubik-Light.ttf") format("truetype");
  font-weight: lighter;
}
@font-face {
  font-family: "Rubik";
  src: url("./assets/font/Rubik/static/Rubik-Regular.ttf") format("truetype");
  font-weight: initial;
}
@font-face {
  font-family: "Rubik Medium";
  src: url("./assets/font/Rubik/static/Rubik-Medium.ttf") format("truetype");
  font-weight: bold;
}
@font-face {
  font-family: "Rubik Bold";
  src: url("./assets/font/Rubik/static/Rubik-Bold.ttf") format("truetype");
  font-weight: bolder;
}

:root {
    --orange: #F17941;
    --black: #353535;
    --border: #ced4da;
    --cardDisable: #D5D5D5;
    --blue: #5266B7;
  --lightFont: 'Rubik Light';
  --regularFont: 'Rubik';
  --mediumFont: 'Rubik Medium';
  --boldFont: 'Rubik Bold';
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: var(--orange);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
