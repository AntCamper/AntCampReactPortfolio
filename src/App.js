import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

function Header() {
    return (
      <header>
        <h1>Anthony Jones</h1>
        <nav>
          <Link to="/">About Me</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>
        </nav>
      </header>
    );
  }
  
  function About() {
    return (
      <section>
        <h2>About Me</h2>
        <img src="public\garfield.jpg" alt="Anthony" />
        <p>Aspiring WebDev, Indie game dev hobbyist, devoted father. Crafting worlds while raising one. 🚀🌐🚼
          (He/Him)
          🎨React
          🛠Node.js and GraphQL
          📦MongoDB Mongoose.
        </p>
      </section>
    );
  }
  function Portfolio() {
    const projects = [
      { 
        title: 'Readme Generator', 
        image: 'public\READMEGENpic.png', 
        deployed: '#', 
        github: 'https://github.com/AntCamper/AntCamp_ReadmeGen' 
      },
      { 
        title: 'Currency Key', 
        image: 'public\CurrencyKeypic.png', 
        deployed: '#', 
        github: 'https://github.com/AntCamper/CurrencyKey' 
      },
      { 
        title: 'Weathervane', 
        image: 'public\AntCampWeatherWatchpic.png', 
        deployed: '#', 
        github: 'https://github.com/AntCamper/AntCampWeathervane' 
      },
      { 
        title: 'Daily Planner', 
        image: 'public\Dailyplanpic.png', 
        deployed: '#', 
        github: 'https://github.com/AntCamper/AntCampDailyPlan' 
      },
      { 
        title: 'Quiz', 
        image: 'public\AntCamperD&DQuiz.png', 
        deployed: '#', 
        github: 'https://github.com/AntCamper/AntCamperQuiz' 
      },
      { 
        title: 'Note Taker', 
        image: 'public\notetakerpic.png', 
        deployed: '#', 
        github: 'https://github.com/AntCamper/AntCampNoteTaker' 
      },
    ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <img src={project.image} alt={project.title} />
          <a href={project.deployed}>Deployed</a>
          <a href={project.github}>GitHub</a>
        </div>
      ))}
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <a href="/resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <a href="https://github.com/AntCamper">GitHub</a>
      <a href="https://www.linkedin.com/in/anthony-jones-96b98b2a9/">LinkedIn</a>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
