import React from 'react';
import { View} from '@tarojs/components'
import {AtAccordion, AtList, AtListItem } from 'taro-ui';

function ModuleList() {
  const moduleList = [
    { title: 'EAP033', wordLists: ['This is list 1','This is list 2','This is list 3']},
    { title: 'EAP015', wordLists: ['This is list 1','This is list 2','This is list 3', 'This is list 4']},
    { title: 'LAN019', wordLists: ['This is list 1','This is list 2']},
  ];
  return (
    <View className="index">
      {moduleList.map((module, index) => (
        <AtAccordion
          key={index} // provide a unique key for each item in the array
          open={this.state.openList[index] || false}
          onClick={() => this.handleClick(index)}
          title={module.title}
          icon={{ value: 'tags', color: '#337ecc', size: '19' }}
        >
          <AtList hasBorder={true}>
          {module.wordLists.map((list)=>(
            <AtListItem title={list} arrow="right" />
          ))}
          </AtList>
        </AtAccordion>
      ))}
    </View>
  )
}

export default ModuleList;