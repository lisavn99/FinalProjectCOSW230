<template>
  <div>

<header>
  <div class="navbar navbar-default">
    <div class="navbar-header">
      
      <h1 style="font-size: 7em;color:#7401DF; font-family: 'Dancing Script', cursive;font-weight:bold;text-shadow: 3px 3px #088A4B;" >
        <router-link :to="{name: 'iMain'}">{{ sitename }}</router-link></h1>
    <h2></h2>
    </div>
    <div class="nav navbar-nav navbar-right cart">
        <router-link active-class="active" tag="button" class="btn btn-default btn-lg" :to="{name: 'Form'}">
        
      
            <div><span class="btn btn-primary submit"> Add User</span><p></div>
        </router-link>
      
    </div>
  </div>
</header>
  </div>
</template>

<script>

export default {
  name: 'my-header',
  data () {
    return {
    sitename: "List of Users",
    }
  },
  props: ['cartItemCount'],
   
  
  methods: {
    showCheckout() {
      this.$router.push({name: 'Form'});
    },


        cartCount(id) {
      let count = 0;
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }
      return count;
    },


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: black;
}
.router-link-exact-active {
  color: blue;
}
</style>
