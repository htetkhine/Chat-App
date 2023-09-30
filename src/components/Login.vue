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
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
   import { reactive, ref } from 'vue'; 
    let url = 'http://localhost:8000/';
    let loginHost = url+'api/login';

    let email = ref('');
    let password = ref('');
  
    let login=async()=>{
        let formData = reactive(this);
        console.log(formData);
        // const { data, pending, error, refresh } = await useFetch('loginHost',{
        //   method : "POST",
        //   body : formData
        // })
        // console.log(email.value,password.value)
    }
  </script>
  
  <style lang="scss" scoped>
    h1{
      color: black;
      font-size: 25px;
      font-family: Arial, Helvetica, sans-serif;
    }
  </style>