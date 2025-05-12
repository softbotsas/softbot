<template>
  <div class="services-view">
    <section class="services-section">
      <div class="particles-background"></div>
      <div class="services-container">
        <div class="section-header">
          <h2 class="section-title"><span class="section-number">02.</span> Our Services</h2>
          <p class="section-subtitle">Solutions tailored to your digital needs</p>
        </div>

        <div class="services-grid">
          <div class="service-card terminal-style">
            <div class="terminal-header">
              <div class="terminal-buttons">
                <span class="terminal-btn red"></span>
                <span class="terminal-btn yellow"></span>
                <span class="terminal-btn green"></span>
              </div>
              <span class="terminal-title">web-dev@softbot:~</span>
            </div>
            <div class="service-content">
              <h3 class="service-title">Web Development</h3>
              <div class="terminal-body">
                <div class="code-line"><span class="prompt">$</span> Modern frameworks</div>
                <div class="code-line"><span class="prompt">$</span> Responsive design</div>
                <div class="code-line"><span class="prompt">$</span> SEO optimized</div>
                <div class="code-line"><span class="prompt">$</span> <span class="cursor">|</span></div>
              </div>
            </div>
          </div>

          <div class="service-card terminal-style">
            <div class="terminal-header">
              <div class="terminal-buttons">
                <span class="terminal-btn red"></span>
                <span class="terminal-btn yellow"></span>
                <span class="terminal-btn green"></span>
              </div>
              <span class="terminal-title">mobile@softbot:~</span>
            </div>
            <div class="service-content">
              <h3 class="service-title">Mobile Apps</h3>
              <div class="terminal-body">
                <div class="code-line"><span class="prompt">$</span> iOS & Android</div>
                <div class="code-line"><span class="prompt">$</span> Cross-platform</div>
                <div class="code-line"><span class="prompt">$</span> Native performance</div>
                <div class="code-line"><span class="prompt">$</span> <span class="cursor">|</span></div>
              </div>
            </div>
          </div>

          <div class="service-card terminal-style">
            <div class="terminal-header">
              <div class="terminal-buttons">
                <span class="terminal-btn red"></span>
                <span class="terminal-btn yellow"></span>
                <span class="terminal-btn green"></span>
              </div>
              <span class="terminal-title">ai@softbot:~</span>
            </div>
            <div class="service-content">
              <h3 class="service-title">AI Solutions</h3>
              <div class="terminal-body">
                <div class="code-line"><span class="prompt">$</span> Machine Learning</div>
                <div class="code-line"><span class="prompt">$</span> NLP & Chatbots</div>
                <div class="code-line"><span class="prompt">$</span> Predictive models</div>
                <div class="code-line"><span class="prompt">$</span> <span class="cursor">|</span></div>
              </div>
            </div>
          </div>

          <div class="service-card terminal-style">
            <div class="terminal-header">
              <div class="terminal-buttons">
                <span class="terminal-btn red"></span>
                <span class="terminal-btn yellow"></span>
                <span class="terminal-btn green"></span>
              </div>
              <span class="terminal-title">cloud@softbot:~</span>
            </div>
            <div class="service-content">
              <h3 class="service-title">Cloud Services</h3>
              <div class="terminal-body">
                <div class="code-line"><span class="prompt">$</span> AWS/Azure/GCP</div>
                <div class="code-line"><span class="prompt">$</span> Serverless architecture</div>
                <div class="code-line"><span class="prompt">$</span> Scalable solutions</div>
                <div class="code-line"><span class="prompt">$</span> <span class="cursor">|</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesView'
}
</script>

<style>
.services-view {
  background-color: #0f172a;
  min-height: 100vh;
  padding-top: 80px;
}

.services-section {
  position: relative;
  padding: 3rem 0;
}

.services-section .particles-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
  z-index: 1;
}

.services-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  margin-bottom: 3rem;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.section-title .section-number {
  color: #6366f1;
  font-size: 1.5rem;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.service-card {
  background: #1e293b;
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
}

.terminal-style {
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.terminal-header {
  background: #1a2536;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
}

.terminal-buttons {
  display: flex;
  gap: 0.25rem;
  margin-right: 1rem;
}

.terminal-btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-btn.red { background: #ff5f56; }
.terminal-btn.yellow { background: #ffbd2e; }
.terminal-btn.green { background: #27c93f; }

.terminal-title {
  color: #94a3b8;
  font-size: 0.75rem;
  font-family: 'Courier New', monospace;
}

.service-content {
  padding: 1.5rem;
}

.service-title {
  color: #e2e8f0;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.service-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: #6366f1;
}

.terminal-body {
  color: #e2e8f0;
  font-family: 'Courier New', monospace;
}

.code-line {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.code-line:last-child {
  margin-bottom: 0;
}

.prompt {
  color: #6366f1;
  margin-right: 0.5rem;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>