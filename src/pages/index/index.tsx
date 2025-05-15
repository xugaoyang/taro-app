import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import CustomTabBar from '@/custom-tab-bar'
export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      {process.env.TARO_ENV === 'h5' && <CustomTabBar />}
    </View>
  )
}
