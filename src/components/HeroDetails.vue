<template>
<v-card class="heroCard">
  <!-- Title -->
  <v-card-row class="cardTitleRow" :id="headerId(hero)">
    <v-card-title @click="toggleHeroStats">
      <span class="white--text heroName">{{hero.name}}</span>
      <v-spacer></v-spacer>
      <span>
        <v-icon v-if="fullStats">expand_more</v-icon>
        <v-icon v-if="!fullStats">expand_less</v-icon>
      </span>
    </v-card-title>
  </v-card-row>
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
            <p>{{hero.competitive.TimePlayed || '---'}} </p>
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

  <hr/>

  <!-- Role specific Stats -->
  <v-card-row v-if="hero.name !== 'Symmetra'" v-show="fullStats" class="roleStatRow">
    <v-card-column>

      <!-- Row Heading -->
      <v-card-row  class="statHeader">
        <p>{{hero.role}} Stats</p>
      </v-card-row>

      <v-card-row>

        <!-- Support Stats -->
        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Healing Done</strong></p>
            <p>{{hero.competitive['HealingDone'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Healing Done</strong></p>
            <p>{{hero.quickplay['HealingDone'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Avg Healing</strong></p>
            <p>{{hero.competitive['HealingDone-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Healing</strong></p>
            <p>{{hero.quickplay['HealingDone-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most Healing in Game</strong></p>
            <p>{{hero.competitive['HealingDone-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Healing in Game</strong></p>
            <p>{{hero.quickplay['HealingDone-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most Healing in Life</strong></p>
            <p>{{hero.competitive['HealingDone-MostinLife'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Healing in Life</strong></p>
            <p>{{hero.quickplay['HealingDone-MostinLife'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Self Healing</strong></p>
            <p>{{hero.quickplay['SelfHealing'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Avg Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Self Healing</strong></p>
            <p>{{hero.quickplay['SelfHealing-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>D. Assists</strong></p>
            <p>{{hero.competitive['DefensiveAssists'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>D. Assists</strong></p>
            <p>{{hero.quickplay['DefensiveAssists'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Avg D. Assists</strong></p>
            <p>{{hero.competitive['DefensiveAssists-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg D. Assists</strong></p>
            <p>{{hero.quickplay['DefensiveAssists-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most D. Assists</strong></p>
            <p>{{hero.competitive['DefensiveAssists-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most D. Assists</strong></p>
            <p>{{hero.quickplay['DefensiveAssists-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>O. Assists</strong></p>
            <p>{{hero.competitive['OffensiveAssists'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>O. Assists</strong></p>
            <p>{{hero.quickplay['OffensiveAssists'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Avg O. Assists</strong></p>
            <p>{{hero.competitive['OffensiveAssists-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg O. Assists</strong></p>
            <p>{{hero.quickplay['OffensiveAssists-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most O. Assists</strong></p>
            <p>{{hero.competitive['OffensiveAssists-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most O. Assists</strong></p>
            <p>{{hero.quickplay['OffensiveAssists-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- End Support Stats -->

        <!-- Tank Stats -->
        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Damage Blocked</strong></p>
            <p>{{hero.competitive['DamageBlocked'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Damage Blocked</strong></p>
            <p>{{hero.quickplay['DamageBlocked'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Avg Damage Blocked</strong></p>
            <p>{{hero.competitive['DamageBlocked-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Damage Blocked</strong></p>
            <p>{{hero.quickplay['DamageBlocked-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Most Damage Blocked</strong></p>
            <p>{{hero.competitive['DamageBlocked-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Damage Blocked</strong></p>
            <p>{{hero.quickplay['DamageBlocked-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Objective Time</strong></p>
            <p>{{hero.competitive['ObjectiveTime'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Objective Time</strong></p>
            <p>{{hero.quickplay['ObjectiveTime'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Avg Obj Time</strong></p>
            <p>{{hero.competitive['ObjectiveTime-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Obj Time</strong></p>
            <p>{{hero.quickplay['ObjectiveTime-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Most Obj Time</strong></p>
            <p>{{hero.competitive['ObjectiveTime-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Obj Time</strong></p>
            <p>{{hero.quickplay['ObjectiveTime-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Objective Kills</strong></p>
            <p>{{hero.competitive['ObjectiveKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Objective Kills</strong></p>
            <p>{{hero.quickplay['ObjectiveKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Avg Obj Kills</strong></p>
            <p>{{hero.competitive['ObjectiveKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Obj Kills</strong></p>
            <p>{{hero.quickplay['ObjectiveKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Most Obj Kills</strong></p>
            <p>{{hero.competitive['ObjectiveKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Obj Kills</strong></p>
            <p>{{hero.quickplay['ObjectiveKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- End Tank Stats -->
        <!-- Damage and Defense Hero Stats -->

        <v-card-column v-if="hero.role === 'offense' || hero.role === 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Solo Kills</strong></p>
            <p>{{hero.competitive['SoloKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Solo Kills</strong></p>
            <p>{{hero.quickplay['SoloKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || hero.role === 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Solo Kills</strong></p>
            <p>{{hero.competitive['SoloKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Solo Kills</strong></p>
            <p>{{hero.quickplay['SoloKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || hero.role === 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Solo Kills</strong></p>
            <p>{{hero.competitive['SoloKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Solo Kills</strong></p>
            <p>{{hero.quickplay['SoloKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || hero.role === 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Final Blows</strong></p>
            <p>{{hero.competitive['FinalBlows'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Final Blows</strong></p>
            <p>{{hero.quickplay['FinalBlows'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || hero.role === 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Final Blows</strong></p>
            <p>{{hero.competitive['FinalBlows-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Final Blows</strong></p>
            <p>{{hero.quickplay['FinalBlows-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || hero.role === 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Final Blows</strong></p>
            <p>{{hero.competitive['FinalBlows-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Final Blows</strong></p>
            <p>{{hero.quickplay['FinalBlows-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || hero.role === 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Melee Final Blows</strong></p>
            <p>{{hero.competitive['MeleeFinalBlows'] || hero.competitive['MeleeFinalBlow'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Melee Final Blows</strong></p>
            <p>{{hero.quickplay['MeleeFinalBlows'] || hero.quickplay['MeleeFinalBlow'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || hero.role === 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Melee Final Blows</strong></p>
            <p>{{hero.competitive['MeleeFinalBlows-Average'] || hero.competitive['MeleeFinalBlow-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Melee Final Blows</strong></p>
            <p>{{hero.quickplay['MeleeFinalBlows-Average'] || hero.quickplay['MeleeFinalBlow-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || hero.role === 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Melee Final Blows</strong></p>
            <p>{{hero.competitive['MeleeFinalBlows-MostinGame'] || hero.competitive['MeleeFinalBlow-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Melee Final Blows</strong></p>
            <p>{{hero.quickplay['MeleeFinalBlows-MostinGame'] || hero.quickplay['MeleeFinalBlow-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

      </v-card-row>
    </v-card-column>

  </v-card-row>
  <hr v-if="hero.name !== 'Symmetra'"/>

  <!-- Hero Specific Stats -->
  <v-card-row v-show="fullStats" class="heroStatRow">
    <v-card-column>

      <!-- Row Heading -->
      <v-card-row class="statHeader">
        <p>Hero Stats</p>
      </v-card-row>

      <v-card-row>

      <!-- ============================================================================================================================ -->
      <!-- GENERAL ------------------------------------------------------------------------------------------------------------------>
      <!-- ============================================================================================================================ -->

      <v-card-column v-if="noCrit.indexOf(hero.name) < 0">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Crits</strong></p>
            <p>{{hero.competitive['CriticalHits'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Crits</strong></p>
            <p>{{hero.quickplay['CriticalHits'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="noCrit.indexOf(hero.name) < 0">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Crits</strong></p>
            <p>{{hero.competitive['CriticalHits-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Crits</strong></p>
            <p>{{hero.quickplay['CriticalHits-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="noCrit.indexOf(hero.name) < 0">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Crits</strong></p>
            <p>{{hero.competitive['CriticalHits-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Crits</strong></p>
            <p>{{hero.quickplay['CriticalHits-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="noCrit.indexOf(hero.name) < 0">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Crit %</strong></p>
            <p>{{hero.competitive['CriticalHitAccuracy'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Crit %</strong></p>
            <p>{{hero.quickplay['CriticalHitAccuracy'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- ANA ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Enemies Slept</strong></p>
            <p>{{hero.competitive['EnemiesSlept'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Enemies Slept</strong></p>
            <p>{{hero.quickplay['EnemiesSlept'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Enemies Slept</strong></p>
            <p>{{hero.competitive['EnemiesSlept-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Enemies Slept</strong></p>
            <p>{{hero.quickplay['EnemiesSlept-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Enemies Slept</strong></p>
            <p>{{hero.competitive['EnemiesSlept-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Enemies Slept</strong></p>
            <p>{{hero.quickplay['EnemiesSlept-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Nano Boosts</strong></p>
            <p>{{hero.competitive['NanoBoostsApplied'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Nano Boosts</strong></p>
            <p>{{hero.quickplay['NanoBoostsApplied'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Nano Boosts</strong></p>
            <p>{{hero.competitive['NanoBoostsApplied-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Nano Boosts</strong></p>
            <p>{{hero.quickplay['NanoBoostsApplied-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Nano Boosts</strong></p>
            <p>{{hero.competitive['NanoBoostsApplied-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Nano Boosts</strong></p>
            <p>{{hero.quickplay['NanoBoostsApplied-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Nano Boost Assits</strong></p>
            <p>{{hero.competitive['NanoBoostAssists'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Nano Boost Assits</strong></p>
            <p>{{hero.quickplay['NanoBoostAssists'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Nano Assits</strong></p>
            <p>{{hero.competitive['NanoBoostAssists-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Nano Assits</strong></p>
            <p>{{hero.quickplay['NanoBoostAssists-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Nano Assits</strong></p>
            <p>{{hero.competitive['NanoBoostAssists-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Nano Assits</strong></p>
            <p>{{hero.quickplay['NanoBoostAssists-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scoped Hits</strong></p>
            <p>{{hero.competitive['ScopedHits'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scoped Hits</strong></p>
            <p>{{hero.quickplay['ScopedHits'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scoped Accuracy</strong></p>
            <p>{{hero.competitive['ScopedAccuracy'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scoped Accuracy</strong></p>
            <p>{{hero.quickplay['ScopedAccuracy'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scoped Best</strong></p>
            <p>{{hero.competitive['ScopedAccuracy-BestinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scoped Best</strong></p>
            <p>{{hero.quickplay['ScopedAccuracy-BestinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Unscoped Hits</strong></p>
            <p>{{hero.competitive['UnscopedShots'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Unscoped Hits</strong></p>
            <p>{{hero.quickplay['UnscopedShots'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Unscoped Accuracy</strong></p>
            <p>{{hero.competitive['UnscopedAccuracy'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Unscoped Accuracy</strong></p>
            <p>{{hero.quickplay['UnscopedAccuracy'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Unscoped Best</strong></p>
            <p>{{hero.competitive['UnscopedAccuracy-BestinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Unscoped Best</strong></p>
            <p>{{hero.quickplay['UnscopedAccuracy-BestinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Bastion ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Shots Fired</strong></p>
            <p>{{hero.competitive['ShotsFired'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Shots Fired</strong></p>
            <p>{{hero.quickplay['ShotsFired'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Shots Hit</strong></p>
            <p>{{hero.competitive['ShotsHit'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Shots Hit</strong></p>
            <p>{{hero.quickplay['ShotsHit'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Recon Kills</strong></p>
            <p>{{hero.competitive['ReconKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Recon Kills</strong></p>
            <p>{{hero.quickplay['ReconKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Recon Kills</strong></p>
            <p>{{hero.competitive['ReconKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Recon Kills</strong></p>
            <p>{{hero.quickplay['ReconKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Recon Kills</strong></p>
            <p>{{hero.competitive['ReconKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Recon Kills</strong></p>
            <p>{{hero.quickplay['ReconKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Sentry Kills</strong></p>
            <p>{{hero.competitive['SentryKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Sentry Kills</strong></p>
            <p>{{hero.quickplay['SentryKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Sentry Kills</strong></p>
            <p>{{hero.competitive['SentryKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Sentry Kills</strong></p>
            <p>{{hero.quickplay['SentryKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Sentry Kills</strong></p>
            <p>{{hero.competitive['SentryKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Sentry Kills</strong></p>
            <p>{{hero.quickplay['SentryKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Tank Kills</strong></p>
            <p>{{hero.competitive['TankKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Tank Kills</strong></p>
            <p>{{hero.quickplay['TankKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Tank Kills</strong></p>
            <p>{{hero.competitive['TankKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Tank Kills</strong></p>
            <p>{{hero.quickplay['TankKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Tank Kills</strong></p>
            <p>{{hero.competitive['TankKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Tank Kills</strong></p>
            <p>{{hero.quickplay['TankKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Self Healing</strong></p>
            <p>{{hero.quickplay['SelfHealing'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Self Healing</strong></p>
            <p>{{hero.quickplay['SelfHealing-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Self Healing</strong></p>
            <p>{{hero.quickplay['SelfHealing-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- D.Va ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'D.Va'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Mech Deaths</strong></p>
            <p>{{hero.competitive['MechDeaths'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Mech Deaths</strong></p>
            <p>{{hero.quickplay['MechDeaths'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'D.Va'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Mechs Called</strong></p>
            <p>{{hero.competitive['MechsCalled'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Mechs Called</strong></p>
            <p>{{hero.quickplay['MechsCalled'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'D.Va'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Self-Destruct Kills</strong></p>
            <p>{{hero.competitive['Self-DestructKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Self-Destruct Kills</strong></p>
            <p>{{hero.quickplay['Self-DestructKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'D.Va'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Self-Destruct Kills</strong></p>
            <p>{{hero.competitive['Self-DestructKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Self-Destruct Kills</strong></p>
            <p>{{hero.quickplay['Self-DestructKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'D.Va'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Self-Destruct Kills</strong></p>
            <p>{{hero.competitive['Self-DestructKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Self-Destruct Kills</strong></p>
            <p>{{hero.quickplay['Self-DestructKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>


        <!-- ============================================================================================================================ -->
        <!-- Genji ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Genji'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Dragonblades</strong></p>
            <p>{{hero.competitive['Dragonblades'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Dragonblades</strong></p>
            <p>{{hero.quickplay['Dragonblades'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Genji'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Dragonblade Kills</strong></p>
            <p>{{hero.competitive['DragonbladeKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Dragonblade Kills</strong></p>
            <p>{{hero.quickplay['DragonbladeKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Genji'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Dragonblade Kills</strong></p>
            <p>{{hero.competitive['DragonbladeKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Dragonblade Kills</strong></p>
            <p>{{hero.quickplay['DragonbladeKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Genji'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Dragonblade Kills</strong></p>
            <p>{{hero.competitive['DragonbladeKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Dragonblade Kills</strong></p>
            <p>{{hero.quickplay['DragonbladeKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Hanzo ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Hanzo'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Dragonstrike Kills</strong></p>
            <p>{{hero.competitive['DragonstrikeKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Dragonstrike Kills</strong></p>
            <p>{{hero.quickplay['DragonstrikeKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Hanzo'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Dragonstrike Kills</strong></p>
            <p>{{hero.competitive['DragonstrikeKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Dragonstrike Kills</strong></p>
            <p>{{hero.quickplay['DragonstrikeKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Hanzo'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Dragonstrike Kills</strong></p>
            <p>{{hero.competitive['DragonstrikeKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Dragonstrike Kills</strong></p>
            <p>{{hero.quickplay['DragonstrikeKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Hanzo'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scatter Arrow Kills</strong></p>
            <p>{{hero.competitive['ScatterArrowKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scatter Arrow Kills</strong></p>
            <p>{{hero.quickplay['ScatterArrowKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Hanzo'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Scatter Arrow Kills</strong></p>
            <p>{{hero.competitive['ScatterArrowKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Scatter Arrow Kills</strong></p>
            <p>{{hero.quickplay['ScatterArrowKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Hanzo'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Scatter Arrow Kills</strong></p>
            <p>{{hero.competitive['ScatterArrowKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Scatter Arrow Kills</strong></p>
            <p>{{hero.quickplay['ScatterArrowKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Junkrat ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Junkrat'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Enemies Trapped</strong></p>
            <p>{{hero.competitive['EnemiesTrapped'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Enemies Trapped</strong></p>
            <p>{{hero.quickplay['EnemiesTrapped'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Junkrat'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Enemies Trapped</strong></p>
            <p>{{hero.competitive['EnemiesTrapped-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Enemies Trapped</strong></p>
            <p>{{hero.quickplay['EnemiesTrapped-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Junkrat'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>RIP Tire Kills</strong></p>
            <p>{{hero.competitive['RIP-TireKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>RIP Tire Kills</strong></p>
            <p>{{hero.quickplay['RIP-TireKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Junkrat'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg RIP Tire Kills</strong></p>
            <p>{{hero.competitive['RIP-TireKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg RIP Tire Kills</strong></p>
            <p>{{hero.quickplay['RIP-TireKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Junkrat'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most RIP Tire Kills</strong></p>
            <p>{{hero.competitive['RIP-TireKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most RIP Tire Kills</strong></p>
            <p>{{hero.quickplay['RIP-TireKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Lucio ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Lúcio'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Environmental Kills</strong></p>
            <p>{{hero.competitive['EnvironmentalKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Environmental Kills</strong></p>
            <p>{{hero.quickplay['EnvironmentalKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Lúcio'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Sound Barriers</strong></p>
            <p>{{hero.competitive['SoundBarriersProvided'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Sound Barriers</strong></p>
            <p>{{hero.quickplay['SoundBarriersProvided'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Lúcio'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Sound Barriers</strong></p>
            <p>{{hero.competitive['SoundBarriersProvided-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Sound Barriers</strong></p>
            <p>{{hero.quickplay['SoundBarriersProvided-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Lúcio'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Sound Barriers</strong></p>
            <p>{{hero.competitive['SoundBarriersProvided-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Sound Barriers</strong></p>
            <p>{{hero.quickplay['SoundBarriersProvided-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- McCree ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'McCree'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Fan the Hammer Kills</strong></p>
            <p>{{hero.competitive['FantheHammerKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Fan the Hammer Kills</strong></p>
            <p>{{hero.quickplay['FantheHammerKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'McCree'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Fan the Hammer Kills</strong></p>
            <p>{{hero.competitive['FantheHammerKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Fan the Hammer Kills</strong></p>
            <p>{{hero.quickplay['FantheHammerKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'McCree'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Fan the Hammer Kills</strong></p>
            <p>{{hero.competitive['FantheHammerKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Fan the Hammer Kills</strong></p>
            <p>{{hero.quickplay['FantheHammerKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'McCree'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Deadeye Kills</strong></p>
            <p>{{hero.competitive['DeadeyeKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Deadeye Kills</strong></p>
            <p>{{hero.quickplay['DeadeyeKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'McCree'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Deadeye Kills</strong></p>
            <p>{{hero.competitive['DeadeyeKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Deadeye Kills</strong></p>
            <p>{{hero.quickplay['DeadeyeKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'McCree'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Deadeye Kills</strong></p>
            <p>{{hero.competitive['DeadeyeKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Deadeye Kills</strong></p>
            <p>{{hero.quickplay['DeadeyeKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Mei ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Mei'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Blizzard Kills</strong></p>
            <p>{{hero.competitive['BlizzardKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Blizzard Kills</strong></p>
            <p>{{hero.quickplay['BlizzardKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Mei'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Blizzard Kills</strong></p>
            <p>{{hero.competitive['BlizzardKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Blizzard Kills</strong></p>
            <p>{{hero.quickplay['BlizzardKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Mei'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Blizzard Kills</strong></p>
            <p>{{hero.competitive['BlizzardKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Blizzard Kills</strong></p>
            <p>{{hero.quickplay['BlizzardKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Mei'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Enemies Frozen</strong></p>
            <p>{{hero.competitive['EnemiesFrozen'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Enemies Frozen</strong></p>
            <p>{{hero.quickplay['EnemiesFrozen'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Mei'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Enemies Frozen</strong></p>
            <p>{{hero.competitive['EnemiesFrozen-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Enemies Frozen</strong></p>
            <p>{{hero.quickplay['EnemiesFrozen-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Mei'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Enemies Frozen</strong></p>
            <p>{{hero.competitive['EnemiesFrozen-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Enemies Frozen</strong></p>
            <p>{{hero.quickplay['EnemiesFrozen-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Mercy ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Mercy'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Players Resurrected</strong></p>
            <p>{{hero.competitive['PlayersResurrected'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Players Resurrected</strong></p>
            <p>{{hero.quickplay['PlayersResurrected'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Mercy'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Players Resurrected</strong></p>
            <p>{{hero.competitive['PlayersResurrected-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Players Resurrected</strong></p>
            <p>{{hero.quickplay['PlayersResurrected-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Mercy'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Players Resurrected</strong></p>
            <p>{{hero.competitive['PlayersResurrected-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Players Resurrected</strong></p>
            <p>{{hero.quickplay['PlayersResurrected-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Mercy'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Damage Amplified</strong></p>
            <p>{{hero.competitive['DamageAmplified'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Damage Amplified</strong></p>
            <p>{{hero.quickplay['DamageAmplified'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Mercy'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Damage Amplified</strong></p>
            <p>{{hero.competitive['DamageAmplified-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Damage Amplified</strong></p>
            <p>{{hero.quickplay['DamageAmplified-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Mercy'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Damage Amplified</strong></p>
            <p>{{hero.competitive['DamageAmplified-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Damage Amplified</strong></p>
            <p>{{hero.quickplay['DamageAmplified-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Mercy'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Blaster Kills</strong></p>
            <p>{{hero.competitive['BlasterKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Blaster Kills</strong></p>
            <p>{{hero.quickplay['BlasterKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Mercy'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Blaster Kills</strong></p>
            <p>{{hero.competitive['BlasterKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Blaster Kills</strong></p>
            <p>{{hero.quickplay['BlasterKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Mercy'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Blaster Kills</strong></p>
            <p>{{hero.competitive['BlasterKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Blaster Kills</strong></p>
            <p>{{hero.quickplay['BlasterKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Pharah ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Pharah'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Direct Hits</strong></p>
            <p>{{hero.competitive['RocketDirectHits'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Direct Hits</strong></p>
            <p>{{hero.quickplay['RocketDirectHits'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Pharah'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Direct Hits</strong></p>
            <p>{{hero.competitive['RocketDirectHits-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Direct Hits</strong></p>
            <p>{{hero.quickplay['RocketDirectHits-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Pharah'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Direct Hits</strong></p>
            <p>{{hero.competitive['RocketDirectHits-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Direct Hits</strong></p>
            <p>{{hero.quickplay['RocketDirectHits-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Pharah'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Barrage Kills</strong></p>
            <p>{{hero.competitive['BarrageKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Barrage Kills</strong></p>
            <p>{{hero.quickplay['BarrageKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Pharah'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Barrage Kills</strong></p>
            <p>{{hero.competitive['BarrageKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Barrage Kills</strong></p>
            <p>{{hero.quickplay['BarrageKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Pharah'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Barrage Kills</strong></p>
            <p>{{hero.competitive['BarrageKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Barrage Kills</strong></p>
            <p>{{hero.quickplay['BarrageKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Reaper ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Reaper'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Souls Consumed</strong></p>
            <p>{{hero.competitive['SoulsConsumed'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Souls Consumed</strong></p>
            <p>{{hero.quickplay['SoulsConsumed'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Reaper'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Souls Consumed</strong></p>
            <p>{{hero.competitive['SoulsConsumed-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Souls Consumed</strong></p>
            <p>{{hero.quickplay['SoulsConsumed-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Reaper'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Souls Consumed</strong></p>
            <p>{{hero.competitive['SoulsConsumed-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Souls Consumed</strong></p>
            <p>{{hero.quickplay['SoulsConsumed-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Reaper'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Death Blossom Kills</strong></p>
            <p>{{hero.competitive['DeathBlossomKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Death Blossom Kills</strong></p>
            <p>{{hero.quickplay['DeathBlossomKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Reaper'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Death Blossom Kills</strong></p>
            <p>{{hero.competitive['DeathBlossomKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Death Blossom Kills</strong></p>
            <p>{{hero.quickplay['DeathBlossomKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Reaper'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Death Blossom Kills</strong></p>
            <p>{{hero.competitive['DeathBlossomKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Death Blossom Kills</strong></p>
            <p>{{hero.quickplay['DeathBlossomKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Reinhardt ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Reinhardt'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Charge Kills</strong></p>
            <p>{{hero.competitive['ChargeKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Charge Kills</strong></p>
            <p>{{hero.quickplay['ChargeKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Reinhardt'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Charge Kills</strong></p>
            <p>{{hero.competitive['ChargeKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Charge Kills</strong></p>
            <p>{{hero.quickplay['ChargeKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Reinhardt'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Charge Kills</strong></p>
            <p>{{hero.competitive['ChargeKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Charge Kills</strong></p>
            <p>{{hero.quickplay['ChargeKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Reinhardt'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Fire Strike Kills</strong></p>
            <p>{{hero.competitive['FireStrikeKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Fire Strike Kills</strong></p>
            <p>{{hero.quickplay['FireStrikeKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Reinhardt'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Fire Strike Kills</strong></p>
            <p>{{hero.competitive['FireStrikeKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Fire Strike Kills</strong></p>
            <p>{{hero.quickplay['FireStrikeKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Reinhardt'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Fire Strike Kills</strong></p>
            <p>{{hero.competitive['FireStrikeKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Fire Strike Kills</strong></p>
            <p>{{hero.quickplay['FireStrikeKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

          <v-card-column v-if="hero.name === 'Reinhardt'">
            <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
              <p><strong>Earthshatter Kills</strong></p>
              <p>{{hero.competitive['EarthshatterKills'] || '---' }} </p>
            </v-card-text>

            <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
              <p><strong>Earthshatter Kills</strong></p>
              <p>{{hero.quickplay['EarthshatterKills'] || '---'}} </p>
            </v-card-text>
          </v-card-column>

          <v-card-column v-if="hero.name === 'Reinhardt'">
            <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
              <p><strong>Avg Earthshatter Kills</strong></p>
              <p>{{hero.competitive['EarthshatterKills-Average'] || '---' }} </p>
            </v-card-text>

            <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
              <p><strong>Avg Earthshatter Kills</strong></p>
              <p>{{hero.quickplay['EarthshatterKills-Average'] || '---'}} </p>
            </v-card-text>
          </v-card-column>

          <v-card-column v-if="hero.name === 'Reinhardt'">
            <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
              <p><strong>Most Earthshatter Kills</strong></p>
              <p>{{hero.competitive['EarthshatterKills-MostinGame'] || '---' }} </p>
            </v-card-text>

            <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
              <p><strong>Most Earthshatter Kills</strong></p>
              <p>{{hero.quickplay['EarthshatterKills-MostinGame'] || '---'}} </p>
            </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Roadhog ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Roadhog'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Hooks Attempted</strong></p>
            <p>{{hero.competitive['HooksAttempted'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Hooks Attempted</strong></p>
            <p>{{hero.quickplay['HooksAttempted'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Roadhog'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Hook Accuracy</strong></p>
            <p>{{hero.competitive['HookAccuracy'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Hook Accuracy</strong></p>
            <p>{{hero.quickplay['HookAccuracy'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Roadhog'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Best Hook Accuracy</strong></p>
            <p>{{hero.competitive['HookAccuracy-BestinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Best Hook Accuracy</strong></p>
            <p>{{hero.quickplay['HookAccuracy-BestinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Roadhog'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Enemies Hooked</strong></p>
            <p>{{hero.competitive['EnemiesHooked'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Enemies Hooked</strong></p>
            <p>{{hero.quickplay['EnemiesHooked'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Roadhog'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Enemies Hooked</strong></p>
            <p>{{hero.competitive['EnemiesHooked-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Enemies Hooked</strong></p>
            <p>{{hero.quickplay['EnemiesHooked-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Roadhog'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Enemies Hooked</strong></p>
            <p>{{hero.competitive['EnemiesHooked-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Enemies Hooked</strong></p>
            <p>{{hero.quickplay['EnemiesHooked-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Roadhog'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Whole Hog Kills</strong></p>
            <p>{{hero.competitive['WholeHogKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Whole Hog Kills</strong></p>
            <p>{{hero.quickplay['WholeHogKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Roadhog'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Whole Hog Kills</strong></p>
            <p>{{hero.competitive['WholeHogKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Whole Hog Kills</strong></p>
            <p>{{hero.quickplay['WholeHogKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Roadhog'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Whole Hog Kills</strong></p>
            <p>{{hero.competitive['WholeHogKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Whole Hog Kills</strong></p>
            <p>{{hero.quickplay['WholeHogKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Soldier: 76 ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Soldier: 76'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Helix Rocket Kills</strong></p>
            <p>{{hero.competitive['HelixRocketKIlls'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Helix Rocket Kills</strong></p>
            <p>{{hero.quickplay['HelixRocketKIlls'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Soldier: 76'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg H. Rocket Kills</strong></p>
            <p>{{hero.competitive['HelixRocketKIlls-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg H. Rocket Kills</strong></p>
            <p>{{hero.quickplay['HelixRocketKIlls-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Soldier: 76'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most H. Rocket Kills</strong></p>
            <p>{{hero.competitive['HelixRocketKIlls-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most H. Rocket Kills</strong></p>
            <p>{{hero.quickplay['HelixRocketKIlls-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Soldier: 76'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Tactical Visor Kills</strong></p>
            <p>{{hero.competitive['TacticalVisorKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Tactical Visor Kills</strong></p>
            <p>{{hero.quickplay['TacticalVisorKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Soldier: 76'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg T. Visor Kills</strong></p>
            <p>{{hero.competitive['TacticalVisorKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg T. Visor Kills</strong></p>
            <p>{{hero.quickplay['TacticalVisorKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Soldier: 76'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most T. Visor Kills</strong></p>
            <p>{{hero.competitive['TacticalVisorKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most T. Visor Kills</strong></p>
            <p>{{hero.quickplay['TacticalVisorKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Soldier: 76'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Healing Done</strong></p>
            <p>{{hero.competitive['HealingDone'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Healing Done</strong></p>
            <p>{{hero.quickplay['HealingDone'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Soldier: 76'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Avg Healing</strong></p>
            <p>{{hero.competitive['HealingDone-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Healing</strong></p>
            <p>{{hero.quickplay['HealingDone-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Soldier: 76'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most Healing in Game</strong></p>
            <p>{{hero.competitive['HealingDone-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Healing in Game</strong></p>
            <p>{{hero.quickplay['HealingDone-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Soldier: 76'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most Healing in Life</strong></p>
            <p>{{hero.competitive['HealingDone-MostinLife'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Healing in Life</strong></p>
            <p>{{hero.quickplay['HealingDone-MostinLife'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Soldier: 76'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Biotic Fields Deployed</strong></p>
            <p>{{hero.competitive['BioticFieldsDeployed'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Biotic Fields Deployed</strong></p>
            <p>{{hero.quickplay['BioticFieldsDeployed'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Soldier: 76'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Biotic Field Healing</strong></p>
            <p>{{hero.competitive['BioticFieldHealingDone'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Biotic Field Healing</strong></p>
            <p>{{hero.quickplay['BioticFieldHealingDone'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Sombra ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->
        <!-- CURRENTLY NO DATA -->


        <!-- ============================================================================================================================ -->
        <!-- Symmetra ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Symmetra'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Teleporter Uptime</strong></p>
            <p>{{hero.competitive['TeleporterUptime'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Teleporter Uptime</strong></p>
            <p>{{hero.quickplay['TeleporterUptime'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Symmetra'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Teleporter Uptime</strong></p>
            <p>{{hero.competitive['TeleporterUptime-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Teleporter Uptime</strong></p>
            <p>{{hero.quickplay['TeleporterUptime-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Symmetra'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Best Teleporter Uptime</strong></p>
            <p>{{hero.competitive['TeleporterUptime-BestinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Best Teleporter Uptime</strong></p>
            <p>{{hero.quickplay['TeleporterUptime-BestinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Symmetra'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Players Teleported</strong></p>
            <p>{{hero.competitive['PlayersTeleported'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Players Teleported</strong></p>
            <p>{{hero.quickplay['PlayersTeleported'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Symmetra'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Players Teleported</strong></p>
            <p>{{hero.competitive['PlayersTeleported-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Players Teleported</strong></p>
            <p>{{hero.quickplay['PlayersTeleported-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Symmetra'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Players Teleported</strong></p>
            <p>{{hero.competitive['PlayersTeleported-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Players Teleported</strong></p>
            <p>{{hero.quickplay['PlayersTeleported-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Symmetra'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Sentry Turret Kills</strong></p>
            <p>{{hero.competitive['SentryTurretKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Sentry Turret Kills</strong></p>
            <p>{{hero.quickplay['SentryTurretKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Symmetra'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Sentry Turret Kills</strong></p>
            <p>{{hero.competitive['SentryTurretKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Sentry Turret Kills</strong></p>
            <p>{{hero.quickplay['SentryTurretKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Symmetra'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Sentry Turret Kills</strong></p>
            <p>{{hero.competitive['SentryTurretKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Sentry Turret Kills</strong></p>
            <p>{{hero.quickplay['SentryTurretKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Symmetra'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Damage Blocked</strong></p>
            <p>{{hero.competitive['DamageBlocked'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Damage Blocked</strong></p>
            <p>{{hero.quickplay['DamageBlocked'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Symmetra'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Damage Blocked</strong></p>
            <p>{{hero.competitive['DamageBlocked-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Damage Blocked</strong></p>
            <p>{{hero.quickplay['DamageBlocked-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Symmetra'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Damage Blocked</strong></p>
            <p>{{hero.competitive['DamageBlocked-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Damage Blocked</strong></p>
            <p>{{hero.quickplay['DamageBlocked-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Tracer ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Tracer'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Pulse Bombs Attached</strong></p>
            <p>{{hero.competitive['PulseBombsAttached'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Pulse Bombs Attached</strong></p>
            <p>{{hero.quickplay['PulseBombsAttached'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Tracer'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Pulse Bombs Attached</strong></p>
            <p>{{hero.competitive['PulseBombsAttached-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Pulse Bombs Attached</strong></p>
            <p>{{hero.quickplay['PulseBombsAttached-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Tracer'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Pulse Bombs Attached</strong></p>
            <p>{{hero.competitive['PulseBombsAttached-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Pulse Bombs Attached</strong></p>
            <p>{{hero.quickplay['PulseBombsAttached-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Tracer'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Pulse Bomb Kills</strong></p>
            <p>{{hero.competitive['PulseBombKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Pulse Bomb Kills</strong></p>
            <p>{{hero.quickplay['PulseBombKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Tracer'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Pulse Bomb Kills</strong></p>
            <p>{{hero.competitive['PulseBombKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Pulse Bomb Kills</strong></p>
            <p>{{hero.quickplay['PulseBombKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Tracer'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Pulse Bomb Kills</strong></p>
            <p>{{hero.competitive['PulseBombKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Pulse Bomb Kills</strong></p>
            <p>{{hero.quickplay['PulseBombKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Torbjörn ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Torbjörn'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Torbj&#xF6;rn Kills</strong></p>
            <p>{{hero.competitive['Torbj&#xF6;rnKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Torbj&#xF6;rn Kills</strong></p>
            <p>{{hero.quickplay['Torbj&#xF6;rnKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Torbjörn'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Torbj&#xF6;rn Kills</strong></p>
            <p>{{hero.competitive['Torbj&#xF6;rnKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Torbj&#xF6;rn Kills</strong></p>
            <p>{{hero.quickplay['Torbj&#xF6;rnKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Torbjörn'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Torbj&#xF6;rn Kills</strong></p>
            <p>{{hero.competitive['Torbj&#xF6;rnKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Torbj&#xF6;rn Kills</strong></p>
            <p>{{hero.quickplay['Torbj&#xF6;rnKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Torbjörn'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Turret Kills</strong></p>
            <p>{{hero.competitive['TurretKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Turret Kills</strong></p>
            <p>{{hero.quickplay['TurretKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Torbjörn'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Turret Kills</strong></p>
            <p>{{hero.competitive['TurretKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Turret Kills</strong></p>
            <p>{{hero.quickplay['TurretKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Torbjörn'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Molten Core Kills</strong></p>
            <p>{{hero.competitive['MoltenCoreKillsKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Molten Core Kills</strong></p>
            <p>{{hero.quickplay['MoltenCoreKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Torbjörn'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Molten Core Kills</strong></p>
            <p>{{hero.competitive['MoltenCoreKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Molten Core Kills</strong></p>
            <p>{{hero.quickplay['MoltenCoreKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Torbjörn'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Molten Core Kills</strong></p>
            <p>{{hero.competitive['MoltenCoreKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Molten Core Kills</strong></p>
            <p>{{hero.quickplay['MoltenCoreKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Torbjörn'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Armor Packs Created</strong></p>
            <p>{{hero.competitive['ArmorPacksCreated'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Armor Packs Created</strong></p>
            <p>{{hero.quickplay['ArmorPacksCreated'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Torbjörn'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Armor Packs Created</strong></p>
            <p>{{hero.competitive['ArmorPacksCreated-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Armor Packs Created</strong></p>
            <p>{{hero.quickplay['ArmorPacksCreated-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Widowmaker ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Widowmaker'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scoped Shots</strong></p>
            <p>{{hero.competitive['Scoped Shots'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scoped Shots</strong></p>
            <p>{{hero.quickplay['ScopedShots'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Widowmaker'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scoped Accuracy</strong></p>
            <p>{{hero.competitive['ScopedAccuracy'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scoped Accuracy</strong></p>
            <p>{{hero.quickplay['ScopedAccuracy'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Widowmaker'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Best Scoped Accuracy</strong></p>
            <p>{{hero.competitive['ScopedAccuracy-BestinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Best Scoped Accuracy</strong></p>
            <p>{{hero.quickplay['ScopedAccuracy-BestinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Widowmaker'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scoped Critical Hits</strong></p>
            <p>{{hero.competitive['ScopedCriticalHits'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scoped Critical Hits</strong></p>
            <p>{{hero.quickplay['ScopedCriticalHits'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Widowmaker'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Scoped Critical Hits</strong></p>
            <p>{{hero.competitive['ScopedCriticalHits-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Scoped Critical Hits</strong></p>
            <p>{{hero.quickplay['ScopedCriticalHits-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Widowmaker'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Scoped Critical Hits</strong></p>
            <p>{{hero.competitive['ScopedCriticalHits-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Scoped Critical Hits</strong></p>
            <p>{{hero.quickplay['ScopedCriticalHits-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Widowmaker'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Venom Mine Kills</strong></p>
            <p>{{hero.competitive['VenomMineKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Venom Mine Kills</strong></p>
            <p>{{hero.quickplay['VenomMineKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Widowmaker'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Venom Mine Kills</strong></p>
            <p>{{hero.competitive['VenomMineKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Venom Mine Kills</strong></p>
            <p>{{hero.quickplay['VenomMineKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Widowmaker'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Venom Mine Kills</strong></p>
            <p>{{hero.competitive['VenomMineKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Venom Mine Kills</strong></p>
            <p>{{hero.quickplay['VenomMineKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Winston ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Harambe'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Jump Pack Kills</strong></p>
            <p>{{hero.competitive['JumpPackKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Jump Pack Kills</strong></p>
            <p>{{hero.quickplay['JumpPackKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Harambe'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Jump Pack Kills</strong></p>
            <p>{{hero.competitive['JumpPackKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Jump Pack Kills</strong></p>
            <p>{{hero.quickplay['JumpPackKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Harambe'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Jump Pack Kills</strong></p>
            <p>{{hero.competitive['JumpPackKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Jump Pack Kills</strong></p>
            <p>{{hero.quickplay['JumpPackKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Harambe'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Primal Rage Kills</strong></p>
            <p>{{hero.competitive['PrimalRageKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Primal Rage Kills</strong></p>
            <p>{{hero.quickplay['PrimalRageKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Harambe'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Primal Rage Kills</strong></p>
            <p>{{hero.competitive['PrimalRageKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Primal Rage Kills</strong></p>
            <p>{{hero.quickplay['PrimalRageKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Harambe'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Primal Rage Kills</strong></p>
            <p>{{hero.competitive['PrimalRageKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Primal Rage Kills</strong></p>
            <p>{{hero.quickplay['PrimalRageKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Harambe'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Players Knocked Back</strong></p>
            <p>{{hero.competitive['PlayersKnockedBack'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Players Knocked Back</strong></p>
            <p>{{hero.quickplay['PlayersKnockedBack'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Harambe'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Players Knocked Back</strong></p>
            <p>{{hero.competitive['PlayersKnockedBack-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Players Knocked Back</strong></p>
            <p>{{hero.quickplay['PlayersKnockedBack-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Harambe'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Players Knocked Back</strong></p>
            <p>{{hero.competitive['PlayersKnockedBack-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Players Knocked Back</strong></p>
            <p>{{hero.quickplay['PlayersKnockedBack-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Harambe'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Environmental Kills</strong></p>
            <p>{{hero.competitive['EnvironmentalKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Environmental Kills</strong></p>
            <p>{{hero.quickplay['EnvironmentalKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Zarya ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Zarya'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Lifetime Energy Accumulation</strong></p>
            <p>{{hero.competitive['LifetimeEnergyAccumulation'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Lifetime Energy Accumulation</strong></p>
            <p>{{hero.quickplay['LifetimeEnergyAccumulation'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Zarya'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>High Energy Kills</strong></p>
            <p>{{hero.competitive['HighEnergyKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>High Energy Kills</strong></p>
            <p>{{hero.quickplay['HighEnergyKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Zarya'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg High Energy Kills</strong></p>
            <p>{{hero.competitive['HighEnergyKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg High Energy Kills</strong></p>
            <p>{{hero.quickplay['HighEnergyKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Zarya'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most High Energy Kills</strong></p>
            <p>{{hero.competitive['HighEnergyKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most High Energy Kills</strong></p>
            <p>{{hero.quickplay['HighEnergyKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Zarya'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Projected Barriers Applied</strong></p>
            <p>{{hero.competitive['ProjectedBarriersApplied'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Projected Barriers Applied</strong></p>
            <p>{{hero.quickplay['ProjectedBarriersApplied'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Zarya'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Projected Barriers Applied</strong></p>
            <p>{{hero.competitive['ProjectedBarriersApplied-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Projected Barriers Applied</strong></p>
            <p>{{hero.quickplay['ProjectedBarriersApplied-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Zarya'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Projected Barriers Applied</strong></p>
            <p>{{hero.competitive['ProjectedBarriersApplied-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Projected Barriers Applied</strong></p>
            <p>{{hero.quickplay['ProjectedBarriersApplied-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Zarya'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Lifetime Graviton Surge Kills</strong></p>
            <p>{{hero.competitive['LifetimeGravitonSurgeKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Lifetime Graviton Surge Kills</strong></p>
            <p>{{hero.quickplay['LifetimeGravitonSurgeKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Zarya'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Graviton Surge Kills</strong></p>
            <p>{{hero.competitive['GravitonSurgeKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Graviton Surge Kills</strong></p>
            <p>{{hero.quickplay['GravitonSurgeKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Zarya'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Graviton Surge Kills</strong></p>
            <p>{{hero.competitive['GravitonSurgeKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Graviton Surge Kills</strong></p>
            <p>{{hero.quickplay['GravitonSurgeKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- Zenyatta ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-card-column v-if="hero.name === 'Zenyatta'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Orb Healing</strong></p>
            <p>{{hero.competitive['HealingDone'] - hero.competitive['TranscendenceHealing'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Orb Healing</strong></p>
            <p>{{this.numberWithCommas(this.spliceInt(hero.quickplay['HealingDone']) - this.spliceInt(hero.quickplay['TranscendenceHealing'])) || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Zenyatta'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Transcendence Healing</strong></p>
            <p>{{hero.competitive['TranscendenceHealing'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Transcendence Healing</strong></p>
            <p>{{hero.quickplay['TranscendenceHealing'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Zenyatta'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Best Transcendence Healing</strong></p>
            <p>{{hero.competitive['TranscendenceHealing-Best'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Best Transcendence Healing</strong></p>
            <p>{{hero.quickplay['TranscendenceHealing-Best'] || '---'}} </p>
          </v-card-text>
        </v-card-column>


      </v-card-row>
      <!-- End Hero Stats Row -->
    </v-card-column>
  </v-card-row>
</v-card>
</template>

<script>
export default {
  name: 'hero-card',
  props: ['hero', 'viewMode'],
  data () {
    return {
      fullStats: false,
      noCrit: ['Ana', 'Junkrat', 'Pharah', 'Symmetra', 'Reinhardt', 'Harambe', 'Zarya']
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
          return 'Torbjoern'
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

.heroCard {
  text-align: center;
  background: black;
  background: #060606; /* Old browsers */
  background: -moz-linear-gradient(left, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222222', endColorstr='#222222',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  text-shadow: -1px 1px 20px black;
}

.card__text {
  padding-left: 15px;
  padding-right: 15px;
  color:white;
  font-family: sans-serif;
  font-size: 10px;
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

#Torbjoern {
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
