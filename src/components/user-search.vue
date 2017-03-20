<template>
  <div>
    <input
      type="text"
      @keyup.enter="onClickButton"
      v-model.trim="query"
      name="user-search"
      label="Search"
      placeholder="   Search by Battletag"
    ></input>
    <button @click="onClickButton" light default>Search</button>
  </div>
</template>

<script>
export default {
  name: 'user-search',
  data () {
    return {
      query: ''
    }
  },
  methods: {
    onClickButton: function (event) {
      this.$emit('clicked', this.query)
    }
  }
}
</script>

<style>
  input {
    background-color: white;
    height: 36px;
    width: 200px;
    border-radius: 2px;
  }

  button {
    background-color: grey
  }

</style>
