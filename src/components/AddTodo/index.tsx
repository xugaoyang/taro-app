import { View } from '@tarojs/components'
import { Form, Cell, Input, Button, DatePicker } from '@nutui/nutui-react-taro'
import { todoStore } from '../../store/todo'
import { ArrowRight } from '@nutui/icons-react-taro'
import dayjs from 'dayjs'
import Taro from '@tarojs/taro'


export default function Todo() {
    const initialValues = {
        createdAt: new Date(),
        text: ''
    }
    const cancelTodo = () => {
        Taro.navigateTo({ url: 'pages/todo/index' })
    }
    const addTodoFinish = (form) => {
        if (form.text && form.createdAt) {
            todoStore.addTodo(form)
            Taro.navigateTo({ url: 'pages/todo/index' })
        }
    }

    return (
        <View className='add-todo-container'>
            <Form
                initialValues={initialValues}
                labelPosition="right"
                onFinish={addTodoFinish}
                footer={
                    <div className="handle-btns">
                        <Button type='default' onClick={cancelTodo}>
                            取消
                        </Button>
                        <Button type='primary' formType="submit">
                            添加
                        </Button>
                    </div>
                }
            >
                <Form.Item
                    align="center"
                    label="任务"
                    name="text"
                >
                    <Input
                        placeholder="请输入任务"
                        type="text"
                    />
                </Form.Item>
                <Form.Item
                    align="center"
                    label="计划时间"
                    name="createdAt"
                    trigger="onConfirm"
                    getValueFromEvent={(...args) => {
                        const time = args[1][0] + '/' + args[1][1] + '/' + args[1][2] + ' ' + args[1][3] + ':' + args[1][4]
                        return new Date(time)
                    }}
                    onClick={(event, ref: any) => {
                        ref.open()
                    }}
                >
                    <DatePicker type="datetime">
                        {(value: any) => {
                            const showTime = dayjs(value).format('YYYY-MM-DD HH:mm')
                            return (
                                <Cell
                                    title={
                                        value
                                            ? showTime
                                            : 'Please select'
                                    }
                                    extra={<ArrowRight />}
                                    align="center"
                                />
                            )
                        }}
                    </DatePicker>
                </Form.Item>

            </Form>
        </View>
    )
} 