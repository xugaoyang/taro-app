import { View, Text } from '@tarojs/components'
import { Cell, Button, Checkbox, Tabs } from '@nutui/nutui-react-taro'
import { TodoItem } from '@/types/todo'
import { todoStore } from '@/store/todo'
import { useState, useMemo } from 'react'
import './index.scss'


export default function Todo() {
    const [tabvalue, setTabvalue] = useState<string | number>('0')
    const [todos, setTodos] = useState<TodoItem[]>(todoStore.getTodos())
    const activeTodos = useMemo(() => {
        return todos.filter(todo => !todo.completed)
    }, [todos])
    const completedTodos = useMemo(() => {
        return todos.filter(todo => todo.completed)
    }, [todos])
    return (
        <View className='todo-container'>
            <Tabs
                value={tabvalue}
                onChange={(value) => {
                    setTabvalue(value)
                }}
            >
                <Tabs.TabPane title="进行中">
                    <View className='todo-list'>
                        {activeTodos.map(todo => (
                            <Cell key={todo.id}>
                                <View className='todo-item'>

                                    <Checkbox
                                        checked={todo.completed}
                                        onChange={() => todoStore.toggleTodo(todo.id)}
                                    />
                                    <Text className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                                        {todo.text}
                                    </Text>

                                    <Button
                                        className="todo-delete-btn"
                                        type='danger'
                                        size='small'
                                        onClick={() => todoStore.deleteTodo(todo.id)}
                                    >
                                        删除
                                    </Button>
                                </View>
                            </Cell>
                        ))}
                    </View>
                </Tabs.TabPane>
                <Tabs.TabPane title="已完成">
                    <View className='todo-list'>
                        {completedTodos.map(todo => (
                            <Cell key={todo.id}>
                                <View className='todo-item'>
                                    <Text className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                                        {todo.text}
                                    </Text>
                                    <Button
                                        type='danger'
                                        size='small'
                                        onClick={() => todoStore.deleteTodo(todo.id)}
                                    >
                                        删除
                                    </Button>
                                </View>
                            </Cell>
                        ))}
                    </View> </Tabs.TabPane>
            </Tabs>
        </View>
    )
} 