<template>
  <b-row class="providers">
    <b-col cols="12">
      <h2>Game Providers</h2>
    </b-col>
    <b-col v-for="(image, index) in images" :key="index" class="text-center">
      <b-card overlay :img-src="image.url" :img-alt="image.alt" text-variant="white"></b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Providers",
  data: function() {
    return {
      images: [
        {
          url: require("../assets/img/providers/evolution_gamming.png"),
          alt: "Evolution Gamming"
        },
        {
          url: require("../assets/img/providers/asia_gamming.png"),
          alt: "Asia Gamming"
        },
        {
          url: require("../assets/img/providers/programatic_play.png"),
          alt: "Programatic Play"
        },
        {
          url: require("../assets/img/providers/game_art.png"),
          alt: "Game Art"
        },
        {
          url: require("../assets/img/providers/betsoft.png"),
          alt: "Betsoft"
        },
        {
          url: require("../assets/img/providers/booming_games.png"),
          alt: "Booming Games"
        }
      ],
      index: null
    };
  }
};
</script>
