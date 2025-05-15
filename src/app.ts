import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import '@nutui/nutui-react-taro/dist/style.css'
import './app.scss'

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.')
  })

  return children
}

export default App
