<template>
  <div>
    <v-toolbar id="toolbar" class="indigo">
      <v-toolbar-title>WatchOver</v-toolbar-title>
      <v-spacer />
      <user-search @clicked ="onClickSearch"/>
    </v-toolbar>

    <main>
      <v-content>
        <router-view :viewMode="viewMode" @switchView="switchView" :current-battletag="currentBattletag" ></router-view>
      </v-content>
    </main>
  </div>
</template>

<script>
import userSearch from './components/user-search.vue'
import axios from 'axios'
export default {
  name: 'app',
  components: {
    userSearch
  },
  data () {
    return {
      currentBattletag: {
        tag: '',
        profile: {},
        combinedStats: {
          quick: [],
          competitive: []
        },
        heroStats: {
          Lucio: {
            name: 'Lúcio',
            image: '/static/Lucio.png',
            loading: true
          },
          Soldier76: {
            name: 'Soldier: 76',
            image: '/static/Soldier.png',
            loading: true
          },
          Reaper: {
            name: 'Reaper',
            image: '/static/Reaper.png',
            loading: true
          },
          Roadhog: {
            name: 'Roadhog',
            image: '/static/Roadhog.png',
            loading: true
          },
          'D.Va': {
            name: 'D.Va',
            image: '/static/Dva.png',
            loading: true
          },
          Ana: {
            name: 'Ana',
            image: '/static/Ana.png',
            loading: true
          },
          Bastion: {
            name: 'Bastion',
            image: '/static/Bastion.png',
            loading: true
          },
          Winston: {
            name: 'Harambe',
            image: '/static/Harambe.png',
            loading: true
          },
          Genji: {
            name: 'Genji',
            image: '/static/Genji.png',
            loading: true
          },
          Hanzo: {
            name: 'Hanzo',
            image: '/static/Hanzo.png',
            loading: true
          },
          Zarya: {
            name: 'Zarya',
            image: '/static/Zarya.png',
            loading: true
          },
          Junkrat: {
            name: 'Junkrat',
            image: '/static/Junkrat.png',
            loading: true
          },
          McCree: {
            name: 'McCree',
            image: '/static/McCree.png',
            loading: true
          },
          Mei: {
            name: 'Mei',
            image: '/static/Mei.png',
            loading: true
          },
          Mercy: {
            name: 'Mercy',
            image: '/static/Mercy.png',
            loading: true
          },
          Pharah: {
            name: 'Pharah',
            image: '/static/Pharah.png',
            loading: true
          },
          Sombra: {
            name: 'Sombra',
            image: '/static/Sombra.png',
            loading: true
          },
          Tracer: {
            name: 'Tracer',
            image: '/static/Tracer.png',
            loading: true
          },
          Symmetra: {
            name: 'Symmetra',
            image: '/static/Symmetra.png',
            loading: true
          },
          Zenyatta: {
            name: 'Zenyatta',
            image: '/static/Zenyatta.png',
            loading: true
          },
          Torbjoern: {
            name: 'Torbjörn',
            image: '/static/Torb.png',
            loading: true
          },
          Widowmaker: {
            name: 'Widowmaker',
            image: '/static/Widowmaker.png',
            loading: true
          },
          Reinhardt: {
            name: 'Reinhardt',
            image: '/static/Reinhardt.png',
            loading: true
          }
        }
      },
      viewMode: 'Competitive' // set to Competitive or Quickplay
    }
  },
  methods: {
    onClickSearch: function (query) {
      this.currentBattletag.tag = query
      let battletag = this.currentBattletag.tag.replace('#', '-')
      // get basic profile info
      axios.get('https://api.lootbox.eu/pc/us/' + battletag + '/profile')
      .then(response => {
        this.currentBattletag.profile = response.data.data
      })
      // get basic combined hero data in competitive
      axios.get('https://api.lootbox.eu/pc/us/' + battletag + '/competitive/allHeroes/')
      .then(response => {
        this.currentBattletag.combinedStats.competitive = response.data.data
      })
      // get basic combined hero data in quickplay
      axios.get('https://api.lootbox.eu/pc/us/' + battletag + '/quickplay/allHeroes/')
      .then(response => {
        this.currentBattletag.combinedStats.quick = response.data.data
      })

      this.loadHeroes()
    },
    loadHeroData: function (hero) {
      let battletag = this.currentBattletag.tag.replace('#', '-')
      this.currentBattletag.heroStats[hero].loading = true
      // get all competitive data for a hero
      axios.get('https://api.lootbox.eu/pc/us/' + battletag + '/competitive/hero/' + hero + '/')
      .then(response => {
        this.currentBattletag.heroStats[hero].competitive = response.data[hero]
        this.currentBattletag.heroStats[hero].loading = false
      })
      // get all quickplay data for a hero
      axios.get('https://api.lootbox.eu/pc/us/' + battletag + '/quickplay/hero/' + hero + '/')
      .then(response => {
        this.currentBattletag.heroStats[hero].quick = response.data[hero]
      })
    },
    switchView: function (view) {
      this.viewMode = view
    },
    loadHeroes: function () {
      this.loadHeroData('Lucio')
      this.loadHeroData('Soldier76')
      this.loadHeroData('Tracer')
      this.loadHeroData('Widowmaker')
      this.loadHeroData('Hanzo')
      this.loadHeroData('Genji')
      this.loadHeroData('Bastion')
      this.loadHeroData('Roadhog')
      this.loadHeroData('Junkrat')
      this.loadHeroData('Symmetra')
      this.loadHeroData('Sombra')
      this.loadHeroData('Reinhardt')
      this.loadHeroData('Zarya')
      this.loadHeroData('D.Va')
      this.loadHeroData('Reaper')
      this.loadHeroData('McCree')
      this.loadHeroData('Mei')
      this.loadHeroData('Winston')
      this.loadHeroData('Ana')
      this.loadHeroData('Mercy')
      this.loadHeroData('Zenyatta')
      this.loadHeroData('Torbjoern')
      this.loadHeroData('Pharah')
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
