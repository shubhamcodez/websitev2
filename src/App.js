import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="text-center my-4">
          <h1>Shubham Singh</h1>
        </header>

        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="pages/projects.html">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/quant.html">Quant Resources</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/Resume.html">Resume</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/casual.html">Causal stuff</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="container">
        <section>
          <h2>Hi there, </h2>
          <div>
            <img src="images/me.jpeg" alt="Shubham Singh" className="img" />
          </div>
          <div>
            <p>
              Congratulations you have discovered my online den! I'm Shubham.
            </p>
            <p>A little intro about me, I'm a Computer Engineering graduate student at New York University with a passion for quantitative finance and machine learning. 
              With a strong foundation in computer science and engineering from my Bachelor's degree, I have tried to use the time during my Master's course to strengthen my knowledge and apply it in algorithmic trading, deep learning, 
              and financial engineering.
            </p>
            <p>
              I'm driven by a desire to harness the power of technology and data to drive innovation in finance. 
              My experiences as a quantitative trader intern, teaching assistant, and data science intern have 
              given me a unique perspective on the intersection of finance and technology.
            </p>
          </div>
        </section>
        <p><br /></p>

        <section className="life-updates">
          <h3>Life Updates</h3>
          <div>
            <ul>
              <li><p>Currently reading <em>The Concepts and Practice of Mathematical Finance</em> by Mark Joshi and <em>A First Course in Quantitative Finance</em> by Thomas Mazzoni.</p></li>
              <li><p>Working on a project analyzing the attribution to trend in cryptocurrency trading returns and exploring the existence of workable trading strategies.</p></li>
              <li><p>Currently working as a Quantitative Trader at Quant Farming, creating and executing trading strategies.</p></li>
            </ul>
          </div>
        </section>

        <footer className="text-center mt-4">
          <p>&copy; 2024 Shubham Singh. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/shubhamsinghnyu" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/shubhamcodez" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.kaggle.com/shubhamcodez" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-kaggle"></i>
            </a>
            <a href="https://www.youtube.com/ShubhamSinghYoutube" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
