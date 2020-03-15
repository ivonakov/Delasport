<template>
  <b-container class="footer">
    <hr />
    <b-row>
      <b-col cols="2">
        <b-img :src="logo.img" fluid :alt="logo.alt"></b-img>
      </b-col>
      <b-col>
        <h3>Sports</h3>
      </b-col>
      <b-col>
        <h3>Casino</h3>
      </b-col>
      <b-col>
        <h3>Support</h3>
      </b-col>
      <b-col>
        <h3>About</h3>
      </b-col>
      <b-col cols="3">
        <h3>Follow us</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="2">
        <p>Our sportsbook solutions provide the richest betting coverage available online. We offer a premium software solution that can be implemented by already existing gambling operators or utilized independently as a standalone product.</p>
      </b-col>
      <b-col>
        <b-link href="./" title="Promotions">Promotions</b-link>
        <b-link href="./" title="In play">In play</b-link>
        <b-link href="./" title="Upcoming">Upcoming</b-link>
      </b-col>
      <b-col>
        <b-link href="./" title="Live Casino">Live Casino</b-link>
      </b-col>
      <b-col>
        <b-link href="./" title="Payment Options">Payment Options</b-link>
        <b-link href="./" title="Responsible">Responsible</b-link>
        <b-link href="./" title="Gambling">Gambling</b-link>
        <b-link href="./" title="FAQ">FAQ</b-link>
        <b-link href="./" title="General Betting">General Betting</b-link>
        <b-link href="./" title="Rules">Rules</b-link>
        <b-link href="./" title="Responsible">Responsible</b-link>
        <b-link href="./" title="Gambling Terms and Conditions">Gambling Terms and Conditions</b-link>
        <b-link href="./" title="Affiliate FAQ">Affiliate FAQ</b-link>
        <b-link href="./" title="Sportsbet Market">Sportsbet Market</b-link>
        <b-link href="./" title="Explanations">Explanations</b-link>
      </b-col>
      <b-col>
        <b-link href="./" title="Privacy Policy">Privacy Policy</b-link>
        <b-link href="./" title="Explanations">About Us</b-link>
        <b-link href="./" title="Terms and Conditions">Terms and Conditions</b-link>
        <b-link href="./" title="Affiliates">Affiliates</b-link>
        <b-link href="./" title="Affiliate Terms and Conditions">Affiliate Terms and Conditions</b-link>
        <b-link href="./" title="Sportsbet.io">Sportsbet.io</b-link>
        <b-link href="./" title="Partnerships">Partnerships</b-link>
        <b-link href="./" title="Bug Bounty">Bug Bounty</b-link>
        <b-link href="./" title="Program">Program</b-link>
      </b-col>
      <b-col cols="3" class="social">
        <b-link href="https://twitter.com/" title="twitter" target="_blank" class="twitter">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
        </b-link>

        <b-link href="https://www.facebook.com/" title="facebook" target="_blank" class="facebook">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square' }" />
        </b-link>

        <b-link href="https://www.youtube.com/" title="youtube" target="_blank" class="youtube">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'youtube' }" />
        </b-link>

        <b-link href="https://bitcoin.org/" title="bitcoin" target="_blank" class="bitcoin">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'btc' }" />
        </b-link>

        <b-link
          href="https://www.instagram.com/"
          title="instagram"
          target="_blank"
          class="instagram"
        >
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
        </b-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Footer",
  props: {
    logo: {
      type: Object
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

