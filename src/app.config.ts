export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/discover/index',
    'pages/personal/index',
    'pages/articleDetails/index',
    'pages/goalSetting/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color:"#dbdbdb",
    selectedColor:"#2c2c2c",
    list: [
      {
        pagePath: 'pages/index/index',
        text: 'Home',
        iconPath: './static/tabBar/home.png',
        selectedIconPath: './static/tabBar/home_selected.png'
      },
      {
        pagePath: 'pages/discover/index',
        text: 'Discover',
        iconPath: './static/tabBar/discover.png',
        selectedIconPath: './static/tabBar/discover_selected.png'
      },
      {
        pagePath: 'pages/personal/index',
        text: 'Me',
        iconPath: './static/tabBar/me.png',
        selectedIconPath: './static/tabBar/me_selected.png'
      }
    ]
  },
})
