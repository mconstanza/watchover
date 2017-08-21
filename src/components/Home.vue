<template>
<div id ='container' class='container-fluid text-center'>

  <div id='sampleHero'>
    <h3>Sample Player</h3>
    <router-link :to="'/us/pc/Nessfalco-1145/'">Nessfalco#1145</router-link>
  </div>

    <div id='battletagCard'>

      <div>
        <p>Battletag</p>
      </div>

      <div id='inputRow'>
        <div id="inputContainer">
          <input type="text" @keyup.enter="onClickButton" v-model.trim="query.battletag" name="user-search" label="Search" placeholder="Battletag is case sensitive!"/>
          <button id="submit" @click="onClickButton"><div class="buttonText">Onward</div></button>
        </div>
      </div>
    </div>


</div>
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

#container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: 'Overwatch', sans-serif;
}


/*Input Field*/

input {
  background-color: white;
  border: 1px solid black;
  min-height: 36px;
  width: 250px;
  padding: 0 25px;
  border-radius: 2px;
  /*-webkit-transform: skew(-15deg, 0deg);
  -moz-transform: skew(-15deg, 0deg);
  -o-transform: skew(-15deg, 0deg);*/
  font-family: 'Overwatch', sans-serif;
}

#inputContainer .battletagCol {
  text-align: center;
  align-items: center;
}

.row {
  justify-content: center;
}

#battletagCard {
  margin-top: 100px;
  height: 150px !important;
  min-width: 496px;
  max-width: 496px;
  align-items: center;
  align-self: center;
  border-radius: 10px;
  -webkit-transform: skew(-15deg, 0deg);
  -moz-transform: skew(-15deg, 0deg);
  -o-transform: skew(-15deg, 0deg);
  background: black;
  background: #060606; /* Old browsers */
  background: -moz-linear-gradient(left, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222222', endColorstr='#222222',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  font-family: 'Overwatch', sans-serif;
}

#battletagCard p {
  color: white;
  margin-top: 15px;
}

#battletagCardInputRow {
 height: 100%;
 padding-top: 25px;
 /*-webkit-transform: skew(-15deg, 0deg);
 -moz-transform: skew(-15deg, 0deg);
 -o-transform: skew(-15deg, 0deg);*/
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
  -webkit-transform: skew(-15deg, 0deg);
  -moz-transform: skew(-15deg, 0deg);
  -o-transform: skew(-15deg, 0deg);
  -webkit-appearance: menulist;
}

option {
  /*-webkit-transform: skew(-15deg, 0deg);
  -moz-transform: skew(-15deg, 0deg);
  -o-transform: skew(-15deg, 0deg);*/
  color: black;
}

button {
  background-color: #f29a2c;
  border: 1px solid black;
  border-radius: 3px;
  height: 36px;
  width: 75px;
  /*-webkit-transform: skew(-15deg);
  -moz-transform: skew(-15deg);
  -o-transform: skew(-15deg);*/
  color:white;
  font-family: 'Overwatch', sans-serif;
}

.buttonText {
  -webkit-transform: skew(15deg, 0);
  -moz-transform: skew(15deg, 0);
  -o-transform: skew(15deg, 0);
}
</style>
