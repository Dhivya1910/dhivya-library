<template>
    <div>
      <h1>Sign In</h1>
      <p><input type="email" v-model="email" placeholder="Email" /></p>
      <p><input type="password" v-model="password" placeholder="Password" /></p>
      <button @click="signin">Sign In</button>
  
      <!-- Display notification message if available -->
      <p v-if="notificationMessage">{{ notificationMessage }}</p>
    </div>
  </template>
  
<script setup>
import { ref } from "vue"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const notificationMessage = ref("") // Ref to store the notification message
const router = useRouter()
const auth = getAuth()

const signin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user

      // Hardcode admin credentials check
      let role = 'user' 

      if (email.value === 'admin@gmail.com' && password.value === 'Admin@123') {
        role = 'admin'
        notificationMessage.value = "Logged in as Admin"
      } else {
        notificationMessage.value = "Logged in as User"
      }

      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('role', role)

      console.log(`Firebase Login Successful! User Role: ${role}`)
      router.push("/")  
    })
    .catch((error) => {
      notificationMessage.value = `Login failed: ${error.message}` // Show error message
      console.log("Error:", error.code)
    })
}
</script>

