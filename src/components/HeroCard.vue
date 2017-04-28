<template>
<v-card class="heroCard">
  <!-- Title -->
  <router-link :to="{ name: 'HeroDetails', params: { hero: heroLink }}">
    <v-card-row class="cardTitleRow" :id="headerId(hero)">
      <v-card-title @click="toggleHeroStats">
        <span class="white--text heroName">{{hero.name}}</span>
        <v-spacer></v-spacer>
      </v-card-title>
    </v-card-row>
  </router-link>
  <!-- Title -->

  <!-- Content -->
  <v-card-row>
    <!-- Avatar -->
    <v-card-column id="avatar">
      <v-card-row :img="hero.image"></v-card-row>
    </v-card-column>
    <!-- Avatar -->

    <v-card-column>

      <v-card-row>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Time Played</strong></p>

            <p>{{hero.competitive.playtime || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Time Played</strong></p>
            <p>{{hero.quickplay.TimePlayed || '---'}}</p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Games Won</strong></p>
            <p>{{hero.competitive.GamesWon || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Games Won</strong></p>
            <p>{{hero.quickplay.GamesWon || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-show="viewMode ==='Competitive'">
          <v-card-text class="card_text">
            <p><strong>Games Lost</strong></p>
            <p>{{hero.competitive.GamesLost || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-show="viewMode ==='Competitive'">
          <v-card-text class="card_text">
            <p><strong>Win %</strong></p>
            <p>{{hero.competitive.WinPercentage || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Time on Fire</strong></p>
            <p>{{hero.competitive.TimeSpentonFire || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Time on Fire</strong></p>
            <p>{{hero.quickplay.TimeSpentonFire || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Fire</strong></p>
            <p>{{hero.competitive['TimeSpentonFire-Average'] || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Avg Fire</strong></p>
            <p>{{hero.quickplay['TimeSpentonFire-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Fire</strong></p>
            <p>{{hero.competitive['TimeSpentonFire-MostinGame'] || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Most Fire</strong></p>
            <p>{{hero.quickplay['TimeSpentonFire-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>


        <!-- Medals -->

        <v-card-column class="medalColumn">
          <v-card-text class="card_text medalText" v-if="viewMode ==='Competitive'">
            <v-icon class="goldMedal">fiber_manual_record</v-icon>
            <p>{{hero.competitive['Medals-Gold'] || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text medalText" v-if="viewMode ==='Quickplay'">
            <v-icon class="goldMedal">fiber_manual_record</v-icon>
            <p>{{hero.quickplay['Medals-Gold'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column class="medalColumn">
          <v-card-text class="card_text medalText" v-if="viewMode ==='Competitive'">
            <v-icon class="silverMedal">fiber_manual_record</v-icon>
            <p>{{hero.competitive['Medals-Silver'] || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text medalText" v-if="viewMode ==='Quickplay'">
            <v-icon class="silverMedal">fiber_manual_record</v-icon>
            <p>{{hero.quickplay['Medals-Silver'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column class="medalColumn">
          <v-card-text class="card_text medalText" v-if="viewMode ==='Competitive'">
            <v-icon class="bronzeMedal">fiber_manual_record</v-icon>
            <p>{{hero.competitive['Medals-Bronze'] || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text medalText" v-if="viewMode ==='Quickplay'">
            <v-icon class="bronzeMedal">fiber_manual_record</v-icon>
            <p>{{hero.quickplay['Medals-Bronze'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- End Medals -->

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Cards</strong></p>
            <p>{{hero.competitive.Cards || hero.competitive.Card || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Cards</strong></p>
            <p>{{hero.quickplay.Cards || hero.quickplay.Card || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Elims</strong></p>
            <p>{{hero.competitive.Eliminations || hero.competitive.Elimination || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Elims</strong></p>
            <p>{{hero.quickplay.Eliminations || hero.quickplay.Elimination || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Elims</strong></p>
            <p>{{hero.competitive['Eliminations-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Avg Elims</strong></p>
            <p>{{hero.quickplay['Eliminations-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Deaths</strong></p>
            <p>{{hero.competitive.Deaths || hero.competitive.Death || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Deaths</strong></p>
            <p>{{hero.quickplay.Deaths || hero.quickplay.Death || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Deaths</strong></p>
            <p>{{hero.competitive['Deaths-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Avg Deaths</strong></p>
            <p>{{hero.quickplay['Deaths-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Elims/Life</strong></p>
            <p>{{hero.competitive['EliminationsperLife'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Elims/Life</strong></p>
            <p>{{hero.quickplay['EliminationsperLife'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Best Streak</strong></p>
            <p>{{hero.competitive['KillStreak-Best'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Best Streak</strong></p>
            <p>{{hero.quickplay['KillStreak-Best'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Weapon Accuracy</strong></p>
            <p>{{hero.competitive['WeaponAccuracy'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Weapon Accuracy</strong></p>
            <p>{{hero.quickplay['WeaponAccuracy'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Damage Done</strong></p>
            <p>{{hero.competitive['DamageDone'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Damage Done</strong></p>
            <p>{{hero.quickplay['DamageDone'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Avg Damage</strong></p>
            <p>{{hero.competitive['DamageDone-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Damage</strong></p>
            <p>{{hero.quickplay['DamageDone-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most Damage</strong></p>
            <p>{{hero.competitive['DamageDone-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Damage</strong></p>
            <p>{{hero.quickplay['DamageDone-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

      </v-card-row>

    </v-card-column>

  </v-card-row>
</v-card>
</template>

<script>
export default {
  name: 'hero-card',
  props: ['hero', 'viewMode', 'quickplay'],
  data () {
    return {
      fullStats: false,
      noCrit: ['Ana', 'Junkrat', 'Pharah', 'Symmetra', 'Reinhardt', 'Harambe', 'Zarya']
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

.card__title {
  padding: 0;
}

.card__title span {
  margin-left: 5px;
}

.cardTitleRow {
  height: 45px;
  border: 1px solid black;
}

.heroName {
  text-shadow: -1px 1px 10px black
}

.icon {
  text-shadow: none;
}

.statHeader {
  font-weight: bold;
  text-decoration: underline;
  justify-content: center;
  margin: 0;
  color: white;
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
  margin-left: 5px;
  margin-top: 5px;
}

.medalColumn {
  flex-grow: .3;
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
