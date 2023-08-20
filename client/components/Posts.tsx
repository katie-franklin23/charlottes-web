import postData from '../data/posts'
import Post from './Post'

function Posts() {
  return (
    <div className="new-posts">
      {postData.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}

export default Posts
