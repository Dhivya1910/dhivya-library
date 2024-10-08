<template>
  <div class="main-container">
    <header v-if="showHeader">
      <BHeader />
    </header>
    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import BHeader from './components/BHeader.vue';
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CountBookAPI from './views/CountBookAPI.vue';
import GetAllBookAPI from './views/GetAllBookAPI.vue';

// Set up reactivity and imports
const route = useRoute();
const router = useRouter();
const isAuthenticated = ref(localStorage.getItem('isAuthenticated') === 'true');

// Define a computed property for showing the header
const showHeader = computed(() => {
  // Hide the header if the route is either 'CountBookAPI' or 'GetAllBookAPI'
  return route.name !== 'CountBookAPI' && route.name !== 'GetAllBookAPI';
});


// Define a logout method
const logout = () => {
  localStorage.removeItem('isAuthenticated');
  router.push('/login');
  isAuthenticated.value = false;
};
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
