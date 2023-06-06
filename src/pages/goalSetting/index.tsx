import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View,Text, PickerView, PickerViewColumn} from '@tarojs/components'
import { AtProgress,AtIcon,AtButton} from 'taro-ui'
import './index.less'
export default class Index extends Component<PropsWithChildren> {

  constructor () {
    super(...arguments)
    const remainWords = 3272;
    const days = []
    const remainDays = []
    for (let i = 1; i <= 50; i++) {
      const data = [i*5, parseInt(remainWords/(i*5))]
      days.push(data)
    }

    this.state = {
      remainDays: remainDays,
      days: days,
      day:days[0][0],
      remainDay:100,
      value: [20],
    }
  }

  onChange = e => {
    const val = e.detail.value
    console.log(this.state.days[val[0]])
    this.setState({
      remainDay: this.state.days[val[1]],
      day: this.state.days[val[0]],
      value: val
    })
  }

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


  render () {
    function goBackToMain(){
      Taro.switchTab({
        url: "/pages/index/index"
      })
    }
    return (
      <View className='index'>
        <this.bookCard></this.bookCard>

        <View className='goalPicker'>
          <View>
            {/* {this.state.day} */}
          </View>
          <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={this.state.value} onChange={this.onChange}>
            <PickerViewColumn className='pickerContainer'>
              {this.state.days.map(item => {
                return (
                  <View className='details'>
                    <View>{item[0]} Words</View>
                    <View>{item[1]} Days</View>
                  </View>
                );
              })}
              {/* {this.state.remainDays.map(item => {
                return (
                  <View>{item} Words</View>
                );
              })} */}
            </PickerViewColumn>
          </PickerView>
        </View>

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

