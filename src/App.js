import React from "react";
import "./App.css";

function App() {
  const features = [
    { 
      title: "Chat Assistant", 
      description: "Talk with AI in real-time.", 
      icon: "💬",
      gradient: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)" 
    },
    { 
      title: "Text to Speech", 
      description: "Convert text into natural voice.", 
      icon: "🔊",
      gradient: "linear-gradient(135deg, #b800ff 0%, #ff007f 100%)" 
    },
    { 
      title: "Image Generation", 
      description: "Create visuals from prompts.", 
      icon: "🖼️",
      gradient: "linear-gradient(135deg, #ffb300 0%, #f77737 100%)" 
    },
    { 
      title: "AI Avatar", 
      description: "Personalized digital avatars.", 
      icon: "🤖",
      gradient: "linear-gradient(135deg, #00ff87 0%, #60efff 100%)" 
    },
  ];

  const showFeatures = () => {
    const section = document.querySelector(".features");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-container">
      {/* Background Decorative Ambient Glows */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>

      
      <nav className="navbar">
        <h2 className="nav-logo">AI Showcase</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>
      </nav>

      
      <section className="hero">
        <h1 className="hero-title">Explore AI Features</h1>
        <p className="hero-subtitle">A simple showcase of modern AI tools</p>
        <button className="hero-btn" onClick={showFeatures}>
          Get Started
        </button>
      </section>

      
      <section className="features">
        {features.map((f, i) => (
          <div 
            className="card" 
            key={i} 
            style={{ "--card-color": f.gradient }}
            onClick={() => alert(`${f.title} will include soon!`)}
          >
            <div className="card-mesh"></div>
            <div className="card-inner">
              <span className="icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          </div>
        ))}
      </section>

      
      <footer>
        <p>© 2026 AI Showcase. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
