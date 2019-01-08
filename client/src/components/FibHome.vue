<template>
  <div id="FibHome">
    <form @submit.prevent="handleSubmit">
      <label>Enter your index:</label>
      <input v-model="index" />
      <button>Submit</button>
    </form>

    <h3>Indexs I have seen:</h3>
    {{ renderSeenIndexs }}

    <h3>Cacluted Values:</h3>
    <div v-for="(value, key) in values" :key="key">
      For index {{ key }}, calculated {{ value }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FibHome',
  data () {
    return {
      seenIndexs: [],
      values: {},
      index: ''
    }
  },
  computed: {
    renderSeenIndexs () {
      return this.seenIndexs.map(({ number }) => number).join(', ')
    }
  },
  mounted () {
    this.fetchValues()
    this.fetchIndexs()
  },
  methods: {
    async fetchValues () {
      const values = await axios.get('/api/values/current')
      this.values = values.data
    },
    async fetchIndexs () {
      const seenIndexs = await axios.get('/api/values/all')
      this.seenIndexs = seenIndexs.data
    },
    async handleSubmit () {
      await axios.post('/api/values', {
        index: this.index
      })
      this.index = ''
      this.fetchValues()
      this.fetchIndexs()
    }
  }
}
</script>

<style>

</style>
