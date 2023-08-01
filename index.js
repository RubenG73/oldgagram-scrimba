const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const container = document.getElementById('posts-section')

for(let i = 0; i < posts.length; i++ ) {
    const newPost = posts[i]
    const newSection = document.createElement('div')
    newSection.setAttribute('class','post')
    newSection.innerHTML = `
        <div class="post-header">
        <img src="${newPost.avatar}" alt="" class="user-avatar">
        <div class="name-location">
            <p class="name">${newPost.name}</p>
            <p class="location">${newPost.location}</p>
        </div>
    </div>
    <img src="${newPost.post}" alt="" class='post-img'>
    <div class="icon-containers">
        <img src="images/icon-heart.png" alt="">
        <img src="images/icon-comment.png" alt="">
        <img src="images/icon-dm.png" alt="">
    </div>
    <p class="likes">${newPost.likes} likes</p>
    <p class="comment"><span class="username">${newPost.username}</span> ${newPost.comment}</p>
    `
    container.append(newSection)    
}