hero details dump

<!-- Content -->
  <v-row>

    <v-col>
      <v-row>
        <v-col>
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Time Played</strong></p>
            <p>{{hero.competitive.playtime || '---'}} </p>
          </div>

          <div class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Time Played</strong></p>
            <p>{{hero.quickplay.playtime || '---'}}</p>
          </div>
        </v-col>

        <v-col>
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Games Won</strong></p>
            <p>{{hero.competitive.GamesWon || '---'}} </p>
          </div>

          <div class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Games Won</strong></p>
            <p>{{hero.quickplay.GamesWon || '---'}} </p>
          </div>
        </v-col>

        <v-col v-show="viewMode ==='Competitive'">
          <div class="card_text">
            <p><strong>Games Lost</strong></p>
            <p>{{hero.competitive.GamesLost || '---'}} </p>
          </div>
        </v-col>

        <v-col v-show="viewMode ==='Competitive'">
          <div class="card_text">
            <p><strong>Win %</strong></p>
            <p>{{hero.competitive.WinPercentage || '---'}} </p>
          </div>
        </v-col>

        <v-col>
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Time on Fire</strong></p>
            <p>{{hero.competitive.TimeSpentonFire || '---'}} </p>
          </div>

          <div class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Time on Fire</strong></p>
            <p>{{hero.quickplay.TimeSpentonFire || '---'}} </p>
          </div>
        </v-col>

        <v-col>
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Fire</strong></p>
            <p>{{hero.competitive['TimeSpentonFire-Average'] || '---'}} </p>
          </div>

          <div class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Avg Fire</strong></p>
            <p>{{hero.quickplay['TimeSpentonFire-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col>
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Fire</strong></p>
            <p>{{hero.competitive['TimeSpentonFire-MostinGame'] || '---'}} </p>
          </div>

          <div class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Most Fire</strong></p>
            <p>{{hero.quickplay['TimeSpentonFire-MostinGame'] || '---'}} </p>
          </div>
        </v-col>


        <!-- Medals -->

        <v-col class="medalColumn">
          <div class="card_text medalText" v-if="viewMode ==='Competitive'">
            <v-icon class="goldMedal">fiber_manual_record</v-icon>
            <p>{{hero.competitive['Medals-Gold'] || '---'}} </p>
          </div>

          <div class="card_text medalText" v-if="viewMode ==='Quickplay'">
            <v-icon class="goldMedal">fiber_manual_record</v-icon>
            <p>{{hero.quickplay['Medals-Gold'] || '---'}} </p>
          </div>
        </v-col>

        <v-col class="medalColumn">
          <div class="card_text medalText" v-if="viewMode ==='Competitive'">
            <v-icon class="silverMedal">fiber_manual_record</v-icon>
            <p>{{hero.competitive['Medals-Silver'] || '---'}} </p>
          </div>

          <div class="card_text medalText" v-if="viewMode ==='Quickplay'">
            <v-icon class="silverMedal">fiber_manual_record</v-icon>
            <p>{{hero.quickplay['Medals-Silver'] || '---'}} </p>
          </div>
        </v-col>

        <v-col class="medalColumn">
          <div class="card_text medalText" v-if="viewMode ==='Competitive'">
            <v-icon class="bronzeMedal">fiber_manual_record</v-icon>
            <p>{{hero.competitive['Medals-Bronze'] || '---'}} </p>
          </div>

          <div class="card_text medalText" v-if="viewMode ==='Quickplay'">
            <v-icon class="bronzeMedal">fiber_manual_record</v-icon>
            <p>{{hero.quickplay['Medals-Bronze'] || '---'}} </p>
          </div>
        </v-col>

        <!-- End Medals -->

        <v-col>
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Cards</strong></p>
            <p>{{hero.competitive.Cards || hero.competitive.Card || '---'}} </p>
          </div>

          <div class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Cards</strong></p>
            <p>{{hero.quickplay.Cards || hero.quickplay.Card || '---'}} </p>
          </div>
        </v-col>

        <v-col>
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Elims</strong></p>
            <p>{{hero.competitive.Eliminations || hero.competitive.Elimination || '---'}} </p>
          </div>

          <div class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Elims</strong></p>
            <p>{{hero.quickplay.Eliminations || hero.quickplay.Elimination || '---'}} </p>
          </div>
        </v-col>

        <v-col>
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Elims</strong></p>
            <p>{{hero.competitive['Eliminations-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Avg Elims</strong></p>
            <p>{{hero.quickplay['Eliminations-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col>
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Deaths</strong></p>
            <p>{{hero.competitive.Deaths || hero.competitive.Death || '---'}} </p>
          </div>

          <div class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Deaths</strong></p>
            <p>{{hero.quickplay.Deaths || hero.quickplay.Death || '---'}} </p>
          </div>
        </v-col>

        <v-col>
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Deaths</strong></p>
            <p>{{hero.competitive['Deaths-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Avg Deaths</strong></p>
            <p>{{hero.quickplay['Deaths-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col>
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Elims/Life</strong></p>
            <p>{{hero.competitive['EliminationsperLife'] || '---' }} </p>
          </div>

          <div class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Elims/Life</strong></p>
            <p>{{hero.quickplay['EliminationsperLife'] || '---'}} </p>
          </div>
        </v-col>

        <v-col>
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Best Streak</strong></p>
            <p>{{hero.competitive['KillStreak-Best'] || '---' }} </p>
          </div>

          <div class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Best Streak</strong></p>
            <p>{{hero.quickplay['KillStreak-Best'] || '---'}} </p>
          </div>
        </v-col>

        <v-col>
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Weapon Accuracy</strong></p>
            <p>{{hero.competitive['WeaponAccuracy'] || '---' }} </p>
          </div>

          <div class="card_text" v-if="viewMode ==='Quickplay'">
            <p><strong>Weapon Accuracy</strong></p>
            <p>{{hero.quickplay['WeaponAccuracy'] || '---'}} </p>
          </div>
        </v-col>

        <v-col>
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Damage Done</strong></p>
            <p>{{hero.competitive['DamageDone'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Damage Done</strong></p>
            <p>{{hero.quickplay['DamageDone'] || '---'}} </p>
          </div>
        </v-col>

        <v-col>
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Avg Damage</strong></p>
            <p>{{hero.competitive['DamageDone-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Damage</strong></p>
            <p>{{hero.quickplay['DamageDone-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col>
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most Damage</strong></p>
            <p>{{hero.competitive['DamageDone-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Damage</strong></p>
            <p>{{hero.quickplay['DamageDone-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

      </v-row>

    </v-col>
  </v-row>

  <hr/>

  <!-- Role specific Stats -->
  <v-row v-if="hero.name !== 'Symmetra'" class="roleStatRow">
    <v-col>

      <!-- Row Heading -->
      <v-row  class="statHeader">
        <p>{{hero.role}} Stats</p>
      </v-row>

      <v-row>

        <!-- Support Stats -->
        <v-col  v-if="hero.role === 'support'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Healing Done</strong></p>
            <p>{{hero.competitive['HealingDone'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Healing Done</strong></p>
            <p>{{hero.quickplay['HealingDone'] || '---'}} </p>
          </div>
        </v-col>

        <v-col  v-if="hero.role === 'support'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Avg Healing</strong></p>
            <p>{{hero.competitive['HealingDone-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Healing</strong></p>
            <p>{{hero.quickplay['HealingDone-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col  v-if="hero.role === 'support'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most Healing in Game</strong></p>
            <p>{{hero.competitive['HealingDone-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Healing in Game</strong></p>
            <p>{{hero.quickplay['HealingDone-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col  v-if="hero.role === 'support'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most Healing in Life</strong></p>
            <p>{{hero.competitive['HealingDone-MostinLife'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Healing in Life</strong></p>
            <p>{{hero.quickplay['HealingDone-MostinLife'] || '---'}} </p>
          </div>
        </v-col>

        <v-col  v-if="hero.role === 'support'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Self Healing</strong></p>
            <p>{{hero.quickplay['SelfHealing'] || '---'}} </p>
          </div>
        </v-col>

        <v-col  v-if="hero.role === 'support'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Avg Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Self Healing</strong></p>
            <p>{{hero.quickplay['SelfHealing-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col  v-if="hero.role === 'support'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>D. Assists</strong></p>
            <p>{{hero.competitive['DefensiveAssists'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>D. Assists</strong></p>
            <p>{{hero.quickplay['DefensiveAssists'] || '---'}} </p>
          </div>
        </v-col>

        <v-col  v-if="hero.role === 'support'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Avg D. Assists</strong></p>
            <p>{{hero.competitive['DefensiveAssists-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg D. Assists</strong></p>
            <p>{{hero.quickplay['DefensiveAssists-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col  v-if="hero.role === 'support'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most D. Assists</strong></p>
            <p>{{hero.competitive['DefensiveAssists-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most D. Assists</strong></p>
            <p>{{hero.quickplay['DefensiveAssists-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col  v-if="hero.role === 'support'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>O. Assists</strong></p>
            <p>{{hero.competitive['OffensiveAssists'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>O. Assists</strong></p>
            <p>{{hero.quickplay['OffensiveAssists'] || '---'}} </p>
          </div>
        </v-col>

        <v-col  v-if="hero.role === 'support'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Avg O. Assists</strong></p>
            <p>{{hero.competitive['OffensiveAssists-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg O. Assists</strong></p>
            <p>{{hero.quickplay['OffensiveAssists-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col  v-if="hero.role === 'support'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most O. Assists</strong></p>
            <p>{{hero.competitive['OffensiveAssists-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most O. Assists</strong></p>
            <p>{{hero.quickplay['OffensiveAssists-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- End Support Stats -->

        <!-- Tank Stats -->
        <v-col v-if="hero.role === 'tank'">
          <div class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Damage Blocked</strong></p>
            <p>{{hero.competitive['DamageBlocked'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Damage Blocked</strong></p>
            <p>{{hero.quickplay['DamageBlocked'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.role === 'tank'">
          <div class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Avg Damage Blocked</strong></p>
            <p>{{hero.competitive['DamageBlocked-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Damage Blocked</strong></p>
            <p>{{hero.quickplay['DamageBlocked-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.role === 'tank'">
          <div class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Most Damage Blocked</strong></p>
            <p>{{hero.competitive['DamageBlocked-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Damage Blocked</strong></p>
            <p>{{hero.quickplay['DamageBlocked-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.role === 'tank'">
          <div class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Objective Time</strong></p>
            <p>{{hero.competitive['ObjectiveTime'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Objective Time</strong></p>
            <p>{{hero.quickplay['ObjectiveTime'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.role === 'tank'">
          <div class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Avg Obj Time</strong></p>
            <p>{{hero.competitive['ObjectiveTime-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Obj Time</strong></p>
            <p>{{hero.quickplay['ObjectiveTime-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.role === 'tank'">
          <div class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Most Obj Time</strong></p>
            <p>{{hero.competitive['ObjectiveTime-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Obj Time</strong></p>
            <p>{{hero.quickplay['ObjectiveTime-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.role === 'tank'">
          <div class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Objective Kills</strong></p>
            <p>{{hero.competitive['ObjectiveKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Objective Kills</strong></p>
            <p>{{hero.quickplay['ObjectiveKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.role === 'tank'">
          <div class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Avg Obj Kills</strong></p>
            <p>{{hero.competitive['ObjectiveKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Obj Kills</strong></p>
            <p>{{hero.quickplay['ObjectiveKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.role === 'tank'">
          <div class="card_text" v-show="viewMode ==='Competitive'" >
            <p><strong>Most Obj Kills</strong></p>
            <p>{{hero.competitive['ObjectiveKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Obj Kills</strong></p>
            <p>{{hero.quickplay['ObjectiveKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- End Tank Stats -->
        <!-- Damage and Defense Hero Stats -->

        <v-col v-if="hero.role === 'offense' || hero.role === 'defense'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Solo Kills</strong></p>
            <p>{{hero.competitive['SoloKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Solo Kills</strong></p>
            <p>{{hero.quickplay['SoloKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.role === 'offense' || hero.role === 'defense'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Solo Kills</strong></p>
            <p>{{hero.competitive['SoloKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Solo Kills</strong></p>
            <p>{{hero.quickplay['SoloKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.role === 'offense' || hero.role === 'defense'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Solo Kills</strong></p>
            <p>{{hero.competitive['SoloKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Solo Kills</strong></p>
            <p>{{hero.quickplay['SoloKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.role === 'offense' || hero.role === 'defense'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Final Blows</strong></p>
            <p>{{hero.competitive['FinalBlows'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Final Blows</strong></p>
            <p>{{hero.quickplay['FinalBlows'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.role === 'offense' || hero.role === 'defense'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Final Blows</strong></p>
            <p>{{hero.competitive['FinalBlows-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Final Blows</strong></p>
            <p>{{hero.quickplay['FinalBlows-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.role === 'offense' || hero.role === 'defense'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Final Blows</strong></p>
            <p>{{hero.competitive['FinalBlows-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Final Blows</strong></p>
            <p>{{hero.quickplay['FinalBlows-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.role === 'offense' || hero.role === 'defense'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Melee Final Blows</strong></p>
            <p>{{hero.competitive['MeleeFinalBlows'] || hero.competitive['MeleeFinalBlow'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Melee Final Blows</strong></p>
            <p>{{hero.quickplay['MeleeFinalBlows'] || hero.quickplay['MeleeFinalBlow'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.role === 'offense' || hero.role === 'defense'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Melee Final Blows</strong></p>
            <p>{{hero.competitive['MeleeFinalBlows-Average'] || hero.competitive['MeleeFinalBlow-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Melee Final Blows</strong></p>
            <p>{{hero.quickplay['MeleeFinalBlows-Average'] || hero.quickplay['MeleeFinalBlow-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.role === 'offense' || hero.role === 'defense'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Melee Final Blows</strong></p>
            <p>{{hero.competitive['MeleeFinalBlows-MostinGame'] || hero.competitive['MeleeFinalBlow-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Melee Final Blows</strong></p>
            <p>{{hero.quickplay['MeleeFinalBlows-MostinGame'] || hero.quickplay['MeleeFinalBlow-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

      </v-row>
    </v-col>
  </v-row>
  <hr v-if="hero.name !== 'Symmetra'"/>

  <!-- Hero Specific Stats -->
  <v-row class="heroStatRow">
    <v-col>

      <!-- Row Heading -->
      <v-row class="statHeader">
        <p>Hero Stats</p>
      </v-row>

      <v-row>

      <!-- ============================================================================================================================ -->
      <!-- GENERAL ------------------------------------------------------------------------------------------------------------------>
      <!-- ============================================================================================================================ -->

        <v-col v-if="noCrit.indexOf(hero.name) < 0">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Crits</strong></p>
            <p>{{hero.competitive['CriticalHits'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Crits</strong></p>
            <p>{{hero.quickplay['CriticalHits'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="noCrit.indexOf(hero.name) < 0">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Crits</strong></p>
            <p>{{hero.competitive['CriticalHits-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Crits</strong></p>
            <p>{{hero.quickplay['CriticalHits-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="noCrit.indexOf(hero.name) < 0">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Crits</strong></p>
            <p>{{hero.competitive['CriticalHits-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Crits</strong></p>
            <p>{{hero.quickplay['CriticalHits-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="noCrit.indexOf(hero.name) < 0">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Crit %</strong></p>
            <p>{{hero.competitive['CriticalHitAccuracy'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Crit %</strong></p>
            <p>{{hero.quickplay['CriticalHitAccuracy'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- ANA ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Ana'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Enemies Slept</strong></p>
            <p>{{hero.competitive['EnemiesSlept'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Enemies Slept</strong></p>
            <p>{{hero.quickplay['EnemiesSlept'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Ana'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Enemies Slept</strong></p>
            <p>{{hero.competitive['EnemiesSlept-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Enemies Slept</strong></p>
            <p>{{hero.quickplay['EnemiesSlept-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Ana'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Enemies Slept</strong></p>
            <p>{{hero.competitive['EnemiesSlept-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Enemies Slept</strong></p>
            <p>{{hero.quickplay['EnemiesSlept-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Ana'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Nano Boosts</strong></p>
            <p>{{hero.competitive['NanoBoostsApplied'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Nano Boosts</strong></p>
            <p>{{hero.quickplay['NanoBoostsApplied'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Ana'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Nano Boosts</strong></p>
            <p>{{hero.competitive['NanoBoostsApplied-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Nano Boosts</strong></p>
            <p>{{hero.quickplay['NanoBoostsApplied-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Ana'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Nano Boosts</strong></p>
            <p>{{hero.competitive['NanoBoostsApplied-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Nano Boosts</strong></p>
            <p>{{hero.quickplay['NanoBoostsApplied-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Ana'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Nano Boost Assits</strong></p>
            <p>{{hero.competitive['NanoBoostAssists'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Nano Boost Assits</strong></p>
            <p>{{hero.quickplay['NanoBoostAssists'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Ana'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Nano Assits</strong></p>
            <p>{{hero.competitive['NanoBoostAssists-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Nano Assits</strong></p>
            <p>{{hero.quickplay['NanoBoostAssists-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Ana'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Nano Assits</strong></p>
            <p>{{hero.competitive['NanoBoostAssists-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Nano Assits</strong></p>
            <p>{{hero.quickplay['NanoBoostAssists-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Ana'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scoped Hits</strong></p>
            <p>{{hero.competitive['ScopedHits'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scoped Hits</strong></p>
            <p>{{hero.quickplay['ScopedHits'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Ana'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scoped Accuracy</strong></p>
            <p>{{hero.competitive['ScopedAccuracy'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scoped Accuracy</strong></p>
            <p>{{hero.quickplay['ScopedAccuracy'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Ana'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scoped Best</strong></p>
            <p>{{hero.competitive['ScopedAccuracy-BestinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scoped Best</strong></p>
            <p>{{hero.quickplay['ScopedAccuracy-BestinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Ana'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Unscoped Hits</strong></p>
            <p>{{hero.competitive['UnscopedShots'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Unscoped Hits</strong></p>
            <p>{{hero.quickplay['UnscopedShots'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Ana'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Unscoped Accuracy</strong></p>
            <p>{{hero.competitive['UnscopedAccuracy'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Unscoped Accuracy</strong></p>
            <p>{{hero.quickplay['UnscopedAccuracy'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Ana'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Unscoped Best</strong></p>
            <p>{{hero.competitive['UnscopedAccuracy-BestinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Unscoped Best</strong></p>
            <p>{{hero.quickplay['UnscopedAccuracy-BestinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Bastion ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Bastion'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Shots Fired</strong></p>
            <p>{{hero.competitive['ShotsFired'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Shots Fired</strong></p>
            <p>{{hero.quickplay['ShotsFired'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Bastion'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Shots Hit</strong></p>
            <p>{{hero.competitive['ShotsHit'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Shots Hit</strong></p>
            <p>{{hero.quickplay['ShotsHit'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Bastion'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Recon Kills</strong></p>
            <p>{{hero.competitive['ReconKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Recon Kills</strong></p>
            <p>{{hero.quickplay['ReconKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Bastion'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Recon Kills</strong></p>
            <p>{{hero.competitive['ReconKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Recon Kills</strong></p>
            <p>{{hero.quickplay['ReconKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Bastion'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Recon Kills</strong></p>
            <p>{{hero.competitive['ReconKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Recon Kills</strong></p>
            <p>{{hero.quickplay['ReconKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Bastion'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Sentry Kills</strong></p>
            <p>{{hero.competitive['SentryKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Sentry Kills</strong></p>
            <p>{{hero.quickplay['SentryKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Bastion'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Sentry Kills</strong></p>
            <p>{{hero.competitive['SentryKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Sentry Kills</strong></p>
            <p>{{hero.quickplay['SentryKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Bastion'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Sentry Kills</strong></p>
            <p>{{hero.competitive['SentryKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Sentry Kills</strong></p>
            <p>{{hero.quickplay['SentryKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Bastion'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Tank Kills</strong></p>
            <p>{{hero.competitive['TankKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Tank Kills</strong></p>
            <p>{{hero.quickplay['TankKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Bastion'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Tank Kills</strong></p>
            <p>{{hero.competitive['TankKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Tank Kills</strong></p>
            <p>{{hero.quickplay['TankKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Bastion'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Tank Kills</strong></p>
            <p>{{hero.competitive['TankKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Tank Kills</strong></p>
            <p>{{hero.quickplay['TankKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Bastion'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Self Healing</strong></p>
            <p>{{hero.quickplay['SelfHealing'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Bastion'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Self Healing</strong></p>
            <p>{{hero.quickplay['SelfHealing-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Bastion'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Self Healing</strong></p>
            <p>{{hero.quickplay['SelfHealing-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- D.Va ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'D.Va'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Mech Deaths</strong></p>
            <p>{{hero.competitive['MechDeaths'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Mech Deaths</strong></p>
            <p>{{hero.quickplay['MechDeaths'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'D.Va'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Mechs Called</strong></p>
            <p>{{hero.competitive['MechsCalled'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Mechs Called</strong></p>
            <p>{{hero.quickplay['MechsCalled'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'D.Va'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Self-Destruct Kills</strong></p>
            <p>{{hero.competitive['Self-DestructKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Self-Destruct Kills</strong></p>
            <p>{{hero.quickplay['Self-DestructKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'D.Va'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Self-Destruct Kills</strong></p>
            <p>{{hero.competitive['Self-DestructKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Self-Destruct Kills</strong></p>
            <p>{{hero.quickplay['Self-DestructKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'D.Va'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Self-Destruct Kills</strong></p>
            <p>{{hero.competitive['Self-DestructKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Self-Destruct Kills</strong></p>
            <p>{{hero.quickplay['Self-DestructKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>


        <!-- ============================================================================================================================ -->
        <!-- Genji ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Genji'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Dragonblades</strong></p>
            <p>{{hero.competitive['Dragonblades'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Dragonblades</strong></p>
            <p>{{hero.quickplay['Dragonblades'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Genji'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Dragonblade Kills</strong></p>
            <p>{{hero.competitive['DragonbladeKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Dragonblade Kills</strong></p>
            <p>{{hero.quickplay['DragonbladeKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Genji'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Dragonblade Kills</strong></p>
            <p>{{hero.competitive['DragonbladeKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Dragonblade Kills</strong></p>
            <p>{{hero.quickplay['DragonbladeKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Genji'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Dragonblade Kills</strong></p>
            <p>{{hero.competitive['DragonbladeKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Dragonblade Kills</strong></p>
            <p>{{hero.quickplay['DragonbladeKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Hanzo ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Hanzo'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Dragonstrike Kills</strong></p>
            <p>{{hero.competitive['DragonstrikeKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Dragonstrike Kills</strong></p>
            <p>{{hero.quickplay['DragonstrikeKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Hanzo'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Dragonstrike Kills</strong></p>
            <p>{{hero.competitive['DragonstrikeKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Dragonstrike Kills</strong></p>
            <p>{{hero.quickplay['DragonstrikeKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Hanzo'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Dragonstrike Kills</strong></p>
            <p>{{hero.competitive['DragonstrikeKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Dragonstrike Kills</strong></p>
            <p>{{hero.quickplay['DragonstrikeKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Hanzo'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scatter Arv-row Kills</strong></p>
            <p>{{hero.competitive['ScatterArv-rowKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scatter Arv-row Kills</strong></p>
            <p>{{hero.quickplay['ScatterArv-rowKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Hanzo'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Scatter Arv-row Kills</strong></p>
            <p>{{hero.competitive['ScatterArv-rowKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Scatter Arv-row Kills</strong></p>
            <p>{{hero.quickplay['ScatterArv-rowKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Hanzo'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Scatter Arv-row Kills</strong></p>
            <p>{{hero.competitive['ScatterArv-rowKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Scatter Arv-row Kills</strong></p>
            <p>{{hero.quickplay['ScatterArv-rowKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Junkrat ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Junkrat'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Enemies Trapped</strong></p>
            <p>{{hero.competitive['EnemiesTrapped'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Enemies Trapped</strong></p>
            <p>{{hero.quickplay['EnemiesTrapped'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Junkrat'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Enemies Trapped</strong></p>
            <p>{{hero.competitive['EnemiesTrapped-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Enemies Trapped</strong></p>
            <p>{{hero.quickplay['EnemiesTrapped-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Junkrat'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>RIP Tire Kills</strong></p>
            <p>{{hero.competitive['RIP-TireKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>RIP Tire Kills</strong></p>
            <p>{{hero.quickplay['RIP-TireKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Junkrat'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg RIP Tire Kills</strong></p>
            <p>{{hero.competitive['RIP-TireKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg RIP Tire Kills</strong></p>
            <p>{{hero.quickplay['RIP-TireKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Junkrat'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most RIP Tire Kills</strong></p>
            <p>{{hero.competitive['RIP-TireKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most RIP Tire Kills</strong></p>
            <p>{{hero.quickplay['RIP-TireKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Lucio ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Lúcio'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Environmental Kills</strong></p>
            <p>{{hero.competitive['EnvironmentalKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Environmental Kills</strong></p>
            <p>{{hero.quickplay['EnvironmentalKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Lúcio'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Sound Barriers</strong></p>
            <p>{{hero.competitive['SoundBarriersProvided'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Sound Barriers</strong></p>
            <p>{{hero.quickplay['SoundBarriersProvided'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Lúcio'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Sound Barriers</strong></p>
            <p>{{hero.competitive['SoundBarriersProvided-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Sound Barriers</strong></p>
            <p>{{hero.quickplay['SoundBarriersProvided-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Lúcio'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Sound Barriers</strong></p>
            <p>{{hero.competitive['SoundBarriersProvided-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Sound Barriers</strong></p>
            <p>{{hero.quickplay['SoundBarriersProvided-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- McCree ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'McCree'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Fan the Hammer Kills</strong></p>
            <p>{{hero.competitive['FantheHammerKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Fan the Hammer Kills</strong></p>
            <p>{{hero.quickplay['FantheHammerKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'McCree'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Fan the Hammer Kills</strong></p>
            <p>{{hero.competitive['FantheHammerKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Fan the Hammer Kills</strong></p>
            <p>{{hero.quickplay['FantheHammerKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'McCree'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Fan the Hammer Kills</strong></p>
            <p>{{hero.competitive['FantheHammerKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Fan the Hammer Kills</strong></p>
            <p>{{hero.quickplay['FantheHammerKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'McCree'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Deadeye Kills</strong></p>
            <p>{{hero.competitive['DeadeyeKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Deadeye Kills</strong></p>
            <p>{{hero.quickplay['DeadeyeKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'McCree'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Deadeye Kills</strong></p>
            <p>{{hero.competitive['DeadeyeKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Deadeye Kills</strong></p>
            <p>{{hero.quickplay['DeadeyeKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'McCree'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Deadeye Kills</strong></p>
            <p>{{hero.competitive['DeadeyeKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Deadeye Kills</strong></p>
            <p>{{hero.quickplay['DeadeyeKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Mei ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Mei'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Blizzard Kills</strong></p>
            <p>{{hero.competitive['BlizzardKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Blizzard Kills</strong></p>
            <p>{{hero.quickplay['BlizzardKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Mei'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Blizzard Kills</strong></p>
            <p>{{hero.competitive['BlizzardKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Blizzard Kills</strong></p>
            <p>{{hero.quickplay['BlizzardKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Mei'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Blizzard Kills</strong></p>
            <p>{{hero.competitive['BlizzardKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Blizzard Kills</strong></p>
            <p>{{hero.quickplay['BlizzardKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Mei'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Enemies Frozen</strong></p>
            <p>{{hero.competitive['EnemiesFrozen'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Enemies Frozen</strong></p>
            <p>{{hero.quickplay['EnemiesFrozen'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Mei'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Enemies Frozen</strong></p>
            <p>{{hero.competitive['EnemiesFrozen-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Enemies Frozen</strong></p>
            <p>{{hero.quickplay['EnemiesFrozen-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Mei'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Enemies Frozen</strong></p>
            <p>{{hero.competitive['EnemiesFrozen-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Enemies Frozen</strong></p>
            <p>{{hero.quickplay['EnemiesFrozen-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Mercy ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Mercy'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Players Resurrected</strong></p>
            <p>{{hero.competitive['PlayersResurrected'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Players Resurrected</strong></p>
            <p>{{hero.quickplay['PlayersResurrected'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Mercy'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Players Resurrected</strong></p>
            <p>{{hero.competitive['PlayersResurrected-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Players Resurrected</strong></p>
            <p>{{hero.quickplay['PlayersResurrected-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Mercy'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Players Resurrected</strong></p>
            <p>{{hero.competitive['PlayersResurrected-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Players Resurrected</strong></p>
            <p>{{hero.quickplay['PlayersResurrected-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Mercy'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Damage Amplified</strong></p>
            <p>{{hero.competitive['DamageAmplified'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Damage Amplified</strong></p>
            <p>{{hero.quickplay['DamageAmplified'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Mercy'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Damage Amplified</strong></p>
            <p>{{hero.competitive['DamageAmplified-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Damage Amplified</strong></p>
            <p>{{hero.quickplay['DamageAmplified-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Mercy'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Damage Amplified</strong></p>
            <p>{{hero.competitive['DamageAmplified-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Damage Amplified</strong></p>
            <p>{{hero.quickplay['DamageAmplified-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Mercy'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Blaster Kills</strong></p>
            <p>{{hero.competitive['BlasterKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Blaster Kills</strong></p>
            <p>{{hero.quickplay['BlasterKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Mercy'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Blaster Kills</strong></p>
            <p>{{hero.competitive['BlasterKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Blaster Kills</strong></p>
            <p>{{hero.quickplay['BlasterKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Mercy'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Blaster Kills</strong></p>
            <p>{{hero.competitive['BlasterKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Blaster Kills</strong></p>
            <p>{{hero.quickplay['BlasterKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Pharah ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Pharah'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Direct Hits</strong></p>
            <p>{{hero.competitive['RocketDirectHits'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Direct Hits</strong></p>
            <p>{{hero.quickplay['RocketDirectHits'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Pharah'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Direct Hits</strong></p>
            <p>{{hero.competitive['RocketDirectHits-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Direct Hits</strong></p>
            <p>{{hero.quickplay['RocketDirectHits-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Pharah'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Direct Hits</strong></p>
            <p>{{hero.competitive['RocketDirectHits-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Direct Hits</strong></p>
            <p>{{hero.quickplay['RocketDirectHits-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Pharah'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Barrage Kills</strong></p>
            <p>{{hero.competitive['BarrageKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Barrage Kills</strong></p>
            <p>{{hero.quickplay['BarrageKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Pharah'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Barrage Kills</strong></p>
            <p>{{hero.competitive['BarrageKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Barrage Kills</strong></p>
            <p>{{hero.quickplay['BarrageKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Pharah'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Barrage Kills</strong></p>
            <p>{{hero.competitive['BarrageKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Barrage Kills</strong></p>
            <p>{{hero.quickplay['BarrageKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Reaper ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Reaper'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Souls Consumed</strong></p>
            <p>{{hero.competitive['SoulsConsumed'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Souls Consumed</strong></p>
            <p>{{hero.quickplay['SoulsConsumed'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Reaper'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Souls Consumed</strong></p>
            <p>{{hero.competitive['SoulsConsumed-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Souls Consumed</strong></p>
            <p>{{hero.quickplay['SoulsConsumed-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Reaper'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Souls Consumed</strong></p>
            <p>{{hero.competitive['SoulsConsumed-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Souls Consumed</strong></p>
            <p>{{hero.quickplay['SoulsConsumed-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Reaper'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Death Blossom Kills</strong></p>
            <p>{{hero.competitive['DeathBlossomKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Death Blossom Kills</strong></p>
            <p>{{hero.quickplay['DeathBlossomKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Reaper'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Death Blossom Kills</strong></p>
            <p>{{hero.competitive['DeathBlossomKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Death Blossom Kills</strong></p>
            <p>{{hero.quickplay['DeathBlossomKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Reaper'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Death Blossom Kills</strong></p>
            <p>{{hero.competitive['DeathBlossomKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Death Blossom Kills</strong></p>
            <p>{{hero.quickplay['DeathBlossomKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Reinhardt ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Reinhardt'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Charge Kills</strong></p>
            <p>{{hero.competitive['ChargeKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Charge Kills</strong></p>
            <p>{{hero.quickplay['ChargeKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Reinhardt'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Charge Kills</strong></p>
            <p>{{hero.competitive['ChargeKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Charge Kills</strong></p>
            <p>{{hero.quickplay['ChargeKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Reinhardt'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Charge Kills</strong></p>
            <p>{{hero.competitive['ChargeKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Charge Kills</strong></p>
            <p>{{hero.quickplay['ChargeKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Reinhardt'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Fire Strike Kills</strong></p>
            <p>{{hero.competitive['FireStrikeKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Fire Strike Kills</strong></p>
            <p>{{hero.quickplay['FireStrikeKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Reinhardt'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Fire Strike Kills</strong></p>
            <p>{{hero.competitive['FireStrikeKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Fire Strike Kills</strong></p>
            <p>{{hero.quickplay['FireStrikeKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Reinhardt'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Fire Strike Kills</strong></p>
            <p>{{hero.competitive['FireStrikeKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Fire Strike Kills</strong></p>
            <p>{{hero.quickplay['FireStrikeKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

          <v-col v-if="hero.name === 'Reinhardt'">
            <div class="card_text" v-if="viewMode ==='Competitive'">
              <p><strong>Earthshatter Kills</strong></p>
              <p>{{hero.competitive['EarthshatterKills'] || '---' }} </p>
            </div>

            <div class="card_text" v-else-if="viewMode ==='Quickplay'">
              <p><strong>Earthshatter Kills</strong></p>
              <p>{{hero.quickplay['EarthshatterKills'] || '---'}} </p>
            </div>
          </v-col>

          <v-col v-if="hero.name === 'Reinhardt'">
            <div class="card_text" v-if="viewMode ==='Competitive'">
              <p><strong>Avg Earthshatter Kills</strong></p>
              <p>{{hero.competitive['EarthshatterKills-Average'] || '---' }} </p>
            </div>

            <div class="card_text" v-else-if="viewMode ==='Quickplay'">
              <p><strong>Avg Earthshatter Kills</strong></p>
              <p>{{hero.quickplay['EarthshatterKills-Average'] || '---'}} </p>
            </div>
          </v-col>

          <v-col v-if="hero.name === 'Reinhardt'">
            <div class="card_text" v-if="viewMode ==='Competitive'">
              <p><strong>Most Earthshatter Kills</strong></p>
              <p>{{hero.competitive['EarthshatterKills-MostinGame'] || '---' }} </p>
            </div>

            <div class="card_text" v-else-if="viewMode ==='Quickplay'">
              <p><strong>Most Earthshatter Kills</strong></p>
              <p>{{hero.quickplay['EarthshatterKills-MostinGame'] || '---'}} </p>
            </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Roadhog ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Roadhog'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Hooks Attempted</strong></p>
            <p>{{hero.competitive['HooksAttempted'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Hooks Attempted</strong></p>
            <p>{{hero.quickplay['HooksAttempted'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Roadhog'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Hook Accuracy</strong></p>
            <p>{{hero.competitive['HookAccuracy'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Hook Accuracy</strong></p>
            <p>{{hero.quickplay['HookAccuracy'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Roadhog'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Best Hook Accuracy</strong></p>
            <p>{{hero.competitive['HookAccuracy-BestinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Best Hook Accuracy</strong></p>
            <p>{{hero.quickplay['HookAccuracy-BestinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Roadhog'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Enemies Hooked</strong></p>
            <p>{{hero.competitive['EnemiesHooked'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Enemies Hooked</strong></p>
            <p>{{hero.quickplay['EnemiesHooked'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Roadhog'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Enemies Hooked</strong></p>
            <p>{{hero.competitive['EnemiesHooked-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Enemies Hooked</strong></p>
            <p>{{hero.quickplay['EnemiesHooked-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Roadhog'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Enemies Hooked</strong></p>
            <p>{{hero.competitive['EnemiesHooked-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Enemies Hooked</strong></p>
            <p>{{hero.quickplay['EnemiesHooked-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Roadhog'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Whole Hog Kills</strong></p>
            <p>{{hero.competitive['WholeHogKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Whole Hog Kills</strong></p>
            <p>{{hero.quickplay['WholeHogKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Roadhog'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Whole Hog Kills</strong></p>
            <p>{{hero.competitive['WholeHogKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Whole Hog Kills</strong></p>
            <p>{{hero.quickplay['WholeHogKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Roadhog'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Whole Hog Kills</strong></p>
            <p>{{hero.competitive['WholeHogKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Whole Hog Kills</strong></p>
            <p>{{hero.quickplay['WholeHogKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Soldier: 76 ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Soldier: 76'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Helix Rocket Kills</strong></p>
            <p>{{hero.competitive['HelixRocketKIlls'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Helix Rocket Kills</strong></p>
            <p>{{hero.quickplay['HelixRocketKIlls'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Soldier: 76'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg H. Rocket Kills</strong></p>
            <p>{{hero.competitive['HelixRocketKIlls-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg H. Rocket Kills</strong></p>
            <p>{{hero.quickplay['HelixRocketKIlls-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Soldier: 76'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most H. Rocket Kills</strong></p>
            <p>{{hero.competitive['HelixRocketKIlls-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most H. Rocket Kills</strong></p>
            <p>{{hero.quickplay['HelixRocketKIlls-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Soldier: 76'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Tactical Visor Kills</strong></p>
            <p>{{hero.competitive['TacticalVisorKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Tactical Visor Kills</strong></p>
            <p>{{hero.quickplay['TacticalVisorKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Soldier: 76'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg T. Visor Kills</strong></p>
            <p>{{hero.competitive['TacticalVisorKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg T. Visor Kills</strong></p>
            <p>{{hero.quickplay['TacticalVisorKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Soldier: 76'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most T. Visor Kills</strong></p>
            <p>{{hero.competitive['TacticalVisorKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most T. Visor Kills</strong></p>
            <p>{{hero.quickplay['TacticalVisorKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Soldier: 76'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Healing Done</strong></p>
            <p>{{hero.competitive['HealingDone'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Healing Done</strong></p>
            <p>{{hero.quickplay['HealingDone'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Soldier: 76'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Avg Healing</strong></p>
            <p>{{hero.competitive['HealingDone-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Avg Healing</strong></p>
            <p>{{hero.quickplay['HealingDone-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Soldier: 76'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most Healing in Game</strong></p>
            <p>{{hero.competitive['HealingDone-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Healing in Game</strong></p>
            <p>{{hero.quickplay['HealingDone-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Soldier: 76'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Most Healing in Life</strong></p>
            <p>{{hero.competitive['HealingDone-MostinLife'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Most Healing in Life</strong></p>
            <p>{{hero.quickplay['HealingDone-MostinLife'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Soldier: 76'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Biotic Fields Deployed</strong></p>
            <p>{{hero.competitive['BioticFieldsDeployed'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Biotic Fields Deployed</strong></p>
            <p>{{hero.quickplay['BioticFieldsDeployed'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Soldier: 76'">
          <div class="card_text" v-show="viewMode ==='Competitive'">
            <p><strong>Biotic Field Healing</strong></p>
            <p>{{hero.competitive['BioticFieldHealingDone'] || '---' }} </p>
          </div>

          <div class="card_text" v-show="viewMode ==='Quickplay'">
            <p><strong>Biotic Field Healing</strong></p>
            <p>{{hero.quickplay['BioticFieldHealingDone'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Sombra ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->
        <!-- CURRENTLY NO DATA -->


        <!-- ============================================================================================================================ -->
        <!-- Symmetra ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Symmetra'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Teleporter Uptime</strong></p>
            <p>{{hero.competitive['TeleporterUptime'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Teleporter Uptime</strong></p>
            <p>{{hero.quickplay['TeleporterUptime'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Symmetra'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Teleporter Uptime</strong></p>
            <p>{{hero.competitive['TeleporterUptime-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Teleporter Uptime</strong></p>
            <p>{{hero.quickplay['TeleporterUptime-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Symmetra'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Best Teleporter Uptime</strong></p>
            <p>{{hero.competitive['TeleporterUptime-BestinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Best Teleporter Uptime</strong></p>
            <p>{{hero.quickplay['TeleporterUptime-BestinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Symmetra'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Players Teleported</strong></p>
            <p>{{hero.competitive['PlayersTeleported'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Players Teleported</strong></p>
            <p>{{hero.quickplay['PlayersTeleported'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Symmetra'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Players Teleported</strong></p>
            <p>{{hero.competitive['PlayersTeleported-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Players Teleported</strong></p>
            <p>{{hero.quickplay['PlayersTeleported-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Symmetra'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Players Teleported</strong></p>
            <p>{{hero.competitive['PlayersTeleported-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Players Teleported</strong></p>
            <p>{{hero.quickplay['PlayersTeleported-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Symmetra'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Sentry Turret Kills</strong></p>
            <p>{{hero.competitive['SentryTurretKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Sentry Turret Kills</strong></p>
            <p>{{hero.quickplay['SentryTurretKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Symmetra'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Sentry Turret Kills</strong></p>
            <p>{{hero.competitive['SentryTurretKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Sentry Turret Kills</strong></p>
            <p>{{hero.quickplay['SentryTurretKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Symmetra'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Sentry Turret Kills</strong></p>
            <p>{{hero.competitive['SentryTurretKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Sentry Turret Kills</strong></p>
            <p>{{hero.quickplay['SentryTurretKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Symmetra'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Damage Blocked</strong></p>
            <p>{{hero.competitive['DamageBlocked'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Damage Blocked</strong></p>
            <p>{{hero.quickplay['DamageBlocked'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Symmetra'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Damage Blocked</strong></p>
            <p>{{hero.competitive['DamageBlocked-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Damage Blocked</strong></p>
            <p>{{hero.quickplay['DamageBlocked-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Symmetra'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Damage Blocked</strong></p>
            <p>{{hero.competitive['DamageBlocked-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Damage Blocked</strong></p>
            <p>{{hero.quickplay['DamageBlocked-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Tracer ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Tracer'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Pulse Bombs Attached</strong></p>
            <p>{{hero.competitive['PulseBombsAttached'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Pulse Bombs Attached</strong></p>
            <p>{{hero.quickplay['PulseBombsAttached'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Tracer'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Pulse Bombs Attached</strong></p>
            <p>{{hero.competitive['PulseBombsAttached-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Pulse Bombs Attached</strong></p>
            <p>{{hero.quickplay['PulseBombsAttached-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Tracer'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Pulse Bombs Attached</strong></p>
            <p>{{hero.competitive['PulseBombsAttached-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Pulse Bombs Attached</strong></p>
            <p>{{hero.quickplay['PulseBombsAttached-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Tracer'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Pulse Bomb Kills</strong></p>
            <p>{{hero.competitive['PulseBombKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Pulse Bomb Kills</strong></p>
            <p>{{hero.quickplay['PulseBombKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Tracer'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Pulse Bomb Kills</strong></p>
            <p>{{hero.competitive['PulseBombKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Pulse Bomb Kills</strong></p>
            <p>{{hero.quickplay['PulseBombKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Tracer'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Pulse Bomb Kills</strong></p>
            <p>{{hero.competitive['PulseBombKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Pulse Bomb Kills</strong></p>
            <p>{{hero.quickplay['PulseBombKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Torbjörn ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Torbjörn'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Torbj&#xF6;rn Kills</strong></p>
            <p>{{hero.competitive['Torbj&#xF6;rnKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Torbj&#xF6;rn Kills</strong></p>
            <p>{{hero.quickplay['Torbj&#xF6;rnKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Torbjörn'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Torbj&#xF6;rn Kills</strong></p>
            <p>{{hero.competitive['Torbj&#xF6;rnKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Torbj&#xF6;rn Kills</strong></p>
            <p>{{hero.quickplay['Torbj&#xF6;rnKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Torbjörn'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Torbj&#xF6;rn Kills</strong></p>
            <p>{{hero.competitive['Torbj&#xF6;rnKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Torbj&#xF6;rn Kills</strong></p>
            <p>{{hero.quickplay['Torbj&#xF6;rnKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Torbjörn'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Turret Kills</strong></p>
            <p>{{hero.competitive['TurretKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Turret Kills</strong></p>
            <p>{{hero.quickplay['TurretKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Torbjörn'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Turret Kills</strong></p>
            <p>{{hero.competitive['TurretKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Turret Kills</strong></p>
            <p>{{hero.quickplay['TurretKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Torbjörn'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Molten Core Kills</strong></p>
            <p>{{hero.competitive['MoltenCoreKillsKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Molten Core Kills</strong></p>
            <p>{{hero.quickplay['MoltenCoreKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Torbjörn'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Molten Core Kills</strong></p>
            <p>{{hero.competitive['MoltenCoreKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Molten Core Kills</strong></p>
            <p>{{hero.quickplay['MoltenCoreKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Torbjörn'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Molten Core Kills</strong></p>
            <p>{{hero.competitive['MoltenCoreKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Molten Core Kills</strong></p>
            <p>{{hero.quickplay['MoltenCoreKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Torbjörn'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Armor Packs Created</strong></p>
            <p>{{hero.competitive['ArmorPacksCreated'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Armor Packs Created</strong></p>
            <p>{{hero.quickplay['ArmorPacksCreated'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Torbjörn'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Armor Packs Created</strong></p>
            <p>{{hero.competitive['ArmorPacksCreated-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Armor Packs Created</strong></p>
            <p>{{hero.quickplay['ArmorPacksCreated-Average'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Widowmaker ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Widowmaker'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scoped Shots</strong></p>
            <p>{{hero.competitive['Scoped Shots'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scoped Shots</strong></p>
            <p>{{hero.quickplay['ScopedShots'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Widowmaker'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scoped Accuracy</strong></p>
            <p>{{hero.competitive['ScopedAccuracy'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scoped Accuracy</strong></p>
            <p>{{hero.quickplay['ScopedAccuracy'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Widowmaker'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Best Scoped Accuracy</strong></p>
            <p>{{hero.competitive['ScopedAccuracy-BestinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Best Scoped Accuracy</strong></p>
            <p>{{hero.quickplay['ScopedAccuracy-BestinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Widowmaker'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Scoped Critical Hits</strong></p>
            <p>{{hero.competitive['ScopedCriticalHits'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Scoped Critical Hits</strong></p>
            <p>{{hero.quickplay['ScopedCriticalHits'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Widowmaker'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Scoped Critical Hits</strong></p>
            <p>{{hero.competitive['ScopedCriticalHits-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Scoped Critical Hits</strong></p>
            <p>{{hero.quickplay['ScopedCriticalHits-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Widowmaker'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Scoped Critical Hits</strong></p>
            <p>{{hero.competitive['ScopedCriticalHits-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Scoped Critical Hits</strong></p>
            <p>{{hero.quickplay['ScopedCriticalHits-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Widowmaker'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Venom Mine Kills</strong></p>
            <p>{{hero.competitive['VenomMineKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Venom Mine Kills</strong></p>
            <p>{{hero.quickplay['VenomMineKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Widowmaker'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Venom Mine Kills</strong></p>
            <p>{{hero.competitive['VenomMineKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Venom Mine Kills</strong></p>
            <p>{{hero.quickplay['VenomMineKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Widowmaker'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Venom Mine Kills</strong></p>
            <p>{{hero.competitive['VenomMineKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Venom Mine Kills</strong></p>
            <p>{{hero.quickplay['VenomMineKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Winston ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Harambe'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Jump Pack Kills</strong></p>
            <p>{{hero.competitive['JumpPackKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Jump Pack Kills</strong></p>
            <p>{{hero.quickplay['JumpPackKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Harambe'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Jump Pack Kills</strong></p>
            <p>{{hero.competitive['JumpPackKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Jump Pack Kills</strong></p>
            <p>{{hero.quickplay['JumpPackKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Harambe'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Jump Pack Kills</strong></p>
            <p>{{hero.competitive['JumpPackKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Jump Pack Kills</strong></p>
            <p>{{hero.quickplay['JumpPackKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Harambe'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Primal Rage Kills</strong></p>
            <p>{{hero.competitive['PrimalRageKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Primal Rage Kills</strong></p>
            <p>{{hero.quickplay['PrimalRageKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Harambe'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Primal Rage Kills</strong></p>
            <p>{{hero.competitive['PrimalRageKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Primal Rage Kills</strong></p>
            <p>{{hero.quickplay['PrimalRageKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Harambe'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Primal Rage Kills</strong></p>
            <p>{{hero.competitive['PrimalRageKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Primal Rage Kills</strong></p>
            <p>{{hero.quickplay['PrimalRageKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Harambe'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Players Knocked Back</strong></p>
            <p>{{hero.competitive['PlayersKnockedBack'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Players Knocked Back</strong></p>
            <p>{{hero.quickplay['PlayersKnockedBack'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Harambe'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Players Knocked Back</strong></p>
            <p>{{hero.competitive['PlayersKnockedBack-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Players Knocked Back</strong></p>
            <p>{{hero.quickplay['PlayersKnockedBack-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Harambe'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Players Knocked Back</strong></p>
            <p>{{hero.competitive['PlayersKnockedBack-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Players Knocked Back</strong></p>
            <p>{{hero.quickplay['PlayersKnockedBack-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Harambe'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Environmental Kills</strong></p>
            <p>{{hero.competitive['EnvironmentalKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Environmental Kills</strong></p>
            <p>{{hero.quickplay['EnvironmentalKills'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Zarya ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Zarya'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Lifetime Energy Accumulation</strong></p>
            <p>{{hero.competitive['LifetimeEnergyAccumulation'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Lifetime Energy Accumulation</strong></p>
            <p>{{hero.quickplay['LifetimeEnergyAccumulation'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Zarya'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>High Energy Kills</strong></p>
            <p>{{hero.competitive['HighEnergyKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>High Energy Kills</strong></p>
            <p>{{hero.quickplay['HighEnergyKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Zarya'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg High Energy Kills</strong></p>
            <p>{{hero.competitive['HighEnergyKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg High Energy Kills</strong></p>
            <p>{{hero.quickplay['HighEnergyKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Zarya'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most High Energy Kills</strong></p>
            <p>{{hero.competitive['HighEnergyKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most High Energy Kills</strong></p>
            <p>{{hero.quickplay['HighEnergyKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Zarya'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Projected Barriers Applied</strong></p>
            <p>{{hero.competitive['ProjectedBarriersApplied'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Projected Barriers Applied</strong></p>
            <p>{{hero.quickplay['ProjectedBarriersApplied'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Zarya'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Projected Barriers Applied</strong></p>
            <p>{{hero.competitive['ProjectedBarriersApplied-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Projected Barriers Applied</strong></p>
            <p>{{hero.quickplay['ProjectedBarriersApplied-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Zarya'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Projected Barriers Applied</strong></p>
            <p>{{hero.competitive['ProjectedBarriersApplied-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Projected Barriers Applied</strong></p>
            <p>{{hero.quickplay['ProjectedBarriersApplied-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Zarya'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Lifetime Graviton Surge Kills</strong></p>
            <p>{{hero.competitive['LifetimeGravitonSurgeKills'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Lifetime Graviton Surge Kills</strong></p>
            <p>{{hero.quickplay['LifetimeGravitonSurgeKills'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Zarya'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Avg Graviton Surge Kills</strong></p>
            <p>{{hero.competitive['GravitonSurgeKills-Average'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Avg Graviton Surge Kills</strong></p>
            <p>{{hero.quickplay['GravitonSurgeKills-Average'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Zarya'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Most Graviton Surge Kills</strong></p>
            <p>{{hero.competitive['GravitonSurgeKills-MostinGame'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Most Graviton Surge Kills</strong></p>
            <p>{{hero.quickplay['GravitonSurgeKills-MostinGame'] || '---'}} </p>
          </div>
        </v-col>

        <!-- ============================================================================================================================ -->
        <!-- Zenyatta ------------------------------------------------------------------------------------------------------------------>
        <!-- ============================================================================================================================ -->

        <v-col v-if="hero.name === 'Zenyatta'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Orb Healing</strong></p>
            <p>{{hero.competitive['HealingDone'] - hero.competitive['TranscendenceHealing'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Orb Healing</strong></p>
            <p>{{this.numberWithCommas(this.spliceInt(hero.quickplay['HealingDone']) - this.spliceInt(hero.quickplay['TranscendenceHealing'])) || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Zenyatta'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Transcendence Healing</strong></p>
            <p>{{hero.competitive['TranscendenceHealing'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Transcendence Healing</strong></p>
            <p>{{hero.quickplay['TranscendenceHealing'] || '---'}} </p>
          </div>
        </v-col>

        <v-col v-if="hero.name === 'Zenyatta'">
          <div class="card_text" v-if="viewMode ==='Competitive'">
            <p><strong>Best Transcendence Healing</strong></p>
            <p>{{hero.competitive['TranscendenceHealing-Best'] || '---' }} </p>
          </div>

          <div class="card_text" v-else-if="viewMode ==='Quickplay'">
            <p><strong>Best Transcendence Healing</strong></p>
            <p>{{hero.quickplay['TranscendenceHealing-Best'] || '---'}} </p>
          </div>
        </v-col>

      </v-row>
      <!-- End Hero Stats Row -->
    </v-col>
  </v-row>
