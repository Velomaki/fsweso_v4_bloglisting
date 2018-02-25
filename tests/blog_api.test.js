const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)
const Blog = require('../models/Blog')
const helper = require('./test_helper')

test('notes are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})




test('Adding a blog is successful', async () => {
  const blog = {
    "title": "Ploki666",
    "author": "Timppa",
    "url": "blogspot.fi/uusiploki"
  }
  await api
    .post('/api/blogs')
    .send(blog)
    .expect(201)
    .expect('Content-Type', /application\/json/)
  })

  test('no title/url results in code 400', async () => {
    const blog = {
      
      "author": "Timbero",
      "url": "blogspot.fi/newblog"
    }
    //console.log(blog.title)
    await api
      .post('/api/blogs')
      .send(blog)
      .expect(400)
      .expect('Content-Type', /application\/json/)
    })

afterAll(() => {
  server.close()
})