<template>
  <div id="app">
    <v-app>
      <v-toolbar dark>
        <v-spacer></v-spacer>
        <v-toolbar-title>
          アニメ検索くん
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-content>
        <Search/>
      </v-content>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>
import Search from './components/search.vue'
import 'vuetify/dist/vuetify.min.css'

export default {
  name: 'app',
  components: {
    Search,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
