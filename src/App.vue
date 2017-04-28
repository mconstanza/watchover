<template>
  <div id='appContainer' :style="appStyleObject">

    <v-toolbar id="toolbar">
      <v-toolbar-title id="brand"><router-link to="/">WatchOver</router-link></v-toolbar-title>
      <v-toolbar-items>
        <v-toolbar-item><user-search @clicked ="onClickSearch"/></v-toolbar-item>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <v-content>
        <router-view :viewMode="view.mode" :toggleLoading="toggleLoading" :loadHeroData="loadHeroData" @clicked ="onClickSearch" :loading="loading" :view="view" @switchView="switchView" @switchRoleView="switchRoleView" :currentBattletag="currentBattletag" ></router-view>
      </v-content>
    </main>
  </div>
</template>

<script>
import userSearch from './components/user-search.vue'
import axios from 'axios'
import router from './router/index.js'
export default {
  name: 'app',
  components: {
    userSearch
  },
  data () {
    return {
      loading: false,
      appStyleObject: {
        backgroundImage: '/static/Dorado_004.jpg'
      },
      currentBattletag: {
        loaded: false,
        tag: '',
        platform: 'pc',
        region: 'us',
        profile: {
          achievements: {},
          stats: {}
        },
        heroes: {
          Ana: {
            name: 'Ana',
            sortName: 'ana',
            image: 'static/Ana.png',
            role: 'support',
            competitive: {},
            quickplay: {}
          },
          Bastion: {
            name: 'Bastion',
            sortName: 'bastion',
            image: 'static/Bastion.png',
            role: 'defense',
            competitive: {},
            quickplay: {}
          },
          DVa: {
            name: 'D.Va',
            sortName: 'dva',
            image: 'static/Dva.png',
            role: 'tank',
            competitive: {},
            quickplay: {}
          },
          Genji: {
            name: 'Genji',
            sortName: 'genji',
            image: 'static/Genji.png',
            role: 'offense',
            competitive: {},
            quickplay: {}
          },
          Hanzo: {
            name: 'Hanzo',
            sortName: 'hanzo',
            image: 'static/Hanzo.png',
            role: 'defense',
            competitive: {},
            quickplay: {}
          },
          Junkrat: {
            name: 'Junkrat',
            sortName: 'junkrat',
            image: 'static/Junkrat.png',
            role: 'defense',
            competitive: {},
            quickplay: {}
          },
          Lucio: {
            name: 'Lúcio',
            sortName: 'lucio',
            image: 'static/Lucio.png',
            role: 'support',
            competitive: {},
            quickplay: {}
          },
          Mccree: {
            name: 'McCree',
            sortName: 'mccree',
            image: 'static/McCree.png',
            role: 'offense',
            competitive: {},
            quickplay: {}
          },
          Mei: {
            name: 'Mei',
            sortName: 'mei',
            image: 'static/Mei.png',
            role: 'defense',
            competitive: {},
            quickplay: {}
          },
          Mercy: {
            name: 'Mercy',
            sortName: 'mercy',
            image: 'static/Mercy.png',
            role: 'support',
            competitive: {},
            quickplay: {}
          },
          Pharah: {
            name: 'Pharah',
            sortName: 'pharah',
            image: 'static/Pharah.png',
            role: 'offense',
            competitive: {},
            quickplay: {}
          },
          Reaper: {
            name: 'Reaper',
            sortName: 'reaper',
            image: 'static/Reaper.png',
            role: 'offense',
            competitive: {},
            quickplay: {}
          },
          Reinhardt: {
            name: 'Reinhardt',
            sortName: 'reinhardt',
            image: 'static/Reinhardt.png',
            role: 'tank',
            competitive: {},
            quickplay: {}
          },
          Roadhog: {
            name: 'Roadhog',
            sortName: 'roadhog',
            image: 'static/Roadhog.png',
            role: 'tank',
            competitive: {},
            quickplay: {}
          },
          Soldier76: {
            name: 'Soldier: 76',
            sortName: 'soldier76',
            image: 'static/Soldier.png',
            role: 'offense',
            competitive: {},
            quickplay: {}
          },
          Sombra: {
            name: 'Sombra',
            sortName: 'sombra',
            image: 'static/Sombra.png',
            role: 'offense',
            competitive: {},
            quickplay: {}
          },
          Symmetra: {
            name: 'Symmetra',
            sortName: 'symmetra',
            image: 'static/Symmetra.png',
            role: 'support',
            competitive: {},
            quickplay: {}
          },
          Torbjorn: {
            name: 'Torbjörn',
            sortName: 'torbjorn',
            image: 'static/Torb.png',
            role: 'defense',
            competitive: {},
            quickplay: {}
          },
          Tracer: {
            name: 'Tracer',
            image: 'static/Tracer.png',
            role: 'offense',
            competitive: {},
            quickplay: {}
          },
          Widowmaker: {
            name: 'Widowmaker',
            sortName: 'widowmaker',
            image: 'static/Widowmaker.png',
            role: 'defense',
            competitive: {},
            quickplay: {}
          },
          Winston: {
            name: 'Harambe',
            sortName: 'winston',
            image: 'static/Harambe.png',
            role: 'tank',
            competitive: {},
            quickplay: {}
          },
          Zarya: {
            name: 'Zarya',
            sortName: 'zarya',
            image: 'static/Zarya.png',
            role: 'tank',
            competitive: {},
            quickplay: {}
          },
          Zenyatta: {
            name: 'Zenyatta',
            sortName: 'zenyatta',
            image: 'static/Zenyatta.png',
            role: 'support',
            competitive: {},
            quickplay: {}
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
    renderBackground: function () {
      let proImage = 'static/Dorado_004.jpg'
      let devImage = '/static/Dorado_004.jpg'

      if (process.env.NODE_ENV === 'production') {
        console.log('production background')
        this.appStyleObject.backgroundImage = 'url(' + proImage + ')'
      } else {
        console.log('dev background')
        this.appStyleObject.backgroundImage = 'url(' + devImage + ')'
      }
    },
    toggleLoading: function () {
      if (this.loading === true) {
        this.loading = false
      } else if (this.loading === false) {
        this.loading = true
      }
    },
    onClickSearch: function (query) {
      this.currentBattletag.loaded = false
      this.currentBattletag.tag = query.battletag
      this.currentBattletag.platform = query.platform.toLowerCase()
      this.currentBattletag.region = query.region.toLowerCase()
      let battletag = this.currentBattletag.tag.replace('#', '-')
      let platform = this.currentBattletag.platform
      let region = this.currentBattletag.region
      router.push('/' + region + '/' + platform + '/' + battletag + '/')
    },
    switchView: function (view) {
      this.view.mode = view
    },
    loadHeroData: function () {
      console.log('loading data')
      this.loading = true
      this.currentBattletag.tag = this.$route.params.battletag.replace('-', '#')
      let battletag = this.$route.params.battletag || this.currentBattletag.tag.replace('#', '-')

      axios.get('https://owapi.net/api/v3/u/' + battletag + '/blob?platform=' + this.$route.params.platform)

      .then((response) => {
        // console.log(response.data)
        if (response.data.us) {
          this.currentBattletag.profile.achievements = response.data.us.achievements
          this.currentBattletag.profile.stats = response.data.us.stats
        } else if (response.data.kr) {
          this.currentBattletag.profile.achievements = response.data.kr.achievements
          this.currentBattletag.profile.stats = response.data.kr.stats
        } else if (response.data.eu) {
          this.currentBattletag.profile.achievements = response.data.eu.achievements
          this.currentBattletag.profile.stats = response.data.eu.stats
        }
        // sort hero data

        let quickplayHeroData = response.data[this.currentBattletag.region].heroes.stats.quickplay
        let competitiveHeroData = response.data[this.currentBattletag.region].heroes.stats.competitive
        let quickplayPlaytimeHeroData = response.data[this.currentBattletag.region].heroes.playtime.quickplay
        let competitivePlaytimeHeroData = response.data[this.currentBattletag.region].heroes.playtime.competitive

        for (var hero in this.currentBattletag.heroes) {
          if (quickplayHeroData.hasOwnProperty(this.currentBattletag.heroes[hero].sortName)) {
            this.currentBattletag.heroes[hero].quickplay = quickplayHeroData[this.currentBattletag.heroes[hero].sortName]
            this.currentBattletag.heroes[hero].quickplay.playtime = quickplayPlaytimeHeroData[this.currentBattletag.heroes[hero].sortName]
          }
          if (competitiveHeroData.hasOwnProperty(this.currentBattletag.heroes[hero].sortName)) {
            this.currentBattletag.heroes[hero].competitive = competitiveHeroData[this.currentBattletag.heroes[hero].sortName]
            this.currentBattletag.heroes[hero].competitive.playtime = competitivePlaytimeHeroData[this.currentBattletag.heroes[hero].sortName]
          }
        }
        // change loading state
        this.currentBattletag.loaded = true
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
  },
  created: function () {
    this.renderBackground()
    if (this.$route.params.battletag && this.$route.params.battletag !== this.currentBattletag.tag.replace('#', '-')) {
      this.loadHeroData()
    }
  }
}

</script>

<style>

html {

}

body {
  background: black;
  background: #060606; /* Old browsers */
  background: -moz-linear-gradient(left, #222222 0%,  #222222 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #222222 0%,#222222 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #222222 0%,#222222 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222222', endColorstr='#222222',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

main {
  background: transparent;
  min-height: 100vh;
}

.content {
  background: transparent;
}

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
  background: transparent;
}

#toolbar {
  text-align: left;
  /*background: transparent;*/
  padding: 0 0 0 10px;
  background: black;
  background: #060606; /* Old browsers */
  background: -moz-linear-gradient(left, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222222', endColorstr='#222222',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.toolbar__item{
  padding-right: 0;
}

.card__row {
  align-items: flex-start;
  flex-flow: row wrap;
}

#brand {
  width: 50px;
}

#brand a{
  color: #f29a2c;
  font-size: 30px;
}

</style>
