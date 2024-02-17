import axios from 'axios'
import { useState, useEffect } from 'react'

const PostsPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts')
        setPosts(response.data.posts)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
    getPosts()
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostsPage