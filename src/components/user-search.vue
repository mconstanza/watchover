<template>
  <v-container id='battletagCard'>
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
          <p id="battletagP">Battletag</p>
        </v-row>

        <v-row id='inputRow'>
          <div id="inputContainer">
            <input type="text" @keyup.enter="onClickButton" v-model.trim="query.battletag" name="user-search" label="Search" placeholder="Battletag is case sensitive!"/>
            <button id="submit" @click="onClickButton">Onward</button>
          </div>
        </v-row>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'user-search',
  data () {
    return {
      query: {
        region: 'US',
        platform: 'PC',
        battletag: ''
      }
    }
  },
  methods: {
    onClickButton: function (event) {
      this.$emit('clicked', this.query)
    }
  }
}
</script>

<style scoped>

  input {
    background-color: white;
    border: 1px solid black;
    min-height: 36px;
    width: 175px;
    padding: 0 25px;
    border-radius: 2px;
    -webkit-transform: skew(-20deg);
    -moz-transform: skew(-20deg);
    -o-transform: skew(-20deg);
  }

  #inputContainer .battletagCol {
    text-align: center;
    align-items: center;
  }

  .row {
    align-items: center;
    justify-content: center;
  }

  select {
    min-width: 50px;
    border: 1px solid black;
    padding: 0 5px;
    -webkit-transform: skew(-20deg);
    -moz-transform: skew(-20deg);
    -o-transform: skew(-20deg);
  }

  select option {
    color: black;
  }

  button {
    background-color: #f29a2c;
    height: 36px;
    width: 75px;
    border-radius: 3px;
    -webkit-transform: skew(-20deg);
    -moz-transform: skew(-20deg);
    -o-transform: skew(-20deg);
  }

  #battletagP {
    margin-bottom: 0;
  }

</style>
