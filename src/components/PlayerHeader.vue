<template>
    <v-container fluid id="playerHeader">
      <v-row>

        <v-col lg6>

            <v-row>

              <v-col lg2>
                <div class="headerAvatar">
                  <img class="avatarImage" :src="currentBattletag.profile.stats.competitive.overall_stats.avatar" width="80" height="80">
                </div>
              </v-col>

              <!-- Header -->
              <v-col lg10 class="headerNameCol">

                  <v-col lg12>
                    <v-row>
                      <h3 class='whiteText'>
                        <router-link :to="{ name: 'HeroCardContainer', params: { battletag: this.$route.params.battletag }}">
                          {{currentBattletag.tag}}
                        </router-link>
                      </h3>
                    </v-row>
                    <v-row>
                      <v-col lg12>
                        <v-row class="levelRow">
                          <p class="playerLevel">{{this.level}}</p>
                          <v-icon v-for="n in this.competitive.overall_stats.prestige" class="prestigeStar">grade</v-icon>
                        </v-row>
                        <v-row>
                          <h5 class='subHeader'> on {{currentBattletag.platform}} ({{currentBattletag.region}})</h5>
                        </v-row>
                      </v-col>

                    </v-row>
                  </v-col>

              </v-col>
              <!-- End Header -->

            </v-row>

        </v-col>
        <!-- General player stats go here -->
        <v-col lg6>

          <v-row>
            <img class='rankIcon' :src="this.rankIcon"/>
            <h3>{{this.competitive.overall_stats.comprank}}</h3>
          </v-row>
        </v-col>

        <!-- <v-col md4>
        </v-col> -->

      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'player-header',
  data () {
    return {
      competitive: this.currentBattletag.profile.stats.competitive,
      quickplay: this.currentBattletag.profile.stats.quickplay,
      level: this.currentBattletag.profile.stats.competitive.overall_stats.level
    }
  },
  computed: {
    rankIcon: function () {
      switch (this.competitive.overall_stats.tier) {
        case 'bronze':
          return '/static/ranks/Rank_Bronze_64.png'
        case 'silver':
          return '/static/ranks/Rank_Silver_64.png'
        case 'gold':
          return '/static/ranks/Rank_Gold_64.png'
        case 'platinum':
          return '/static/ranks/Rank_Platinum_64.png'
        case 'diamond':
          return '/static/ranks/Rank_Diamond_64.png'
        case 'master':
          return '/static/ranks/Rank_Master_64.png'
        case 'grandmaster':
          return '/static/ranks/Rank_GM_64.png'
        case 'top500':
          return '/static/ranks/Rank_500_64.png'
      }
    }
  },
  props: ['currentBattletag', 'viewMode']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
h3 {
  color: white;
}
h5 {
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: white;
  text-decoration: none;
}

p {
  white-space: nowrap;
  margin: 0;
}

.whiteText {
  color: white;
}

.subHeader {
  font-size: 14px;
  color: #faa02e;
  line-height: 24px;
}

.headerAvatar {

}

.avatarImage {
  border-radius: 10px;
}

.headerName {

}

.levelRow {
}

.playerLevel {
  color: white;
  margin-right: 5px;
  line-height: 1em;
  font-size: 20px;
  padding-top: 5px;
}

.prestigeStar {
  color: #faa02e;
}

.rankIcon {
  max-width: 35px;
  max-height: 35px;
  margin-top: 6px;
}

.headerNameCol {
  text-align: left;
}

#playerHeader {

}

</style>
