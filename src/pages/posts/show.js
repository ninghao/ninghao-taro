import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class PostShow extends Component {
  state = {
    post: {}
  }

  config = {
    navigationBarTitleText: 'Post'
  }

  handleClick(name, event) {
    console.log(event)
    console.log(`hello ${name}`)
  }

  async componentWillMount() {
    const response = await Taro.request({
      url: `${API_HOST}/posts/${this.$router.params.id}`
    })

    this.setState({
      post: response.data
    })

    Taro.setNavigationBarTitle({
      title: response.data.title
    })
  }

  render() {
    return (
      <View>
        <Image mode="aspectFill" className="card-img-top" src={post.imageUrl} />
        <View className="card-body no-border">
          <View className="card-title">{post.title}</View>
          <View className="card-subtitle">{post.author}</View>
          <View className="card-text">{post.description}</View>
        </View>
      </View>
    )
  }
}

export default PostShow