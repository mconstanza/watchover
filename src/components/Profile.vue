<template>
  <div id="ProfileContainer">

    <!-- Loading Screen -->
    <div id='loadingDiv' v-if="loading">
      <v-progress-circular class="goldenrod" v-bind:size="200" indeterminate />
    </div>

    <!-- Player Header -->
    <div v-if="!loading" id="HeadingContainer">
      <player-header :currentBattletag="currentBattletag" ></player-header>
    </div>

    <br/>
    <br/>

    <!-- Toggle Views -->
    <div id="viewButtonsDiv" v-if="!loading">
      <!-- Render a blue button if the view is competitive -->
      <button id="switchViewBtn" v-show="viewMode === 'Competitive'" class="viewToggle activeViewButton" @click="switchView">{{viewMode}}</button>
      <!-- Render a red button if the view is quickplay -->
      <button id="switchViewBtn" v-show="viewMode === 'Quickplay'" class="viewToggle red" @click="switchView">{{viewMode}}</button>

      <button class="viewToggle activeViewButton" v-show="view.roles.defense && view.roles.offense && view.roles.tank && view.roles.support" @click="switchRoleView('all')">All Heroes</button>
      <button class="viewToggle" v-show="!view.roles.defense || !view.roles.offense || !view.roles.tank || !view.roles.support" @click="switchRoleView('all')">All Heroes</button>

      <button class="viewToggle activeViewButton" v-show="view.roles.defense && view.roles.offense" @click="switchRoleView('damage')">Damage</button>
      <button class="viewToggle" v-show="!view.roles.defense && !view.roles.offense" @click="switchRoleView('damage')">Damage</button>

      <button class="viewToggle activeViewButton" v-show="view.roles.tank" @click="switchRoleView('tank')">Tank</button>
      <button class="viewToggle" v-show="!view.roles.tank" @click="switchRoleView('tank')">Tank</button>

      <button class="viewToggle activeViewButton" v-show="view.roles.support" @click="switchRoleView('support')">Support</button>
      <button class="viewToggle" v-show="!view.roles.support" @click="switchRoleView('support')">Support</button>
    </div>
    <br />
    <br />
    <div id="CardContainer">
      <hero-card v-if="!loading" v-for="hero in currentBattletag.heroStats" v-show="view.roles[hero.role]" :hero="hero" :viewMode="view.mode" :key="hero.name"></hero-card>
    </div>
  </div>
</template>

<script>
import basicsCard from './BasicsCard.vue'
import heroCard from './HeroCard.vue'
import playerHeader from './PlayerHeader.vue'
export default {
  name: 'profile',
  data () {
    return {
      msg: 'test'
    }
  },
  components: {
    basicsCard,
    heroCard,
    playerHeader
  },
  props: ['loading', 'currentBattletag', 'viewMode', 'view', 'loadHeroData', 'toggleLoading'],
  methods: {
    switchView: function (event) {
      if (this.viewMode === 'Competitive') {
        this.$emit('switchView', 'Quickplay')
      } else if (this.viewMode === 'Quickplay') {
        this.$emit('switchView', 'Competitive')
      }
    },
    switchRoleView: function (role) {
      this.$emit('switchRoleView', role)
    }
  },
  created: function () {
    if (!this.currentBattletag.loaded || this.currentBattletag.tag !== this.$route.params.battletag.replace('-', '#')) {
      this.toggleLoading()
      this.loadHeroData()
    }
  },
  watch: {
    // call again the method if the route changes
    '$route': 'loadHeroData'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
  color: #42b983;
}

#loadingDiv {
  margin-top: 100px;
}

.basicCard {
  margin-top: 20px;
}

#ProfileContainer {
  text-align: center;
  justify-content: center;
  font-family: 'Overwatch';
}

#HeadingContainer {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
}

#CardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.heroCard {
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.card__row {
  align-items: flex-start;
  flex-flow: row wrap;
}

.viewToggle {
  width: 80px;
  height: 35px;
  background-color: #bec1c4;
}

.card {
  max-width: 100%;
}

#avatar {
  max-width: 150px;
  min-height: 150px;
}

.activeViewButton {
  background-color: #f29a2c;
}

.goldenrod {
  color: #f29a2c;
}

</style>
