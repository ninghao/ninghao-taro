import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class PostIndex extends Component {
  config = {
    navigationBarTitleText: 'Posts'
  }

  handleClick(name, event) {
    console.log(event)
    console.log(`hello ${name}`)

    Taro.navigateTo({
      url: '/pages/posts/show'
    })
  }

  render() {
    return (
      <View>
        <Text onClick={this.handleClick.bind(this, 'ninghao')}>List</Text>
      </View>
    )
  }
}

export default PostIndex