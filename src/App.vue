<template>
  <v-app id="app" top-toolbar>

    <v-toolbar id="toolbar" class="indigo">
      <v-toolbar-title>WatchOver</v-toolbar-title>
      <v-spacer />
      <user-search/>
    </v-toolbar>

    <main>
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>

  </v-app>
</template>

<script>
import userSearch from './components/user-search.vue'
export default {
  name: 'app',
  components: {
    userSearch
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
