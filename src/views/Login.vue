<template>
  <div>
      <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Email</label>

     
     <input required v-model="user.email" type="email" placeholder="Name"/>
      <span v-if="errors.email">
          {{errors.email[0]}}
      </span>
      <br>
      <br>
     <label>Password</label>
     <input required v-model="user.password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name:"Login",
    data() {
        return {
           user:{
               email:'',
               password:''
           }
        }
    },
    computed: {
        ...mapGetters('user',["errors"])
    },
    methods: {
            ...mapActions("user",["loginUser"]),
                login(){
                    this.loginUser(this.user)
                }
         
    },

}
</script>

<style>

</style>
