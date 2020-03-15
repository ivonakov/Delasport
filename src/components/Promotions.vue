<template>
  <b-row class="promotions">
    <b-col cols="12">
      <h2>Exciting promotions start here</h2>
    </b-col>

    <b-col>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col lg="6">
            <b-card-body title="NBA Fantasy Guaranteed Prize Pool & Free Bet!">
              <b-card-text>Put in your Fantasy Team and receive a free Sports Bet!</b-card-text>
            </b-card-body>
          </b-col>
          <b-col lg="6">
            <b-img :src="star" class="star" />
            <b-card-img :src="cardNba" class="rounded-0" rounded="right" alt="Right-rounded image"></b-card-img>
          </b-col>
        </b-row>
      </b-card>
    </b-col>

    <b-col>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col lg="6">
            <b-card-body title="NBA Fantasy Guaranteed Prize Pool & Free Bet!">
              <b-card-text>Put in your Fantasy Team and receive a free Sports Bet!</b-card-text>
            </b-card-body>
          </b-col>
          <b-col lg="6">
            <b-img :src="star" class="star" />
            <b-card-img
              :src="cardMultyMaster"
              class="rounded-0"
              rounded="right"
              alt="Right-rounded image"
            ></b-card-img>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import cardnba from "../assets/img/card_nba.png";
import cardmultymaster from "../assets/img/card_multy_master.png";
import badge from "../assets/img/badge.gif";

export default {
  name: "Promotions",
  data() {
    return {
      cardNba: cardnba,
      cardMultyMaster: cardmultymaster,
      star: badge
    };
  }
};
</script>
