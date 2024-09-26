<template>
  <div id="app">
    <header>
      <BHeader />  
    </header>

    <main>
      <router-view />  <!-- This renders the routed components -->
    </main>
  </div>
</template>

<script setup>
import BHeader from './components/BHeader.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isAuthenticated = ref(localStorage.getItem('isAuthenticated') === 'true')

const logout = () => {
  localStorage.removeItem('isAuthenticated')
  router.push('/login')
  isAuthenticated.value = false
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
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
