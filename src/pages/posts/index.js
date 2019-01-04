import { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class PostIndex extends Component {
  config = {
    navigationBarTitleText: 'Posts'
  }

  render() {
    return (
      <View>
        <Text>List</Text>
      </View>
    )
  }
}

export default PostIndex