<template>
  <div class="about">
    <h2>User Id {{ $route.params.id }}</h2>
    <p>{{ user.name }}</p>
    <p>{{ user.website }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'user',
  data() {
    return {
      user: []
    }
  },
  created() {
    this.get_user()
  },
  methods: {
    get_user() {
      axios.get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
      .then(res => {
        this.user = res.data
      })
    }
  }
}
</script>

