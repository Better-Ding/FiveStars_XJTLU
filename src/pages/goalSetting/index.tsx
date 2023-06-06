import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View,Text} from '@tarojs/components'
import { AtProgress,AtIcon,AtButton} from 'taro-ui'
import './index.less'

export default class Index extends Component<PropsWithChildren> {
  



  bookCard(){
    function goChangeModule(){
      Taro.navigateTo({
        url: "/pages/moduleChange/index"
      })
    }
    return(
      <View className='bookCard'>
        {/* 单词表的图片 */}
        <View className='bookImage'></View>
        {/* 单词表的描述 */}
        <View className='bookDetails'>
            <View className='bookName'>
              EAP033
              <View className='changeModule' onClick={goChangeModule}>
                <AtIcon value='repeat-play' size='10' color='#C0C0C0'></AtIcon>
                <Text> Change Module</Text>
              </View>

            </View>

            <View className='schedule'>
              <View>
                666 / 3272
              </View>
            </View>

            <View className='progress'>
              <AtProgress percent={25} isHidePercent />
            </View>
        </View>
      </View>
    )
  }

  // ScrollableContainer() {
  //   return (
  //     <Picker>
  //       <AtList>
  //         <AtListItem title='标题文字' extraText='详细信息' />
  //         <AtListItem title='禁用状态' disabled extraText='详细信息' />
  //       </AtList>
  //     </Picker>
  //   );
  // }

  render () {
    function goBackToMain(){
      Taro.switchTab({
        url: "/pages/index/index"
      })
    }
    return (
      <View className='index'>
        <this.bookCard></this.bookCard>
        {/* <this.ScrollableContainer>
         
        </this.ScrollableContainer> */}
        <View className='saveBtn'>
          <AtButton type='primary' onClick={goBackToMain}>Save Plan</AtButton>
        </View>
      </View>
    )
  }

  
  //第一次渲染前执行
  componentWillMount () {
  }
  //第一次渲染后执行，只执行一次
  componentDidMount () {

   }
   //载后执行，只执行一次
  componentWillUnmount () {

   }
   // react不存在，但taro中存在
   //页面显示时触发
  componentDidShow () { 

  }

  componentDidHide () { }
}

