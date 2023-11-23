const Blog = ({ blog, handleDelete }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const colorButton = {
    backgroundColor: 'blue'
  }

  const deleteBlog = () => {
    if (window.confirm(`¿Delete blog - ${blog.title}?`)) {
      handleDelete(blog)
    }
  }

  return (
    <div style={blogStyle}>
      <div>
        {blog.title}
      </div>
      <div>
        {blog.url}
      </div>
      <div>
        {blog.likes}
      </div>
      <div>
        {blog.author}
      </div>
      <button style={colorButton} onClick={deleteBlog}>remove</button>
    </div>
  )
}

export default Blog