import Taro from '@tarojs/taro'
import { Component, PropsWithChildren} from 'react'
import { View, Text, Image, RichText} from '@tarojs/components'
// import { AtIcon, AtGrid } from 'taro-ui'
import './index.less'



export default class Index extends Component<PropsWithChildren> {

  ArticleTitle(props){
    const title = props.title;
    console.log(title);
    return(
      <>
        <View className='articleTitle'>
          {title}
        </View>
        <View className='contentImage'>
        </View>
      </>
    )
  }

  markText(text) {
    const redWords = ["Swiss", "texture", 'artificial', 'intelligence']; // 在这里定义需要标红的单词
    const words = text.split(" ");
    return (
      <View className='mainContent'>
        
        {words.map((word, index) => {
          if (redWords.includes(word)) {
            return <>
                    <Text key={index} style={{ backgroundColor: "#e1f3d8"}}>{word} </Text> 
                  
                  </> ;
          }
          return <Text key={index}>{word} </Text>;
        })}
      
      </View>

    );
  }

  render () {
    const Title = "How Can AI Help Create Flavours?";
    const text = "Swiss company Firmenich has developed an artificial intelligence system that can predict the taste and texture of meat based on its texture, colour, and the way it responds to cooking and the way it feels in the mouth.";
    return (
      <View className='container'>
        <this.ArticleTitle title={Title} ></this.ArticleTitle>
        {this.markText(text)}

      </View>
    )
  }
}



