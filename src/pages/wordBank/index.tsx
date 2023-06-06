import Taro from '@tarojs/taro'
import { Component, PropsWithChildren} from 'react'
import { View, Text} from '@tarojs/components'
import { AtButton} from 'taro-ui'
import './index.less'



export default class Index extends Component<PropsWithChildren> {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { title: 'loneliness', content: 'n. the state of being lonely' },
        { title: 'uncommon', content: 'adj. not seen, happening, or experienced often' },
        { title: 'dissatisfaction', content: 'adj. a lack of satisfaction' },
      ]
    }
  }

  render () {
    const { data } = this.state
    const listItems = data.map((item, index) => (
      <>
        <View key={index} className='myWord'>
          {/* 单词 */}
          <Text className='words'>{item.title}</Text>
          {/* 单词翻译 */}
          <Text className='wordTrans'>{item.content}</Text>
        </View>
        <View className='Divder' />
      </>
    ))
    return (
      <>
        <View  className='container'>{listItems}</View>
        <View className='saveBtn'>
          <AtButton type='primary'>AI-recommended Vocabulary</AtButton>
        </View>
      </>

    )
  }
}



