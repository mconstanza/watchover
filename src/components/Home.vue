<template>
  <div id="HomeContainer">
    <div id="HeadingContainer">
      <basics-card v-if="currentBattletag.tag.length > 0" :viewMode="viewMode" :currentBattletag="currentBattletag"></basics-card>
    </div>
    <br/>
    <br/>
    <button id="switchViewBtn" v-if="currentBattletag.tag.length > 0" @click="switchView">{{viewMode}}</button>
    <br />
    <br />
    <div id="CardContainer">
      <hero-card v-for="hero in currentBattletag.heroStats" v-if="!hero.loading":hero="hero" :key="hero.name" :viewMode="viewMode" ></hero-card>
    </div>
  </div>
</template>

<script>
import basicsCard from './BasicsCard.vue'
import heroCard from './HeroCard.vue'
export default {
  name: 'home',
  data () {
    return {
      msg: 'test'
    }
  },
  components: {
    basicsCard,
    heroCard
  },
  props: ['currentBattletag', 'viewMode'],
  methods: {
    switchView: function (event) {
      if (this.viewMode === 'Competitive') {
        this.$emit('switchView', 'Quickplay')
      } else if (this.viewMode === 'Quickplay') {
        this.$emit('switchView', 'Competitive')
      }
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

.basicCard {
  margin-top: 20px;
}

#HomeContainer {
  text-align: center;
}

#HeadingContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#CardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  margin-right: 20px;
  margin-bottom: 20px;
}

.card__row {
  align-items: flex-start;
}

#switchViewBtn {
  width: 80px;
  height: 35px;
  background-color: #bec1c4;
}

.card {
  max-width: 100%;
  /*height: 400px;*/
}

#avatar {
  max-width: 150px;
  min-height: 150px;
}

</style>
