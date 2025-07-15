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
          <div>
            <p>
              I am a Quantitative Researcher specializing in statistical modeling, machine learning, and deep learning. I have developed and backtested predictive pricing models and algorithmic trading strategies; built robust trading systems and risk frameworks; and engineered scalable ML pipelines from data ingestion and feature engineering to AI model training and real-time deployment.
            </p>
            <p>
              I hold an M.S. in Computer Engineering from New York University (Sep 2023 – May 2025) and a B.S. in Computer Science from Bharati Vidyapeeth University (Jul 2019 – Jun 2023).
            </p>
            <p>
              Currently working as Quant Research Lead at GoQuant, where I direct alpha research initiatives, deploy systematic futures and options strategies, and architect execution engines and quantitative pricing models. I design and implement intelligent smart-order-routing systems that optimize venue selection, minimizing market impact, slippage, and transaction fees.
            </p>
            <p>
              My research interests include quantitative finance, machine learning, statistical modeling, and algorithmic trading. I am also interested in interdisciplinary topics that integrate methodologies in multiple fields such as applied probability, statistics, and optimization, along with their applications in addressing high-stake decision-making problems in modern large-scale systems, such as financial and economic systems. Some of the topics that I have been working on recently:
            </p>
            <ul>
              <li>mathematical foundation of Generative AI,</li>
              <li>optimal stopping and dynamic information acquisition,</li>
              <li>stochastic control, stochastic games, and mean-field games,</li>
              <li>reinforcement learning theory,</li>
              <li>and their applications in market microstructure and risk management</li>
            </ul>
            <p>Please find my CV <a href="pages/Resume.html">here</a>.</p>
            <p>Email: shubham.singh (at) nyu (dot) edu</p>
          </div>
        </section>

        <section className="publications">
          <h3>Working Papers and Preprints</h3>
          <div>
            <ul>
              <li>
                <strong>Alignment Quality Index (AQI): Beyond Refusals: AQI as an Intrinsic Alignment Diagnostic via Latent Geometry, Cluster Divergence, and Layer wise Pooled Representations</strong><br/>
                A Borah, C Sharma, D Khanna, U Bhatt, G Singh, HM Abdullah, RK Ravi, ...<br/>
                <em>arXiv preprint arXiv:2506.13901, 2025</em>
              </li>
              <li>
                <strong>Systems Engineering of Large Language Models for Enterprise Applications</strong><br/>
                S Singh<br/>
                <em>Preprints, 2025</em>
              </li>
              <li>
                <strong>KAN based Autoencoders for Factor Models</strong><br/>
                T Wang, S Singh<br/>
                <em>arXiv preprint arXiv:2408.02694, 2024 (2 citations)</em>
              </li>
              <li>
                <strong>An empirical study of market risk factors for Bitcoin</strong><br/>
                S Singh<br/>
                <em>arXiv preprint arXiv:2406.19401, 2024</em>
              </li>
              <li>
                <strong>Transformer-based approach for ethereum price prediction using crosscurrency correlation and sentiment analysis</strong><br/>
                S Singh, M Bhat<br/>
                <em>arXiv preprint arXiv:2401.08077, 2024 (8 citations)</em>
              </li>
              <li>
                <strong>BrainVoxGen: Deep learning framework for synthesis of Ultrasound to MRI</strong><br/>
                S Singh, M Bewoor, A Ranapurwala, S Rai, S Patil<br/>
                <em>arXiv preprint arXiv:2310.08608, 2023 (3 citations)</em>
              </li>
              <li>
                <strong>Systematic Review of Techniques in Brain Image Synthesis using Deep Learning</strong><br/>
                S Singh, A Ranapurwala, M Bewoor, S Patil, S Rai<br/>
                <em>arXiv preprint arXiv:2309.04511, 2023 (4 citations)</em>
              </li>
              <li>
                <strong>Identifying Climate-resilient Agricultural Practices in India Through Positive Deviance Analysis of Soil Moisture, Temperature, and Precipitation Anomalies in Telangana</strong><br/>
                S Singh<br/>
                <em>International Journal of Engineering Applied Sciences and Technology 7(10), 2023</em>
              </li>
              <li>
                <strong>A Review of Sentiment & Machine Learning Based Strategies for Cryptocurrency Price Forecasting</strong><br/>
                S Singh, M Bhat<br/>
                <em>Journal of Cryptocurrency Research, 2023</em>
              </li>
            </ul>
          </div>
        </section>

        <footer className="text-center mt-4">
          <p>&copy; 2025 Shubham Singh. All rights reserved.</p>
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
