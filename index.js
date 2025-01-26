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

function renderPosts(posts) {
    const container = document.getElementById("posts-container");
    posts.forEach((post) => {
        const postHtml = `
            <div class="container">
                <header>
                    <img
                    class="profile-image"
                    src="${post.avatar}"
                    alt="${post.name}"
                    />
                    <div class="flex-column">
                    <h2>${post.name}</h2>
                    <h3>${post.location}</h3>
                    </div>
                </header>
            </div>

            <div class="container">
                <main>
                    <img src="${post.post}" alt="${post.name}" />

                    <div class="post-engagement">
                    
                    <!-- Icons -->
                    <div class="post-actions">
                        <img
                        class="post-img"
                        src="./images/icon-heart.png"
                        alt="Heart icon."
                        />
                        <img
                        class="post-img"
                        src="./images/icon-comment.png"
                        alt="Comment icon."
                        />
                        <img class="post-img" src="./images/icon-dm.png" alt="Dm icon." />
                    </div>
                    <!-- Likes Count -->
                    <p id="likes">${post.likes} likes</p>
                    <p id="comment">
                        <span id="user-comment">${post.username}</span> ${post.comment}
                    </p>
                    </div>
                </main>
            </div>
        `;

        container.innerHTML += postHtml
    });
}

renderPosts(posts);

