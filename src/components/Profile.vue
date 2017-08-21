<template>
  <div id="ProfileContainer">

    <!-- Loading Screen -->
    <div class="text-center" id='loadingDiv' v-if="loading"></div>

    <!-- Player Header -->
    <div v-if="!loading" id="HeadingContainer">
      <player-header v-if="!loading" :currentBattletag="currentBattletag" :viewMode="view.mode"></player-header>
    </div>

    <!-- Toggle Views -->
    <div id="viewButtonsDiv" v-if="!loading">
      <!-- Render a blue button if the view is competitive -->
      <button id="switchViewBtn" v-show="viewMode === 'Competitive'" class="viewToggle activeViewButton" @click="switchView"><div class="buttonText">{{viewMode}}</div></button>
      <!-- Render a red button if the view is quickplay -->
      <button id="switchViewBtn" v-show="viewMode === 'Quickplay'" class="viewToggle quickplay" @click="switchView"><div class="buttonText">{{viewMode}}</div></button>

      <button class="viewToggle activeViewButton" v-if="!this.$route.params.hero" v-show="view.roles.defense && view.roles.offense && view.roles.tank && view.roles.support" @click="switchRoleView('all')"><div class="buttonText">All</div></button>
      <button class="viewToggle" v-if="!this.$route.params.hero" v-show="!view.roles.defense || !view.roles.offense || !view.roles.tank || !view.roles.support" @click="switchRoleView('all')"><div class="buttonText">All</div></button>

      <button class="viewToggle activeViewButton" v-if="!this.$route.params.hero" v-show="view.roles.defense && view.roles.offense" @click="switchRoleView('damage')"><div class="buttonText">Damage</div></button>
      <button class="viewToggle" v-if="!this.$route.params.hero" v-show="!view.roles.defense && !view.roles.offense" @click="switchRoleView('damage')"><div class="buttonText">Damage</div></button>

      <button class="viewToggle activeViewButton" v-if="!this.$route.params.hero" v-show="view.roles.tank" @click="switchRoleView('tank')"><div class="buttonText">Tank</div></button>
      <button class="viewToggle" v-if="!this.$route.params.hero" v-show="!view.roles.tank" @click="switchRoleView('tank')"><div class="buttonText">Tank</div></button>

      <button class="viewToggle activeViewButton" v-if="!this.$route.params.hero" v-show="view.roles.support" @click="switchRoleView('support')"><div class="buttonText">Support</div></button>
      <button class="viewToggle" v-if="!this.$route.params.hero" v-show="!view.roles.support" @click="switchRoleView('support')"><div class="buttonText">Support</div></button>
    </div>

    <router-view v-show="!loading" :viewMode="view.mode" :toggleLoading="toggleLoading" :loadHeroData="loadHeroData" :loading="loading" :view="view" @switchView="switchView" @switchRoleView="switchRoleView" :currentBattletag="currentBattletag" ></router-view>

  </div>
</template>

<script>
import playerHeader from './PlayerHeader.vue'

export default {
  name: 'profile',
  data () {
    return {
    }
  },
  components: {
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
    },
    reloadData: function () {
      if (this.$route.params.battletag && this.$route.params.battletag !== this.currentBattletag.tag.replace('#', '-')) {
        console.log('reloading data')
        this.loadHeroData()
      }
    }
  },
  beforeMount () {
    this.reloadData()
  },
  watch: {
    // call the method again if the route changes
    '$route': 'reloadData'
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
  color:white;
}

a:hover {
  color: #f29a2c;
}

button {
  cursor: pointer;
}

#loadingDiv {
  margin: auto;
  margin-top: 100px;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #f29a2c; /* Goldenrod */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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
  height: 200px;
  padding-top: 20px;
  background: black;
  background: #060606; /* Old browsers */
  background: -moz-linear-gradient(left, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222222', endColorstr='#222222',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

#viewButtonsDiv {
  color: white;
  margin-bottom: 30px;
  width: 100%;
}

.viewToggle {
  width: 80px;
  height: 35px;
  background-color: #bec1c4;
  -webkit-transform: skew(-15deg);
  -moz-transform: skew(-15deg);
  -o-transform: skew(-15deg);
  border: 1px solid black;
  border-radius: 3px;
  font-family: 'Overwatch';
}

.quickplay {
  background-color: red;
}

.buttonText {
  -webkit-transform: skew(15deg);
  -moz-transform: skew(15deg);
  -o-transform: skew(15deg);
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
