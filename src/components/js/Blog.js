import React, { Component } from 'react';
import '../css/Blog.css'
class Blog extends Component {
    render() {
        return (
            <div className="card-blog-container">
        <div className="card-blog "style={{boxShadow:"-1rem 0 1.5rme #80738f;"}} ><a href="https://medium.com/aiforexistence/boxing-an-ai-5c0a780e6ef8" target="_blank">
            <header className="article-header">
                <div>
                    <div className="category-title">
                        Article
                        <span className="date">Apr 24, 2021</span>
                    </div>
                </div>
                <h2 className="article-title">
                    Boxing an AI
                </h2>
            </header>
            <div className="author">
                <div className="profile"></div>
                <div className="info">
                    <div className="caption">Author</div>
                    <div className="name">Zeynep Evecen</div>
                </div>
            </div>
            <div className="tags">
                <div>AI</div>
                <div>Machine Learning</div>
            </div>
            </a>
        </div>
        <div className="card-blog "style={{boxShadow:"-1rem 0 1.5rme #80738f;"}} ><a href="https://medium.com/aiforexistence/intelligent-agent-as-mental-model-1cbb3b0b4274" target="_blank">
            <header className="article-header">
                <div>
                    <div className="category-title">
                        Article
                        <span className="date">Apr 26, 2021</span>
                    </div>
                </div>
                <h2 className="article-title">
                    Intelligent Agent as Mental Model
                </h2>
            </header>
            <div className="author">
                <div className="profile"></div>
                <div className="info">
                    <div className="caption">Author</div>
                    <div className="name">Hüseyin Evecen</div>
                </div>
            </div>
            <div className="tags">
                <div>Mental Models</div>
                <div>Product Developement</div>
            </div>
            </a>
        </div>
        <div className="card-blog "style={{boxShadow:"-1rem 0 1.5rme #80738f;"}} ><a href="https://medium.com/aiforexistence/limits-of-deep-learning-14cae2ae1d75" target="_blank">
            <header className="article-header">
                <div>
                    <div className="category-title">
                        Article
                        <span className="date">May 2, 2021</span>
                    </div>
                </div>
                <h2 className="article-title">
                    Limits of Deep Learning
                </h2>
            </header>
            <div className="author">
                <div className="profile"></div>
                <div className="info">
                    <div className="caption">Author</div>
                    <div className="name">Yiğit Şimşek</div>
                </div>
            </div>
            <div className="tags">
                <div>Deep Learning</div>
                <div>Neural Networks</div>
            </div>
            </a>
        </div>
         <div className="card-blog "style={{boxShadow:"-1rem 0 1.5rme #80738f;"}} ><a href="https://medium.com/aiforexistence/limits-of-deep-learning-14cae2ae1d75" target="_blank">
            <header className="article-header">
                <div>
                    <div className="category-title">
                        Article
                        <span className="date">May 11, 2021</span>
                    </div>
                </div>
                <h2 className="article-title">
                    Natural Language Processing in a Nutshell
                </h2>
            </header>
            <div className="author">
                <div className="profile"></div>
                <div className="info">
                    <div className="caption">Author</div>
                    <div className="name">Zeynep Evecen</div>
                </div>
            </div>
            <div className="tags">
                <div>Natural Language Processing</div>
                <div>Machine Learning</div>
            </div>
            </a>
        </div>
        
      
 
        
    </div>
    
        );
    }
}

export default Blog;
