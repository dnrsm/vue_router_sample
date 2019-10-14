<template>
  <div class="home">
    <template v-for="(item, index) in users">
      <div :key="index">
        <router-link :to="{ name: 'user', params: { id: item.id }}">{{ item.name }}</router-link>
        <p>{{ item.username }}</p>
        <p>{{ item.email }}</p>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'users',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.get_users()
  },
  methods: {
    get_users() {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        this.users = res.data
      })
    }
  }
}
</script>
