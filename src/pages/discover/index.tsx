import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Text, Image} from '@tarojs/components'
import { AtIcon, AtGrid } from 'taro-ui'
import './index.less'

export default class Index extends Component<PropsWithChildren> {


  moudles(){
    return(
      <View className='moudles' >
        <AtGrid  columnNum={4} hasBorder={false} data={
        [
           {
             image: require('../../static/images/listen.png'),
             value: 'Listen'
           },
           {
             image: require('../../static/images/speak.png'),
             value: 'Speaking'
           },
           {
            image: require('../../static/images/read.png'),
            value: 'Reading'
          },
           {
            image: require('../../static/images/write.png'),
            value: 'Writing'
          },
         ]
       } />
        <AtGrid  columnNum={3} hasBorder={false} data={
        [
           {
             image: require('../../static/images/battle.png'),
             value: 'Words Battle'
           },
           {
             image: require('../../static/images/quiz.png'),
             value: 'Class Quiz'
           },
           {
            image: require('../../static/images/game.png'),
            value: 'Class Game'
          },
         ]
       } />
      </View>

    )
  }

  todayReadings(){
    function goArticle(){
      Taro.navigateTo({
        url: "/pages/articleDetails/index"
      })
    }
  
    return(
      <View className='todayReadings' onClick={goArticle}>
        {/* 标题 */}
        <View className='at-row at-row__align--center'>
          <View className='at-col'>
            <View className='todayReadingsTop'>
              <View className='readingTop'>  
                <Text>
                  Daily Reading
                </Text>

              </View>
            </View>
          </View>
          <View className='at-col'>
              <View className='readingMore'>
                <Text className='moreText'>More</Text>
                <View>
                <AtIcon value='chevron-right' size='16' color='rgb(209, 209, 209)'></AtIcon>
                </View>
                
            </View>
          </View>
        </View>
        {/* Image */}
        <View className='contentImage'>
        </View>
        {/* 文章大致内容 */}
        <View className='mainContent'>
          How Can AI Help Create Flavours?
        </View>
        <View className='CNContent'>
          食物味道, AI制造!
        </View>
      </View>


    )
  }




  render () {
    return (
      <View className='index'>
        <this.moudles />
        {/* 每日文章 */}
        <this.todayReadings></this.todayReadings>
        {/* 底部信息 */}
        <View className='endMsg'>
          <Text>
            一  Done~  一
          </Text>
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

