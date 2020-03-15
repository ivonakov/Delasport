<template>
  <div id="app">
    <Navbar :logo="logo" />
    <!-- <Main :mcp="mcp" :oss="oss" /> -->
    <Main />
    <Footer :logo="logo" />
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Navbar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

import logoSrc from "./assets/img/logo.png";
// import logoMcp from "./assets/img/main_club_partner.png";
// import logoOss from "./assets/img/official_shirt_sponssore.png";

export default {
  name: "App",
  components: {
    Navbar,
    Main,
    Footer
  },
  data() {
    return {
      logo: {
        img: logoSrc,
        alt: "Delasport",
        link: "https://www.delasport.com/"
        // },
        // mcp: {
        //   img: logoMcp,
        //   alt: "Main Club Partener",
        //   link: "https://www.delasport.com/"
        // },
        // oss: {
        //   img: logoOss,
        //   alt: "Oficial Shirt Sponsor",
        //   link: "https://www.delasport.com/"
      }
    };
  }
};
</script>
