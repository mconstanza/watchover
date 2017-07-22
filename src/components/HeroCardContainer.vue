<template>
  <div id="CardContainer">
    <hero-card v-if="!loading" v-for="hero in currentBattletag.heroes" v-show="view.roles[hero.role]" :hero="hero" :viewMode="view.mode" :key="hero.name"></hero-card>
  </div>
</template>

<script>
import heroCard from './HeroCard.vue'
export default {
  name: 'HeroCardContainer',
  data () {
    return {
      msg: 'This is the container that holds the hero cards with basic data for each hero.'
    }
  },
  components: {
    heroCard
  },
  props: ['loading', 'currentBattletag', 'viewMode', 'view', 'loadHeroData', 'toggleLoading']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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

#CardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.heroCard {
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.card__row {
  align-items: flex-start;
  flex-flow: row wrap;
}
</style>
