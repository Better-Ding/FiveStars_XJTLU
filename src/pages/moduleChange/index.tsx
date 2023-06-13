// import Taro from '@tarojs/taro'
import { Component, PropsWithChildren} from 'react'
import { View} from '@tarojs/components'
import { AtAccordion, AtList, AtListItem} from 'taro-ui'
import './index.less'

export default class Index extends Component<PropsWithChildren> {

  constructor () {
    super(...arguments)
    this.state = {
      // store the open state of each AtAccordion
      openList: [],
    }
  }
  handleClick (index) {
    
    const { openList } = this.state;
    // console.log(openList)
    // make other Accordion component close
    openList.forEach((_, i) => {
      if (i !== index) {
        openList[i] = false;
      }
    });

    // toggle the value for the clicked index
    openList[index] = !openList[index]; 
    this.setState({
      openList,
    });
  }

  clickItem (index) {
    console.log(index)
  }

  render () {
    // const ModuleList =" lazy(() => import('./ModuleList'));
    const ModuleList = [
      { title: 'EAP033', wordLists: ['This is list 1','This is list 2','This is list 3']},
      { title: 'EAP015', wordLists: ['Test 1','Test 2','Test 3', 'Test 4']},
      { title: 'LAN019', wordLists: ['This is list 1','This is list 2']},
    ];

    return (
      <View className="index">
        {ModuleList.map((module, index) => (
          <AtAccordion
          // provide a unique key for each item in the array
            key={index} 
            open = {this.state.openList[index] || false}
            onClick={() => this.handleClick(index)}
            title={module.title}
            icon={{ value: 'tags', color: '#337ecc', size: '19' }}
            style={{ height: "auto" }} 
          >
          <AtList hasBorder={true}>
            {module["wordLists"].map((list, listIndex) => (

                  <AtListItem
                    key={`${index}-${listIndex}`} // provide a unique key for each list item
                    title={list}
                    arrow="right"
                    listIndex={listIndex}
                    onClick={() => this.clickItem(listIndex)}
                  />
                ))
             
            }
          </AtList>
          </AtAccordion>
        ))}
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

