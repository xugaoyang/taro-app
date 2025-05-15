import { View, Text } from '@tarojs/components'
import CustomTabBar from '@/custom-tab-bar'
export default function CalendarPage() {
    return (
        <View className='calendar-page'>
            <Text>日历页面</Text>
            {process.env.TARO_ENV === 'h5' && <CustomTabBar />}
        </View>
    )
} 