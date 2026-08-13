import { ArrowRight, Download, Sparkles, WifiOff } from "lucide-react";
import { siteConfig } from "../lib/config";

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-content">
        <div className="hero-copy">
          <div className="beta-pill">
            <span className="beta-dot" />
            MYACUMEN BETA
          </div>

          <h1>
            Your entire
            <span> study life.</span>
            <br />
            In one place.
          </h1>

          <p className="hero-description">
            Courses, study materials, AI tools, practice, revision and
            progress — built around the way students actually study.
          </p>

          <div className="hero-actions">
            <a href={siteConfig.apkUrl} className="hero-primary-button">
              <Download size={18} />
              Download Android Beta
            </a>

            <a href="#features" className="hero-secondary-button">
              Explore MyAcumen
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="hero-trust">
            <div>
              <WifiOff size={16} />
              <span>Offline-first</span>
            </div>

            <div>
              <Sparkles size={16} />
              <span>AI-powered</span>
            </div>

            <div>
              <span className="hero-version">
                {siteConfig.version}
              </span>
            </div>
          </div>
        </div>

        <div className="hero-product">
          <div className="hero-phone">
            <div className="phone-camera" />

            <div className="phone-screen">
              <div className="phone-topbar">
                <div>
                  <small>Good evening</small>
                  <strong>Daniel 👋</strong>
                </div>

                <div className="phone-avatar">D</div>
              </div>

              <div className="phone-status">
                <span />
                Local mode active
              </div>

              <div className="phone-heading">
                <small>YOUR STUDY SPACE</small>
                <h3>What's next?</h3>
              </div>

              <div className="phone-card phone-card-primary">
                <div className="phone-card-icon">CS</div>

                <div className="phone-card-text">
                  <small>Continue studying</small>
                  <strong>Computer Science</strong>
                  <span>Continue your last session</span>
                </div>

                <ArrowRight size={17} />
              </div>

              <div className="phone-section-title">
                <span>Up next</span>
                <small>Today</small>
              </div>

              <div className="phone-mini-grid">
                <div className="phone-mini-card">
                  <span className="mini-icon practice">✓</span>
                  <strong>Practice</strong>
                  <small>25 questions</small>
                </div>

                <div className="phone-mini-card">
                  <span className="mini-icon focus">◷</span>
                  <strong>Focus</strong>
                  <small>45 minutes</small>
                </div>
              </div>

              <div className="phone-progress">
                <div className="phone-progress-top">
                  <span>Weekly progress</span>
                  <strong>68%</strong>
                </div>

                <div className="progress-track">
                  <div className="progress-fill" />
                </div>

                <small>Keep your study streak going</small>
              </div>

              <div className="phone-nav">
                <span className="active">⌂</span>
                <span>▣</span>
                <span>✓</span>
                <span>●</span>
              </div>
            </div>
          </div>

          <div className="hero-floating-card hero-floating-card-top">
            <span>✓</span>
            <div>
              <strong>Practice session</strong>
              <small>Session saved</small>
            </div>
          </div>

          <div className="hero-floating-card hero-floating-card-bottom">
            <span>AI</span>
            <div>
              <strong>AI Tutor</strong>
              <small>Ask while you study</small>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>COURSE</span>
        <ArrowRight size={14} />
        <span>MATERIAL</span>
        <ArrowRight size={14} />
        <span>STUDY</span>
        <ArrowRight size={14} />
        <span>PRACTICE</span>
        <ArrowRight size={14} />
        <span>REVISE</span>
        <ArrowRight size={14} />
        <span>IMPROVE</span>
      </div>
    </section>
  );
}
