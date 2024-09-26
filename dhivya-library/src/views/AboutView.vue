<template>
  <div class="about">
    <div v-if="isAuthenticated === 'true'">
      <h1>About Our Library</h1>
      <p>Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.</p>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <h1>Access Denied</h1>
      <p>You must be logged in with the correct credentials to view this page.</p>
      <button @click="goToLogin">Login</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isAuthenticated = ref(localStorage.getItem('isAuthenticated'))

const goToLogin = () => {
  router.push('/login')
}

const logout = () => {
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('role')
  router.push('/login')
  isAuthenticated.value = 'false'
}
</script>

<style scoped>
.about {
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
