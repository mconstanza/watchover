<template>
  <div id='appContainer'>
    <v-toolbar id="toolbar" class="indigo">
      <v-toolbar-title>WatchOver</v-toolbar-title>
      <v-spacer />
      <user-search @clicked ="onClickSearch"/>
    </v-toolbar>

    <main>
      <v-content>
        <router-view :viewMode="view.mode" :view="view" @switchView="switchView" @switchRoleView="switchRoleView" :current-battletag="currentBattletag" ></router-view>
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
          Ana: {
            name: 'Ana',
            image: '/static/Ana.png',
            role: 'support',
            loading: true
          },
          Bastion: {
            name: 'Bastion',
            image: '/static/Bastion.png',
            role: 'defense',
            loading: true
          },
          DVa: {
            name: 'D.Va',
            image: '/static/Dva.png',
            role: 'tank',
            loading: true
          },
          Genji: {
            name: 'Genji',
            image: '/static/Genji.png',
            role: 'offense',
            loading: true
          },
          Hanzo: {
            name: 'Hanzo',
            image: '/static/Hanzo.png',
            role: 'defense',
            loading: true
          },
          Junkrat: {
            name: 'Junkrat',
            image: '/static/Junkrat.png',
            role: 'defense',
            loading: true
          },
          Lucio: {
            name: 'Lúcio',
            image: '/static/Lucio.png',
            role: 'support',
            loading: true
          },
          Mccree: {
            name: 'McCree',
            image: '/static/McCree.png',
            role: 'offense',
            loading: true
          },
          Mei: {
            name: 'Mei',
            image: '/static/Mei.png',
            role: 'defense',
            loading: true
          },
          Mercy: {
            name: 'Mercy',
            image: '/static/Mercy.png',
            role: 'support',
            loading: true
          },
          Pharah: {
            name: 'Pharah',
            image: '/static/Pharah.png',
            role: 'offense',
            loading: true
          },
          Reaper: {
            name: 'Reaper',
            image: '/static/Reaper.png',
            role: 'offense',
            loading: true
          },
          Reinhardt: {
            name: 'Reinhardt',
            image: '/static/Reinhardt.png',
            role: 'tank',
            loading: true
          },
          Roadhog: {
            name: 'Roadhog',
            image: '/static/Roadhog.png',
            role: 'tank',
            loading: true
          },
          Soldier76: {
            name: 'Soldier: 76',
            image: '/static/Soldier.png',
            role: 'offense',
            loading: true
          },
          Sombra: {
            name: 'Sombra',
            image: '/static/Sombra.png',
            role: 'offense',
            loading: true
          },
          Symmetra: {
            name: 'Symmetra',
            image: '/static/Symmetra.png',
            role: 'support',
            loading: true
          },
          Tracer: {
            name: 'Tracer',
            image: '/static/Tracer.png',
            role: 'offense',
            loading: true
          },
          Torbjoern: {
            name: 'Torbjörn',
            image: '/static/Torb.png',
            role: 'defense',
            loading: true
          },
          Widowmaker: {
            name: 'Widowmaker',
            image: '/static/Widowmaker.png',
            role: 'defense',
            loading: true
          },
          Winston: {
            name: 'Harambe',
            image: '/static/Harambe.png',
            role: 'tank',
            loading: true
          },
          Zarya: {
            name: 'Zarya',
            image: '/static/Zarya.png',
            role: 'tank',
            loading: true
          },
          Zenyatta: {
            name: 'Zenyatta',
            image: '/static/Zenyatta.png',
            role: 'support',
            loading: true
          }
        }
      },
      view: {
        mode: 'Competitive', // set to Competitive or Quickplay,
        roles: {
          tank: true,
          support: true,
          offense: true,
          defense: true
        }
      }
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
      this.view.mode = view
    },
    loadHeroes: function () {
      this.loadHeroData('Ana')
      this.loadHeroData('Bastion')
      this.loadHeroData('DVa')
      this.loadHeroData('Genji')
      this.loadHeroData('Hanzo')
      this.loadHeroData('Junkrat')
      this.loadHeroData('Lucio')
      this.loadHeroData('Mccree')
      this.loadHeroData('Mei')
      this.loadHeroData('Mercy')
      this.loadHeroData('Pharah')
      this.loadHeroData('Reaper')
      this.loadHeroData('Reinhardt')
      this.loadHeroData('Roadhog')
      this.loadHeroData('Soldier76')
      this.loadHeroData('Sombra')
      this.loadHeroData('Symmetra')
      this.loadHeroData('Torbjoern')
      this.loadHeroData('Tracer')
      this.loadHeroData('Widowmaker')
      this.loadHeroData('Winston')
      this.loadHeroData('Zarya')
      this.loadHeroData('Zenyatta')
    },
    switchRoleView: function (role) {
      if (role === 'all') {
        this.view.roles.tank = true
        this.view.roles.support = true
        this.view.roles.offense = true
        this.view.roles.defense = true
      } else if (role === 'damage') {
        this.view.roles.offense = true
        this.view.roles.defense = true
        this.view.roles.support = false
        this.view.roles.tank = false
      } else if (role === 'tank') {
        this.view.roles.offense = false
        this.view.roles.defense = false
        this.view.roles.support = false
        this.view.roles.tank = true
      } else if (role === 'support') {
        this.view.roles.offense = false
        this.view.roles.defense = false
        this.view.roles.support = true
        this.view.roles.tank = false
      }
    }
  }
}

</script>

<style>
@font-face {
    font-family: Overwatch;
    src: url(http://us.battle.net/forums/static/fonts/bignoodletoo/bignoodletoo.woff);
}
#appContainer {
  font-family: 'Overwatch', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#toolbar {
  text-align: left;
}

.card__row {
  align-items: flex-start;
  flex-flow: row wrap;
}

</style>
