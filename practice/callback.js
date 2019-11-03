let posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
]

let printer = ''
let output = 'hi'
function getPosts() {
  setTimeout(() => {
    posts.forEach(post => {
      output += `<li> ${post.title} <li>`
    })
  }, 1000)
}
