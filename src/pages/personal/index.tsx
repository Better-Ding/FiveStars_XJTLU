import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Text} from '@tarojs/components'
import { AtAvatar,AtIcon, AtList, AtListItem} from 'taro-ui'
import './index.less'

export default class Index extends Component<PropsWithChildren> {
  url =  '../'


  handleClick(){
    console.log("test")
    // Taro.navigateTo({
    //   url: "/pages/personal/index?id=1"
    // })
  }

  // 学生的功能列表
  studentFunctions(){
    return(
      <View className='studentFunctions'>
        <AtList   hasBorder={false}>
          <AtListItem 
           hasBorder={false}
           title='Learning Calendar'
           arrow='right' 
           />

          <AtListItem 
          hasBorder={false}
          title='Word Bank' 
          arrow='right' />
          <AtListItem 
          hasBorder={false}
          title='Vocabulary Test' 
          arrow='right' />
          <AtListItem 
          hasBorder={false}
          title='Goal Setting' 
          arrow='right'  />
        </AtList>
      </View>
    )
  }
  // 学生目前学习状态
  studentState(){
    return(
      <View className='studentState'>
        <View>
          <View>
            Learned
          </View>
          <Text>
            900
          </Text>

        </View>

        <View>
          <View>
            Consecutive Days
          </View>
          <Text>
            40
          </Text>
        </View>
      </View>
    )

  }
  // 学生box
  studentBox(){
    return(

    <View className='studentCard'>
      <View className='studentInfo'>
        <AtAvatar circle image='http://storge.ddbouldering.cn/%E5%A4%B4%E5%83%8F%20%E7%94%B7%E5%AD%A9.png' size='large'></AtAvatar>
        <View className='info'>
          <view className='userName'>ZiXuan</view>
          <View className='userid'>ID: 123456</View>
        </View>
        <View className='editMyInfo'>
          <AtIcon value='settings' size='15' color='#696969'></AtIcon>
        </View>
      </View>
    </View>
       

     
    )
  }

  render () {
    return (
      <View className='index'>
        <this.studentBox />
        <this.studentState />
        <this.studentFunctions />
      </View>
    )
  }

}



