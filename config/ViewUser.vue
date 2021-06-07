<template>
  <div>
    <my-header></my-header>
    <h1> {{ $route.params.id}}</h1>
    <div class="row">

      <div class="col-md-6 col-md-offset-0 description">
        <h1>{{user.name}}</h1>
        <p v-html="user.email"></p>
        <p class="price">
          {{user.id }}
        </p>
        <button @click="edit">Edit User</button>
        <router-view></router-view> 
      </div>
    </div>
  </div>
  </template>
  <script>
  import MyHeader from './Header.vue'
  export default {
    components: { MyHeader },
    data() {
    return {
      user: ''
    }
  },
  methods: {
      edit() {
        this.$router.push({name: 'Edit'})
      }
  },
   mounted() {
    axios.get("https://jsonplaceholder.typicode.com/users"+this.id)
      .then(res => {
        this.usersList = res.data;
        console.log(this.usersList)
      })
      .catch(error => {
        console.log(error)
         // Manage errors if found any
      })
  }
}
</script>
