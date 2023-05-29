// import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Text, Image} from '@tarojs/components'
import { AtProgress} from 'taro-ui'
import './index.less'

export default class Index extends Component<PropsWithChildren> {



  bookCard(){
    return(
      <View className='bookCard'>
        {/* 单词表的图片 */}
        <View className='bookImage'></View>
        {/* 单词表的描述 */}
        <View className='bookDetails'>
            <View className='bookName'>
              EAP033
            </View>

            <View className='schedule'>
              <View>
                666 / 3272
              </View>
            </View>

            <View className='progress'>
              <AtProgress percent={25} isHidePercent />
            </View>

            <View>
              
            </View>

        </View>
      </View>
    )
  }


  render () {
    return (
      <View className='index'>
        <this.bookCard></this.bookCard>
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

