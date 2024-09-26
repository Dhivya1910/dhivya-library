
<template>
    <div>
      <h1>Create an account</h1>
      <p><input type="text" placeholder="Email" v-model="email" /></p>
      <p><input type="password" placeholder="Password" v-model="password" /></p>
      <p><button @click="register">Save to Firebase</button></p>
  
      <!-- Display error message if any -->
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </template>

<script setup>
import { ref } from "vue"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const errorMessage = ref("") // Variable to hold error messages
const router = useRouter()
const auth = getAuth()

const register = () => {

  if (email.value === 'admin@gmail.com' && password.value === 'Admin@123') {
    errorMessage.value = "Account already registered" // Set error message
    return
  }

  // If not the admin credentials, proceed with registration
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user

      let role = 'user'

      localStorage.setItem('role', role)

      console.log(`Firebase Register Successful! Assigned Role: ${role}`)
      router.push("/FireLogin")
    })
    .catch((error) => {
      errorMessage.value = error.message 
      console.log("Error:", error.code)
    })
}
</script>

