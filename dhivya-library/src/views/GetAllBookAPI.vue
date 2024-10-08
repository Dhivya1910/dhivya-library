<template>
    <div>
      <h1>All Books</h1>
      <pre>{{ books }}</pre> <!-- Display books in JSON format -->
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // You will use axios to fetch data
  
  export default {
    name: 'GetAllBookAPI',
    data() {
      return {
        books: null, // Store the fetched book data here
        error: null
      };
    },
    async created() {
      try {
        // Fetch the book data from your API
        const response = await axios.get('https://getallbooks-f4bofbqj4q-uc.a.run.app');
        this.books = response.data; // Set the response data to the books variable
      } catch (error) {
        this.error = "Failed to fetch books";
        console.error(error);
      }
    }
  };
  </script>
  
  <style scoped>
  pre {
    white-space: pre-wrap; /* Ensures that the JSON is properly formatted */
  }
  </style>
  