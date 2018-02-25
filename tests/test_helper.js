const Blog = require('../models/Blog')
//const User = require('../models/User')

const initialBlogs = [
  {
    title: "blog 1",
    author: "Mika Salo",
    url: "blogspot.fi/ferrari2japan",
    likes: 10
  },
  {
    title: "blog 2",
    author: "Mikko Alatalo",
    url: "blogspot.ru/maalaispoika",
    likes: 3
  }
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs
}

/*const usersInDb = async () => {
  const users = await User.find({})
  return users
}*/

module.exports = {
  initialBlogs, blogsInDb//, usersInDb
}