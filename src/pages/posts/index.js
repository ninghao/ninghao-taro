import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class PostIndex extends Component {
  state = {
    posts: []
  }
  
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
      url: `${API_HOST}/posts`
    })

    this.setState({
      posts: response.data
    })

    console.log(response.data)
  }

  render() {
    return (
      <View>
        <Text onClick={this.handleClick.bind(this, 'ninghao', 3)}>List</Text>
        {posts.map((post) => 
          <View key={post.id}>{post.title}</View> 
        )}
      </View>
    )
  }
}

export default PostIndex