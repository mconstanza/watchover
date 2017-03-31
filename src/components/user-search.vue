<template>
  <v-container fluid id='battletagCardSmall'>
    <v-row>

      <v-col md2>
        <select class='select' name="Platform" v-model="query.platform">
              <option>PC</option>
              <option>XBL</option>
              <option>PSN</option>
            </select>
      </v-col>

      <v-col md2>
        <select class='select' name="Region" v-model="query.region">
              <option>US</option>
              <option>EU</option>
              <option>CN</option>
              <option>KR</option>
            </select>
      </v-col>

      <v-col md8 class='battletagCol'>

        <v-row id='inputRow'>
          <div id="inputContainer">
            <input type="text" @keyup.enter="onClickButton" v-model.trim="query.battletag" name="user-search" label="Search" placeholder="Battletag is case sensitive!"/>
            <button id="submit" @click="onClickButton"><div class="buttonText">Onward</div></button>
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

#battletagCardSmall {
  padding-right: 15px;
}
input {
  background-color: white;
  color: black;
  border: 1px solid black;
  min-height: 36px;
  width: 175px;
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
  align-items: center;
  justify-content: center;
}

.toolbar__item:hover {
  background: none;
}

select {
  min-width: 50px;
  background-color: white;
  padding-left: 15px;
  margin-right: 10px;
  border: 1px solid black;
  -webkit-transform: skew(-15deg);
  -moz-transform: skew(-15deg);
  -o-transform: skew(-15deg);
  -webkit-appearance: menulist;
  color: black;
}

select option {
  color: black;
}

button {
  background-color: #f29a2c;
  height: 36px;
  width: 75px;
  border-radius: 3px;
  -webkit-transform: skew(-15deg);
  -moz-transform: skew(-15deg);
  -o-transform: skew(-15deg);
  border: 1px solid black;
}

.buttonText {
  -webkit-transform: skew(15deg);
  -moz-transform: skew(15deg);
  -o-transform: skew(15deg);
}

#battletagP {
  margin-bottom: 0;
}


</style>
