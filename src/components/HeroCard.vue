<template>
    <v-card >
      <!-- Title -->
      <v-card-row class="indigo">
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
                <p><strong>Games Played</strong></p>
                <p>{{hero.competitive.GamesPlayed || '---'}} </p>
              </v-card-text>

              <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
                <p><strong>Games Played</strong></p>
                <p>{{hero.quick.GamesPlayed || '---'}} </p>
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
                <p><strong>Deaths</strong></p>
                <p>{{hero.competitive.Deaths || hero.competitive.Death || '---'}} </p>
              </v-card-text>

              <v-card-text class="card_text" v-if="viewMode ==='Quickplay'">
                <p><strong>Deaths</strong></p>
                <p>{{hero.quick.Deaths || hero.quick.Death || '---'}} </p>
              </v-card-text>
            </v-card-column>

          </v-card-row>

        </v-card-column>

      </v-card-row>
      <br/>
      <hr/>
      <v-card-row>
        <v-card-text class="card_text">

        </v-card-text>
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

#avatar {
  min-width: 75px;
  max-width: 100px;
  min-height: 100px;
}

</style>
