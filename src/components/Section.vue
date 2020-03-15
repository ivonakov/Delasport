<template>
  <b-row class="section">
    <b-col sm="12" lg="6" class="mb-2">
      <b-card
        overlay
        :img-src="cardSports"
        img-alt="Card Image"
        text-variant="white"
        title="Sports"
      >
        <b-card-text>Price Boost every day on all sports</b-card-text>
        <b-button pill variant="success" class="mt-2">Go to Sports</b-button>
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
        <b-card-text>Offering the best slots and live dealer games</b-card-text>
        <b-button pill variant="success" class="mt-2">Go to Casino</b-button>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import cardsports from "../assets/img/card_sports.png";
import cardcasino from "../assets/img/card_casino.png";

export default {
  name: "Section",
  data() {
    return {
      cardSports: cardsports,
      cardCasino: cardcasino
    };
  }
};
</script>
