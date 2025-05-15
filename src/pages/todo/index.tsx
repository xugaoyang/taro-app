import { View } from '@tarojs/components'
import Todo from '../../components/Todo'
import CustomTabBar from '@/custom-tab-bar'
import { Add } from '@nutui/icons-react-taro'
import { HoverButton } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

export default function TodoPage() {
  const addClick = () => {
    Taro.navigateTo({
      url: '/pages/addTodo/index'
    })
  }
  return (
    <View className='todo-page'>
      <Todo />
      <HoverButton icon={<Add />} onClick={addClick} />
      {process.env.TARO_ENV === 'h5' && <CustomTabBar />}
    </View>
  )
}