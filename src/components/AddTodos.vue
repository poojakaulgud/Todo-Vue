<template>
    <div id="container">
       <form id="form">
           <input class="form-control" :value="newTodo" @change="getTodo" placeholder="What do you want to do Today?">
            <v-btn color="secondary" elevation="8" small @click="addTodo" class="btn">Add</v-btn>
        </form>     
  </div>
</template>
 <script>

    export default{
        methods: {
            getTodo(e){
                this.$store.dispatch('getTodo', e.target.value)
            },
            addTodo(){
                this.$store.dispatch('addTodo')
            }
        },
        computed: {
            newTodo(){
                return this.$store.getters.newTodo
            }
        }
}

 </script>
 
 <style scoped>
 #container{     
    margin-left:20%;
    margin-right:20%;
 }
 #form{
    align-content: center;
    border: 2px solid black;
    padding:2%;
 }

 .btn{
     width:20%;
 }

 .form-control{
    width: 80%;
 }

 .form-control:hover{
     border:none;
 }
 </style>
