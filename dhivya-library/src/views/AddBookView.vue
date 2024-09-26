<template>
    <div>
      <h1>Add Book</h1>
      <form @submit.prevent="addBook">
        <div>
          <label for="isbn">ISBN: </label>
          <input type="text" v-model="isbn" id="isbn" required />
        </div>
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
    <BookList/>
    <div>
        <h1>Enter Book name to delete</h1>
        <label for="bookName">Name:</label>
        <input type="text" v-model="bookName" id="bookName" required />
    </div>
    <button @click="deleteBook">Delete Book</button>
    <div>
        <h1>View selected books</h1>
        <label for="selectBookName">Book Name:</label>
        <input type="text" v-model="selectBookName" id="selectBookName" required />
        <label for="resultLimit">Result Limit:</label>
        <input type="text" v-model="resultLimit" id="resultLimit" required />
    </div>
    <button @click="selectBooks">Select Books</button>
    <div>
        <ul>
            <li v-for="book in books" :key="book.id">
                {{ book.name }} - ISBN: {{ book.isbn }}
            </li>
        </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import db from '../firebase/init.js';
  import { collection, addDoc, deleteDoc, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
  import BookList from '../components/BookList.vue';
  
  export default {
    components: {
      BookList
    },
    setup() {
      const isbn = ref('');
      const name = ref('');
      const bookName = ref('');
      const selectBookName = ref('');
      const resultLimit = ref(5);
      const books = ref([]);
  
      const addBook = async () => {
        try {
          const isbnNumber = Number(isbn.value);
          if (isNaN(isbnNumber)) {
            alert('ISBN must be a valid number');
            return;
          }
  
          await addDoc(collection(db, 'books'), {
            isbn: isbnNumber,
            name: name.value
          });
          isbn.value = '';
          name.value = '';
          alert('Book added successfully!');
        } catch (error) {
          console.error('Error adding book: ', error);
        }
      };
  
      const deleteBook = async () => {
        try {
          const q = query(collection(db, 'books'), where('name', '==', bookName.value));
          const querySnapshot = await getDocs(q);
  
          if (!querySnapshot.empty) {
            querySnapshot.forEach(async (doc) => {
              await deleteDoc(doc.ref);
            });
            bookName.value = '';
            alert('Book deleted successfully!');
          } else {
            alert('No book found with the given name');
          }
        } catch (error) {
          console.error('Error deleting book: ', error);
        }
      };
  
      const selectBooks = async () => {
        try {
          const bookQuery = query(
            collection(db, 'books'),
            where('name', '>=', selectBookName.value),
            orderBy('name'),
            limit(Number(resultLimit.value))
          );
  
          const querySnapshot = await getDocs(bookQuery);
          books.value = [];
  
          querySnapshot.forEach((doc) => {
            books.value.push({ id: doc.id, ...doc.data() });
          });
  
          if (books.value.length === 0) {
            alert('No books found matching your criteria');
          }
        } catch (error) {
          console.error('Error selecting books: ', error);
        }
      };
  
      return {
        isbn,
        name,
        bookName,
        selectBookName,
        resultLimit,
        books,
        addBook,
        deleteBook,
        selectBooks
      };
    }
  };
  </script>
  
