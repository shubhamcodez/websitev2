import React, { useState, useEffect } from 'react';

const Casual = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogContent, setBlogContent] = useState('');

  // Sample blog posts data
  const sampleBlogPosts = [
    {
      id: 1,
      title: "My Journey into Quantitative Finance",
      date: "2024-01-15",
      description: "How I discovered my passion for quantitative finance and the steps I took to enter this field."
    },
    {
      id: 2,
      title: "Understanding Machine Learning in Trading",
      date: "2024-02-20",
      description: "A deep dive into how machine learning algorithms are transforming the trading landscape."
    },
    {
      id: 3,
      title: "The Future of Algorithmic Trading",
      date: "2024-03-10",
      description: "Exploring emerging trends and technologies that will shape the future of algorithmic trading."
    },
    {
      id: 4,
      title: "Risk Management in Quantitative Strategies",
      date: "2024-04-05",
      description: "Essential risk management techniques every quantitative trader should know."
    }
  ];

  useEffect(() => {
    setBlogPosts(sampleBlogPosts);
  }, [sampleBlogPosts]);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    // In a real app, you would fetch the actual blog content here
    setBlogContent(`
      <h2>${blog.title}</h2>
      <p><em>Published on ${blog.date}</em></p>
      <p>${blog.description}</p>
      <p>This is a sample blog post content. In a real application, this would contain the full blog post with rich formatting, images, and detailed content.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `);
  };

  return (
    <div className="container">
      <header>
        <h1 className="title">Shubham Singh's Blog</h1>
      </header>

      <section id="about" className="my-4">
        <p>This is my personal blog where I share insights on various topics. Feel free to explore!</p>
      </section>

      <section id="blogs" className="my-4">
        <h2 className="title">Recent Blog Posts</h2>
        <div className="row">
          <div className="col-md-4">
            <ul className="list-group">
              {blogPosts.map(blog => (
                <li key={blog.id} className="list-group-item">
                  <button 
                    onClick={() => handleBlogClick(blog)}
                    className={`btn btn-link p-0 text-start ${selectedBlog?.id === blog.id ? 'fw-bold' : ''}`}
                    style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                  >
                    {blog.title}
                  </button>
                  <br />
                  <small className="text-muted">{blog.date}</small>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-8">
            <div className="content mt-4">
              {blogContent ? (
                <div dangerouslySetInnerHTML={{ __html: blogContent }} />
              ) : (
                <p>Select a blog post from the list to read it.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Casual; 