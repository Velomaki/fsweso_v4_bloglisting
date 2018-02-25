const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const likes = blogs.map(blogi => blogi.likes)

    const reducer = (sum, item) => {
        return sum + item
    }

    return likes.length === 0 ? 0 : likes.reduce(reducer)
}

const favoriteBlog = (blogs) => {
    let blogi = null
    let tulos = 0
for(i=0; i<blogs.length;i++){
    if (blogs[i].likes > tulos) {
        tulos = blogs[i].likes
        blogi = blogs[i]
    }
}
if(blogi===null){
    return null
}

/*const bloggen = {
    title:blogi.title,
    author:blogi.author,
    url:blogi.url,
    likes:blogi.likes
}*/

    return blogi
}

const mostLikes = (blogs) => {
    let blogi = null
    let tulos = 0
for(i=0; i<blogs.length;i++){
    if (blogs[i].likes > tulos) {
        tulos = blogs[i].likes
        blogi = blogs[i]
    }
}
if(blogi===null){
    return null
}
const bloggen = {
    
    author:blogi.author,
   
    likes:blogi.likes
}
    return bloggen
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostLikes
}