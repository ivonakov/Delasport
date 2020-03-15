<template>
  <b-row class="header">
    <b-col cols="4" md="6" lg="4">
      <ul class="nav">
        <li class="nav-item">
          <b-media>
            <template v-slot:aside>
              <b-img :src="mcp.img" :alt="mcp.alt"></b-img>
            </template>
            <h5 class="mt-0">{{mcp.alt}}</h5>
          </b-media>
        </li>
        <li class="nav-item">
          <b-media>
            <template v-slot:aside>
              <b-img :src="oss.img" :alt="oss.alt"></b-img>
            </template>
            <h5 class="mt-0">{{ oss.alt}}</h5>
          </b-media>
        </li>
      </ul>
    </b-col>
    <b-col cols="8" md="5" lg="4" offset-md="1" offset-lg="4" class="text-right">
      <b-row cols="2">
        <b-col class="text-right">
          <b-button pill>Sign In</b-button>
        </b-col>
        <b-col class="text-right">
          <b-button pill variant="success">Register</b-button>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import logoMcp from "../assets/img/main_club_partner.png";
import logoOss from "../assets/img/official_shirt_sponssore.png";

export default {
  name: "Header",
  data() {
    return {
      mcp: {
        img: logoMcp,
        alt: "Main Club Partener",
        link: "https://www.delasport.com/"
      },
      oss: {
        img: logoOss,
        alt: "Oficial Shirt Sponsor",
        link: "https://www.delasport.com/"
      }
    };
  }
};
</script>
