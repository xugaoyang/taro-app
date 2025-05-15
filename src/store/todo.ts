import { TodoItem } from '@/types/todo'
import Taro from '@tarojs/taro'

const STORAGE_KEY = 'todos'

export const todoStore = {
    todos: [] as TodoItem[],

    getTodos() {
        const data = Taro.getStorageSync(STORAGE_KEY)
        this.todos = data || []
        return this.todos
    },

    saveTodos() {
        Taro.setStorageSync(STORAGE_KEY, this.todos)
    },

    addTodo(todo: { text: string; createdAt: string }) {
        this.todos.push({
            id: Date.now().toString(),
            text: todo.text,
            completed: false,
            createdAt: todo.createdAt
        })
        this.saveTodos()
    },

    toggleTodo(id: string) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        this.saveTodos()
    },

    deleteTodo(id: string) {
        this.todos = this.todos.filter(todo => todo.id !== id)
        this.saveTodos()
    },

    getCompletedTodos() {
        return this.todos.filter(todo => todo.completed)
    },

    getActiveTodos() {
        return this.todos.filter(todo => !todo.completed)
    }
}