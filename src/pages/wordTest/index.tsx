import Taro from '@tarojs/taro'
import { Component, PropsWithChildren} from 'react'
import { View, Text} from '@tarojs/components'
import { AtButton} from 'taro-ui'
import './index.less'


// const [pressed, setPressed] = useState(false);
export default class Index extends Component<PropsWithChildren> {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { question: "The word 'analyze' means to combine different elements to form a coherent whole. (True/False)",
          answer: false},
      ],
      isPressedTrue: false,
      isPressedFlase: false,
    }
  }
  
 checkFalse= () => {
    this.setState(prevState => ({
       isPressedTrue: !prevState.isPressedFlase
       
    }))
  }

  checkTrue= () => {
    this.setState(prevState => ({
      isPressedTrue: !prevState.isPressedTrue
  }))
}


  render () {
    const { data, isPressedTrue, isPressedFlase} = this.state
    const { question, content } = data[0]    

    return (
      <>
        <View  className='container'>
          <View className='myWord'>
            {/* 问题 */}
            <Text className='words'>
             {question}
            </Text>

          </View>
        </View>
        <View className='saveBtn'>
          <AtButton size='large' type='secondary' onClick={this.checkTrue} 
           style={{ border: isPressedTrue ? '2px solid red' : '1px solid black'}}>
            True
          </AtButton>
          <AtButton size='large'   onClick={this.checkFalse} className='falseButton'>False</AtButton>
        </View>
      </>

    )
  }
}



