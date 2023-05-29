import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Text} from '@tarojs/components'
import { AtButton, AtAvatar,AtDivider, AtIcon,AtProgress} from 'taro-ui'
import './index.less'

export default class Index extends Component<PropsWithChildren> {
  url =  '../'

  // state={
  //   name:'开始背单词吧!'
  // }


  studentCard(){
    function goGoalSetting(){
    
      Taro.navigateTo({
        url: "/pages/goalSetting/index"
      })
    }
    return(
      <View className='studentCard'>
        {/* 个人信息 */}
        <View className='studentInfo'>
          <AtAvatar circle image='http://storge.ddbouldering.cn/%E5%A4%B4%E5%83%8F%20%E7%94%B7%E5%AD%A9.png' size='large'></AtAvatar>
          <View className='info'>
            <view className='userName'>Admin</view>
            <View className='userid'>ID: 123456</View>
          </View>
          <View className='calendar'>
            <Text>
              Word Bank
            </Text>
            <View>
              <AtIcon value='chevron-right' size='12s' color='#696969'></AtIcon>
            </View>
          </View>
        </View>
        <AtDivider height={50}  lineColor='#D3D3D3'/>

        <View className='englishContent'>
          <View className='bookInfo'>
            <View className='bookName'>
              EAP105
            </View>
            <View className='edit'>
              <View onClick={goGoalSetting}>
              Change
              </View>
              
              <View>
                <AtIcon value='chevron-right' size='10' color='rgb(195, 195, 195)'></AtIcon>
              </View>
            </View>
          </View>
          <View className='progress'>
            <AtProgress percent={25} isHidePercent />
          </View>
          <View className='schedule'>
            <View>
              666 / 3272
            </View>
            <View className='remainDays'>
              Remain 100 days
            </View>
          </View>
        </View>
      </View>

    )
  }

  todayGoal(){
    return(
      <View className='todayGoal'>
        <Text className='goalText'>
          - Today Goal -
        </Text>
        <View className='goalContent'>
          <View className='newWords'>
            <Text>
              10
            </Text>
            <View className='tips'>
              New
            </View>
          
          </View>
          <View className='newWords'>
            <Text>
              0
            </Text>
            <View className='tips'>
              Review
            </View>
          
          </View>
          <View className='newWords'>
            <Text>
              10
            </Text>
            <View className='tips'>
            UnLearned
            </View>
            
          </View>
        </View>
      </View>
    )
  }

  startWords(){
    return(

      <View className='startWords'>
        <AtButton  type='primary' circle >
          
          <View className='Start'>
          Start Memorize !
          </View>

        </AtButton>
      </View>
    )
  }


  render () {
    return (
      <View className='index'>
        {/* 学生卡片 */}
        <this.studentCard></this.studentCard>
        <this.todayGoal></this.todayGoal>
        <this.startWords></this.startWords>
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

