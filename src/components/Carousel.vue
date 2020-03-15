<template>
  <b-row class="categories">
    <b-col cols="12">
      <h2>Sport categories</h2>
    </b-col>
    <b-col>
      <carousel
        :autoplay="true"
        :speed="4000"
        :paginationEnabled="false"
        :perPageCustom="[ [320, 4],[860, 8], [940, 10], [1280, 12] ]"
      >
        <slide v-for="(image, index) in images" :key="index" class="text-center">
          <b-card class="text-center m-2">
            <img :src="image.url" :alt="image.alt" />
          </b-card>
          <p class="h6">{{ image.alt }}</p>
        </slide>
        
      </carousel>
    </b-col>
  </b-row>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Categories",
  props: {
    msg: String
  },
  components: {
    Carousel,
    Slide
  },
  data: function() {
    return {
      images: [
        { url: require("../assets/img/carousel/soccer.png"), alt: "Soccer" },
        {
          url: require("../assets/img/carousel/basketball.png"),
          alt: "Basketball"
        },
        { url: require("../assets/img/carousel/tennis.png"), alt: "Tennis" },
        {
          url: require("../assets/img/carousel/ice_hockey.png"),
          alt: "Ice Hockey"
        },
        {
          url: require("../assets/img/carousel/baseball.png"),
          alt: "Baseball"
        },
        { url: require("../assets/img/carousel/cricket.png"), alt: "Cricket" },
        {
          url: require("../assets/img/carousel/american_football.png"),
          alt: "American Football"
        },
        {
          url: require("../assets/img/carousel/australian_rules.png"),
          alt: "Australian  Rules"
        },
        {
          url: require("../assets/img/carousel/batminton.png"),
          alt: "Batminton"
        },
        {
          url: require("../assets/img/carousel/bandy.png"),
          alt: "Bandy"
        },
        {
          url: require("../assets/img/carousel/boxing.png"),
          alt: "Boxing"
        },
        {
          url: require("../assets/img/carousel/call_of_duty.png"),
          alt: "Call of Duty"
        },
        {
          url: require("../assets/img/carousel/cs_go.png"),
          alt: "CS:GO"
        },
        {
          url: require("../assets/img/carousel/darts.png"),
          alt: "Darts"
        },
        {
          url: require("../assets/img/carousel/data_2.png"),
          alt: "Data 2"
        },
        {
          url: require("../assets/img/carousel/football.png"),
          alt: "Football"
        }
      ],
      index: null
    };
  }
};
</script>
<style scoped>
.card {
    background-color: #1a212b;
}
</style>