import otherBlogsData from '../data/other-blogs'
import OtherBlog from './OtherBlog'

function OtherBlogs() {
  return (
    <div className="blogs">
      {otherBlogsData.map((blog) => (
        <OtherBlog key={blog.id} {...blog} />
      ))}
    </div>
  )
}

export default OtherBlogs
