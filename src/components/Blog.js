import React from 'react'
const Blog = (blog) => {
    const { title, image, detail, link } = blog.blog;
    return (<div className="card blog">
        <div className="card-title">Blog</div>
        <div className="card-body">
            <div className="blog-img">
                <img src={image} alt={title} />
                <div className="blog-title">
                    <h4>{title}</h4>
                    <p>{detail}</p>
                    <a href="./">{link}</a>
                </div>
            </div>
        </div>
    </div>)
}
export default Blog