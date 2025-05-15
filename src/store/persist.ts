// stores/persist.ts
import { persist, StateStorage } from 'zustand/middleware'
import Taro from '@tarojs/taro'

// Taro 小程序专用存储适配器
const taroStorage: StateStorage = {
  getItem: (name: string) => {
    return new Promise((resolve) => {
      Taro.getStorage({ 
        key: name,
        success: (res) => resolve(res.data),
        fail: () => resolve(null)
      })
    })
  },
  setItem: (name: string, value: string) => {
    Taro.setStorage({ key: name, data: value })
  },
  removeItem: (name: string) => {
    Taro.removeStorage({ key: name })
  }
}

/**
 * 创建带持久化的 Zustand Store
 * @param name 存储键名（自动添加项目前缀）
 * @param config Store 配置
 */
export function createPersistStore<T>(name: string, config: any) {
  return persist<T>(config, {
    name: `myapp_${name}`, // 防止多项目冲突
    getStorage: () => taroStorage,
    partialize: (state) => {
      // 过滤不需要持久化的字段
      const { loading, _internalState, ...persisted } = state as any
      return persisted
    }
  })
}