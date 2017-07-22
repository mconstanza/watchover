<template>
  <div class='container-fluid' id="playerHeader">
    <div class='row'>

      <div class='col-md-6'>

        <div class='row'>

          <div>
            <div class="headerAvatar">
              <img class="avatarImage" :src="currentBattletag.profile.stats.competitive.overall_stats.avatar" width="80" height="80">
            </div>
          </div>

          <!-- Header -->
          <div class="headerNameCol">
            <div class='row'>

              <div class='col-md-12'>
                <div class='row'>
                  <h3 class='whiteText'>
                    <router-link :to="{ name: 'HeroCardContainer', params: { battletag: this.$route.params.battletag }}">
                      {{currentBattletag.tag}}
                    </router-link>
                  </h3>
                </div>
                <div class='row'>
                  <div class='col-md-12'>
                    <div class='row levelRow'>
                      <p class="playerLevel">{{this.level}}</p>
                      <i v-for="n in this.competitive.overall_stats.prestige" class='fa fa-star'></i>
                    </div>
                    <div class='row'>
                      <h5 class='subHeader'> on {{currentBattletag.platform}} ({{currentBattletag.region}})</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Header -->
        </div>
      </div>
      <!-- General player stats go here -->
      <div class='col-md-6'>

        <div class='row'>
          <img class='rankIcon' :src="this.rankIcon"/>
          <h3>{{this.competitive.overall_stats.comprank}}</h3>
        </div>
        <div class='row'>
          <div class='medal'>
            <i class="fa fa-circle fa-2x" id='goldMedal' aria-hidden="true"></i>
            <h3>{{this.competitive.game_stats.medals_gold}}</h3>
          </div>
          <div class='medal'>
            <i class="fa fa-circle fa-2x" id='silverMedal' aria-hidden="true"></i>
            <h3>{{this.competitive.game_stats.medals_silver}}</h3>
          </div>
          <div class='medal'>
            <i class="fa fa-circle fa-2x" id='bronzeMedal' aria-hidden="true"></i>
            <h3>{{this.competitive.game_stats.medals_bronze}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
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

a:hover {
  color: #f29a2c;
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
  padding-right: 5px;
}

.avatarImage {
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 25px;
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
}

.rankIcon {
  max-width: 35px;
  max-height: 35px;
}

.headerNameCol {
  text-align: left;
}

.fa-star {
  color: #faa02e;
}

.medal {
  margin-right: 5px;
  text-align: left;
}

#goldMedal {
  color: #f2dc27;
}

#silverMedal {
  color: #cccdcb;
}

#bronzeMedal {
  color: #9b3435;
}

#goldMedal, #silverMedal, #bronzeMedal {
  text-shadow: 1px 1px #222;
}

</style>
