<template>
<v-card class="heroCard">
  <!-- Title -->
  <v-card-row class="indigo cardTitleRow">
    <v-card-title @click="toggleHeroStats">
      <span class="white--text">{{hero.name}}</span>
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
            <p>{{hero.quick.TimePlayed || '---'}}</p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Games Won</strong></p>
            <p>{{hero.competitive.GamesWon || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Games Won</strong></p>
            <p>{{hero.quick.GamesWon || '---'}} </p>
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
            <p>{{hero.quick.TimeSpentonFire || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Fire</strong></p>
            <p>{{hero.competitive['TimeSpentonFire-Average'] || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Avg Fire</strong></p>
            <p>{{hero.quick['TimeSpentonFire-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Fire</strong></p>
            <p>{{hero.competitive['TimeSpentonFire-MostinGame'] || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Most Fire</strong></p>
            <p>{{hero.quick['TimeSpentonFire-MostinGame'] || '---'}} </p>
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
            <p>{{hero.quick['Medals-Gold'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column class="medalColumn">
          <v-card-text class="card_text medalText" v-if="viewMode ==='Competitive'">
            <v-icon class="silverMedal">fiber_manual_record</v-icon>
            <p>{{hero.competitive['Medals-Silver'] || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text medalText" v-if="viewMode ==='Quickplay'">
            <v-icon class="silverMedal">fiber_manual_record</v-icon>
            <p>{{hero.quick['Medals-Silver'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column class="medalColumn">
          <v-card-text class="card_text medalText" v-if="viewMode ==='Competitive'">
            <v-icon class="bronzeMedal">fiber_manual_record</v-icon>
            <p>{{hero.competitive['Medals-Bronze'] || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text medalText" v-if="viewMode ==='Quickplay'">
            <v-icon class="bronzeMedal">fiber_manual_record</v-icon>
            <p>{{hero.quick['Medals-Bronze'] || '---'}} </p>
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
            <p>{{hero.quick.Cards || hero.quick.Card || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Eliminations</strong></p>
            <p>{{hero.competitive.Eliminations || hero.competitive.Elimination || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Eliminations</strong></p>
            <p>{{hero.quick.Eliminations || hero.quick.Elimination || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Average Eliminations</strong></p>
            <p>{{hero.competitive['Eliminations-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Average Eliminations</strong></p>
            <p>{{hero.quick['Eliminations-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Deaths</strong></p>
            <p>{{hero.competitive.Deaths || hero.competitive.Death || '---'}} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Deaths</strong></p>
            <p>{{hero.quick.Deaths || hero.quick.Death || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Average Deaths</strong></p>
            <p>{{hero.competitive['Deaths-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Average Deaths</strong></p>
            <p>{{hero.quick['Deaths-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Eliminations per Life</strong></p>
            <p>{{hero.competitive['EliminationsperLife'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Eliminations per Lfe</strong></p>
            <p>{{hero.quick['EliminationsperLife'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Best Kill Streak</strong></p>
            <p>{{hero.competitive['KillStreak-Best'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Best Kill Streak</strong></p>
            <p>{{hero.quick['KillStreak-Best'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Weapon Accuracy</strong></p>
            <p>{{hero.competitive['WeaponAccuracy'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Weapon Accuracy</strong></p>
            <p>{{hero.quick['WeaponAccuracy'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

      </v-card-row>

    </v-card-column>

  </v-card-row>

  <hr/>

  <!-- Role specific Stats -->
  <v-card-row v-show="fullStats" class="roleStatRow">
    <v-card-column>

      <!-- Row Heading -->
      <v-card-row class="statHeader">
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
            <p>{{hero.quick['HealingDone'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Avg Healing</strong></p>
            <p>{{hero.competitive['HealingDone-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Healing</strong></p>
            <p>{{hero.quick['HealingDone-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most Healing in Game</strong></p>
            <p>{{hero.competitive['HealingDone-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Healing in Game</strong></p>
            <p>{{hero.quick['HealingDone-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most Healing in Life</strong></p>
            <p>{{hero.competitive['HealingDone-MostinLife'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Healing in Life</strong></p>
            <p>{{hero.quick['HealingDone-MostinLife'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Self Healing</strong></p>
            <p>{{hero.quick['SelfHealing'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Avg Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Self Healing</strong></p>
            <p>{{hero.quick['SelfHealing-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Defensive Assists</strong></p>
            <p>{{hero.competitive['DefensiveAssists'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Defensive Assists</strong></p>
            <p>{{hero.quick['DefensiveAssists'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Avg D. Assists</strong></p>
            <p>{{hero.competitive['DefensiveAssists-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg D. Assists</strong></p>
            <p>{{hero.quick['DefensiveAssists-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most D. Assists</strong></p>
            <p>{{hero.competitive['DefensiveAssists-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most D. Assists</strong></p>
            <p>{{hero.quick['DefensiveAssists-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Offensive Assists</strong></p>
            <p>{{hero.competitive['OffensiveAssists'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Offensive Assists</strong></p>
            <p>{{hero.quick['OffensiveAssists'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Avg O. Assists</strong></p>
            <p>{{hero.competitive['OffensiveAssists-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg O. Assists</strong></p>
            <p>{{hero.quick['OffensiveAssists-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column  v-if="hero.role === 'support'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most O. Assists</strong></p>
            <p>{{hero.competitive['OffensiveAssists-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most O. Assists</strong></p>
            <p>{{hero.quick['OffensiveAssists-MostinGame'] || '---'}} </p>
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
            <p>{{hero.quick['DamageBlocked'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Avg Damage Blocked</strong></p>
            <p>{{hero.competitive['DamageBlocked-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Damage Blocked</strong></p>
            <p>{{hero.quick['DamageBlocked-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Most Damage Blocked</strong></p>
            <p>{{hero.competitive['DamageBlocked-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Damage Blocked</strong></p>
            <p>{{hero.quick['DamageBlocked-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Objective Time</strong></p>
            <p>{{hero.competitive['ObjectiveTime'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Objective Time</strong></p>
            <p>{{hero.quick['ObjectiveTime'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Avg Obj Time</strong></p>
            <p>{{hero.competitive['ObjectiveTime-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Obj Time</strong></p>
            <p>{{hero.quick['ObjectiveTime-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Most Obj Time</strong></p>
            <p>{{hero.competitive['ObjectiveTime-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Obj Time</strong></p>
            <p>{{hero.quick['ObjectiveTime-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Objective Kills</strong></p>
            <p>{{hero.competitive['ObjectiveKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Objective Kills</strong></p>
            <p>{{hero.quick['ObjectiveKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Avg Obj Kills</strong></p>
            <p>{{hero.competitive['ObjectiveKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Obj Kills</strong></p>
            <p>{{hero.quick['ObjectiveKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'tank'">
          <v-card-text class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Most Obj Kills</strong></p>
            <p>{{hero.competitive['ObjectiveKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Obj Kills</strong></p>
            <p>{{hero.quick['ObjectiveKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- End Tank Stats -->
        <!-- Damage and Defense Hero Stats -->

        <v-card-column v-if="hero.role === 'offense' || 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Solo Kills</strong></p>
            <p>{{hero.competitive['SoloKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Solo Kills</strong></p>
            <p>{{hero.quick['SoloKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Solo Kills</strong></p>
            <p>{{hero.competitive['SoloKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Solo Kills</strong></p>
            <p>{{hero.quick['SoloKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Solo Kills</strong></p>
            <p>{{hero.competitive['SoloKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Solo Kills</strong></p>
            <p>{{hero.quick['SoloKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Final Blows</strong></p>
            <p>{{hero.competitive['FinalBlows'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Final Blows</strong></p>
            <p>{{hero.quick['FinalBlows'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Final Blows</strong></p>
            <p>{{hero.competitive['FinalBlows-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Final Blows</strong></p>
            <p>{{hero.quick['FinalBlows-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Final Blows</strong></p>
            <p>{{hero.competitive['FinalBlows-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Final Blows</strong></p>
            <p>{{hero.quick['FinalBlows-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Melee Final Blows</strong></p>
            <p>{{hero.competitive['MeleeFinalBlows'] || hero.competitive['MeleeFinalBlow'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Melee Final Blows</strong></p>
            <p>{{hero.quick['MeleeFinalBlows'] || hero.quick['MeleeFinalBlow'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Melee Final Blows</strong></p>
            <p>{{hero.competitive['MeleeFinalBlows-Average'] || hero.competitive['MeleeFinalBlow-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Melee Final Blows</strong></p>
            <p>{{hero.quick['MeleeFinalBlows-Average'] || hero.quick['MeleeFinalBlow-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Melee Final Blows</strong></p>
            <p>{{hero.competitive['MeleeFinalBlows-MostinGame'] || hero.competitive['MeleeFinalBlow-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Melee Final Blows</strong></p>
            <p>{{hero.quick['MeleeFinalBlows-MostinGame'] || hero.quick['MeleeFinalBlow-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Critical Hits</strong></p>
            <p>{{hero.competitive['CriticalHits'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Critical Hits</strong></p>
            <p>{{hero.quick['CriticalHits'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Critical Hits</strong></p>
            <p>{{hero.competitive['CriticalHits-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Critical Hits</strong></p>
            <p>{{hero.quick['CriticalHits-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Critical Hits</strong></p>
            <p>{{hero.competitive['CriticalHits-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Critical Hits</strong></p>
            <p>{{hero.quick['CriticalHits-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.role === 'offense' || 'defense'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Critical Hit %</strong></p>
            <p>{{hero.competitive['CriticalHitAccuracy'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Critical Hit %</strong></p>
            <p>{{hero.quick['CriticalHitAccuracy'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

      </v-card-row>
    </v-card-column>

  </v-card-row>
  <hr/>

  <!-- Hero Specific Stats -->
  <v-card-row v-show="fullStats" class="heroStatRow">
    <v-card-column>

      <!-- Row Heading -->
      <v-card-row class="statHeader">
        <p>Hero Stats</p>
      </v-card-row>

      <v-card-row>

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
            <p>{{hero.quick['EnemiesSlept'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Enemies Slept</strong></p>
            <p>{{hero.competitive['EnemiesSlept-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Enemies Slept</strong></p>
            <p>{{hero.quick['EnemiesSlept-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Enemies Slept</strong></p>
            <p>{{hero.competitive['EnemiesSlept-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Enemies Slept</strong></p>
            <p>{{hero.quick['EnemiesSlept-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Nano Boosts</strong></p>
            <p>{{hero.competitive['NanoBoostsApplied'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Nano Boosts</strong></p>
            <p>{{hero.quick['NanoBoostsApplied'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Nano Boosts</strong></p>
            <p>{{hero.competitive['NanoBoostsApplied-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Nano Boosts</strong></p>
            <p>{{hero.quick['NanoBoostsApplied-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Nano Boosts</strong></p>
            <p>{{hero.competitive['NanoBoostsApplied-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Nano Boosts</strong></p>
            <p>{{hero.quick['NanoBoostsApplied-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Nano Boost Assits</strong></p>
            <p>{{hero.competitive['NanoBoostAssists'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Nano Boost Assits</strong></p>
            <p>{{hero.quick['NanoBoostAssists'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Nano Assits</strong></p>
            <p>{{hero.competitive['NanoBoostAssists-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Nano Assits</strong></p>
            <p>{{hero.quick['NanoBoostAssists-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Nano Assits</strong></p>
            <p>{{hero.competitive['NanoBoostAssists-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Nano Assits</strong></p>
            <p>{{hero.quick['NanoBoostAssists-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scoped Hits</strong></p>
            <p>{{hero.competitive['ScopedHits'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scoped Hits</strong></p>
            <p>{{hero.quick['ScopedHits'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scoped Accuracy</strong></p>
            <p>{{hero.competitive['ScopedAccuracy'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scoped Accuracy</strong></p>
            <p>{{hero.quick['ScopedAccuracy'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scoped Best</strong></p>
            <p>{{hero.competitive['ScopedAccuracy-BestinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scoped Best</strong></p>
            <p>{{hero.quick['ScopedAccuracy-BestinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Unscoped Hits</strong></p>
            <p>{{hero.competitive['UnscopedShots'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Unscoped Hits</strong></p>
            <p>{{hero.quick['UnscopedShots'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Unscoped Accuracy</strong></p>
            <p>{{hero.competitive['UnscopedAccuracy'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Unscoped Accuracy</strong></p>
            <p>{{hero.quick['UnscopedAccuracy'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Ana'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Unscoped Best</strong></p>
            <p>{{hero.competitive['UnscopedAccuracy-BestinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Unscoped Best</strong></p>
            <p>{{hero.quick['UnscopedAccuracy-BestinGame'] || '---'}} </p>
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
            <p>{{hero.quick['ShotsFired'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Shots Hit</strong></p>
            <p>{{hero.competitive['ShotsHit'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Shots Hit</strong></p>
            <p>{{hero.quick['ShotsHit'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Recon Kills</strong></p>
            <p>{{hero.competitive['ReconKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Recon Kills</strong></p>
            <p>{{hero.quick['ReconKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Recon Kills</strong></p>
            <p>{{hero.competitive['ReconKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Recon Kills</strong></p>
            <p>{{hero.quick['ReconKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Recon Kills</strong></p>
            <p>{{hero.competitive['ReconKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Recon Kills</strong></p>
            <p>{{hero.quick['ReconKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Sentry Kills</strong></p>
            <p>{{hero.competitive['SentryKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Sentry Kills</strong></p>
            <p>{{hero.quick['SentryKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Sentry Kills</strong></p>
            <p>{{hero.competitive['SentryKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Sentry Kills</strong></p>
            <p>{{hero.quick['SentryKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Sentry Kills</strong></p>
            <p>{{hero.competitive['SentryKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Sentry Kills</strong></p>
            <p>{{hero.quick['SentryKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Tank Kills</strong></p>
            <p>{{hero.competitive['TankKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Tank Kills</strong></p>
            <p>{{hero.quick['TankKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Tank Kills</strong></p>
            <p>{{hero.competitive['TankKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Tank Kills</strong></p>
            <p>{{hero.quick['TankKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Tank Kills</strong></p>
            <p>{{hero.competitive['TankKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Tank Kills</strong></p>
            <p>{{hero.quick['TankKills-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Self Healing</strong></p>
            <p>{{hero.quick['SelfHealing'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Self Healing</strong></p>
            <p>{{hero.quick['SelfHealing-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Bastion'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Self Healing</strong></p>
            <p>{{hero.quick['SelfHealing-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <!-- ============================================================================================================================ -->
        <!-- D.Va ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->


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
            <p>{{hero.quick['Dragonblades'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Genji'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Dragonblade Kills</strong></p>
            <p>{{hero.competitive['DragonbladeKills'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Dragonblade Kills</strong></p>
            <p>{{hero.quick['DragonbladeKills'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Genji'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Dragonblade Kills</strong></p>
            <p>{{hero.competitive['DragonbladeKills-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Dragonblade Kills</strong></p>
            <p>{{hero.quick['DragonbladeKills-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column v-if="hero.name === 'Genji'">
          <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Dragonblade Kills</strong></p>
            <p>{{hero.competitive['DragonbladeKills-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Dragonblade Kills</strong></p>
            <p>{{hero.quick['DragonbladeKills-MostinGame'] || '---'}} </p>
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
      fullStats: false
    }
  },
  methods: {
    toggleHeroStats: function () {
      if (this.fullStats === true) {
        this.fullStats = false
      } else if (this.fullStats === false) {
        this.fullStats = true
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
  text-align: left;
}

.card__text {
  padding-left: 15px;
  padding-right: 15px;
}

.cardTitleRow {
  height: 45px;
}

.statHeader {
  font-weight: bold;
  text-decoration: underline;
  justify-content: center;
  margin: 0;
}

.statHeader p {
  margin: 0;
}

#avatar {
  min-width: 100px;
  max-width: 100px;
  min-height: 100px;
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
</style>
