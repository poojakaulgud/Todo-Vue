<template>
  
  <v-app id="home">
    
    <v-alert
      border="right"
      color="secondary"
      dark
    >
      Pooja's Todo App
    </v-alert>

    <v-main>
     
      <AddTodos/>
      <br>
      <Todos/>
    </v-main>
    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
        style="background-color:lightblue;"
      >
        <strong>Today, I'll be Productive!</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodos from './components/AddTodos.vue'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodos
  }
}
</script>
<style scoped>
  #home{
    background-color: rgb(142, 197, 230);
  }
</style>
