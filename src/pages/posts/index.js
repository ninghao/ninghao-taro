import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class PostIndex extends Component {
  config = {
    navigationBarTitleText: 'Posts'
  }

  handleClick(name, id, event) {
    console.log(event)
    console.log(`hello ${name}`)

    Taro.navigateTo({
      url: `/pages/posts/show?id=${id}&name=${name}`
    })
  }

  async componentWillMount() {
    const response = await Taro.request({
      url: 'http://localhost:3333/posts'
    })

    console.log(response.data)
  }

  render() {
    return (
      <View>
        <Text onClick={this.handleClick.bind(this, 'ninghao', 3)}>List</Text>
      </View>
    )
  }
}

export default PostIndex