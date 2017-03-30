<template>
    <v-container fluid id="playerHeader">
      <v-row>

        <v-col md6>
          <v-container>
            <v-row>
              <v-col md1>
                <!-- EMPTY COLUMN FOR OFFSET -->
              </v-col>
              <v-col md2>
                <div class="headerAvatar">
                  <img class="avatarImage" :src="currentBattletag.profile.avatar" width="80" height="80">
                </div>
              </v-col>
              <v-col md9 class="headerNameCol">
                <h3 class='whiteText'>
                  <span>{{currentBattletag.tag}}</span>
                  <small class='subHeader'> on {{currentBattletag.platform}} ({{currentBattletag.region}})</small>
                </h3>
              </v-col>
            </v-row>


          </v-container>

        </v-col>

        <v-col md6>

        </v-col>

      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'player-header',
  data () {
    return {

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

.whiteText {
  color: white;
}

.subHeader {
  font-size: 14px;
  color: #faa02e;
}

.avatarImage {
  border-radius: 10px;
}

.headerNameCol {
  text-align: left;
}

#playerHeader {

}

</style>
