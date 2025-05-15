import { Tabbar } from '@nutui/nutui-react-taro'
import { useState } from 'react'
import Taro from '@tarojs/taro'

export default function CustomTabBar() {
    const [currentValue, setCurrentValue] = useState(0)

    const handleSwitch = (value: number) => {
        const urls = ['/pages/index/index', '/pages/todo/index', '/pages/calendar/index']
        Taro.switchTab({ url: urls[value] })
        setCurrentValue(value)
    }

    return (
        <Tabbar
            fixed
            value={currentValue}
            onSwitch={handleSwitch}
        >
            <Tabbar.Item title="首页" value={0} />
            <Tabbar.Item title="任务" value={1} />
            <Tabbar.Item title="日历" value={2} />
        </Tabbar>
    )
}