<template>
  <div id='appContainer'>
    <v-toolbar id="toolbar">
      <v-toolbar-title>WatchOver</v-toolbar-title>
      <v-spacer />
      <user-search @clicked ="onClickSearch"/>
    </v-toolbar>

    <main>
      <v-content>
        <router-view :viewMode="view.mode" :loading="loading" :view="view" @switchView="switchView" @switchRoleView="switchRoleView" :current-battletag="currentBattletag" ></router-view>
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
      loading: true,
      heroQueryString: 'Ana%2CBastion%2CDVa%2CGenji%2CHanzo%2CJunkrat%2CLucio%2CMccree%2CMei%2CMercy%2CPharah%2CReaper%2CReinhardt%2CRoadhog%2CSoldier76%2CSombra%2CSymmetra%2CTracer%2CTorbjoern%2CWidowmaker%2CWinston%2CZarya%2CZenyatta',
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
            role: 'support'
          },
          Bastion: {
            name: 'Bastion',
            image: '/static/Bastion.png',
            role: 'defense'
          },
          DVa: {
            name: 'D.Va',
            image: '/static/Dva.png',
            role: 'tank'
          },
          Genji: {
            name: 'Genji',
            image: '/static/Genji.png',
            role: 'offense'
          },
          Hanzo: {
            name: 'Hanzo',
            image: '/static/Hanzo.png',
            role: 'defense'
          },
          Junkrat: {
            name: 'Junkrat',
            image: '/static/Junkrat.png',
            role: 'defense'
          },
          Lucio: {
            name: 'Lúcio',
            image: '/static/Lucio.png',
            role: 'support'
          },
          Mccree: {
            name: 'McCree',
            image: '/static/McCree.png',
            role: 'offense'
          },
          Mei: {
            name: 'Mei',
            image: '/static/Mei.png',
            role: 'defense'
          },
          Mercy: {
            name: 'Mercy',
            image: '/static/Mercy.png',
            role: 'support'
          },
          Pharah: {
            name: 'Pharah',
            image: '/static/Pharah.png',
            role: 'offense'
          },
          Reaper: {
            name: 'Reaper',
            image: '/static/Reaper.png',
            role: 'offense'
          },
          Reinhardt: {
            name: 'Reinhardt',
            image: '/static/Reinhardt.png',
            role: 'tank'
          },
          Roadhog: {
            name: 'Roadhog',
            image: '/static/Roadhog.png',
            role: 'tank'
          },
          Soldier76: {
            name: 'Soldier: 76',
            image: '/static/Soldier.png',
            role: 'offense'
          },
          Sombra: {
            name: 'Sombra',
            image: '/static/Sombra.png',
            role: 'offense'
          },
          Symmetra: {
            name: 'Symmetra',
            image: '/static/Symmetra.png',
            role: 'support'
          },
          Tracer: {
            name: 'Tracer',
            image: '/static/Tracer.png',
            role: 'offense'
          },
          Torbjoern: {
            name: 'Torbjörn',
            image: '/static/Torb.png',
            role: 'defense'
          },
          Widowmaker: {
            name: 'Widowmaker',
            image: '/static/Widowmaker.png',
            role: 'defense'
          },
          Winston: {
            name: 'Harambe',
            image: '/static/Harambe.png',
            role: 'tank'
          },
          Zarya: {
            name: 'Zarya',
            image: '/static/Zarya.png',
            role: 'tank'
          },
          Zenyatta: {
            name: 'Zenyatta',
            image: '/static/Zenyatta.png',
            role: 'support'
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
      this.loadHeroData()
    },
    switchView: function (view) {
      this.view.mode = view
    },
    loadHeroData: function () {
      this.loading = true
      let battletag = this.currentBattletag.tag.replace('#', '-')
      axios.all([
        axios.get('https://api.lootbox.eu/pc/us/' + battletag + '/profile'),
        axios.get('https://api.lootbox.eu/pc/us/' + battletag + '/competitive/allHeroes/'),
        axios.get('https://api.lootbox.eu/pc/us/' + battletag + '/quickplay/allHeroes/'),
        axios.get('https://api.lootbox.eu/pc/us/' + battletag + '/competitive/hero/' + this.heroQueryString + '/'),
        axios.get('https://api.lootbox.eu/pc/us/' + battletag + '/quickplay/hero/' + this.heroQueryString + '/')
      ])
      .then((response) => {
        console.log('response', response)
        this.currentBattletag.profile = response[0].data.data
        this.currentBattletag.combinedStats.competitive = response[1].data
        this.currentBattletag.combinedStats.quickplay = response[2].data

        for (var hero in response[3].data) {
          this.currentBattletag.heroStats[hero].competitive = response[3].data[hero]
        }
        for (hero in response[4].data) {
          this.currentBattletag.heroStats[hero].quickplay = response[4].data[hero]
        }
        this.loading = false
      })
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
    src: url(https://us.battle.net/forums/static/fonts/bignoodletoo/bignoodletoo.woff);
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
  background: #060606; /* Old browsers */
  background: -moz-linear-gradient(-45deg, #060606 0%, #584f4a 51%, #faa02e 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, #060606 0%,#584f4a 51%,#faa02e 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, #060606 0%,#584f4a 51%,#faa02e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#060606', endColorstr='#faa02e',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.card__row {
  align-items: flex-start;
  flex-flow: row wrap;
}

</style>
