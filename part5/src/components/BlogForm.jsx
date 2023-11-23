import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewBlog(values => ({ ...values, [name]: value }))
  }

  const addBlog = (event) => {
    event.preventDefault()

    createBlog(newBlog)
  }

  return (
    <div>
      <form onSubmit={addBlog}>
        <h1>create new</h1>

        <div>
          title:
          <input
            type="text"
            value={newBlog.title || ''}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div>
          autor:
          <input
            type="text"
            value={newBlog.author || ''}
            name="author"
            onChange={handleChange}
          />
        </div>
        <div>
          url:
          <input
            type="text"
            value={newBlog.url || ''}
            name="url"
            onChange={handleChange}
          />
        </div>
        <div>
          likes:
          <input
            type="number"
            value={newBlog.likes || ''}
            name="likes"
            onChange={handleChange}
          />
        </div>

        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default BlogForm