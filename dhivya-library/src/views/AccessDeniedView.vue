<template>
    <div class="access-denied">
      <h2>Access Denied</h2>
      <p>You must be logged in to view this page.</p>
      <button @click="goToLogin">Login</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const goToLogin = () => {
    router.push('/login')
  }
  </script>
  
  <style scoped>
  .access-denied {
    text-align: center;
    margin-top: 50px;
  }
  
  button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #39a874;
  }
  </style>
  