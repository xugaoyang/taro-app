import { create } from 'zustand'
import { TodoItem } from '@/types/todo'
import { createPersistStore } from '../persist'

interface TodoStore {
    todos: TodoItem[]
    getTodos: () => void
    addTodo: (item: TodoItem) => void
    toggleTodo: (id: string) => void
    deleteTodo: (id: string) => void
    getCompletedTodos: () => void
    getActiveTodos: () => void
}

const useTodoStore = create<TodoStore>()(
    createPersistStore('todo', (set) => ({
        todos: [] as TodoItem[],
        getTodos: () => set((state) => ({
            todos: state.todos
        })),
        addTodo: (item: TodoItem) => set((state) => ({
            todos: [...state.todos, item]
        })),
        toggleTodo: (id: string) => set((state) => ({
            todos: state.todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        })),
        deleteTodo: (id: string) => set((state) => ({
            todos: state.todos.filter(todo => todo.id !== id)
        })),
        getCompletedTodos: () => set((state) => ({
            todos: state.todos.filter(todo => todo.completed)
        })),
        getActiveTodos: () => set((state) => ({
            todos: state.todos.filter(todo => !todo.completed)
        }))
    }))
)

export default useTodoStore