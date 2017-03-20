<template>
  <div id="app">
    <v-toolbar id="toolbar" class="indigo">
      <v-toolbar-title>WatchOver</v-toolbar-title>
      <v-spacer />
      <user-search @clicked ="onClickSearch"/>
    </v-toolbar>

    <main>
      <v-content>
        <router-view :current-battletag="currentBattletag"></router-view>
      </v-content>
    </main>
  </div>
</template>

<script>
import userSearch from './components/user-search.vue'
export default {
  name: 'app',
  components: {
    userSearch
  },
  data () {
    return {
      currentBattletag: {}
    }
  },
  methods: {
    onClickSearch: function (battletag) {
      console.log(battletag)
      this.currentBattletag = battletag
    }
  }
}
</script>

<style>
@font-face {
    font-family: Overwatch;
    src: url(http://us.battle.net/forums/static/fonts/bignoodletoo/bignoodletoo.woff);
}
#app {
  font-family: 'Overwatch', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#toolbar {
  text-align: left;

}
</style>
