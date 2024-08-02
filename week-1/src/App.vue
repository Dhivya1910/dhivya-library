<script setup>
const version = 0
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Myname from './components/Myname.vue'
</script>

<template>
  <!-- <h2>Hi again</h2> -->
  <!-- <h3 v-if="version > 0">This version is {{ version }}</h3>
  <h3 v-else>No version yet</h3> -->
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <Myname/>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
h2{
  color: blue;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
