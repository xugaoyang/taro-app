export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/todo/index',
    'pages/calendar/index',
    'pages/addTodo/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#999',
    selectedColor: '#e300ff',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/images/mdi--home-outline.png',
        selectedIconPath: './assets/images/mdi--home-outline_active.png'
      },
      {
        pagePath: 'pages/todo/index',
        text: '任务',
        iconPath: './assets/images/mdi--clipboard-list-outline.png',
        selectedIconPath: './assets/images/mdi--clipboard-list-outline_active.png'
      },
      {
        pagePath: 'pages/calendar/index',
        text: '日历',
        iconPath: './assets/images/mdi--calendar-month.png',
        selectedIconPath: './assets/images/mdi--calendar-month_active.png'
      }
    ]
  }
})

