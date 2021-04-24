import React, { Component } from 'react';
import './Blog.css'
class Blog extends Component {
    render() {
        return (
            <div>
                <div className="wrap-blog">
                    <h2>
                        Check Out Our Blog
                    </h2>
                    <a href="https://medium.com/aiforexistence" target="_blank" className="blog-btn">

                    <button >
                        Blog Posts
                    </button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Blog;