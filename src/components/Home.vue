<template>
<v-container fluid>
  <v-row>
    <v-col md12>
      <v-row>
        <v-col md4>

        </v-col>

        <v-col md4>
          <v-card id='battletagCard'>
            <v-row>

              <v-col md2>
                <p>Platform</p>
                <select class='select' name="Platform" v-model="query.platform">
                      <option>PC</option>
                      <option>XBL</option>
                      <option>PSN</option>
                    </select>
              </v-col>

              <v-col md2>
                <p>Region</p>
                <select class='select' name="Region" v-model="query.region">
                      <option>US</option>
                      <option>EU</option>
                      <option>CN</option>
                      <option>KR</option>
                    </select>
              </v-col>

              <v-col md8 class='battletagCol'>

                <v-row>
                  <p>Battletag</p>
                </v-row>

                <v-row id='inputRow'>
                  <div id="inputContainer">
                    <input type="text" @keyup.enter="onClickButton" v-model.trim="query.battletag" name="user-search" label="Search" placeholder="Battletag is case sensitive!"/>
                    <button id="submit" @click="onClickButton">Onward</button>
                  </div>
                </v-row>

              </v-col>

            </v-row>
          </v-card>
        </v-col>

        <v-col md4>

        </v-col>

      </v-row>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      query: {
        region: 'US',
        platform: 'PC',
        battletag: ''
      }

    }
  },
  props: ['loading', 'currentBattletag', 'viewMode', 'view'],
  methods: {
    onClickButton: function (event) {
      console.log('clicked')
      this.$emit('clicked', this.query)
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


/*Input Field*/

input {
  background-color: white;
  border: 1px solid black;
  min-height: 36px;
  width: 200px;
  padding: 0 25px;
  border-radius: 2px;
}

#inputContainer .battletagCol {
  text-align: center;
  align-items: center;
}

.row {
  align-items: center;
  justify-content: center;
}

#battletagCard {
  margin-top: 50px;
  height: 150px !important;
}

.card {
  height: 150px;
}

select {
  min-width: 50px;
  border: 1px solid black;
  padding: 0 10px;
}

button {
  background-color: #f29a2c;
  border-radius: 3px;
  height: 36px;
  width: 75px;
}
</style>
