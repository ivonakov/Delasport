<template>
  <b-container>
    <Header />
    <!-- <b-row>
      <b-col sm="12" lg="6" class="mb-2">
        <b-card
          overlay
          :img-src="cardSports"
          img-alt="Card Image"
          text-variant="white"
          title="Sports"
        >
          <b-row>
            <b-col cols="7">
              <b-card-text>Price Boost every day on all sports</b-card-text>
              <b-button pill variant="success" class="mt-2">Go to Sports</b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col sm="12" lg="6" class="mb-2">
        <b-card
          overlay
          :img-src="cardCasino"
          img-alt="Card Image"
          text-variant="white"
          title="Casino"
        >
          <b-row>
            <b-col cols="7" align-self="center">
              <b-card-text>Offering the best slots and live dealer games</b-card-text>
              <b-button pill variant="success" class="mt-2">Go to Casino</b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row> -->
<Section />
    <Categories />
    <Promotions />
    <Providers />
  </b-container>
</template>

<script>
import Header from "./Header.vue";
import Section from "./Section.vue";
import Categories from "./Carousel.vue";
import Providers from "./Providers.vue";
import Promotions from "./Promotions.vue";

export default {
  name: "Main",
  components: {
    Header,
    Section,
    Categories,
    Providers,
    Promotions
  }
};
</script>
