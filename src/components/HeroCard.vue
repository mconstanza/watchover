<template>
<div class="card heroCard">
  <!-- Title -->
  <router-link :to="{ name: 'HeroDetails', params: { hero: heroLink }}">
    <div class="card-header cardTitleRow" :id="headerId(hero)">
      <div class="row">

        <div class="col-md-2 text-left">
          <!-- Avatar -->
          <img id="avatar" :src="hero.image"></img>
          <!-- Avatar -->
        </div>

        <div id="heroNameCol" class="col-md-1 text-left">
          <h4 class="card-title heroName text-left">{{hero.name}}</h4>
          <div class="card_text" v-if="viewMode ==='Competitive' && hero.competitive.general_stats">
            <p>{{hero.competitive.general_stats.games_played + " game" + plural(hero.competitive.general_stats.games_played) || '---'}}</p>
          </div>
        </div>

        <div class="col-md-9">

          <div class="row">

            <div class="col-md-3">

              <div class="card_text" v-if="viewMode ==='Competitive' && hero.competitive.playtime">
                <p class="statHeader">Time Played</p>

                <p>{{Math.round(hero.competitive.playtime) + " hour" + plural(hero.competitive.playtime) || '---'}}</p>
              </div>

              <div class="card_text" v-if="viewMode ==='Competitive' && !hero.competitive.playtime">
                <p class="statHeader">Time Played</p>
                <p> 0 hours</p>
              </div>

              <div class="card_text" v-if="viewMode ==='Quickplay'&& hero.quickplay.general_stats">
                <p class="statHeader">Time Played</p>
                <p>{{Math.round(hero.quickplay.playtime) + " hour" + plural(hero.quickplay.playtime) || '---'}}</p>
              </div>

              <div class="card_text" v-if="viewMode ==='Quickplay'&& !hero.quickplay.general_stats">
                <p class="statHeader">Time Played</p>
                <p> 0 hours</p>
              </div>

            </div>
            <!-- Medals -->
            <div class="medalColumn col-md-1">
              <div class="card_text medalText" v-if="viewMode ==='Competitive' && hero.competitive.general_stats">
                <i class="fa fa-circle statHeader" id='goldMedal' aria-hidden="true"></i>
                <p>{{hero.competitive.general_stats.medals_gold}}</p>
              </div>

              <div class="card_text medalText" v-if="viewMode ==='Quickplay'&& hero.quickplay.general_stats">
                <i class="fa fa-circle statHeader" id='goldMedal' aria-hidden="true"></i>
                <p>{{hero.quickplay.general_stats.medals_gold}}</p>
              </div>

              <div class="card_text medalText" v-if="viewMode ==='Competitive'&& !hero.competitive.general_stats">
                <i class="fa fa-circle statHeader" id='goldMedal' aria-hidden="true"></i>
                <p>---</p>
              </div>

              <div class="card_text medalText" v-if="viewMode ==='Quickplay'&& !hero.quickplay.general_stats">
                <i class="fa fa-circle statHeader" id='goldMedal' aria-hidden="true"></i>
                <p>---</p>
              </div>
            </div>

            <div class="medalColumn col-md-1">
              <div class="card_text medalText" v-if="viewMode ==='Competitive' && hero.competitive.general_stats">
                <i class="fa fa-circle statHeader" id='silverMedal' aria-hidden="true"></i>
                <p>{{hero.competitive.general_stats.medals_silver}}</p>
              </div>

              <div class="card_text medalText" v-if="viewMode ==='Quickplay'&& hero.quickplay.general_stats">
                <i class="fa fa-circle statHeader" id='silverMedal' aria-hidden="true"></i>
                <p>{{hero.quickplay.general_stats.medals_silver}}</p>
              </div>


              <div class="card_text medalText" v-if="viewMode ==='Competitive'&& !hero.competitive.general_stats">
                <i class="fa fa-circle statHeader" id='silverMedal' aria-hidden="true"></i>
                <p>---</p>
              </div>


              <div class="card_text medalText" v-if="viewMode ==='Quickplay'&& !hero.quickplay.general_stats">
                <i class="fa fa-circle statHeader" id='silverMedal' aria-hidden="true"></i>
                <p>---</p>
              </div>
            </div>

            <div class="medalColumn col-md-1">
              <div class="card_text medalText" v-if="viewMode ==='Competitive' && hero.competitive.general_stats">
                <i class="fa fa-circle statHeader" id='bronzeMedal' aria-hidden="true"></i>
                <p>{{hero.competitive.general_stats.medals_bronze}}</p>
              </div>

              <div class="card_text medalText" v-if="viewMode ==='Quickplay'&& hero.quickplay.general_stats">
                <i class="fa fa-circle statHeader" id='bronzeMedal' aria-hidden="true"></i>
                <p>{{hero.quickplay.general_stats.medals_bronze}}</p>
              </div>


              <div class="card_text medalText" v-if="viewMode ==='Competitive'&& !hero.competitive.general_stats">
                <i class="fa fa-circle statHeader" id='bronzeMedal' aria-hidden="true"></i>
                <p>---</p>
              </div>

              <div class="card_text medalText" v-if="viewMode ==='Quickplay'&& !hero.quickplay.general_stats">
                <i class="fa fa-circle statHeader" id='bronzeMedal' aria-hidden="true"></i>
                <p>---</p>
              </div>
            </div>
            <!-- End Medals -->

            <div class="col-md-2">
              <div class="card_text" v-if="viewMode ==='Competitive' && hero.competitive.general_stats">
                <p class="statHeader">Cards</p>
                <p>{{hero.competitive.general_stats.cards || '---'}} </p>
              </div>
              <div class="card_text" v-if="viewMode ==='Quickplay'&& hero.quickplay.general_stats">
                <p class="statHeader">Cards</p>
                <p>{{hero.quickplay.general_stats.cards || '---'}} </p>
              </div>

              <div class="card_text" v-if="viewMode ==='Competitive'&& !hero.competitive.general_stats">
                <p class="statHeader">Cards</p>
                <p>---</p>
              </div>

              <div class="card_text" v-if="viewMode ==='Quickplay'&& !hero.quickplay.general_stats">
                <p class="statHeader">Cards</p>
                <p>---</p>
              </div>
            </div>

            <div class="col-md-2">
              <div class="card_text" v-if="viewMode ==='Competitive' && hero.competitive.general_stats">
                <p class="statHeader">Win/Loss</p>
                <p>{{checkUndefined(hero.competitive.general_stats.games_won) + " - " + checkUndefined(hero.competitive.general_stats.games_lost) || '---'}} </p>
              </div>

              <div class="card_text" v-if="viewMode ==='Competitive' && !hero.competitive.general_stats">
                <p class="statHeader">Win/Loss</p>
                <p>---</p>
              </div>

              <div class="card_text" v-if="viewMode ==='Quickplay'&& hero.quickplay.general_stats">
                <p class="statHeader">Games Won</p>
                <p>{{hero.quickplay.general_stats.games_won || '---'}} </p>
              </div>

              <div class="card_text" v-if="viewMode ==='Quickplay'&& !hero.quickplay.general_stats">
                <p class="statHeader">Games Won</p>
                <p>---</p>
              </div>
            </div>

            <div class="col-md-2" v-show="viewMode ==='Competitive'">
              <div class="card_text" v-if="viewMode ==='Competitive' && hero.competitive.general_stats">
                <p class="statHeader">Win %</p>
                <p>{{displayPercent(hero.competitive.general_stats.win_percentage) || '---'}} </p>
              </div>

              <div class="card_text" v-if="viewMode ==='Competitive' && !hero.competitive.general_stats">
                <p class="statHeader">Win %</p>
                <p>0%</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </router-link>
  <!-- Title -->
  <!-- Card Body -->
  <div class="card-block">
    <div class="row">

      <div class="col-md-2">

        <div v-if="viewMode ==='Competitive' && hero.competitive.general_stats">
          <p class="statHeader">Eliminations</p>
          <p class="whiteText">{{hero.competitive.general_stats.eliminations || '---'}}</p>
        </div>

        <div v-if="viewMode ==='Competitive' && !hero.competitive.general_stats">
          <p class="statHeader">Eliminations</p>
          <p class="whiteText">---</p>
        </div>

        <div v-if="viewMode ==='Quickplay' && hero.quickplay.general_stats">
          <p class="statHeader">Eliminations</p>
          <p class="whiteText">{{hero.quickplay.general_stats.eliminations || '---'}}</p>
        </div>

        <div v-if="viewMode ==='Quickplay' && !hero.quickplay.general_stats">
          <p class="statHeader">Eliminations</p>
          <p class="whiteText">---</p>
        </div>

      </div>

        <div class="col-md-2">
          <div v-if="viewMode ==='Competitive' && hero.competitive.general_stats">
            <p class="statHeader">K/D Ratio</p>
            <p class="whiteText">{{round(hero.competitive.general_stats.eliminations / hero.competitive.general_stats.deaths) || '---'}}</p>
          </div>

          <div v-if="viewMode ==='Competitive' && !hero.competitive.general_stats">
            <p class="statHeader">K/D Ratio</p>
            <p class="whiteText">---</p>
          </div>

          <div v-if="viewMode ==='Quickplay' && hero.quickplay.general_stats">
            <p class="statHeader">K/D Ratio</p>
            <p class="whiteText">{{round(hero.quickplay.general_stats.eliminations / hero.quickplay.general_stats.deaths) || '---'}}</p>
          </div>

          <div v-if="viewMode ==='Quickplay' && !hero.quickplay.general_stats">
            <p class="statHeader">K/D Ratio</p>
            <p class="whiteText">---</p>
          </div>
        </div>

        <div class="col-md-2">
          <div v-if="viewMode ==='Competitive' && hero.competitive.general_stats">
            <p class="statHeader">Accuracy</p>
            <p class="whiteText">{{displayPercent(hero.competitive.general_stats.weapon_accuracy)  || '---'}}</p>
          </div>

          <div v-if="viewMode ==='Competitive' && !hero.competitive.general_stats">
            <p class="statHeader">Accuracy</p>
            <p class="whiteText">---</p>
          </div>

          <div v-if="viewMode ==='Quickplay' && hero.quickplay.general_stats">
            <p class="statHeader">Accuracy</p>
            <p class="whiteText">{{displayPercent(hero.quickplay.general_stats.weapon_accuracy) || '---'}}</p>
          </div>

          <div v-if="viewMode ==='Quickplay' && !hero.quickplay.general_stats">
            <p class="statHeader">Accuracy</p>
            <p class="whiteText">---</p>
          </div>
        </div>

        <div class="col-md-2">
          <div v-if="viewMode ==='Competitive' && hero.competitive.average_stats">
            <p class="statHeader">Blocked Avg.</p>
            <p class="whiteText">{{hero.competitive.average_stats.damage_blocked_average || '---'}}</p>
          </div>

          <div v-if="viewMode ==='Competitive' && !hero.competitive.average_stats">
            <p class="statHeader">Blocked Avg.</p>
            <p class="whiteText">---</p>
          </div>

          <div v-if="viewMode ==='Quickplay' && hero.quickplay.average_stats">
            <p class="statHeader">Blocked Avg.</p>
            <p class="whiteText">{{hero.quickplay.average_stats.damage_blocked_average || '---'}}</p>
          </div>

          <div v-if="viewMode ==='Quickplay' && !hero.quickplay.average_stats">
            <p class="statHeader">Blocked Avg.</p>
            <p class="whiteText">---</p>
          </div>
        </div>

        <div class="col-md-2">
          <div v-if="viewMode ==='Competitive' && hero.competitive.average_stats">
            <p class="statHeader">Healing Avg.</p>
            <p class="whiteText">{{hero.competitive.average_stats.healing_done_average || '---'}}</p>
          </div>

          <div v-if="viewMode ==='Competitive' && !hero.competitive.average_stats">
            <p class="statHeader">Healing Avg.</p>
            <p class="whiteText">---</p>
          </div>

          <div v-if="viewMode ==='Quickplay' && hero.quickplay.average_stats">
            <p class="statHeader">Healing Avg.</p>
            <p class="whiteText">{{hero.quickplay.average_stats.healing_done_average || '---'}}</p>
          </div>

          <div v-if="viewMode ==='Quickplay' && !hero.quickplay.average_stats">
            <p class="statHeader">Healing Avg.</p>
            <p class="whiteText">---</p>
          </div>
        </div>

        <div class="col-md-2">
          <div v-if="viewMode ==='Competitive' && hero.competitive.general_stats">
            <p class="statHeader">Crit %.</p>
            <p class="whiteText">{{displayPercent(hero.competitive.general_stats.critical_hit_accuracy) || '---'}}</p>
          </div>

          <div v-if="viewMode ==='Competitive' && !hero.competitive.general_stats">
            <p class="statHeader">Crit %.</p>
            <p class="whiteText">---</p>
          </div>

          <div v-if="viewMode ==='Quickplay' && hero.quickplay.general_stats">
            <p class="statHeader">Crit %.</p>
            <p class="whiteText">{{displayPercent(hero.quickplay.general_stats.critical_hit_accuracy) || '---'}}</p>
          </div>

          <div v-if="viewMode ==='Quickplay' && !hero.quickplay.general_stats">
            <p class="statHeader">Crit %.</p>
            <p class="whiteText">---</p>
          </div>
        </div>

    </div>
    <div class="row">
      <div class="col-md-2">
        <div v-if="viewMode ==='Competitive' && hero.competitive.general_stats">
          <p class="statHeader">Damage Avg.</p>
          <p class="whiteText">{{averageStat(hero, viewMode, 'general_stats', 'all_damage_done') || '---'}}</p>
        </div>

        <div v-if="viewMode ==='Competitive' && !hero.competitive.general_stats">
          <p class="statHeader">Damage Avg.</p>
          <p class="whiteText">---</p>
        </div>

        <div v-if="viewMode ==='Quickplay' && hero.quickplay.general_stats">
          <p class="statHeader">Damage / 10 mins</p>
          <p class="whiteText">{{hero.quickplay.general_stats.all_damage_done_avg_per_10_min || '---'}}</p>
        </div>

        <div v-if="viewMode ==='Quickplay' && !hero.quickplay.general_stats">
          <p class="statHeader">Damage / 10 mins</p>
          <p class="whiteText">---</p>
        </div>
      </div>

      <div class="col-md-2">
        <div v-if="viewMode ==='Competitive' && hero.competitive.general_stats">
          <p class="statHeader">Obj. Kills Avg.</p>
          <p class="whiteText">{{averageStat(hero, viewMode, 'general_stats', 'objective_kills') || '---'}}</p>
        </div>

        <div v-if="viewMode ==='Competitive' && !hero.competitive.general_stats">
          <p class="statHeader">Obj. Kills Avg.</p>
          <p class="whiteText">---</p>
        </div>

        <div v-if="viewMode ==='Quickplay' && hero.quickplay.general_stats">
          <p class="statHeader">Obj. Kills / min</p>
          <p class="whiteText">{{statPerMin(hero, viewMode, 'general_stats', 'objective_kills') || '---'}}</p>
        </div>

        <div v-if="viewMode ==='Quickplay' && !hero.quickplay.general_stats">
          <p class="statHeader">Obj. Kills / min</p>
          <p class="whiteText">---</p>
        </div>
      </div>

        <!-- OBJECTIVE TIME -->
      <div class="col-md-2">
        <div v-if="viewMode ==='Competitive' && hero.competitive.general_stats">
          <p class="statHeader">Obj. Time Avg.</p>
          <p class="whiteText">{{averageStat(hero, viewMode, 'general_stats', 'objective_time') * 60 || '---'}}</p> <!-- in minutes -->
        </div>

        <div v-if="viewMode ==='Competitive' && !hero.competitive.general_stats">
          <p class="statHeader">Obj. Time Avg.</p>
          <p class="whiteText">---</p>
        </div>

        <div v-if="viewMode ==='Quickplay' && hero.quickplay.general_stats">
          <p class="statHeader">Obj. Time</p>
          <p class="whiteText">{{hero.quickplay.general_stats.objective_time * 60 || '---'}}</p> <!-- in minutes -->
        </div>

        <div v-if="viewMode ==='Quickplay' && !hero.quickplay.general_stats">
          <p class="statHeader">Obj. Time</p>
          <p class="whiteText">---</p>
        </div>
      </div>

    </div>
  </div>

  <!-- End Card Body -->
</div>
</template>

<script>
export default {
  name: 'hero-card',
  props: ['hero', 'viewMode', 'quickplay'],
  data () {
    return {
    }
  },
  computed: {
    heroLink: function () {
      switch (this.hero.name) {
        case 'Torbjörn':
          return 'Torbjorn'
        case 'Lúcio':
          return 'Lucio'
        case 'D.Va':
          return 'DVa'
        case 'Soldier: 76':
          return 'Soldier76'
        default:
          return this.hero.name
      }
    }
  },
  methods: {
    toggleHeroStats: function () {
      if (this.fullStats === true) {
        this.fullStats = false
      } else if (this.fullStats === false) {
        this.fullStats = true
      }
    },
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
    },
    plural: function (value) {
      if (value >= 2 || value <= 0) {
        return 's'
      } else {
        return ''
      }
    },
    checkUndefined: function (value) {
      if (value === undefined) {
        return 0
      } else {
        return value
      }
    },
    round: function (value) {
      if (value !== undefined && value !== 'Infinity') {
        return +value.toFixed(2)
      } else return value
    },
    displayPercent: function (value) {
      if (isNaN(value) === true) {
        return '---'
      } else {
        return this.round(value * 100) + ' %'
      }
    },
    averageStat: function (hero, mode, location, stat) {
      var playmode = mode.toLowerCase()
      if (hero[playmode][location][stat]) {
        let roundedStat = this.round(hero[playmode][location][stat] / hero[playmode].general_stats.games_played)
        if (roundedStat !== Infinity) {
          return roundedStat
        } else {
          return '---'
        }
      }
    },
    statPerMin: function (hero, mode, location, stat) {
      var playmode = mode.toLowerCase()
      if (hero[playmode][location][stat] !== undefined) {
        let roundedStat = this.round(hero[playmode][location][stat] / hero[playmode].general_stats.time_played / 60) // converting hours to minutes
        if (roundedStat !== Infinity) {
          return roundedStat
        } else {
          return '---'
        }
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
  text-decoration: none;
  color:white;
  max-height: 104px;
}

a:hover {
  text-decoration: none;
  color:white;
}

p {
  white-space: nowrap;
}

.heroCard {
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

.card__text {
  padding-left: 15px;
  padding-right: 15px;
  color:white;
  font-family: sans-serif;
  font-size: 10px;
  padding: 10px;
}

.whiteText {
  color: white;
}

.cardTitleRow {
  /*height: 45px;*/
  border: 1px solid black;
}

.heroName {
  padding-top: 10px;
  text-shadow: -1px 1px 10px black;
  margin:0;
}

#heroNameCol{
  padding: 0;
}

.icon {
  text-shadow: none;
}

.statHeader {
  margin: 0;
  color: white;
  padding-top: 10px;
}

.statHeader p {
  margin: 0;
}

#avatar {
  min-width: 80px;
  max-width: 80px;
  min-height: 80px;
  border-radius: 10px;
  border: 2px solid white;
}

.medalColumn {
  flex-grow: .3;
}

.medalText {
  padding-left: 0;
  padding-right: 0;
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

#Doomfist {
  background-color: #675a52;
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
  background: #f2dc27; /* Old browsers */
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

#Orisa {
  background: #f2dc27; /* Old browsers */
  background: -moz-linear-gradient(left,#f2dc27  0%, #3ae80d 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #f2dc27  0%,#3ae80d 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #f2dc27 0%,#3ae80d 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2dc27', endColorstr='#3ae80d',GradientType=1 ); /* IE6-9 */
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
  background: #f0cd4b; /* Old browsers */
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

#Winston {
  background-color: #cccdcb;
}

#Zarya {
  background-color: #e15284;
}

#Zenyatta {
  background-color: #ccb059;
}

.card .cardTitleRow:hover {
  -webkit-filter: brightness(105%);
}

</style>
