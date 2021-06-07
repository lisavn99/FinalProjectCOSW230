<template>


  <div>
  <my-header></my-header>
  
  <main>
    <div  v-for="user in usersList" :key="user.id">


      <div id="menu">
        <div id="container">



      <div class="row">

        <div class="col-md-6 col-md-offset-0 description">

        <div v-if="(user.id)%3==1" class="box box1">
          <router-link tag="h1" :to="{ name : 'Id', params: {id: user.id}}" >{{user.name}}</router-link>
        
        email: {{ user.email }} <br>
        address: {{user.address.street}}, {{user.address.suite}} <br>
                 {{user.address.city}} {{user.address.zipcode}} <br>
        phone: {{user.phone}} <br>
        website: {{ user.website }} <br>
        company: {{user.company.name}} <br><br>
   <router-link active-class="active" tag="button" class="btn btn-default btn-lg" :to="{name: 'Edit'}">   
  <button @click="edit">View User Detail</button>
<router-view></router-view> 

    </div>
            
            <div v-if="(user.id)%3==2" class="box box2">
          <router-link tag="h1" :to="{ name : 'Id', params: {id: user.id}}" >{{user.name}}</router-link>
        
        email: {{ user.email }} <br>
        address: {{user.address.street}}, {{user.address.suite}} <br>
                 {{user.address.city}} {{user.address.zipcode}} <br>
        phone: {{user.phone}} <br>
        website: {{ user.website }} <br>
        company: {{user.company.name}} <br>
   <router-link active-class="active" tag="button" class="btn btn-default btn-lg" :to="{name: 'Edit'}">   
  <button @click="edit">View User Detail</button>
<router-view></router-view> 

    </div>

            <div v-if="(user.id)%3==0" class="box box3">
          <router-link tag="h1" :to="{ name : 'Id', params: {id: user.id}}" >{{user.name}}</router-link>
        
        email: {{ user.email }} <br>
        address: {{user.address.street}}, {{user.address.suite}} <br>
                 {{user.address.city}} {{user.address.zipcode}} <br>
        phone: {{user.phone}} <br>
        website: {{ user.website }} <br>
        company: {{user.company.name}} <br>
   <router-link active-class="active" tag="button" class="btn btn-default btn-lg" :to="{name: 'Edit'}">   
  <button @click="edit">View User Detail</button>
<router-view></router-view> 

    </div>


</div>
</div>



</div><!-- end of col-md-6-->
</div><!-- end of row-->
<hr />
</div><!-- end of v-for-->
</main>
</div>
</template>
<script>

import MyHeader from './Header.vue';
import axios from "axios";

export default {
  components: { MyHeader },
  data() {
    return {
      usersList: []
    };
  },
 methods: {
      edit() {
        this.$router.push({name: 'Edit'})
      }
  },


  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        this.usersList = res.data;
        console.log(this.usersList)
      })
      .catch(error => {
        console.log(error)
         // Manage errors if found any
      })
  }
};

</script>
#container {
     display: flex;
     flex-flow: row wrap;
     justify-content: space-around;
     align-items: stretch;
     font-family: 'Chonburi', cursive;
     padding:2%;
    } 
.zoom-within-container {
      height: 200px; /* [1.1] Set it as per your need */
      overflow: hidden; /* [1.2] Hide the overflowing of child elements */
    }
    .zoom-within-container{
      transition: transform .5s ease;
    }
    .zoom-within-container:hover{
      transform: scale(1.5);
    }
    a:hover #img, a:focus #img {
      transform:translate(-100px,-100px);
    } 
.box {
          margin: auto;
          padding: 1% 25% 1% 25%;
          width: 700px;
          text-align: left;
          margin-bottom: 10px;
        }
    
        .box1 {
          background-color: #efecca;
          color: #010;
        }
        .box2 {
          background-color: #b185a7;
          color: #fff;
        }
    
        .box3 {
          background-color: #06d6a0;
          color: #010;
        }
            body {
      background-image:url("http://lisaloanvu.com/cosw230/final/images/bg.jpg");
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
    }
<style scoped>



</style>
