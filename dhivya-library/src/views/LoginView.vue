<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
          />
        </div>
        <button type="submit">Login</button>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const username = ref('')
  const password = ref('')
  const errorMessage = ref('')
  
  const handleSubmit = () => {
    const hardcodedUsername = 'admin'
    const hardcodedPassword = 'Admin@123'  // Updated password
  
    if (username.value === hardcodedUsername && password.value === hardcodedPassword) {
      localStorage.setItem('isAuthenticated', 'true')
    } else {
      localStorage.setItem('isAuthenticated', 'false')
    }
    router.push('/')  // Redirect to the home page regardless of login success
  }
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 100px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #39a874;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  