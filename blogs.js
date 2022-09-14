const blogContainer = document.getElementById("blogs")

const loadBlogs = () => {
    fetch("./blogs.json")
        .then(res => res.json())
        .then(data => displayBlogs(data));
}
const displayBlogs = blogs =>{
    blogs.forEach(blog => {
        const blogDiv = document.createElement('div')
        blogDiv.classList.add('col')
        blogDiv.innerHTML = `
            <div class="card my-2 border-0 shadow">
                <img src="${blog.image}" class="card-img-top" alt="..." style="height:230px; object-fit:cover">
                <div class="card-body">
                    <h5 class="card-title">${blog.title}</h5>
                    <p class="card-text">${blog.body.slice(0, 130)+'...'}</p>
                    <button onclick=blogDetail(${blog.id}) class="btn btn-dark rounded-1" data-bs-toggle="modal" data-bs-target="#blog">Read Full Article</button>
                </div>
            </div>
        `
        blogContainer.appendChild(blogDiv)
    })
}

const blogDetail = (id) =>{
    fetch(`./blogs.json`)
        .then(res => res.json())
        .then(data => showBlog(data[id-1]));
}

const showBlog = blog =>{
    const blogTitile = document.getElementById('blogLabel')
    blogTitile.innerText = blog.title

    const blogBody = document.getElementById('blog-body')
    blogBody.innerHTML = `
        <img src="${blog.image}" alt="${blog.title}"  style="height:300px; width:100%; object-fit:cover">
        <p class="mt-4" style="white-space:pre-wrap; word-break: break-word;">${blog.body}</p>
    `
}

loadBlogs();