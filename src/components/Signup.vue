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
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'; 
    import {  createUserWithEmailAndPassword } from 'firebase/auth';

    let displayName = ref('');
    let email = ref('');
    let password = ref('');
  
    let signup=async()=>{
      let res = await createUserWithEmailAndPassword(email.value,password.value)
      console.log(res.user);
    }
  </script>
  
  <style scoped>
    h1{
      color: black;
      font-size: 25px;
      font-family: Arial, Helvetica, sans-serif;
    }
  </style>