
<template>
    <div>
      <h2>Add New Book</h2>
      <form @submit.prevent="addBook">
        <div>
          <label for="title">Title:</label>
          <input type="text" v-model="newBook.title" id="title" required />
        </div>
        <div>
          <label for="author">Author:</label>
          <input type="text" v-model="newBook.author" id="author" required />
        </div>
        <button type="submit">Add Book</button>
      </form>
  
      <p v-if="addMessage">{{ addMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        newBook: {
          title: "",
          author: "",
        },
        addMessage: null,
      };
    },
    methods: {
      async addBook() {
        try {
          const response = await axios.post("https://addbook-f4bofbqj4q-uc.a.run.app", {
            title: this.newBook.title,
            author: this.newBook.author,
          });
          this.addMessage = response.data.message;
          this.newBook.title = "";
          this.newBook.author = "";
        } catch (error) {
          console.error("Error adding book:", error);
          this.addMessage = "Error adding book.";
        }
      },
    },
  };
  </script>
  