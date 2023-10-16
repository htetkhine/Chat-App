<template>
    <div class="login">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>Login Form</h1>
          </div>
          <form @submit.prevent="login">
            <div class="col-12 mb-3">
              <label class="form-label">Email address</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="col-12 mb-3">
              <label class="form-label">Password</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <button class="btn btn-success mt-4">Submit</button>
          </form>
          <p class="text-danger" v-if="errorMessage">
            {{ errorMessage }}
          </p>        
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import {ref } from 'vue'; 
    import getSignInUser from '../composables/login'

    let email = ref(null);
    let password = ref(null);
    let errorMessage = ref(null);
    let {error,signInUser} = getSignInUser();
    let login=async()=>{
        let res = await signInUser(email.value,password.value)
        if(res){
          console.log(res.user);
        }else{
          let removeText = error.value.replace('Firebase:','')
          errorMessage.value = removeText
        }
      }         
  </script>
  
  <style lang="scss" scoped>
    h1{
      color: black;
      font-size: 25px;
      font-family: Arial, Helvetica, sans-serif;
    }
  </style>