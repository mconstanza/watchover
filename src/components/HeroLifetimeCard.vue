<template>
<div class="card heroLifetimeCard">
  <div class="card-title">
    <h3 class="whiteText">{{hero.name + ' Lifetime Stats'}}</h3>
  </div>
  <div class="card-block">

  </div>
</div>

</template>

<script>
export default {
  name: 'hero-lifetime-card',
  components: {

  },
  props: ['viewMode', 'currentBattletag', 'loadHeroData', 'loading', 'hero'],
  data () {
    return {
      hero: this.currentBattletag.heroes[this.$route.params.hero]
    }
  },
  created () {
    if (this.$route.params.battletag && this.$route.params.battletag !== this.currentBattletag.tag.replace('#', '-')) {
      this.loadHeroData()
    }
  },
  methods: {
    spliceInt: function (string) {
      // Take the comma out of the string so it can be parsed into an int
      let int = parseInt(string.replace(/,/g, ''))
      // Put the comma back for the new string to be displayed
      return int
    },
    numberWithCommas: function (x) {
      console.log('x', x)
      var parts = x.toString().split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts.join('.')
    },
    headerId: function (hero) {
      switch (hero.name) {
        case 'D.Va':
          return 'DVa'
        case 'Lúcio':
          return 'Lucio'
        case 'Soldier: 76':
          return 'Soldier76'
        case 'Torbjörn':
          return 'Torbjorn'
        default:
          return hero.name
      }
    }
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

p {
  white-space: nowrap;
}

h3{
  color: white;
}

.container {
  max-width: 100%;
}

.statHeader {
  font-weight: bold;
  text-decoration: underline;
  justify-content: center;
  margin: 0;
  color: white;
}

.heroLifetimeCard {
  text-align: center;
  background: black;
  background: #060606; /* Old browsers */
  background: -moz-linear-gradient(left, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222222', endColorstr='#222222',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  text-shadow: -1px 1px 20px black;
  max-width: 725px;
  width: 725px;
  margin: 0 10px 10px 10px;
}

.statHeader p {
  margin: 0;
}

#avatar {
  min-width: 80px;
  max-width: 80px;
  min-height: 80px;
  border-radius: 10px;
}

#heroDetailAvatar {
  border-radius: 10px;
  border: solid 1px white;
}

.medalColumn {
  flex-gv-row: .3;
}

.medalText {
  padding-left: 0;
  padding-right: 0;
}

.goldMedal {
  color: #eacf00;
}

.silverMedal {
  color: #d4d8d8;
}

.bronzeMedal {
  color: #9b6c00;
}

.medalColumn {
  width: 25px;
}

/*Hero-specific Header Colors*/
#Ana {
  background-color: #41598a;
}

#Bastion {
  background-color: #b9b9b9;
}

#DVa {
  background-color: #ffd2ef;
}

#Genji {
  background-color: #24ef37;
}

#Hanzo {
  background-color: #75656f;
}

#Junkrat {
  background-color: #efae34;
}

#Lucio {
  background: #f2dc27; /* Old bv-rowsers */
  background: -moz-linear-gradient(left, #3ae80d 0%, #f2dc27 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #3ae80d 0%,#f2dc27 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #3ae80d 0%,#f2dc27 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3ae80d', endColorstr='#f2dc27',GradientType=1 ); /* IE6-9 */
}

#McCree {
  background-color: #cd3432;
}

#Mei {
  background-color: #95e6f7;
}

#Mercy {
  background-color: #fefe4e;
}

#Pharah {
  background-color: #4d7ccb;
}

#Reaper {
  background-color: #414139;
}

#Reinhardt {
  background-color: #9ba0a0;
}

#Roadhog {
  background: #f0cd4b; /* Old bv-rowsers */
  background: -moz-linear-gradient(left, #362f34 0%, #f0cd4b 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #362f34 0%,#f0cd4b 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #362f34 0%,#f0cd4b 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#362f34', endColorstr='#f0cd4b',GradientType=1 ); /* IE6-9 */
}

#Soldier76 {
  background-color: #2d4776;
}

#Sombra {
  background-color: #e24bfa;
}

#Symmetra {
  background-color: #7fecfc;
}

#Tracer {
  background-color: #f5bd27;
}

#Torbjorn {
  background-color: #9b3435;
}

#Widowmaker {
  background-color: #504057;
}

#Harambe {
  background-color: #cccdcb;
}

#Zarya {
  background-color: #e15284;
}

#Zenyatta {
  background-color: #ccb059;
}

.card .cardTitleRow:hover {
  -webkit-filter: brightness(120%);
}

</style>
