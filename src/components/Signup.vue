<template>
    <div class="signup">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>Sign Up Form</h1>
          </div>
          <form @submit.prevent="signup">
            <div class="col-12 mb-3">
              <label class="form-label">Name</label>
              <input type="text" class="form-control" v-model="displayName">
            </div>
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
          <p class="text-danger">{{ error }}</p>       
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'; 
    import userSignUp from '../composables/singup';

    let displayName = ref('');
    let email = ref('');
    let password = ref('');
  
    let {error,createAccount} = userSignUp();
    let signup=async()=>{
      let res = await createAccount(email.value,password.value,displayName.value,);
    }
  </script>
  
  <style scoped>
    h1{
      color: black;
      font-size: 25px;
      font-family: Arial, Helvetica, sans-serif;
    }
  </style>