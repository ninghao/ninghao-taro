import { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class PostShow extends Component {
  config = {
    navigationBarTitleText: 'Post'
  }

  handleClick(name, event) {
    console.log(event)
    console.log(`hello ${name}`)
  }

  render() {
    return (
      <View>
        <Text onClick={this.handleClick.bind(this, 'ninghao')}>Post</Text>
      </View>
    )
  }
}

export default PostShow