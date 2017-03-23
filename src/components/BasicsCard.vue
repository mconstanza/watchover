<template>
    <v-card class="basicCard">

      <v-card-row class="indigo">
        <v-card-title>
          <span class="white--text">{{currentBattletag.tag}}, AKA: {{currentBattletag.profile.username}}</span>
        </v-card-title>
      </v-card-row>

      <v-card-row>

        <v-card-column id="avatar">
          <v-card-row :img="currentBattletag.profile.avatar"></v-card-row>
        </v-card-column>

        <v-card-column>
          <v-card-row>

            <v-card-column>

              <v-card-text>
                <p><strong>Level</strong> </p>
                <p>{{currentBattletag.profile.level}}</p>
              </v-card-text>

            </v-card-column>

            <v-card-column>

              <v-card-text v-if="viewMode == 'Competitive'">
                <p><strong>Time Played</strong></p>
                <p>{{currentBattletag.profile.playtime.competitive}}</p>
              </v-card-text>

              <v-card-text v-else-if="viewMode == 'Quickplay'">
                <p><strong>Time Played</strong></p>
                <p>{{currentBattletag.profile.playtime.quick}}</p>
              </v-card-text>

            </v-card-column>

            <v-card-column>

              <v-card-text v-if="viewMode == 'Competitive'">
                <p><strong>Games Played</strong></p>
                <p>{{currentBattletag.profile.games.competitive.played}}</p>
              </v-card-text>

              <v-card-text v-else-if="viewMode == 'Quickplay'">
                <p><strong>Wins</strong></p>
                <p>{{currentBattletag.profile.games.quick.wins}}</p>
              </v-card-text>

            </v-card-column>

            <v-card-column v-show="viewMode == 'Competitive'">

              <v-card-text >
                <p><strong>Wins</strong></p>
                <p>{{currentBattletag.profile.games.competitive.wins}}</p>
              </v-card-text>

            </v-card-column>

          </v-card-row>
        </v-card-column>

      </v-card-row>

    </v-card>
</template>

<script>
export default {
  name: 'basics-card',
  data () {
    return {
      msg: 'test'
    }
  },
  props: ['currentBattletag', 'viewMode']
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
  height: 400px;
  justify-content: flex-start;
  text-align: left;
}

#avatar {
  max-width: 100px;
  min-width: 100px;
  min-height: 100px;
}

</style>
