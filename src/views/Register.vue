<template>
  <div>

    <h4>Register</h4>
    <div v-if="regSuccess">
        Registration was succesful completed. <router-link to="/login">Login</router-link>
    </div>
    <form @submit.prevent="register">
      <label for="name">Name</label>
      <div>
          <input id="name" type="text" v-model="registerData.name" required autofocus>
      </div>
      <span v-if="errors.name">
          {{errors.name[0]}}
      </span>
      <br>
     <br>

      <label for="email" >E-Mail Address</label>
      <div>
          <input id="email" type="email" v-model="registerData.email" required>
      </div>
        <span v-if="errors.email">
          {{errors.email[0]}}
      </span>
      <br>
     <br>
      <label for="password">Password</label>
      <div>
          <input id="password" type="password" v-model="registerData.password" required>
      </div>
      <span v-if="errors.password">
          {{errors.password[0]}}
      </span>
      <br>
     <br>
      <label for="password-confirm">Confirm Password</label>
      <div>
          <input id="password-confirm" type="password" v-model="registerData.password_confirmation" required>
      </div>

      <div>
          <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
export default {
    name:"Register",
    data() {
        return {
            registerData:{
                name : "",
                email : "",
                password : "",
                password_confirmation : "",
                }
        }
    },
    computed: {
        ...mapGetters('user',["errors","regSuccess"])
    },
   watch: {
            $route: {
            handler(){
            this.REG_CLEAR()
                },
                immediate: true
        }
},
    methods: {
       ...mapMutations('user',["REG_CLEAR"]),
        ...mapActions("user",["registerUser"]),
            register(){
               this.registerUser(this.registerData)
            }
    }

}
</script>

<style>

</style>
