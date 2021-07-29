import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
        state: {
            todos: [
                {
                    title: 'Task one',
                    done: false 
                },
                { 
                    title: 'Task two',
                    done: false 
                }
            ],
            newTodo: ''
        },
        getters:{
            allTodos: state => {
                return state.todos
                },
            newTodo: state => {
                return state.newTodo
                },
            completedTodos: state => state.todos.filter((todo) => {
                return todo.done
            })
        },
        mutations: {
            GetTodo(state, todo){
                state.newTodo=todo
            },
            AddTodo(state){
                state.todos.push({
                title: state.newTodo,
                done: false
                })
            },
            DoneTodo(state, index){
                var todos = state.todos
                todos[index].done=!todos[index].done
            },
            DeleteTodo(state, index){
                var todos = state.todos
                todos.splice(index, 1)
            }
        },
        actions: {     
            getTodo({commit}, todo){
                commit('GetTodo', todo)
            },
            addTodo({commit}){
                commit('AddTodo')
            },
            doneTodo({commit}, index){
                commit('DoneTodo', index)
            },
            deleteTodo({commit}, index){
                commit('DeleteTodo', index)
            }
        }
        })