const blogsRouter = require('express').Router()
const Blog = require('../models/Blog')

//

blogsRouter.get('/', (req, res) => {
  Blog.find({})
    .then(blogs => {
        res.json(blogs)})   //ei blogs.map(formatBlog)
})


blogsRouter.post('/', (req, res) => {
  if(req.body.likes===null){
    req.body.likes = 0
  }
  if(req.body.title!==null && req.body.url!==null){
    const blog = new Blog(req.body)
    blog.save()
    .then(result => res.status(201).json(result))
    //return res.status(400).json({ error: 'Missing title or url' })
    //const fail = true
    
    
  }else{
    result => res.status(400).json({ error: 'Missing title or url' })
  //jos likes = nulli niin 0, jos ei bodyy tai urlii niin koodi 400
  //const blog = new Blog(req.body)
  

  
    //blog.save()
    //.then(result => res.status(201).json(result))
  }
  
})

module.exports = blogsRouter