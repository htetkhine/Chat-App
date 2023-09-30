<template>
  <div class="home">
    <div v-if="showLoginForm">
      <Login />
      <p>Not member? <span @click="showLoginForm = !showLoginForm">Create account</span></p>
      <EmiVue />
    </div>
    <div v-else>
      <Signup />
      <p>Already member? <span @click="showLoginForm = !showLoginForm">Login account</span></p>
    </div>
  </div>
</template>

<script setup>
  import Signup from '@/components/Signup.vue';
  import Login from '@/components/Login.vue';
  import EmiVue from '@/components/Emi.vue';
  import { ref } from 'vue';

  let showLoginForm = ref(true);

</script>

<style>
  .home {
      text-align: center;
      padding: 20px 0;
  }
  .home form {
        width: 400px;
        margin: 20px auto;
        background-color: #fff;
        padding: 20px;
        box-shadow: 1px 1px 12px 2px #eee;
        border-radius: 20px;
        text-align: left;
  }
  .home input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }

  .home span{
    text-decoration: underline;
    cursor: pointer;
  }
          
  
</style>