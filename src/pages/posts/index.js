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
      <View className="container">
        {posts.map((post) => 
          <View className="card" key={post.id}>
            <Image mode="aspectFill" className="card-img-top" src={post.imageUrl} />
            <View className="card-body">
              <View className="card-title">{post.title}</View>
              <View className="card-subtitle">{post.author}</View>
            </View>
          </View> 
        )}
      </View>
    )
  }
}

export default PostIndex