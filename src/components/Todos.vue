<template>
    <div id="container">
        <div align="center">
            <v-progress-circular
            :rotate="360"
            :size="150"
            :width="15"
            :value="completed.length*100/allTodos.length"
            color="pink"
            >
            {{completed.length}}/{{ allTodos.length }} 
            </v-progress-circular><br><br>
            <v-banner dark elevation="10" single-line color="pink" width="30%" align="center" rounded>My Progress...</v-banner>
            <br><br>
        </div>
        
        <v-card
            elevation="14"
            outlined
            tile
            id="base"
            color="secondary"
        >

        
            <v-card id="item" outlined
              v-for="(todo,index) in allTodos"
               v-bind:key="index" 
               >
                
                <v-checkbox id="check" class="control" color="success" v-model="todo.done" @click="doneTodo(index)">
                    <template v-slot:label>
                        <div style="font-weight:bold;" v-bind:style= "[todo.done ? {'text-decoration':'line-through'} : {}]">{{todo.title}}</div>
                        <v-btn color="red" class="btn" @click="deleteTodo(index)" v-on:click="snackbar=true" :right="true" :absolute="true" outlined> Delete </v-btn>
                    </template>
                </v-checkbox>

                
                <v-snackbar v-model="snackbar">
               {{text}}

                <template v-slot:action="{ attrs }">
                    <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="snackbar=false"
                    >
                    Close
                    </v-btn>
                </template>
                </v-snackbar>



            </v-card>
        </v-card>
        <br><br>
       <v-chip close-icon="mdi-close-outline" color="pink" outlined >
           Completed Tasks: {{completed.length}}
        </v-chip><br><br>
    </div>
</template>

<script>
    export default{
        data: () => ({
            snackbar: false,
            text: 'Todo Deleted!'
        }),
        methods:{
            doneTodo(index){
            this.$store.dispatch('doneTodo', index)
        },
            deleteTodo(index){
                this.$store.dispatch('deleteTodo', index)
            }
        },
        computed:{
            allTodos(){
                return this.$store.getters.allTodos
            },
            completed(){
                return this.$store.getters.completedTodos
            }
        }
    }
</script>

<style scoped>
 #container{
    text-align: center;
    margin-left:20%;
    margin-right:20%;
 }

#base{   
    margin-left:10%;
    margin-right:10%;
}
#item{
    margin:1%;
    border: 1px solid black;
    background-color:rgb(142, 197, 230);
}

#check{
    margin-left:20%;
    font-weight: bold;
}

.btn{
     width:20%;
 }

 
 v-chip{
     font-weight: bold;
 }

v-snackbar{
    color:white;
}

v-banner{
    font-weight: bold;
}
 
</style>