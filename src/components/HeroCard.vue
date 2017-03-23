<template>
    <v-card >
      <!-- Title -->
      <v-card-row class="indigo cardTitleRow">
        <v-card-title>
          <span class="white--text">{{hero.name}}</span>
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

            <v-card-column>
              <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
                <p><strong>Games Lost</strong></p>
                <p>{{hero.competitive.GamesLost || '---'}} </p>
              </v-card-text>
            </v-card-column>

            <v-card-column>
              <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
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

            <v-card-column>
              <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
                <v-icon class="goldMedal">fiber_manual_record</v-icon>
                <p>{{hero.competitive['Medals-Gold'] || '---'}} </p>
              </v-card-text>

              <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
                <v-icon class="goldMedal">fiber_manual_record</v-icon>
                <p>{{hero.quick['Medals-Gold'] || '---'}} </p>
              </v-card-text>
            </v-card-column>

            <v-card-column>
              <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
                <v-icon class="silverMedal">fiber_manual_record</v-icon>
                <p>{{hero.competitive['Medals-Silver'] || '---'}} </p>
              </v-card-text>

              <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
                <v-icon class="silverMedal">fiber_manual_record</v-icon>
                <p>{{hero.quick['Medals-Silver'] || '---'}} </p>
              </v-card-text>
            </v-card-column>

            <v-card-column>
              <v-card-text class="card_text" v-if="viewMode ==='Competitive'">
                <v-icon class="bronzeMedal">fiber_manual_record</v-icon>
                <p>{{hero.competitive['Medals-Bronze'] || '---'}} </p>
              </v-card-text>

              <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
                <v-icon class="bronzeMedal">fiber_manual_record</v-icon>
                <p>{{hero.quick['Medals-Bronze'] || '---'}} </p>
              </v-card-text>
            </v-card-column>

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
      <v-card-row class="roleStatRow">

        <!-- Support Stats -->
        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.role === 'support'">
            <p><strong>Healing Done</strong></p>
            <p>{{hero.competitive['HealingDone'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.role === 'support'">
            <p><strong>Healing Done</strong></p>
            <p>{{hero.quick['HealingDone'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.role === 'support'">
            <p><strong>Avg Healing</strong></p>
            <p>{{hero.competitive['HealingDone-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.role === 'support'">
            <p><strong>Avg Healing</strong></p>
            <p>{{hero.quick['HealingDone-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.role === 'support'">
            <p><strong>Most Healing in Game</strong></p>
            <p>{{hero.competitive['HealingDone-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.role === 'support'">
            <p><strong>Most Healing in Game</strong></p>
            <p>{{hero.quick['HealingDone-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.role === 'support'">
            <p><strong>Most Healing in Life</strong></p>
            <p>{{hero.competitive['HealingDone-MostinLife'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.role === 'support'">
            <p><strong>Most Healing in Life</strong></p>
            <p>{{hero.quick['HealingDone-MostinLife'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.role === 'support'">
            <p><strong>Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.role === 'support'">
            <p><strong>Self Healing</strong></p>
            <p>{{hero.quick['SelfHealing'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.role === 'support'">
            <p><strong>Avg Self Healing</strong></p>
            <p>{{hero.competitive['SelfHealing-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.role === 'support'">
            <p><strong>Avg Self Healing</strong></p>
            <p>{{hero.quick['SelfHealing-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.role === 'support'">
            <p><strong>Defensive Assists</strong></p>
            <p>{{hero.competitive['DefensiveAssists'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.role === 'support'">
            <p><strong>Defensive Assists</strong></p>
            <p>{{hero.quick['DefensiveAssists'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.role === 'support'">
            <p><strong>Avg D. Assists</strong></p>
            <p>{{hero.competitive['DefensiveAssists-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.role === 'support'">
            <p><strong>Avg D. Assists</strong></p>
            <p>{{hero.quick['DefensiveAssists-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.role === 'support'">
            <p><strong>Most D. Assists</strong></p>
            <p>{{hero.competitive['DefensiveAssists-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.role === 'support'">
            <p><strong>Most D. Assists</strong></p>
            <p>{{hero.quick['DefensiveAssists-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.role === 'support'">
            <p><strong>Offensive Assists</strong></p>
            <p>{{hero.competitive['OffensiveAssists'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.role === 'support'">
            <p><strong>Offensive Assists</strong></p>
            <p>{{hero.quick['OffensiveAssists'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.role === 'support'">
            <p><strong>Avg O. Assists</strong></p>
            <p>{{hero.competitive['OffensiveAssists-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.role === 'support'">
            <p><strong>Avg O. Assists</strong></p>
            <p>{{hero.quick['OffensiveAssists-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.role === 'support'">
            <p><strong>Most O. Assists</strong></p>
            <p>{{hero.competitive['OffensiveAssists-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.role === 'support'">
            <p><strong>Most O. Assists</strong></p>
            <p>{{hero.quick['OffensiveAssists-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>


      </v-card-row>
      <hr/>

      <!-- Hero Specific Stats -->
      <v-card-row class="heroStatRow">
        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.name === 'Ana'">
            <p><strong>Enemies Slept</strong></p>
            <p>{{hero.competitive['EnemiesSlept'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.name === 'Ana'">
            <p><strong>Enemies Slept</strong></p>
            <p>{{hero.quick['EnemiesSlept'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.name === 'Ana'">
            <p><strong>Avg Enemies Slept</strong></p>
            <p>{{hero.competitive['EnemiesSlept-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.name === 'Ana'">
            <p><strong>Avg Enemies Slept</strong></p>
            <p>{{hero.quick['EnemiesSlept-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.name === 'Ana'">
            <p><strong>Most Enemies Slept</strong></p>
            <p>{{hero.competitive['EnemiesSlept-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.name === 'Ana'">
            <p><strong>Most Enemies Slept</strong></p>
            <p>{{hero.quick['EnemiesSlept-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.name === 'Ana'">
            <p><strong>Nano Boosts</strong></p>
            <p>{{hero.competitive['NanoBoostsApplied'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.name === 'Ana'">
            <p><strong>Nano Boosts</strong></p>
            <p>{{hero.quick['NanoBoostsApplied'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.name === 'Ana'">
            <p><strong>Avg Nano Boosts</strong></p>
            <p>{{hero.competitive['NanoBoostsApplied-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.name === 'Ana'">
            <p><strong>Avg Nano Boosts</strong></p>
            <p>{{hero.quick['NanoBoostsApplied-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.name === 'Ana'">
            <p><strong>Most Nano Boosts</strong></p>
            <p>{{hero.competitive['NanoBoostsApplied-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.name === 'Ana'">
            <p><strong>Most Nano Boosts</strong></p>
            <p>{{hero.quick['NanoBoostsApplied-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.name === 'Ana'">
            <p><strong>Nano Boost Assits</strong></p>
            <p>{{hero.competitive['NanoBoostAssists'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.name === 'Ana'">
            <p><strong>Nano Boost Assits</strong></p>
            <p>{{hero.quick['NanoBoostAssists'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.name === 'Ana'">
            <p><strong>Avg Nano Assits</strong></p>
            <p>{{hero.competitive['NanoBoostAssists-Average'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.name === 'Ana'">
            <p><strong>Avg Nano Assits</strong></p>
            <p>{{hero.quick['NanoBoostAssists-Average'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.name === 'Ana'">
            <p><strong>Most Nano Assits</strong></p>
            <p>{{hero.competitive['NanoBoostAssists-MostinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.name === 'Ana'">
            <p><strong>Most Nano Assits</strong></p>
            <p>{{hero.quick['NanoBoostAssists-MostinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.name === 'Ana'">
            <p><strong>Scoped Hits</strong></p>
            <p>{{hero.competitive['ScopedHits'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.name === 'Ana'">
            <p><strong>Scoped Hits</strong></p>
            <p>{{hero.quick['ScopedHits'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.name === 'Ana'">
            <p><strong>Scoped Accuracy</strong></p>
            <p>{{hero.competitive['ScopedAccuracy'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.name === 'Ana'">
            <p><strong>Scoped Accuracy</strong></p>
            <p>{{hero.quick['ScopedAccuracy'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.name === 'Ana'">
            <p><strong>Scoped Best</strong></p>
            <p>{{hero.competitive['ScopedAccuracy-BestinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.name === 'Ana'">
            <p><strong>Scoped Best</strong></p>
            <p>{{hero.quick['ScopedAccuracy-BestinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.name === 'Ana'">
            <p><strong>Unscoped Hits</strong></p>
            <p>{{hero.competitive['UnscopedShots'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.name === 'Ana'">
            <p><strong>Unscoped Hits</strong></p>
            <p>{{hero.quick['UnscopedShots'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.name === 'Ana'">
            <p><strong>Unscoped Accuracy</strong></p>
            <p>{{hero.competitive['UnscopedAccuracy'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.name === 'Ana'">
            <p><strong>Unscoped Accuracy</strong></p>
            <p>{{hero.quick['UnscopedAccuracy'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

        <v-card-column>
          <v-card-text class="card_text" v-if="viewMode ==='Competitive' && hero.name === 'Ana'">
            <p><strong>Unscoped Best</strong></p>
            <p>{{hero.competitive['UnscopedAccuracy-BestinGame'] || '---' }} </p>
          </v-card-text>

          <v-card-text class="card_text" v-if="viewMode ==='Quickplay' && hero.name === 'Ana'">
            <p><strong>Unscoped Best</strong></p>
            <p>{{hero.quick['UnscopedAccuracy-BestinGame'] || '---'}} </p>
          </v-card-text>
        </v-card-column>

      </v-card-row>
    </v-card>
</template>

<script>
export default {
  name: 'hero-card',
  props: ['hero', 'viewMode']
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

.card {
  text-align: left;
}

.cardTitleRow {
  height: 45px;
}

#avatar {
  min-width: 75px;
  max-width: 100px;
  min-height: 100px;
}

.goldMedal {
  color: #eacf00;
}

.silverMedal {
  color: #d4d8d8;
  /*text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;*/
}

.bronzeMedal {
  color: #9b6c00;
}

.medalColumn {
  width: 25px;
}

</style>
