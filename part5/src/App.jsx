import { useEffect, useRef, useState } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notifications'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/Login'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [message, setMessage] = useState({})

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const blogFormRef = useRef()

  useEffect(() => {
    blogService.getAll()
      .then(blogs => {
        setBlogs(blogs)
        setMessage({ mssg: 'Blog succes', type: 1 })
        setTimeout(() => setMessage({}), 5000)
      })
      .catch(() => {
        setMessage({ mssg: 'Something went wrong list BLOG', type: 0 })
        setTimeout(() => setMessage({}), 5000)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      if (exception.response.status === 401) {
        setMessage({ mssg: 'wrong username or password', type: 0 })
      } else {
        setMessage({ mssg: 'Something went wrong LOGIN', type: 0 })
      }
      setTimeout(() => setMessage({}), 5000)
    }
  }

  const blogsToShow = blogs

  const addBlog = (blogObject) => {
    blogFormRef.current.toggleVisibility()

    blogService
      .create(blogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setMessage({ mssg: 'Created succesfully', type: 1 })
        setTimeout(() => setMessage({}), 5000)
      })
      .catch(() => {
        setMessage({ mssg: 'Not succes save information', type: 0 })
        setTimeout(() => setMessage({}), 5000)
      })
  }

  const handleLogout = () => {
    window.localStorage.clear()
  }

  const removeBlog = (blg) => {
    blogService
      .remove(blg.id)
      .then(() => {
        setBlogs(blogs.filter(blog => blog.id !== blg.id))
        setMessage({ mssg: 'Blog deleted', type: 1 })
        setTimeout(() => setMessage({}), 5000)
      })
      .catch(() => {
        setMessage({ mssg: `Blog ${blg.name}' was already removed from server`, type: 0 })
        setTimeout(() => {
          setMessage({})
          setBlogs(blogs.filter(b => b.id !== blg.id))
        }, 5000)
      })
  }

  return (
    <div>
      <Notification message={message.mssg} type={message.type} />

      {!user &&
        <Togglable buttonLabel='log in'>
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
        </Togglable>
      }
      {user &&
        <div>
          <p>{user?.name} logged-in <button onClick={handleLogout}>logout</button> </p>

          <Togglable buttonLabel='new Blog' refs={blogFormRef}>
            <BlogForm createBlog={addBlog} />
          </Togglable>

          <h2>blogs</h2>
          {blogsToShow.map(blog =>
            <Blog key={blog.id} blog={blog} handleDelete={removeBlog} />
          )}
        </div>
      }



    </div>
  )
}

export default App