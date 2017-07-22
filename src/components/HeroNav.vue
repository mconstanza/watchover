<template>

</template>
<script>
export default {
  name: 'hero-nav',
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
  text-decoration: none;
  color:white;
  max-height: 104px;
}

a:hover {
  text-decoration: none;
  color:white;
}

p {
  white-space: nowrap;
}

.heroCard {
  text-align: center;
  background: black;
  background: #060606; /* Old browsers */
  background: -moz-linear-gradient(left, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, rgba(76, 76, 76, .8) 0%,rgba(47, 47, 47, .8) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222222', endColorstr='#222222',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  text-shadow: -1px 1px 20px black;
  max-width: 725px;
  width: 725px;
  margin: 0 10px 10px 10px;
}

.card__text {
  padding-left: 15px;
  padding-right: 15px;
  color:white;
  font-family: sans-serif;
  font-size: 10px;
  padding: 10px;
}

.whiteText {
  color: white;
}

.cardTitleRow {
  /*height: 45px;*/
  border: 1px solid black;
}

.heroName {
  padding-top: 10px;
  text-shadow: -1px 1px 10px black;
  margin:0;
}

#heroNameCol{
  padding: 0;
}

.icon {
  text-shadow: none;
}

.statHeader {
  margin: 0;
  color: white;
  padding-top: 10px;
}

.statHeader p {
  margin: 0;
}

#avatar {
  min-width: 80px;
  max-width: 80px;
  min-height: 80px;
  border-radius: 10px;
  border: 2px solid white;
}

.medalColumn {
  flex-grow: .3;
}

.medalText {
  padding-left: 0;
  padding-right: 0;
}

#goldMedal {
  color: #f2dc27;
}

#silverMedal {
  color: #cccdcb;
}

#bronzeMedal {
  color: #9b3435;
}

.medalColumn {
  width: 25px;
}

/*Hero-specific Header Colors*/
#Ana {
  background-color: #41598a;
}

#Bastion {
  background-color: #b9b9b9;
}

#Doomfist {
  background-color: #675a52;
}

#DVa {
  background-color: #ffd2ef;
}

#Genji {
  background-color: #24ef37;
}

#Hanzo {
  background-color: #75656f;
}

#Junkrat {
  background-color: #efae34;
}

#Lucio {
  background: #f2dc27; /* Old browsers */
  background: -moz-linear-gradient(left, #3ae80d 0%, #f2dc27 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #3ae80d 0%,#f2dc27 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #3ae80d 0%,#f2dc27 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3ae80d', endColorstr='#f2dc27',GradientType=1 ); /* IE6-9 */
}

#McCree {
  background-color: #cd3432;
}

#Mei {
  background-color: #95e6f7;
}

#Mercy {
  background-color: #fefe4e;
}

#Orisa {
  background: #f2dc27; /* Old browsers */
  background: -moz-linear-gradient(left,#f2dc27  0%, #3ae80d 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #f2dc27  0%,#3ae80d 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #f2dc27 0%,#3ae80d 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2dc27', endColorstr='#3ae80d',GradientType=1 ); /* IE6-9 */
}

#Pharah {
  background-color: #4d7ccb;
}

#Reaper {
  background-color: #414139;
}

#Reinhardt {
  background-color: #9ba0a0;
}

#Roadhog {
  background: #f0cd4b; /* Old browsers */
  background: -moz-linear-gradient(left, #362f34 0%, #f0cd4b 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #362f34 0%,#f0cd4b 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #362f34 0%,#f0cd4b 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#362f34', endColorstr='#f0cd4b',GradientType=1 ); /* IE6-9 */
}

#Soldier76 {
  background-color: #2d4776;
}

#Sombra {
  background-color: #e24bfa;
}

#Symmetra {
  background-color: #7fecfc;
}

#Tracer {
  background-color: #f5bd27;
}

#Torbjorn {
  background-color: #9b3435;
}

#Widowmaker {
  background-color: #504057;
}

#Winston {
  background-color: #cccdcb;
}

#Zarya {
  background-color: #e15284;
}

#Zenyatta {
  background-color: #ccb059;
}

.card .cardTitleRow:hover {
  -webkit-filter: brightness(105%);
}

</style>
