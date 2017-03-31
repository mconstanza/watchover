<template>
<v-container fluid>
  <v-row>
    <v-col lg12 md12 sm12>
      <v-row>
        <v-col lg4 md2 sm0>

        </v-col>

        <v-col lg4 md8 sm12 id="battletagCardCol">
          <v-card id='battletagCard'>
            <v-row id="battletagCardInputRow">

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
                    <button id="submit" @click="onClickButton"><div class="buttonText">Onward</div></button>
                  </div>
                </v-row>

              </v-col>

            </v-row>
          </v-card>
        </v-col>

        <v-col lg4 md2 sm0>

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
  -webkit-transform: skew(-15deg);
  -moz-transform: skew(-15deg);
  -o-transform: skew(-15deg);
}

#inputContainer .battletagCol {
  text-align: center;
  align-items: center;
}

.row {
  justify-content: center;
}

#battletagCardCol {
  text-align: center;
  display: flex;
  flex-basis: 0;
  align-items: center;
  justify-content: center;
}

#battletagCard {
  margin-top: 75px;
  height: 150px !important;
  min-width: 496px;
  max-width: 496px;
  align-items: center;
  align-self: center;
  border-radius: 10px;
  -webkit-transform: skew(-15deg);
  -moz-transform: skew(-15deg);
  -o-transform: skew(-15deg);
  background: black;
  background: #060606; /* Old browsers */
  background: -moz-linear-gradient(left, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222222', endColorstr='#222222',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

#battletagCard p {
  padding-left: 30px;
  color: white;
}

#battletagCardInputRow {
 height: 100%;
 padding-top: 25px;
 -webkit-transform: skew(15deg);
 -moz-transform: skew(15deg);
 -o-transform: skew(15deg);
}

.card {
  height: 150px;
}

#toolbar {
  text-align: left;
  background: transparent;
  padding: 0 0 0 10px;
}

.toolbar__item{
  padding-right: 0;
}

select {
  min-width: 50px;
  background-color: white;
  padding-left: 15px;
  margin-left: 10px;
  border: 1px solid black;
  -webkit-transform: skew(-15deg);
  -moz-transform: skew(-15deg);
  -o-transform: skew(-15deg);
  -webkit-appearance: menulist;
}

option {
  -webkit-transform: skew(40deg);
  -moz-transform: skew(40deg);
  -o-transform: skew(40deg);
  color: black;
}

button {
  background-color: #f29a2c;
  border: 1px solid black;
  border-radius: 3px;
  height: 36px;
  width: 75px;
  -webkit-transform: skew(-15deg);
  -moz-transform: skew(-15deg);
  -o-transform: skew(-15deg);
  color:white;
}

.buttonText {
  -webkit-transform: skew(15deg);
  -moz-transform: skew(15deg);
  -o-transform: skew(15deg);
}
</style>
